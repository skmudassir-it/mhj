import { NextResponse } from 'next/server';
import { signToken, encryptPin } from '@/lib/auth';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { pin } = body;

        // Fetch encrypted PIN from database
        const { data, error: dbError } = await supabase
            .from('admin_auth')
            .select('encrypted_pin')
            .single();

        if (dbError || !data) {
            console.error("Database auth fetch error:", dbError);
            return NextResponse.json({ error: 'Authentication system unavailable' }, { status: 500 });
        }

        const inputEncrypted = encryptPin(pin);

        if (inputEncrypted === data.encrypted_pin) {
            const token = await signToken({ authenticated: true });

            const response = NextResponse.json({ success: true });

            // Set cookie manually in the response headers for better compatibility
            response.cookies.set('admin_token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                maxAge: 60 * 60 * 24, // 24 hours
                path: '/',
            });

            return response;
        }

        return NextResponse.json({ error: 'Invalid secure entry PIN' }, { status: 401 });
    } catch (error) {
        return NextResponse.json({ error: 'Authentication request failed' }, { status: 500 });
    }
}

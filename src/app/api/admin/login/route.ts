import { NextResponse } from 'next/server';
import { signToken } from '@/lib/auth';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { pin } = body;

        if (pin === (process.env.ADMIN_PIN || '123456')) {
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

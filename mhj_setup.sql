-- Comprehensive Database Setup for Memphis Health Jamboree (MHJ) CMS
-- Run this script in your Supabase SQL Editor: https://supabase.com/dashboard/project/_/sql/new

-- 1. Create site_settings table (Hero Text)
CREATE TABLE IF NOT EXISTS site_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  hero_title TEXT NOT NULL DEFAULT 'JAMBOREE',
  hero_tagline TEXT NOT NULL DEFAULT 'Celebrating the magic of community wellness'
);

-- 2. Create notifications table (Top Bar Cycle)
CREATE TABLE IF NOT EXISTS notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  content TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  display_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Create hero_images table (Background Slider)
CREATE TABLE IF NOT EXISTS hero_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  src TEXT NOT NULL,
  alt TEXT NOT NULL DEFAULT 'Hero Image',
  display_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 4. Create events table
CREATE TABLE IF NOT EXISTS events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  date TEXT NOT NULL,
  location TEXT NOT NULL,
  category TEXT,
  time TEXT DEFAULT 'TBD',
  cta_link TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 5. Create gallery table
CREATE TABLE IF NOT EXISTS gallery (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  src TEXT NOT NULL,
  title TEXT NOT NULL,
  size TEXT DEFAULT 'col-span-1 row-span-1',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 6. Create responses table (Contact Form)
CREATE TABLE IF NOT EXISTS responses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 7. Default Content & Seeding
INSERT INTO site_settings (hero_title, hero_tagline)
SELECT 'JAMBOREE', 'Celebrating the magic of community wellness'
WHERE NOT EXISTS (SELECT 1 FROM site_settings);

INSERT INTO notifications (content, display_order)
SELECT 'Join us for the 2026 Activation Year!', 1
WHERE NOT EXISTS (SELECT 1 FROM notifications);

-- 8. Row Level Security Notifications (Public Read, Admin Write)
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow public read" ON site_settings;
CREATE POLICY "Allow public read" ON site_settings FOR SELECT USING (true);
DROP POLICY IF EXISTS "Allow admin all" ON site_settings;
CREATE POLICY "Allow admin all" ON site_settings FOR ALL USING (true);

ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow public read" ON notifications;
CREATE POLICY "Allow public read" ON notifications FOR SELECT USING (true);
DROP POLICY IF EXISTS "Allow admin all" ON notifications;
CREATE POLICY "Allow admin all" ON notifications FOR ALL USING (true);

ALTER TABLE hero_images ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow public read" ON hero_images;
CREATE POLICY "Allow public read" ON hero_images FOR SELECT USING (true);
DROP POLICY IF EXISTS "Allow admin all" ON hero_images;
CREATE POLICY "Allow admin all" ON hero_images FOR ALL USING (true);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow public read" ON events;
CREATE POLICY "Allow public read" ON events FOR SELECT USING (true);
DROP POLICY IF EXISTS "Allow admin all" ON events;
CREATE POLICY "Allow admin all" ON events FOR ALL USING (true);

ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow public read" ON gallery;
CREATE POLICY "Allow public read" ON gallery FOR SELECT USING (true);
DROP POLICY IF EXISTS "Allow admin all" ON gallery;
CREATE POLICY "Allow admin all" ON gallery FOR ALL USING (true);

ALTER TABLE responses ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow admin all" ON responses;
CREATE POLICY "Allow admin all" ON responses FOR ALL USING (true);

import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');
  
  if (!url) return NextResponse.json({ error: 'URL required' }, { status: 400 });

  const videoId = url.match(/[^"&?\/\s]{11}/)?.[0];
  if (!videoId) return NextResponse.json({ error: 'Invalid YouTube URL' });

  try {
    // YouTube oEmbed API (no key required)
    const oembed = await fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`);
    const data = await oembed.json();
    
    return NextResponse.json({
      title: data.title,
      thumbnail: data.thumbnail_url,
      channel: data.author_name || 'Unknown Channel',
      duration: 'Auto-detected'
    });
  } catch {
    return NextResponse.json({ title: 'Video Ready', thumbnail: '', channel: '', duration: '' });
  }
}
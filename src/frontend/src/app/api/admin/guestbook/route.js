import { NextResponse } from 'next/server';

export async function GET(request) {
  const pass = request.headers.get('x-admin-pass');
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/guestbook`, {
      headers: { 'x-admin-pass': pass },
      cache: 'no-store',
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch messages' }, { status: 500 });
  }
}
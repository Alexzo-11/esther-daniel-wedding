import { NextResponse } from 'next/server';

export async function GET(request) {
  const pass = request.headers.get('x-admin-pass');
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/rsvps`, {
    headers: { 'x-admin-pass': pass },
  });
  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}

export async function POST(request) {
  const pass = request.headers.get('x-admin-pass');
  const body = await request.json();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/rsvp-status`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-admin-pass': pass,
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}

export async function DELETE(request) {
  const pass = request.headers.get('x-admin-pass');
  const body = await request.json();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/rsvps`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'x-admin-pass': pass,
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// GET handler - Fetch all users
export async function GET() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com' },
  ];

  return NextResponse.json({
    success: true,
    data: users,
    count: users.length,
  });
}

// POST handler - Create new user
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Simulating user creation
    const newUser = {
      id: Date.now(),
      name,
      email,
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json(
      {
        success: true,
        data: newUser,
        message: 'User created successfully',
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid JSON body' },
      { status: 400 }
    );
  }
}

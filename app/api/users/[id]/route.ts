import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// GET handler - Fetch single user by ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  
  // Simulating database lookup
  const user = {
    id: parseInt(id),
    name: `User ${id}`,
    email: `user${id}@example.com`,
    bio: 'This is a sample user bio',
    joinedAt: '2026-01-01',
  };

  if (!user) {
    return NextResponse.json(
      { error: 'User not found' },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    data: user,
  });
}

// PUT handler - Update user
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();

  return NextResponse.json({
    success: true,
    data: {
      id: parseInt(id),
      ...body,
      updatedAt: new Date().toISOString(),
    },
    message: `User ${id} updated successfully`,
  });
}

// DELETE handler - Delete user
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  return NextResponse.json({
    success: true,
    message: `User ${id} deleted successfully`,
  });
}

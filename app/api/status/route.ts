import { NextResponse } from 'next/server'

export async function GET() {
  const data = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    features: ['nextjs', 'typescript', 'tailwind', 'shadcn', 'testing']
  }

  // Simulate some processing delay
  await new Promise(resolve => setTimeout(resolve, 100))

  return NextResponse.json(data)
}
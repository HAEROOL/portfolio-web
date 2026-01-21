import { NextResponse } from 'next/server';
import contentData from '@/data/content.json';

/**
 * Content API Route Handler
 * 필요 시 클라이언트에서도 content.json 데이터를 fetch할 수 있도록 제공
 */
export async function GET() {
  return NextResponse.json(contentData);
}

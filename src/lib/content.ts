import { ContentData } from '@/types/content';
import contentData from '@/data/content.json';

/**
 * 서버 컴포넌트에서 content.json 데이터를 가져오는 함수
 * 이 함수는 서버 측에서만 호출되어야 합니다.
 */
export async function getContentData(): Promise<ContentData> {
  // 서버 컴포넌트에서만 호출되므로 직접 import 가능
  return contentData as ContentData;
}

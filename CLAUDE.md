ALWAYS use tailwindcss for all styling needs.
ALWAYS respond in Korean.

## 완료된 기능
- 랜딩페이지 (색상: #DEE0E2, #ECEEF0, #202020)
- Google OAuth 로그인 (InsForge)
- Users 테이블 + RLS 정책
- 미니멀 로고 디자인 (play 버튼)

## 수정된 파일
- `/lib/insforge.ts` - createClient 초기화
- `/app/page.tsx` - 메인 랜딩, getCurrentUser
- `/app/auth/page.tsx` - Google 로그인
- `/app/auth/callback/page.tsx` - OAuth 콜백, users 테이블 upsert
- `/migrations/001_create_users_table.sql` - users 테이블 스키마
- `/public/logo.svg` - 플레이 버튼 아이콘

## TODO
- (없음)
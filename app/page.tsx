'use client';

import { useEffect, useState } from 'react';
import { insforge } from '@/lib/insforge';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const result = await insforge.auth.getCurrentUser();
      console.log('Current user:', result);
      // result.data가 user 객체일 수도 있고, { user: {...} } 형식일 수도 있음
      const user = result.data?.user || result.data;
      setUser(user);
      setLoading(false);
    };
    checkUser();
  }, []);

  const handleLogout = async () => {
    await insforge.auth.signOut();
    setUser(null);
    router.refresh();
  };

  return (
    <div className="flex flex-col flex-1 bg-[#ECEEF0]">
      {/* 헤더 */}
      <header className="w-full px-6 py-4 bg-white border-b border-[#DEE0E2]">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <img src="/logo.svg" alt="Logo" className="h-10" />
          <nav className="flex gap-6 items-center">
            <a href="#features" className="text-[#202020] hover:opacity-70 transition-opacity">기능</a>
            <a href="#pricing" className="text-[#202020] hover:opacity-70 transition-opacity">가격</a>
            <a href="#contact" className="text-[#202020] hover:opacity-70 transition-opacity">문의</a>
            {!loading && (
              user?.email ? (
                <div className="flex items-center gap-4">
                  <span className="text-[#202020] text-sm">{user.email}</span>
                  <button
                    onClick={handleLogout}
                    className="bg-[#202020] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    로그아웃
                  </button>
                </div>
              ) : (
                <a
                  href="/auth"
                  className="bg-[#202020] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  로그인
                </a>
              )
            )}
          </nav>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-[#202020] mb-6">
            바이럴 영상, 이제<br />클릭 한 번이면 끝
          </h2>
          <p className="text-xl text-[#202020] opacity-70 mb-8 max-w-2xl mx-auto">
            AI가 자동으로 트렌드를 분석하고, 편집하고, 최적화합니다.<br />
            당신은 아이디어만 입력하세요.
          </p>
          <a
            href={user?.email ? "/dashboard" : "/auth"}
            className="inline-block bg-[#202020] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            {user?.email ? "대시보드로 이동" : "지금 시작하기"}
          </a>
        </div>
      </section>

      {/* 기능 섹션 */}
      <section id="features" className="w-full px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-[#202020] text-center mb-12">
            주요 기능
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#ECEEF0] rounded-lg">
              <div className="w-12 h-12 bg-[#202020] rounded-lg mb-4 flex items-center justify-center text-white text-2xl">
                ⚡
              </div>
              <h4 className="text-xl font-bold text-[#202020] mb-2">빠른 제작</h4>
              <p className="text-[#202020] opacity-70">
                아이디어 입력부터 완성까지 단 5분. 복잡한 편집 프로그램은 이제 그만.
              </p>
            </div>
            <div className="p-6 bg-[#ECEEF0] rounded-lg">
              <div className="w-12 h-12 bg-[#202020] rounded-lg mb-4 flex items-center justify-center text-white text-2xl">
                🎯
              </div>
              <h4 className="text-xl font-bold text-[#202020] mb-2">트렌드 분석</h4>
              <p className="text-[#202020] opacity-70">
                실시간 트렌드를 분석하여 바이럴 가능성 높은 콘텐츠를 자동 제안합니다.
              </p>
            </div>
            <div className="p-6 bg-[#ECEEF0] rounded-lg">
              <div className="w-12 h-12 bg-[#202020] rounded-lg mb-4 flex items-center justify-center text-white text-2xl">
                🎨
              </div>
              <h4 className="text-xl font-bold text-[#202020] mb-2">자동 편집</h4>
              <p className="text-[#202020] opacity-70">
                자막, 효과, 배경음악까지 AI가 알아서 최적화하여 적용합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 가격 섹션 */}
      <section id="pricing" className="w-full px-6 py-20 bg-[#ECEEF0]">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-[#202020] text-center mb-12">
            간단한 가격, 명확한 가치
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-lg border-2 border-[#DEE0E2]">
              <h4 className="text-2xl font-bold text-[#202020] mb-2">스타터</h4>
              <p className="text-4xl font-bold text-[#202020] mb-4">₩29,000<span className="text-lg opacity-70">/월</span></p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-[#202020]">
                  <span className="mr-2">✓</span> 월 10개 영상 제작
                </li>
                <li className="flex items-center text-[#202020]">
                  <span className="mr-2">✓</span> 기본 템플릿
                </li>
                <li className="flex items-center text-[#202020]">
                  <span className="mr-2">✓</span> 720p 해상도
                </li>
              </ul>
              <button className="w-full bg-[#DEE0E2] text-[#202020] py-3 rounded-lg font-semibold hover:bg-[#202020] hover:text-white transition-all">
                시작하기
              </button>
            </div>
            <div className="p-8 bg-[#202020] rounded-lg border-2 border-[#202020]">
              <h4 className="text-2xl font-bold text-white mb-2">프로</h4>
              <p className="text-4xl font-bold text-white mb-4">₩79,000<span className="text-lg opacity-70">/월</span></p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-white">
                  <span className="mr-2">✓</span> 무제한 영상 제작
                </li>
                <li className="flex items-center text-white">
                  <span className="mr-2">✓</span> 프리미엄 템플릿
                </li>
                <li className="flex items-center text-white">
                  <span className="mr-2">✓</span> 4K 해상도
                </li>
                <li className="flex items-center text-white">
                  <span className="mr-2">✓</span> 우선 지원
                </li>
              </ul>
              <button className="w-full bg-white text-[#202020] py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                시작하기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="w-full px-6 py-8 bg-white border-t border-[#DEE0E2]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#202020] opacity-70">© 2024 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
'use client';

import { useState, useEffect } from 'react';

// ─── Navigation ──────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'AX?', href: '#intro' },
    { label: 'SERVICES', href: '#features' },
    { label: 'PROCESS', href: '#process' },
    { label: 'CASES', href: '#portfolio' },
    { label: 'TEAM', href: '#team' },  
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md border-b border-black/[0.06]' : 'bg-white'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-[64px] flex items-center justify-between relative">
        <a href="#" className="flex items-center">
          <img src="/logo-corca-ax.svg" alt="Corca" className="h-[30px] w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[12px] font-bold tracking-[0.1em] text-[#111] hover:text-[#999] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center text-[14px] font-normal tracking-[0.1em] text-white bg-[#111] px-[30px] h-[36px] hover:bg-[#333] transition-colors"
          style={{ clipPath: 'polygon(24px 0, 100% 0, 100% 100%, 0 100%, 0 24px)' }}
        >
          Contact
        </a>
        <button
          title="메뉴 열기/닫기"
          className="md:hidden flex items-center justify-center w-8 h-8 cursor-pointer"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4l12 12M16 4L4 16" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <img src="/icon-main.svg" alt="메뉴" className="w-8 h-8" />
          )}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-black/[0.06] px-6 py-6 flex flex-col gap-[30px] items-end">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-[20px] font-semibold tracking-[0.1em] text-[#111]/60 hover:text-[#111]"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-[64px] bg-[#111]"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-[860px]">
      
        <h1 className="text-[clamp(160px,40vw,300px)] font-bold leading-[1.02] tracking-[-0.03em] text-white mb-0">
          AX?
        </h1>
        <h1 className="text-[clamp(16px,6vw,36px)] font-normal leading-[1.4] tracking-[-0.03em] text-white mb-10">
         AX는 새로 배워야 할 도구가 아니라<br />새롭게 일하는 방식입니다.
        </h1>
        <p className="text-[clamp(14px,4.5vw,20px)] text-white/50 leading-[1.4] max-w-[720px] mx-auto mb-12">
          일하는 방식에서 조직의 문화까지 완전히 재설계하는 진짜 혁신을 경험하세요.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-3 text-[18px] font-semibold tracking-[0.1em] text-[#111] bg-white px-[70px] py-3 hover:bg-white/70 transition-all"
          style={{ clipPath: 'polygon(36px 0, 100% 0, 100% 100%, 0 100%, 0 36px)' }}
        >
          상담하기
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

    </section>
  );
}

// ─── AX ───────────────────────────────────────────────
function AXSection() {
  return (
    <section id="intro" className="py-[80px] md:py-[120px] px-6 bg-white">

      
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10 items-center text-center">
         <p data-reveal className="text-[18px] font-extrabold text-[#111]/30 leading-[1]">
              AX?
            </p>
        <div data-reveal data-delay="100">
          <h2 className="text-[clamp(30px,3.5vw,44px)] font-bold leading-[1.4] tracking-[-0.02em] text-[#111]">
            많은 기업이 AI를 이야기합니다.<br />
그러나 실제로 일하는 방식이 바뀐 조직은 많지 않습니다.
          </h2>
        </div>
        <div data-reveal data-delay="200" className="flex flex-col gap-7 pt-1 max-w-[720px]">
          <p className="text-[clamp(16px,3vw,20px)] font-light text-[#111]/60 leading-[1.7]">
 그럴듯한 발표 자료, 완성되지 못한 파일럿 프로젝트.
<br />
결과는 같았습니다. “도입은 했지만, 달라진 건 없다.”
<br />
AI는 유행이 아닙니다. 성과를 만드는 구조적 변화입니다.
<br />

지금 바로 작동하고, 지속적으로 확장 가능한 AI 인프라를 설계합니다.
          </p>
      
            <p className="text-[24px] font-bold text-[#111] leading-[1.5]">
              "우리는 보여주기 위한 AI를 만들지 않습니다."
            </p>
            <p className="text-[clamp(16px,3vw,20px)] font-light text-[#111]/70 leading-[1.7]">
                 AI는 단순한 유행이 아니라, 비즈니스의 혁신을 이끌어낼 날카로운 무기입니다.
        <br />
            우리는 당장 내일의 업무에 투입되어 눈에 보이는 성과를 내는 '진짜 AI'를 만듭니다.
            </p>


        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────
const services = [
  {
    num: '01',
    enTitle: 'Intelligent Workflow Automation',
    koTitle: '업무 자동화 설계',
    desc: '현장을 깊이 분석해 비용이 새고 있는 지점을 찾아냅니다. 반복 업무는 자동화하고, 사람은 더 중요한 의사결정에 집중하도록 만듭니다.',
  },
  {
    num: '02',
    enTitle: 'Human-Centered AI Software',
    koTitle: '아름답고 직관적인 AI 제품',
    desc: '기술은 강력해야 하고, 사용은 쉬워야 합니다. 우리는 기능만 많은 도구를 만들지 않습니다. 현장에서 사랑받는 제품을 만듭니다. 전략, UX, 브랜딩을 이해하는 전문가가 AI를 실제 비즈니스 제품으로 완성합니다.',
  },
  {
    num: '03',
    enTitle: 'AI Enablement Change Management',
    koTitle: 'AI 리터러시 내재화',
    desc: 'AI는 설치로 끝나지 않습니다. 사용할 수 있어야 가치가 생깁니다. 조직 교육, 운영 프로세스 설계, 변화 관리 컨설팅까지 함께합니다.',
  },
];

function ServicesSection() {
  return (
    <section id="features" className="py-[80px] md:py-[120px] px-6 bg-[#f9f9f9]">
      <div className="max-w-[1200px] mx-auto">
        <div data-reveal className="mb-10 md:mb-16 text-center">
         <p className="text-[18px] font-extrabold text-[#111]/30 leading-[1] pb-10">
              SERVICES
            </p>
            
          <h2 className="text-[clamp(30px,3.5vw,44px)] font-bold leading-[1.25] tracking-[-0.02em] text-[#111]">
            본질을 이해하고, 구조를 바꾸는 AX 솔루션.
          </h2>
        </div>
        <div className="flex flex-col gap-[24px] md:gap-[40px]  pt-[24px] md:pt-[40px]">
          {services.map((s, i) => (
            <div
              key={s.num}
              data-reveal
              data-delay={i * 120}
              className="flex flex-col md:flex-row md:items-stretch md:min-h-[167px]"
            >
              {/* 좌측 — 모바일: 세로, md+: 480px 고정 */}
              <div
                className="md:w-[400px] md:shrink-0 flex items-center gap-[30px] bg-[#111] px-[30px] py-[20px]"
                style={{ clipPath: 'polygon(24px 0, 100% 0, 100% 100%, 0 100%, 0 24px)' }}
              >
                <span className="text-[clamp(36px,3vw,60px)] font-medium text-white leading-none shrink-0">{s.num}</span>
                <h3 className="text-[clamp(20px,3vw,24px)] font-bold text-white leading-[1.1] whitespace-pre-line">{s.enTitle}</h3>
              </div>
              {/* 우측 — 한글 소제목 + 본문 */}
              <div className="flex-1 flex flex-col justify-center px-[30px] py-[20px] md:gap-1 bg-white border border-black/[0.08]">
                <p className="text-[clamp(18px,3vw,22px)] font-semibold text-[#111] pb-[6px]">{s.koTitle}</p>
                <p className="text-[clamp(16px,3vw,20px)] font-light text-[#111]/70 leading-[1.7] whitespace-pre-line">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Process ──────────────────────────────────────────────────
const steps = [
  {
    num: '1',
    enTitle: 'Diagnosis',
    koTitle: '진단 및 기회 정의',
    desc: '현장 인터뷰, 데이터 분석, 프로세스 맵핑을 통해 성과에 가장 큰 영향을 미치는 지점을 찾아냅니다. "어디에 AI를 쓸 것인가?"가 아니라 "어디를 바꿔야 성과가 나는가?"를 먼저 정의합니다.',
  },
  {
    num: '2',
    enTitle: 'Design & Build',
    koTitle: '설계 및 구축',
    desc: '조직 맞춤형 AI 모델과 자동화 워크플로우를 설계합니다. 이론이 아닌, 실제 업무에 바로 투입 가능한 견고한 소프트웨어를 구축합니다.',
  },
  {
    num: '3',
    enTitle: 'Scale & Embed',
    koTitle: '확장 및 정착',
    desc: '사용자 교육, 운영 가이드, 성과 모니터링 체계까지 설계하여 지속적으로 성장하는 AI 환경을 만듭니다.',
  },
];

function ProcessSection() {
  return (
    <section id="process" className="py-[80px] md:py-[120px] px-6 bg-[#111]">
      <div className="max-w-[1200px] mx-auto">
        <div data-reveal className="mb-10 md:mb-16 text-center">
          <p className="text-[18px] font-extrabold text-white/45 leading-[1] pb-10">
            PROCESS
          </p>
          <h2 className="text-[clamp(30px,3.5vw,44px)] font-bold leading-[1.2] tracking-[-0.02em] text-white">
            복잡함을 제거하고, 본질만 남깁니다.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {steps.map((s, i) => (
            <div key={s.num} data-reveal data-delay={i * 120} className="flex bg-[#111]" style={{ clipPath: 'polygon(24px 0, 100% 0, 100% 100%, 0 100%, 0 24px)' }}>
              {/* 좌측 번호 */}
              <div className="w-[70px] shrink-0 bg-white flex items-start justify-center pt-[30px]">
                <span className="text-[36px] font-bold text-[#111] leading-none">{s.num}</span>
              </div>
              {/* 우측 텍스트 */}
              <div className="flex flex-col gap-[10px] px-[25px] py-[15px] flex-1">
                <p className="text-[30px] font-bold text-white leading-[2.1]">{s.enTitle}</p>
                <p className="text-[clamp(18px,3vw,22px)] font-semibold text-white/70 leading-[1.5]">{s.koTitle}</p>
                <p className="text-[clamp(16px,3vw,20px)] text-white/50 leading-[1.7]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>    </section>
  );
}

// ─── Cases ────────────────────────────────────────────────
const works = [
  { num: '01', title: 'Shinhan Bank new employees', tags: ['FINANCE'], year: '2026' },
  { num: '02', title: 'Bithumb IT/Service divisions', tags: ['BLOCKCHAIN'], year: '2026' },
  { num: '03', title: 'Kurly executives', tags: ['ENTERTAINMENT'], year: '2025' },
  { num: '04', title: 'Buzzvil company-wide', tags: ['LAW FIRM'], year: '2025' },
  { num: '05', title: 'ReconLabs, Classum, Toss, Cinnamon', tags: ['TECH'], year: '2025' },
];

function CasesSection() {
  return (
    <section id="portfolio" className="py-[80px] md:py-[120px] px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div data-reveal className="flex flex-col items-center text-center mb-14 gap-4">
          <div>
                     <p className="text-[18px] font-extrabold text-[#111]/30 leading-[1] pb-10">
              CASES
            </p>
            <h2 className="text-[clamp(34px,3.5vw,44px)] font-bold leading-[1.2] tracking-[-0.02em] text-[#111]">
              포트폴리오
            </h2>
          </div>

        </div>
        <div className="flex flex-col">
          {works.map((w, i) => (
            <div
              key={w.num}
              data-reveal
              data-delay={i * 80}
              className="group flex items-center border-b border-black/[0.08] px-[20px] py-[20px]"
            >
              {/* 제목 + 태그 */}
              <div className="flex flex-col gap-[10px] flex-1">
                <h3 className="text-[clamp(20px,3.5vw,32px)] font-bold text-[#303030] leading-[1.3]">
                  {w.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {w.tags.map((t) => (
                    <span key={t} className="text-[10px] md:text-[12px] font-semibold text-[#111]/40 border border-[#111]/10 px-[6px] py-[2px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              {/* 우측: 연도 */}
              <div className="shrink-0 pl-[40px]">
                <span className="text-[clamp(18px,3.5vw,22px)] font-bold text-[#111]/30">{w.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Team ─────────────────────────────────────────────────────
const members = [
  {
    initials: 'HD',
    name: '배휘동',
    role: 'AX Team lead',
    bio: 'XL8 Frontend Team Lead (3.5 years) \nKCD Frontend Team Lead (3.5 years) \nAgile Consulting Community AC2 Member (since 2011) \nFocused on "changing people" with proven success \nFastcampus Vibe Coding lecture (#1 for months post-launch) \nNewsletter and social media followers: 12k+ ',
  },
  {
    initials: 'KY',
    name: '강규영',
    role: 'AX Engineering',
    bio: 'Agentic engineering practice research and implementation Daum Communication (Kakao) \nR&D Center Researcher Agile Consulting Consultant NCSoft Next-Generation Platform TF Researcher Nexon Data Analysis Team Researcher Consulting and lectures at Samsung, IBM, SNU, KAIST, etc.',
  },
  {
    initials: 'CH',
    name: '최정혁',
    role: 'AX Engineering',
    bio: 'Agentic engineering practice research and implementation.',
  },

];

function TeamSection() {
  return (
    <section id="team" className="py-[80px] md:py-[120px] px-6 bg-[#f9f9f9]">
      <div className="max-w-[1200px] mx-auto">
        <div data-reveal className="mb-10 md:mb-16 text-center">
          <p className="text-[18px] font-extrabold text-[#111]/30 leading-[1] pb-10">TEAM</p>
          <h2 className="text-[clamp(24px,3.5vw,44px)] font-bold leading-[1.2] tracking-[-0.02em] text-[#111]">
            최고의 전문가들이 함께 합니다.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
          {members.map((m, i) => (
            <div key={m.name} data-reveal data-delay={i * 120} className="bg-[#f9f9f9] p-8 flex flex-col gap-6">
              {/* 이니셜 아바타 */}
              <div
                className="w-[120px] h-[120px] bg-[#111] flex items-center justify-center text-white text-[38px] font-bold shrink-0"
                style={{ clipPath: 'polygon(28px 0, 100% 0, 100% 100%, 0 100%, 0 28px)' }}
              >
                {m.initials}
              </div>
              {/* 이름 + 역할 */}
              <div className="flex items-baseline gap-3">
                <h3 className="text-[clamp(22px,3.5vw,26px)] font-bold text-[#111]">{m.name}</h3>
                <p className="text-[clamp(12px,3.5vw,14px)] font-semibold tracking-[0.05em] text-[#111]/35 uppercase">{m.role}</p>
              </div>
              {/* 소개 */}
              <p className="text-[clamp(14px,3.5vw,16px)] text-[#111]/50 leading-[1.7] whitespace-pre-line">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────
const faqs = [
  {
    q: '어떤 기업에게 적합한가요?',
    a: 'AI를 “검토 중”인 기업보다 실제로 바꾸고 싶은 기업에게 적합합니다. 성장 속도를 높이고 싶은 중견·대기업,운영 효율을 혁신하고 싶은 조직과 잘 맞습니다.',
  },
  {
    q: '프로젝트 기간은 얼마나 걸리나요?',
    a: '범위에 따라 다르지만 파일럿은 보통 4~8주, 전사 확산 프로젝트는 3~6개월 내 진행됩니다.',
  },
  {
    q: '기술 지식이 없어도 가능한가요?',
    a: '물론입니다. 우리는 기술이 아닌 비즈니스 관점에서 출발합니다. 현재 업무 흐름만 공유해주시면 됩니다.',
  },
  {
    q: '유지보수는 어떻게 이루어지나요?',
    a: '지속 개선 모델을 지향합니다. 운영 모니터링, 성능 개선, 기능 확장까지 장기 파트너십 형태로 지원합니다.',
  },
];

function FAQSection() {
  return (
    <section id="faq" className="py-[80px] md:py-[120px] px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div data-reveal className="mb-10 md:mb-16 text-center">
          <p className="text-[18px] font-extrabold text-[#111]/30 leading-[1] pb-10">Q&amp;A</p>
          <h2 className="text-[clamp(24px,3.5vw,44px)] font-bold leading-[1.2] tracking-[-0.02em] text-[#111]">
            자주 묻는 질문
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, i) => (
            <div key={i} data-reveal data-delay={i * 100} className="bg-[#f9f9f9] p-8 flex flex-col gap-5">
              <h3 className="text-[clamp(20px,3.5vw,22px)] font-bold text-[#111] leading-[1.4]">Q. {faq.q}</h3>
              <p className="text-[clamp(16px,3.5vw,18px)] text-[#111]/70 leading-[1.7] px-[22px]">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────
function ContactSection() {
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  const inputCls =
    'w-full bg-transparent border-0 border-b border-black/20 text-[#111] text-[18px] px-0 py-3.5 placeholder:text-[#111]/30 focus:outline-none focus:border-black/60 transition-colors';

  return (
    <section id="contact" className="py-[80px] md:py-[120px] px-6 bg-[#f9f9f9]">
      <div className="max-w-[720px] mx-auto flex flex-col gap-12 md:gap-16 items-center text-center">
        <div className="w-full">
          <p data-reveal className="text-[18px] font-extrabold text-[#111]/30 leading-[1] pb-10">CONTACT</p>
          <h2 data-reveal data-delay="100" className="text-[clamp(26px,5vw,40px)] font-bold leading-[1.08] tracking-[-0.03em] text-[#111]">
           시작할 준비가 되셨나요?
          </h2>
        </div>
        <div data-reveal data-delay="150" className="w-full text-left">
          {sent ? (
            <div className="flex flex-col items-start justify-center h-full gap-5">
              <div className="w-12 h-12 border border-black/20 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10l5 5 7-7" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-[22px] font-bold text-[#111]">문의가 접수되었습니다.</h3>
              <p className="text-[14px] text-[#111]/45">빠른 시일 내에 연락드리겠습니다.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              <div className="grid grid-cols-2 gap-3.5">
                <input type="text" placeholder="이름" value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })} required className={inputCls} />
                <input type="text" placeholder="회사명" value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })} className={inputCls} />
              </div>
              <input type="email" placeholder="이메일" value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })} required className={inputCls} />
              <textarea placeholder="문의 내용을 입력해 주세요." value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={5}
                className={`${inputCls} resize-none`} />
              <button type="submit"
                className="mt-2 w-full mx-auto block text-[16px] font-semibold tracking-[0.1em] text-white bg-[#111] py-4 hover:bg-[#333] transition-colors cursor-pointer"
                style={{ clipPath: 'polygon(18px 0, 100% 0, 100% 100%, 0 100%, 0 18px)' }}>
                보내기
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-black/[0.06] bg-white px-6 py-10">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <p className="text-[13px] tracking-[0.1em] text-[#111]/30">
          © 2026 CORCA, Inc. All rights reserved.
        </p>
        <div className="flex items-center gap-8">
          <span className="text-[13px] text-[#111]/40">
            서울특별시 강남구 테헤란로77길 11-8 6층
          </span>
          <a href="mailto:ax@corca.ai" className="text-[13px] text-[#111]/30 hover:text-[#111] transition-colors">
            ax@corca.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────
export default function Home() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = Number((entry.target as HTMLElement).dataset.delay ?? 0);
            setTimeout(() => entry.target.classList.add('visible'), delay);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <HeroSection />
      <AXSection />
      <ServicesSection />
      <ProcessSection />
      <CasesSection />
      <TeamSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

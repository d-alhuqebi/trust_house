import { useState, useEffect } from 'react';

// Logo Component
function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const dimensions = {
    sm: { width: 40, height: 40 },
    md: { width: 60, height: 60 },
    lg: { width: 100, height: 100 },
  };
  const { width, height } = dimensions[size];

  return (
    <svg width={width} height={height} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Bar chart columns */}
      <rect x="15" y="55" width="12" height="30" rx="2" fill="#1E3F95" />
      <rect x="32" y="40" width="12" height="45" rx="2" fill="#1E3F95" />
      <rect x="49" y="25" width="12" height="60" rx="2" fill="#1E3F95" />
      {/* Magnifying glass */}
      <circle cx="68" cy="35" r="18" stroke="#4A9B3B" strokeWidth="4" fill="none" />
      <line x1="80" y1="48" x2="92" y2="60" stroke="#4A9B3B" strokeWidth="5" strokeLinecap="round" />
      {/* Green accent line */}
      <line x1="10" y1="88" x2="65" y2="88" stroke="#4A9B3B" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

// Navbar Component
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'الرئيسية' },
    { href: '#about', label: 'من نحن' },
    { href: '#services', label: 'خدماتنا' },
    { href: '#contact', label: 'تواصل معنا' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <Logo size="sm" />
            <div className={`${scrolled ? 'text-[#1E3F95]' : 'text-white'}`}>
              <h1 className="text-sm font-bold leading-tight">تراست هاوس</h1>
              <p className="text-xs opacity-80">للتدقيق ومراجعة الحسابات</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-[#4A9B3B] ${scrolled ? 'text-[#1E3F95]' : 'text-white'}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className={`w-6 h-6 ${scrolled ? 'text-[#1E3F95]' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg p-4 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 px-4 text-[#1E3F95] font-medium hover:bg-[#E9EDF2] rounded-lg transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#17357D] via-[#1E3F95] to-[#17357D]" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#4A9B3B]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#8BCB7A]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4A9B3B]/5 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <div className="mb-8 flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-6 border border-white/20">
              <Logo size="lg" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            شركة تراست هاوس
            <span className="block text-[#8BCB7A] mt-2">للتدقيق ومراجعة الحسابات</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-4 font-light">
            Trust House Co. For Auditing & Auditing of Accounts
          </p>
          
          <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
            شريككم الموثوق في التدقيق والمراجعة والاستشارات المالية
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="bg-[#4A9B3B] hover:bg-[#3C8030] text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-[#4A9B3B]/30"
            >
              خدماتنا
            </a>
            <a
              href="#contact"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
            >
              تواصل معنا
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#E9EDF2] text-[#1E3F95] px-4 py-2 rounded-full text-sm font-bold mb-4">من نحن</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E3F95] mb-4">تراست هاوس</h2>
          <div className="w-24 h-1 bg-[#4A9B3B] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-[#1E3F95] mb-6">شركة رائدة في مجال التدقيق والمراجعة</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              شركة تراست هاوس للتدقيق ومراجعة الحسابات هي شركة يمنية متخصصة تقدم خدمات تدقيق ومراجعة حسابات شاملة، 
              بالإضافة إلى مجموعة واسعة من الخدمات الاستشارية المالية والإدارية.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              نلتزم بأعلى معايير الجودة والمهنية في تقديم خدماتنا، ونسعى لمساعدة عملائنا في تحقيق أهدافهم المالية 
              والإدارية من خلال حلول مبتكرة ومتخصصة.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#E9EDF2] rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-[#1E3F95]">+9</div>
                <div className="text-sm text-gray-600 mt-1">خدمات متخصصة</div>
              </div>
              <div className="bg-[#E9EDF2] rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-[#4A9B3B]">2268</div>
                <div className="text-sm text-gray-600 mt-1">رقم الترخيص</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-[#1E3F95] to-[#17357D] rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-[#4A9B3B]/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#8BCB7A]/10 rounded-full translate-x-1/2 translate-y-1/2" />
              
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-6">معلومات الشركة</h4>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#8BCB7A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">المدير</p>
                      <p className="font-bold">هاني محمد رفيق حمود</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#8BCB7A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">رقم الترخيص</p>
                      <p className="font-bold">2268</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#8BCB7A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">الموقع</p>
                      <p className="font-bold">الجمهورية اليمنية - عدن</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const services = [
    {
      title: 'خدمات التدقيق ومراجعة الحسابات',
      description: 'تدقيق ومراجعة الحسابات وفق أعلى المعايير الدولية',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'خدمات المراجعة الداخلية',
      description: 'مراجعة داخلية شاملة لضمان جودة العمليات',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: 'التحكيم التجاري',
      description: 'حل النزاعات التجارية بطرق احترافية وعادلة',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
    },
    {
      title: 'خدمات الحوكمة',
      description: 'تطبيق أفضل ممارسات الحوكمة المؤسسية',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'الخدمات الضريبية والزكوية',
      description: 'استشارات ضريبية وزكوية متخصصة وشاملة',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'دراسة الجدوى الاقتصادية',
      description: 'إعداد دراسات جدوى اقتصادية دقيقة ومفصلة',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'خدمات التطوير والتدريب',
      description: 'برامج تطوير وتدريب مهني متخصصة',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: 'المحاسبة القضائية',
      description: 'خدمات محاسبة قضائية متخصصة ومعتمدة',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: 'الاستشارات المالية والإدارية',
      description: 'استشارات مالية وإدارية شاملة ومتكاملة',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#E9EDF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-white text-[#4A9B3B] px-4 py-2 rounded-full text-sm font-bold mb-4">خدماتنا</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E3F95] mb-4">خدماتنا المتخصصة</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">نقدم مجموعة شاملة من الخدمات المهنية لتلبية احتياجاتكم</p>
          <div className="w-24 h-1 bg-[#4A9B3B] mx-auto rounded-full mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-transparent hover:border-[#4A9B3B]/20"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#1E3F95] to-[#17357D] rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1E3F95] mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#E9EDF2] text-[#1E3F95] px-4 py-2 rounded-full text-sm font-bold mb-4">تواصل معنا</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E3F95] mb-4">نحن هنا لمساعدتكم</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">لا تترددوا في التواصل معنا لأي استفسار</p>
          <div className="w-24 h-1 bg-[#4A9B3B] mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Phone 1 */}
          <div className="bg-gradient-to-br from-[#E9EDF2] to-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-[#E9EDF2]">
            <div className="w-16 h-16 bg-[#1E3F95] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[#1E3F95] mb-2">الهاتف الأول</h3>
            <p className="text-gray-600 font-mono text-lg direction-ltr" dir="ltr">00967-771377092</p>
          </div>

          {/* Phone 2 */}
          <div className="bg-gradient-to-br from-[#E9EDF2] to-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-[#E9EDF2]">
            <div className="w-16 h-16 bg-[#4A9B3B] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[#1E3F95] mb-2">الهاتف الثاني</h3>
            <p className="text-gray-600 font-mono text-lg direction-ltr" dir="ltr">00967-777014971</p>
          </div>

          {/* Location */}
          <div className="bg-gradient-to-br from-[#E9EDF2] to-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-[#E9EDF2]">
            <div className="w-16 h-16 bg-[#17357D] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[#1E3F95] mb-2">العنوان</h3>
            <p className="text-gray-600 text-lg">الجمهورية اليمنية - عدن</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#1E3F95] to-[#17357D] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-40 h-40 bg-[#4A9B3B]/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#8BCB7A]/10 rounded-full translate-x-1/2 translate-y-1/2" />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">هل تحتاج إلى خدماتنا؟</h3>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              تواصل معنا اليوم واحصل على استشارة مجانية من فريقنا المتخصص
            </p>
            <a
              href="tel:00967771377092"
              className="inline-block bg-[#4A9B3B] hover:bg-[#3C8030] text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              اتصل الآن
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-[#17357D] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo size="sm" />
              <div>
                <h3 className="font-bold text-lg">تراست هاوس</h3>
                <p className="text-white/60 text-sm">للتدقيق ومراجعة الحسابات</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              شريككم الموثوق في التدقيق والمراجعة والاستشارات المالية والإدارية
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">خدماتنا</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>خدمات التدقيق ومراجعة الحسابات</li>
              <li>خدمات المراجعة الداخلية</li>
              <li>التحكيم التجاري</li>
              <li>الاستشارات المالية والإدارية</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">تواصل معنا</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li dir="ltr" className="text-right">📞 00967-771377092</li>
              <li dir="ltr" className="text-right">📞 00967-777014971</li>
              <li>📍 الجمهورية اليمنية - عدن</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} شركة تراست هاوس للتدقيق ومراجعة الحسابات. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main App
export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

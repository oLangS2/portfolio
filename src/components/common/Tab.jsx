import React, { useEffect, useRef, useState } from 'react';

const tabs = [
  { id: 'main', label: '프롤로그' },
  { id: 'about', label: '기술' },
  { id: 'projects', label: '프로젝트' },
  { id: 'notion', label: '노션' },
  { id: 'career', label: '경력' },
  { id: 'footer', label: '에필로그' },
];

export const Tab = () => {
  const [activeTab, setActiveTab] = useState('main');
  const tabRefs = useRef({});

  // 탭의 스크롤 함수
  const scrollToTab = (id) => {
    const tabBtn = tabRefs.current[id];
    if (tabBtn) {
      tabBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  };

  // 탭 클릭 시 섹션 이동 + 탭 스크롤
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveTab(id);
      scrollToTab(id);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveTab(id);
            scrollToTab(id);
          }
        });
      },
      { threshold: 0.3}
    );

    const sections = tabs
      .map((tab) => document.getElementById(tab.id))
      .filter(Boolean);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };

  }, []);

  return (
    <div className="tab_container" style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          ref={(el) => (tabRefs.current[tab.id] = el)}
          onClick={() => handleScroll(tab.id)}
          className={`tab_button ${activeTab === tab.id ? 'active' : ''}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

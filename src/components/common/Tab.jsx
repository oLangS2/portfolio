//SECTION 탭 구현 (클릭 시 해당 섹션으로 이동)
import React, { useEffect, useState } from 'react'
import { RiHome2Fill } from "react-icons/ri";

const tabs = [
    { id: 'main', label: '메인' },
    { id: 'about', label: '기술' },
    { id: 'projects', label: '프로젝트' },
    { id: 'career', label: '경력' },
    { id: 'contact', label: '에필로그' },
  ]
  
  export const Tab = () => {
    const [activeTab, setActiveTab] = useState('main'); // 초기값은 main

    // 버튼 클릭 시 해당 id를 가진 영역으로 이동
    const handleScroll = (id) => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        setActiveTab(id); // active 상태 변경
      }
    }

    // 스크롤 시 영역에 해당하는 버튼의 active 상태 변경
    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveTab(entry.target.id);
              }
            });
          },
          { threshold: 0.5 }
        );
      
        const sections = tabs
          .map((tab) => document.getElementById(tab.id))
          .filter(Boolean); // null 제거
      
        sections.forEach((section) => observer.observe(section));
      
        return () => {
          sections.forEach((section) => observer.unobserve(section));
        };
      }, []);
    
    return (
      <div className="tab_container">
        {tabs.map((tab) => (
          <button key={tab.id} onClick={() => handleScroll(tab.id)} className={`tab_button ${activeTab === tab.id ? 'active' : ''}`}>
            {tab.label}
          </button>
        ))}
      </div>
    )
  }

import React, { useRef, useState } from 'react';
import noteData from "../../data/note";

const categories = ["All", ...new Set(noteData.map(item => item.category))];

const Docs = () => {
  const [active, setActive] = useState("All");
  const docsRef = useRef(null);
  
  const filterData =
    active === "All"
      ? noteData
      : noteData.filter((item) => item.category === active);

  return (
    <div className="section" id="docs" data-aos="fade-up" ref={docsRef}>
        <div className="section_wrap notion_wrap">
          <div className="left">
            <header className="title">Docs</header>
            <nav className="tab_nav">
                <ul>
                  {categories.map((cate) => (
                    <li 
                      key={cate}
                      className={active === cate ? "active" : "" }
                      onClick={()=>{
                        setActive(cate);
                        docsRef.current?.scrollIntoView({ behavior: "smooth" });
                      }}>
                      {cate}
                    </li>
                  ))}
                </ul>
            </nav>
          </div>
          <article>
            <ul>
              {filterData.map((item,i) => (
                <li key={i} data-aos="fade-up">
                  <a href={item.link} target='_blank' rel="noopener noreferrer">
                    <p>{item.title}</p>
                    <div className="cate">{item.category}</div>
                    <span>{item.date}</span>
                    <div className="icon_box">
                      <div className="icon"></div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </article>
        </div>
    </div>
  )
}

export default Docs;
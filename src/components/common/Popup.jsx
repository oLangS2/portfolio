import { useEffect, useState } from "react";

const Popup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hideUntil = localStorage.getItem("hidePopupUntil");

    if (!hideUntil || new Date().getTime() > Number(hideUntil)) {
      setVisible(true);
    }
  }, []);

  // 그냥 닫기
  const handleClose = () => {
    setVisible(false);
  };

  // 오늘 하루 보지 않기
  const handleHideToday = () => {
    const now = new Date();
    const endOfDay = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      0,
      0,
      0
    ).getTime();

    localStorage.setItem("hidePopupUntil", endOfDay);
    setVisible(false);
  };

  return (
    <div className={`popup ${visible ? "show" : ""}`}>
        <header className="flex">
            <div className="user flex">
                <div className="thum"></div>
                <div className="user">
                    <h2>Oh hyun jeong</h2>
                    <p>포트폴리오 주인</p>
                </div>
            </div>
            <button class="close" type="button" onClick={handleClose}>
                닫기
            </button>
        </header>
        <div className="inner">
            <div className="message"> ✨ 오늘도 멋진 하루 되세요 ! 🍀</div>
            <div className="message">
                제가 만든 이 사이트에서 당신의 시간을 덜 방해하기 위해 <br />
                이 팝업을 하루 동안 숨길 수 있어요. <br />
                편하게 둘러봐 주세요 :)
            </div>

            <button class="today_close" type="button" onClick={handleHideToday}>
                오늘 하루 보지않기
            </button>
        </div>
    </div>
  );
};

export default Popup;

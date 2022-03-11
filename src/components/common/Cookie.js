import { useEffect, useRef } from "react";

function Cookie() {

    const popup = useRef(null);
    const checkBox = useRef(null);
    const path = process.env.PUBLIC_URL;
    const logoPic = `${path}/pic/logoPic.png`;

    useEffect(() => {
        if(!document.cookie.includes("pop=true")){
            popup.current.classList.add("on");
        }
    },[])

    const handleCookie = () => {
        if(checkBox.current.checked) {
            document.cookie = "pop=true; path=/; max-age=86400";
        }else{
            document.cookie = "pop=true; path=/; max-age=-1";
        }
        popup.current.classList.remove("on");
        popup.current.classList.add("off");
    }

    return(
        <div className="popUp" ref={popup}>
            <div className="inner">
                <img className="logoPic" src={logoPic} alt="" />
                <h1>Belazor</h1>
                <span>안녕하세요.<br /> 방문해주셔서 감사합니다. <br />본 사이트는 Crome에 최적화되어있습니다. <br />세부 정보는 <strong>"작업소개서"</strong>를 통해 확인하실 수 있습니다.<br /><br /> 감사합니다.</span>
                  <div onClick={handleCookie} className="closeBtn">Close</div>

                  <div className="wrap">
                    <input type="checkbox" ref={checkBox} name="ck" id="ck" />
                    <label >오늘 하루 그만 보기</label>
                </div>
            </div> 
        </div>
    )
}

export default Cookie;
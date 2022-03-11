import { useRef, useState, useEffect } from "react";

function Btns(props) {
    const path = process.env.PUBLIC_URL;
    const logoSrc = `${path}/pic/logoPic.png`;

    const [switchOn,setSwitchOn] = useState(true);

    const hamberger = useRef(null);
    const menuMo = useRef(null);

    const handleMenu = () => {
        setSwitchOn(!switchOn);

        if(switchOn === true) {
            menuMo.current.style.right = "0%";
        }else {
            menuMo.current.style.right = "-100%";
        }
    }

    
    const pageLine = useRef(null);
    const fixMenu = useRef(null);

    const changeLineC = () => {
        let scroll = window.scrollY;

        if(scroll > 0 && scroll < 554) {
            pageLine.current.style.background = "#fff";
        } 
        if(scroll > 554 && scroll < 2471) {
            pageLine.current.style.background = "#999";
        }
        if(scroll > 2471 && scroll < 3070){
            pageLine.current.style.background = "#fff";
        }
        if(scroll > 3070 && scroll < 7350) {
            pageLine.current.style.background = "#999";
        }
        if(scroll > 7350) {
            pageLine.current.style.background = "#fff";
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeLineC);
        
    },[])

    return(
        <>
            <div className="topbar">
               <div className="wrap">
                    <img src={logoSrc} />
                    <div className="logotxt">
                        <h2>belazor</h2>
                        <p>technologies</p>
                        <span>WIRELESS CONSTRUCTION</span>
                    </div>
                </div>
                        
            </div>

            <button onClick={handleMenu} className={switchOn ? "showMenu" : "hideMenu"}>
                <span ref={hamberger}></span>
            </button>

            <ul ref={menuMo} className="headerMenuMo">
                <li onClick={() => {
                    handleMenu()
                    props.getIndex(1)
                    }}>SERVICES</li>
                <li onClick={() => {
                    handleMenu()
                    props.getIndex(2)
                    }}>SCHOOL</li>
                <li onClick={() => {
                    handleMenu()
                    props.getIndex(3)
                    }}>ABOUT US</li>
                <li onClick={() => {
                    handleMenu()
                    props.getIndex(4)
                    }}>PARTNERS</li>
                <li onClick={() => {
                    handleMenu()
                    props.getIndex(5)
                    }}>CAREER</li>
                <li onClick={() => {
                    handleMenu()
                    props.getIndex(6)
                    }}>CONTACT US</li>
            </ul>
            
            <ul ref={fixMenu} className="fixMenu">
                <li className="on" onClick={() => props.getIndex(0)}>01</li>
                <li  onClick={() => props.getIndex(1)}>02</li>
                <li onClick={() => props.getIndex(2)}>03</li>
                <li onClick={() => props.getIndex(3)}>04</li>
                <li onClick={() => props.getIndex(4)}>05</li>
                <li onClick={() => props.getIndex(5)}>06</li>
                <li onClick={() => props.getIndex(6)}>07</li>
            </ul>
            <div ref={pageLine} className="pageLine"> </div>

        </>
    )
}

export default Btns;
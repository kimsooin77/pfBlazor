import Header from "../common/Header.js";
import Cookie from "../common/Cookie.js";
import Services from "./Services.js";
import School from "./School.js";
import AboutUs from "./AboutUs.js";
import Partners from "./Partners.js";
import Career from "./Career.js";
import ContactUs from "./ContactUs.js";
import Btns from './Btns.js';

import Anime from '../../class/anime.js';
import {useEffect,useState,useRef} from 'react';

function Main() {
    const main = useRef(null);
    let pos = useRef([]);
    const [index,setIndex] = useState(0);
    const mode = localStorage.getItem("mode");

  
    const getIndex = index => {
        setIndex(index);
    }

    const handleResize = () => {
      const secs = main.current.querySelectorAll(".scrollMotion");
      let arr = [];
      for(let sec of secs) arr.push(sec.offsetTop);
      pos.current = arr;
      console.log(pos.current);

    }

    const handleScroll = () => {
        handleResize();
        let scroll = window.scrollY;
        const frames = main.current.querySelectorAll(".scrollEvent");
        const btns = main.current.querySelectorAll(".fixMenu li");

        
        pos.current.map((pos,index) => {
            
            if(scroll >= pos) {
                for(const btn of btns) btn.classList.remove("on");
                btns[index].classList.add("on");

                for(const frame of frames) frame.classList.remove("eventOn");
                frames[index].classList.add("eventOn")
            }
        })

        if(scroll >= pos.current[1] && scroll <= pos.current[2]){

            if(mode !== "dark") {
                for(const btn of btns) btn.classList.remove("darkOn");
                btns[1].classList.add("darkOn");
            }
            if(mode === "dark") {
                btns[1].classList.remove("darkOn");
            }
        }
        if(scroll >= pos.current[2] && scroll <= pos.current[3]){
            for(const btn of btns) btn.classList.remove("darkOn");
        }
        if(scroll >= pos.current[3] && scroll <= pos.current[4]){
            for(const btn of btns) btn.classList.remove("darkOn");
            btns[3].classList.add("darkOn");
        }
        if(scroll >= pos.current[4] || scroll <= pos.current[1]){
            for(const btn of btns) btn.classList.remove("darkOn");
        }
    }

    

    useEffect(() => {
        setTimeout(() => {
            handleResize();
        },2000)
        
            window.addEventListener("resize", handleResize);
            window.addEventListener("scroll",handleScroll);
    
            new Anime(window, {
                prop : "scroll",
                value : pos.current[index],
                duration : 500
            })
            
    
            return () => {
                    window.removeEventListener("resize", handleResize);
                    window.removeEventListener("scroll", handleScroll);
            }
        
        
       
    },[index]);

    
    return(
        <div id="mainWrap" ref={main}>
            <Header getIndex={getIndex} />
            <Cookie />

            <Services  />
            <School />
            <AboutUs />
            <Partners />
            <Career />
            <ContactUs />

            <Btns getIndex={getIndex} />
            
        </div>
    )
}

export default Main;

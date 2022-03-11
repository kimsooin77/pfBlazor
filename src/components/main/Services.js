import { useEffect, useState } from "react";
import axios from "axios";
import {useRef} from "react";

function Services() {

    let [posts,setPosts] = useState([]);
 
    const path = process.env.PUBLIC_URL;
    const blueDot = `${path}/pic/blueDot.png`;
    const orangeDot = `${path}/pic/orangeDot.png`;
    const page2BottomPic = `${path}/pic/page2Bottom.JPG`;

    const mode = localStorage.getItem("mode");

    const setMode = useRef(null);
    const modeBtn = useRef(null);
    const modeText = useRef(null);
    const bottomPic = useRef(null);

    const handleCheck = () => {
        modeBtn.current.classList.toggle("dark");
        localStorage.setItem("mode", "dark");
        setMode.current.classList.add("dark");
        modeText.current.innerText = "Dark Mode";
        bottomPic.current.style.display = "none";

        if(!modeBtn.current.classList.contains("dark")){
            localStorage.removeItem("mode");
            setMode.current.classList.remove("dark");
            modeText.current.innerText = "Day Mode";
            bottomPic.current.style.display = "block";
        }
    }

    useEffect(() => {
        if(mode === "dark") {
            modeBtn.current.classList.add("dark");
            setMode.current.classList.add("dark");
            modeText.current.innerText = "Dark Mode";
            bottomPic.current.style.display = "none";
        }
    },[])
    

    useEffect(() => {
        axios
            .get("./dbs/services.json")
            .then(data => {
                setPosts(data.data.data);
            })
    },[]);


    return(
            <main className="services scrollMotion" ref={setMode}>
                <div className="inner">
                    <div className="textbox scrollEvent">
                        <h4>SERVICES</h4>
                        <h1>WE OFFER A WIDE VARIETY TOP QUALITY SERVICES FOR WIRELESS INDUSTRY.</h1>
                        <p>We have grown and changed with the industry. Our specialty is antenna & line installation, along with troubleshooting to name a few. See our full list of services below.</p>
                        <div className="blueDot">
                            <img src={blueDot} />
                        </div>
                        <div className="orangeDot">
                            <img src={orangeDot} />
                        </div>
                    </div>
                    <div className="theme">
                        <button ref={modeBtn} onClick = { handleCheck}></button>
                        <span ref={modeText}>Day Mode</span>
                    </div>
                    
                    <div className="content">
                        {
                            posts.map((data,index) => {
                                return(
                                    <article key={index}>
                                        <div className="pic">
                                            <img src={`${path}/pic/${data.picNum}.JPG`} />
                                        </div>
                                        <strong>{data.title}</strong>
                                        <p>{data.text}</p>
                                    </article>
                                )
                            })
                        }
                    </div>
                </div>
                <div ref={bottomPic} className="page2Bottom">
                    <img src={page2BottomPic} />
                </div>
            </main>
    )
}

export default Services;
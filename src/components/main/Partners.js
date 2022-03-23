import axios from "axios";
import { useEffect, useRef, useState } from "react";


function Partners () {

    const path = process.env.PUBLIC_URL;
    const orangePic = `${path}/pic/orangeBig.png`;
    const [partner1,setPartner1] = useState([]);
    const [partner2,setPartner2] =useState([]);


    const part1 = useRef(null);
    const part2 = useRef(null);
    const btn1 = useRef(null);
    const btn2 = useRef(null);

    const slider = useRef(null);
    const frame = useRef(null);

    const handleView1 = () => {
        btn1.current.style.background = "#fff";
        btn2.current.style.opacity = 0.2;
        btn1.current.style.opacity = 1;

        part1.current.style.opacity = 1;
        part2.current.style.opacity = 0;
    }
    const handleView2 = () => {
        btn1.current.style.opacity = 0.2;
        btn2.current.style.background = "#fff";
        btn2.current.style.opacity = 1;

        part1.current.style.opacity = 0;
        part2.current.style.opacity = 1;

    }

    useEffect(() => {
        axios
            .get("./dbs/partners.json")
            .then(json => {
                setPartner1(json.data.partner1);
            })

    },[])

    useEffect(() => {
        axios
            .get("./dbs/partners.json")
            .then(json => {
                setPartner2(json.data.partner2);
            })
    },[])

    return(
        <section className="partners scrollMotion">
            <div className="inner">
                <div className="orangePic">
                    <img src={orangePic} />
                </div>
                <div id={frame} className="textBox scrollEvent">
                    <h4>PARTNERS</h4>
                    <h1>CHOOSING PARTNERS IS THE KEY TO OUR SUCCESS</h1>
                    <p>We pride ourselves that our partnerships are mutual beneficial. Synergy and team work between us and our clients help of all us grow to the highest degree. Ericsson, SAC Wireless, FDH Velocitel, AT&T, Verizon, Bechtel are some of our clients. Please see full list below.</p>
                </div>
            </div>
            <div className="purpleBox">
                <div className="innerBox">
                    <div className="slider" ref={slider}>
                        
                        <div className="page1" ref={part1} > 
                            {
                                partner1.map((item,index) => {
                                    return(
                                        <article key={index}>
                                            <span className="leftTop"></span>
                                            <span className="rightBottom"></span>
                                            <img alt="partners1" src={`${path}/pic/${item.name}.png`} />
                                        </article>
                                    )
                                })
                            }
                        </div>

                        <div className="page2" ref={part2}>
                            {
                                partner2.map((item,index) => {
                                    return(
                                        <article key={index}>
                                            <span className="leftTop"></span>
                                            <span className="rightBottom"></span>
                                            <img alt="partners2" src={`${path}/pic/${item.name}.png`} />
                                        </article>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <ul className="dots" >
                        <li className="btn1" ref={btn1} onClick={handleView1}><span></span></li>
                        <li className="btn2" ref={btn2} onClick={handleView2}><span></span></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Partners;
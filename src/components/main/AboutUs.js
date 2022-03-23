import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Navigation, Pagination, Autoplay } from 'swiper';
import {SwiperSlide,Swiper} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function AboutUs() {

    const path = process.env.PUBLIC_URL;
    const orangeBig = `${path}/pic/orangeBig.png`;
    const redDot = `${path}/pic/redDot.png`;
    const aboutPic = `${path}/pic/aboutPic.jpg`;
    const orangeBg = `${path}/pic/aboutBg.png`;
    const orangeSmall = `${path}/pic/orangeDot.png`;
    const orange1 = `${path}/pic/orange1.png`;
    const orange2 = `${path}/pic/orangeBig.png`
    const frame = useRef(null);

    // count 모션
    const countMotion = useRef(null);
    let countshow = useState(true);

    const handleCount = scrollPosition => {
        const countTop = window.scrollY + countMotion.current.getBoundingClientRect().top- 500;

        if(scrollPosition > countTop && countshow) {
            countingAction(0, 67, ".counter1", 60);
            countingAction(0, 80, ".counter2", 60);
            countingAction(0, 75, ".counter3", 60);
            countingAction(0, 55, ".counter4", 60);
            countshow = false;
        }
    }

    const countingAction = (min, max, el, speed) => {
        const counter = document.querySelector(el);
        const counts = setInterval(() => {
            if(min < max) {
                counter.innerHTML = ++min + "%";
            }else {
                clearInterval(counts);
            }
        }, speed);
    }

    // fade 모션
    const fadeMotion = useRef(null);
    let fadeShow = true;

    const handleFade = scrollPosition => {
        const fadeTop = window.scrollY + fadeMotion.current.getBoundingClientRect().top - 500;
        if(scrollPosition > fadeTop && fadeShow) {
            fadeMotion.current.style.opacity = 1;
            fadeMotion.current.style.transform = "translate3d(0%, 0%, 0)"
            fadeShow = false;
        }
    }

    useEffect(() => {
        if(countshow && fadeShow) {
            window.addEventListener("scroll", () => {
                let scrollPosition = window.scrollY || document.documentElement.scrollTop;
                handleCount(scrollPosition);
                handleFade(scrollPosition);
            })
        }
        return () => {
            window.removeEventListener("scroll", () => {
                let scrollPosition = window.scrollY || document.documentElement.scrollTop;
                handleCount(scrollPosition);
                handleFade(scrollPosition);
            })
        }
    },[])

    return(
        <section className="aboutUs scrollMotion">
            <div className="inner">
                <div className="about">
                    <div className="orangeBig">
                        <img src={orangeBig} />
                    </div>
                    <div className="redDot">
                        <img src={redDot} />
                    </div>
                    <div className="textBox scrollEvent">
                        <h4>ABOUT US</h4>
                        <h1>WE ARE ENERGETIC, SMART AND PASSIONATE</h1>
                        <p>Belazor Technologies, Inc was founded May of 2012, when the industry was on the way to being the worse it had been in years. We not only survived but grew strong in our client list, employees and experience, like a small tree is breaking through concrete. Now, on the edge of new technology, strong and experienced we are ready to offer our expertise to our clients. We love what we do, and we have proven it with our hard work. Everyone we work with we treat with dignity and honesty and we invite new specialists to work and build our careers side by side with us.</p>
                    </div> 
                    <div className="aboutPic">
                        <img src={aboutPic} />
                    </div>
                </div>

                <div className="countMotion" ref={countMotion}>
                    <div className="inner">
                        <h2>We take a renewable resource grown with the power of the sun and turn virtually 100% of it into useful, sustainable products.</h2>
                        <div className="redDot"></div>
                        <ul className="wrap">
                            <li>
                                <div className="circleBig"><span className="circleSm"></span></div>
                                <span className="counter1">67%</span>
                                <span className="data">FINISHED LUMBER</span>
                            </li>
                            <li>
                                <div className="circleBig"><span className="circleSm"></span></div>
                                <span className="counter2">80%</span>
                                <span className="data">CHIPS</span>
                            </li>
                            <li>
                                <div className="circleBig"><span className="circleSm"></span></div>
                                <span className="counter3">75%</span>
                                <span className="data">SAWDUST & SHAVINGS</span>
                            </li>
                            <li>
                                <div className="circleBig"><span className="circleSm"></span></div>
                                <span className="counter4">55%</span>
                                <span className="data">BARK</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="team">
                    <div className="orangeBg">
                        <img src={orangeBg} />
                    </div>
                    <div ref={fadeMotion} className="video">
                        <iframe src="https://player.vimeo.com/video/390063940?h=2d2a7714f0&title=0&byline=0&portrait=0" width="100%" height="100%"  allow="autoplay; fullscreen; picture-in-picture" ></iframe>
                    </div>
                    <div className="orangeSmall">
                        <img src={orangeSmall} />
                    </div>
                    <div className="orange1">
                        <img src={orange1} />
                    </div>
                    <div className="orange2">
                        <img src={orange2} />
                    </div>
                    <div id={frame} className="textBox">
                        <h4>TEAM</h4>
                        <h1>MEET OUR TEAM</h1>
                        <p> Our values are being carried by people that care about what they do. Our company takes care of our employees just as much! We never take our workers’ talents for granted, we help them learn, grow and build their carriers in the industry. Join us, new people are always welcome!</p>
                    </div>
                    
                    <figure id={frame}>
                        <Swiper
                            modules={[Navigation, Pagination,Autoplay]}
                            spaceBetween={0}
                            slidesPerView={'auto'}
                            loop
                            autoplay={false}
                            navigation
                            pagination={{ clickable: true }}
                            > 

                            <SwiperSlide >
                                <div className="teamItem">
                                    <p className="titleSmall">
                                        <span>YURY BELAZOR</span>
                                        <span>CEO</span>
                                    </p>
                                    <img src={`${path}/pic/department1.png`} />
                                </div>
                                <div className="teamItem">
                                    <p className="titleSmall">
                                        <span>TAWNY KOSLOWSKY</span>
                                        <span>DIRECTOR OF OPERATIONS</span>
                                    </p>
                                    <img src={`${path}/pic/department2.png`} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className="teamItem">
                                    <p className="titleSmall">
                                        <span>EUGENG KALESNIKOVICH</span>
                                        <span>PROJECT MANAGER</span>
                                    </p>
                                    <img src={`${path}/pic/department3.png`} />
                                </div>
                                <div className="teamItem">
                                    <p className="titleSmall">
                                        <span>DMIRTY MALKOVICH</span>
                                        <span>CONSTRUCTION MANAGER / HEAD OF TRANING DEPARTMENT</span>
                                    </p>
                                    <img src={`${path}/pic/department4.png`} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className="teamItem">
                                    <p className="titleSmall">
                                        <span>ANASTASSIYA GLUKHAREVA</span>
                                        <span>OFFICE MANAGER / ASSISTANT ACCOUNTING MANAGER</span>
                                    </p>
                                    <img src={`${path}/pic/department5.png`} />
                                </div>
                                <div className="teamItem">
                                    <p className="titleSmall">
                                        <span>MARYNA TALKACHOVA</span>
                                        <span>MARKETING MANAGER / HR ASSISTANT</span>
                                    </p>
                                    <img src={`${path}/pic/department6.png`} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="teamItem">
                                    <p className="titleSmall">
                                        <span>ILYA VARABEI</span>
                                        <span>FOREMAN</span>
                                    </p>
                                    <img src={`${path}/pic/department7.png`} />
                                </div>
                                <div className="teamItem">
                                    <p className="titleSmall">
                                        <span>DZMITRY BABKOU</span>
                                        <span>CONSTRUCTION MANAGER</span>
                                    </p>
                                    <img src={`${path}/pic/department8.png`} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="teamItem">
                                    <p className="titleSmall">
                                        <span>SIARHEI SARYCHAU</span>
                                        <span>FOREMAN</span>
                                    </p>
                                    <img src={`${path}/pic/department9.png`} />
                                </div>
                                <div className="teamItem">
                                    <p className="titleSmall">
                                        <span>CORNELIUS MOORE</span>
                                        <span>WAREHOUS MANAGER</span>
                                    </p>
                                    <img src={`${path}/pic/department10.png`} />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;
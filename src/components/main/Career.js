import axios from "axios";
import { useEffect, useState,useRef } from "react";

function Career () {
    const path = process.env.PUBLIC_URL;
    const orangePic = `${path}/pic/orangeBig.png`;
    const frame = useRef(null);

    const handleView = e => {
        let isView = e.currentTarget.querySelector(".answerBox").style.display === "block";

        if(isView) {
            e.currentTarget.querySelector(".answerBox").style.display = "none"
        }else {
            e.currentTarget.querySelector(".answerBox").style.display = "block"
        }
    }

    const [jobList,setJobList] = useState([]);


    useEffect(() => {
        axios
            .get("./dbs/jobList.json")
            .then(json => {
                setJobList(json.data.list);
            })
    },[])

    return(
            <section className="career scrollMotion">
                <div className="inner">
                    <div className="careerBox">
                        <div className="orangePic">
                            <img src={orangePic} />
                        </div>
                        <div className="orangeCircle">
                            <span></span>
                        </div>
                        <div id={frame} className="textBox scrollEvent">
                            <h4>CAREER</h4>
                            <h1>WE CONSIDER YOUR POTENTIAL, WE CONSIDER YOU </h1>
                        </div>
                        <div id={frame} className="pBox">
                            <p className="p1">Belazor Technologies, Inc is always looking for dedicated, skilled professionals to grow our team. From tower crew foremen, civil workers, office management and electricians experienced in cellular construction, we are proud of the quality we bring to the industry. We only hire people that embody our values and core beliefs to properly represent us before our clients. We strive for long term hires, so we choose wisely and thoroughly. Our company is looking for individuals that care about what we do and see the long term goal of our company and industry, as something we are all proud to be a part of.</p>
                            <p className="p2">If you are a savvy, loyal individual with strong work ethics, though lacking some experience and certifications. Don't hesitate to contact us for opportunities, we want to consider you!</p>
                        </div>
                    </div>
                    
                    <div id={frame} className="jobBox">
                        <h1>OUR JOB OPENINGS</h1>
                        <div className="wrap">
                            {
                                jobList.map((item,index)=> {
                                    return(
                                        <article onClick={ e => handleView(e)} key={index} >
                                            <div className="jobHead">
                                                <div className="pic">
                                                    <img src={`${path}/pic/${item.pic}.png`} />
                                                </div>
                                                <p>{item.position}</p>
                                                <span>{item.partTime}</span>
                                                <div className="icon"><span>{item.icon}</span></div>
                                            </div>
                                            
                                            <div className="answerBox">
                                                <p>{item.text}</p>
                                            </div>
                                        </article>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Career;
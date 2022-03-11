
function School () {
    const path = process.env.PUBLIC_URL;
    
    const orangeBig = `${path}/pic/orangeBig.png`;
    const malePic = `${path}/pic/page3Human.png`;
    const cloudPic = `${path}/pic/page3Cloud.png`;
    const page3Bottom = `${path}/pic/headerBottom.JPG`;

    

    return(
            <section className="school scrollMotion">
                <div className="inner">
                    <div className="orangeBig">
                        <img src={orangeBig} />
                    </div>
                    <div className="orangeSmall">
                        <span></span>
                    </div>
            
                    <div className="textBox scrollEvent">
                        <h4>SCHOOL</h4>
                        <h1>WE WELCOME NEW PEOPLE TO THE INDUSTRY!</h1>
                        <p>Our unique educational program and training facility allow us train new field-ready specialists within 3-week timeframe. Years of experience condensed in 3-week program, will give you essential information as well as a foundation to start your new career. You will learn safety, best techniques, newest technology, the tools and machinery of the industry, working with ropes, rigging, communication and more. We offer paid internships for qualified candidates, an industry standard we are proud to be at the forefront of.</p>
                    </div>
                    <div className="man">
                        <img src={malePic} />
                    </div>
                    <div className="cloud">
                        <img src={cloudPic} />
                    </div>
                </div>
                <div className="page3Bottom">
                    <img src={page3Bottom} />
                </div>
            </section>
    )
}

export default School;
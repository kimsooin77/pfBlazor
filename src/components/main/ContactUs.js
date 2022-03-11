import { useEffect, useRef, useState } from "react";

function ContactUs() {

    const path = process.env.PUBLIC_URL;
    const page7Top = `${path}/pic/page6Bottom.jpg`;
    const frame = useRef(null);
    
    const {kakao} = window;
    const container = useRef(null);
    const [map, setMap] = useState(null);
    const [index, setIndex] = useState(0);

    const info = [
        {
            title : "Company",
            latlng : new kakao.maps.LatLng(37.5284304,126.7930024),
            imgSrc : process.env.PUBLIC_URL+"/pic/marker1.png",
            imgSize : new kakao.maps.Size(100,90),
            imgPos : {offset : new kakao.maps.Point(60,60)}
        }
    ];

    const [mapInfo] = useState(info);

    // kakao map api
    useEffect(() => {
        container.current.innerHTML = "";
        const options = {
            center : mapInfo[index].latlng,
            level : 7
        }
        
        const map = new kakao.maps.Map(container.current, options);
        setMap(map);

        new kakao.maps.Marker({
            map : map,
            position : mapInfo[index].latlng,
            title : mapInfo[index].title,
            image : new kakao.maps.MarkerImage(mapInfo[index].imgSrc, mapInfo[index].imgSize, mapInfo[index].imgPos)
        })

        map.setCenter(mapInfo[index].latlng);

        const mapTypeControl = new kakao.maps.MapTypeControl();
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
        map.setZoomable(true);
        map.setDraggable(true);

        const mapSet = () => map.setCenter(mapInfo[index].latlng);
        window.addEventListener("resize", mapSet);
        
        return () => {
            window.removeEventListener("resize", mapSet);
        }
    },[index]); 
    
 
    // join form validation
    const initVal = {
        username : '',
        useremail : '',
        comments : ''
    }

    const [val,setVal] = useState(initVal);
    const [err,setErr] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [success, setSuccess] = useState(false)

    const handleChange = e => {
        const {name,value} = e.target;
        setVal({...val, [name] : value});
    }

    const handleSubmit = e => {
        e.preventDefault();

        setIsSubmit(true);
        setErr(check(val));
    }

    const check = val => {
        const errs = {};

        if(!val.username || val.username.length < 2){
            errs.username = `이름을 입력하세요.`;
        }
        if(!val.useremail || val.useremail.length < 5 || !/@/.test(val.useremail)) {
            errs.useremail = `'@'를 포함한 이메일을 입력하세요.`
        }
        if(!val.comments || val.comments.length < 10) {
            errs.comments = `남기는 말을 10글자 이상 입력하세요.`
        }
        return errs;
    }

    
    useEffect(() => {
        const len = Object.keys(err).length;
        if(len === 0 && isSubmit) {
            setSuccess(true);
        }else {
            setSuccess(false);
        }
    },[err]);

    return(
        <section className="contactUs scrollMotion">
            <div className="page7Top">
                <img src={page7Top} />
            </div>
            <div className="inner">
                <div id={frame} className="contactsTxt scrollEvent">
                    <h4>CONTACTS</h4>
                    <h1>EVERYONE WHO SHARES OUR VALUES IS WELCOME!</h1>
                    <p>Belazor Technologies, Inc is always looking to grow our team. Are you an experienced tower crew foreman, top hand, civil workers or electricians experienced in cellular construction? Send an email to hr@belazortech.com, we want to hear from you.</p>
                    <div className="list">
                        <span>hr@belazortech.com</span>
                        <span>(484) 497-8879</span>
                        <ul>
                            <li>LINEDIN</li>
                            <li>INSTAGRAM</li>
                            <li>FACEBOOK</li>
                        </ul>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend >CONTACT US</legend>

                        <table>
                            <caption className="h">회원가입 입력</caption>
                            <tbody>
                                <tr>
                                    <th>
                                        <input 
                                            type="text" 
                                            name="username" 
                                            id="username" 
                                            placeholder="YOUR NAME"
                                            value={val.username}
                                            onChange={handleChange}
                                        />
                                        <span className="err">{err.username}</span>
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        <input 
                                            type="email" 
                                            name="useremail" 
                                            id="useremail" 
                                            placeholder="YOUR EMAIL"
                                            value={val.useremail}
                                            onChange={handleChange}
                                            />
                                        <span className="err">{err.useremail}</span>
                                        
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        <textarea 
                                            name="comments" 
                                            id="comments" 
                                            cols="30" 
                                            rows="5"
                                            placeholder="MESSAGE"
                                            value={val.comments}
                                            onChange={handleChange}
                                            >
                                        </textarea>
                                        <span className="err">{err.comments}</span>
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        <input type="submit" value="SEND" />
                                    </th>
                                </tr>
                                {success ? <Pop /> : null} 
                            </tbody>
                        </table>
                    </fieldset>
                </form>

                <div id="map" ref={container} onClick={() => {
                    setIndex(0)
                    }}></div>
            </div>
            
        </section>
    )
    function Pop() {
        return(
            <aside className="pop">
                <h1>🎉Congratulations on your membership🎉</h1>
                <button className="close" onClick={e => {
                    setSuccess(false);
                    setVal(initVal);
                }}>✔ Check</button>
            </aside>
        )
    }
}

export default ContactUs;
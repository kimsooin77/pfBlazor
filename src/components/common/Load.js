import {useEffect, useRef, useState} from 'react';

function Load() {
    const path = process.env.PUBLIC_URL;
    const logoSrc = `${path}/pic/logoPic.png`;
    let [loading,setLoading] = useState(true);
    const preOveray = useRef(null);

    useEffect(() => {
        preOveray.current.style.transform = "translateX(100%)";

        setTimeout(()=> {
            setLoading(false)
        },1500);
    },[])


    return(
        <>
            {
                loading
                ? 
                <div className="loadState">
                    <div className="preLoadBg">
                    </div>
                    <div className="preContent">
                        <img src={logoSrc} />
                        <div className="logotxt">
                            <h2>belazor</h2>
                            <p>technologies</p>
                            <span>WIRELESS CONSTRUCTION</span>
                        </div>
                    </div>
                    <div ref={preOveray} className="preOveray">
            
                    </div>
                </div>
                :
                null
            }
        </>
        
    )

}

export default Load;
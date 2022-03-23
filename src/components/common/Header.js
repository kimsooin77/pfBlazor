import { useRef } from "react";


function Header(props) {

    const path = process.env.PUBLIC_URL;
    const duckPic = `${path}/pic/headerDuckPic.png`;
    const badgePic = `${path}/pic/headerBadgePic.png`
    const headerBottom = `${path}/pic/headerBottom.jpg`

    
    
    const frame = useRef(null);
    
    return(
        
            <header className="scrollMotion">
                <div className="cloud"></div>
    
                <ul className="headerMenu">
                    <li onClick={() => props.getIndex(1)}>
                        SERVICES
                        <div className="sub">
                            <ul>
                                <li>2 Depth 1</li>
                                <li>2 Depth 1</li>
                            </ul>
                        </div>
                    </li>
                    <li onClick={() => props.getIndex(2)}>
                        SCHOOL
                        <div className="sub">
                            <ul>
                                <li>2 Depth 2</li>
                                <li>2 Depth 2</li>
                            </ul>
                        </div>
                    </li>
                    <li onClick={() => props.getIndex(3)}>
                        ABOUT US
                        <div className="sub">
                            <ul>
                                <li>2 Depth 3</li>
                                <li>2 Depth 3</li>
                            </ul>
                        </div>
                    </li>
                    <li onClick={() => props.getIndex(4)}>
                        PARTNERS
                        <div className="sub">
                            <ul>
                                <li>2 Depth 4</li>
                                <li>2 Depth 4</li>
                            </ul>
                        </div>    
                    </li>
                    <li onClick={() => props.getIndex(5)}>
                        CAREER
                        <div className="sub">
                            <ul>
                                <li>2 Depth 5</li>
                                <li>2 Depth 5</li>
                            </ul>
                        </div>    
                    </li>
                    <li onClick={() => props.getIndex(6)}>
                        CONTACT US
                        <div className="sub">
                            <ul>
                                <li>2 Depth 6</li>
                                <li>2 Depth 6</li>
                            </ul>
                        </div>    
                    </li>
                </ul>
                

                <div className="inner scrollEvent eventOn"  ref={frame}>
                    <div className="txtBox">
                        <h4>WELCOME</h4>
                        <h1>Belazor Technologies, Inc - is the pride of wireless construction.</h1>
                        <p>We change people's lives by offering a unique opportunity to start a new and exciting
                                career, mentoring our team from day one. Scroll down to find out more about us.</p>
                    </div>
                </div>
    
                <div className="badge">
                    <img src={badgePic} />
                </div>
    
                <div className="duckPic">
                    <img src={duckPic} />
                </div>
                <div className="headerBottom">
                    <img src={headerBottom} />
                </div>
            </header>
    )
}

export default Header;
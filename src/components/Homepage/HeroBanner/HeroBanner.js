import "./herobanner.css";

import HeroBannerLeftPattern from "assets/images/HeroBannerLeftPattern";

const HeroBanner = () => {
    return (
        <div className="heroBannerBg">
            <div className="heroBanner">
                <div className="heroBannerLeft">
                    <div className="heroLeftPattern" >
                        <HeroBannerLeftPattern />
                    </div>
                    <div className="heroHead">India's first customized and <span className="heroHeadColorText">chopper style</span> bicycle manufacturers</div>
                    <p className="heroDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ea ut ducimus laudantium quidem facilis?</p>
                    <button className="gradientBtn heroButton">Order Now</button>
                </div>
                <div className="heroBannerRight">
                    <img className="heroImg" src="./images/HomePage/HeroBannerRightImg.png"  alt ="Cycle Img"/>
                </div>
            </div>
        </div>
      );
}
 
export default HeroBanner;
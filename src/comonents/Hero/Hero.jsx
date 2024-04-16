import React from "react";
import "./Hero.css";
import heroImg from "../../../public/hero-image.png";
import CountUp from "react-countup";
import {motion} from "framer-motion"
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <d className="orange-circle" />
            <motion.h1
              initial = {{y:"2rem" , opacity:0}}
              animate = {{y:0 ,opacity :1}}
              transition={{
                duration: 2,
                type:"spring"
              }}
            >
              Discover <br />
              Most Suitablebr <br /> Property
            </motion.h1>
          </div>

          <div className="flexColStart hero-dec">
            <span className="secondaryText">Find a variety of properties that suit you very easilty</span>
            <span className="secondaryText">Forget all difficulties in finding a residence for you</span>
          </div>

          <div className="flexCenter search-bar">
            <ion-icon
              name="location-outline"
              style={{ fontSize: "40px", color: "var(--blue)" }}
            ></ion-icon>
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span className="number">
                <CountUp start={8800} end={9000} duration={4} />
                <span className="plus"> +</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>

            <div className="flexColCenter stat">
              <span className="number">
                <CountUp start={1900} end={2000} duration={4} /> <span className="plus">+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
              <span className="number">
                <CountUp start={10} end={28} duration={4} /> <span className="plus">+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>

        <div className="flexCenter hero-right">
          <motion.div 
          initial={{x:"7rem", opacity:0}}
          animate ={{x:0 , opacity: 1}}
          transition={{
            duration :2,
            type:"spring"
          }}
          className="image-container"
          >
            <img src={heroImg} alt="hero" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

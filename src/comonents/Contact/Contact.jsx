import React from 'react'
import "./Contact.css"
import conImg from "../../../public/contact.jpg"
import {MdCall} from "react-icons/md"
import {BsFillChatDotsFill} from "react-icons/bs"
import {HiChatBubbleBottomCenter} from"react-icons/hi2"
const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            <div className="flexColStart c-left ">
            <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            {" "}
            We always ready to help by providijng the best services for you. We beleive a good
            <br />
            blace to live can make your life better
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
                <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <MdCall size ={25} />
                        </div>
                        <div className="flexColStart detail">
                            <span className= "primaryText">Call</span>
                            <span className= "secondaryText">0102 311 9415</span>
                        </div>
                    </div>
                    <div className="flexCenter button">
                            Call Now
                    </div>
                </div>
                {/* {seconedMode} */}
                <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <BsFillChatDotsFill size ={25} />
                        </div>
                        <div className="flexColStart detail">
                            <span className= "primaryText">Chat</span>
                            <span className= "secondaryText">0102 311 9415</span>
                        </div>
                    </div>
                    <div className="flexCenter button">
                    Chat now
                    </div>
                </div>
                
                
            </div>
            {/* seconed row */}
            <div className="flexStart row">
                {/* {seconedMode} */}
                <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <BsFillChatDotsFill size ={25} />
                        </div>
                        <div className="flexColStart detail">
                            <span className= "primaryText">Video Call</span>
                            <span className= "secondaryText">0102 311 9415</span>
                        </div>
                    </div>
                    <div className="flexCenter button">
                    Video Call now
                    </div>
                </div>
                {/* {seconedMode} */}
                <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <HiChatBubbleBottomCenter size ={25} />
                        </div>
                        <div className="flexColStart detail">
                            <span className= "primaryText">Message</span>
                            <span className= "secondaryText">0102 311 9415</span>
                        </div>
                    </div>
                    <div className="flexCenter button">
                    Message now
                    </div>
                </div>
            </div>
          </div>
            </div>
            <div className="c-right">
                <div className="image-container">
                    <img src={conImg} alt="img" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact

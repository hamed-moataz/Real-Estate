import React from 'react'
import "./Companies.css"
import prologis from "../../../public/prologis.png"
import tower from "../../../public/tower.png"
import equinix from "../../../public/equinix.png"
import realty from "../../../public/realty.png"
const Companies = () => {
  return (
    <section className='c-wrapper'>
        <div className="paddings innerWidth flexCenter c-container">
            <img src={prologis} alt="img" />
            <img src={tower} alt="img" />
            <img src={equinix} alt="img" />
            <img src={realty} alt="img" />
        </div>   
    </section>
  )
}

export default Companies

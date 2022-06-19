import React from "react";
import Header from "../components/UI/Header";
import { Link } from "react-router-dom";
import '../styles/countrydetails.css';
import bel from '../assets/belgium.png';
import {BsArrowLeft} from 'react-icons/bs'


// NOTE: I DESIGNED JUST THE UI AS PER THE ISSUE, YOU HAVE FEED THE DATA THAT COMES FROM THE API INTO THESE ELEMENTS

// UNCOMMENT THIS WHOLE CODE


function CountryDetail(props) {
  return (  
    <React.Fragment>
      <Header />
      {/* <main className="main-wrapper">
        
        
        
      NOTE: THIS LINKS TO THE HOMEPAGE
      
      
      
      
        <Link to="/"><button className="back-btn flex flex-row"><span className="back-icon"><BsArrowLeft size={26}/></span>Back</button></Link>
          <div className="row">
              <div className="base-wrapper">
                <img src={bel}  alt="" className="flag-img" />
                CHANGE THE IMG SRC TO THE IMG PULLED FROM API
              </div>
              <div className="desc-section flex flex-col md:flex-col lg:flex-row">
                <div className="info1">
                <h1 className="country-name">Belgium</h1>
                  <ul className="basic-info">
                  
                  
                  
                  NOTE: PUT THE INFO PULLED FROM API IN THIS LIST
                  
                  
                  
                  <li><span>Native Name: </span> Belgie</li> 
                    <li><span> Population: </span>11,341,511</li>
                    <li><span> Region: </span>Europe</li>
                    <li><span> Sub Region: </span> Western Europe</li>
                    <li><span> Capital: </span>Brussels</li>
                  </ul>
                </div>
                <div className="info2">
                  <ul className="extra-info">
                  
                  
                  
                  NOTE: PUT THE OTHER INFO PULLED FROM API IN THIS LIST
                  
                  
                  
                  <li><span>Top Level Domain:</span> .be</li>
                    <li><span>Currencies</span> Euro</li>
                    <li><span>Languages</span> Dutch, French, German</li>
                  </ul>
                </div>
                <div className="border-countries">
                  <h1 className="border-countries-h1">Border Countries:</h1>
                  <div className="border-countries-btns flex flex-row justify-center items-center">
                  
                  //NOTE: PUT THE COUNTRY LINKS IN THESE BUTTONS
                   
                   <Link to=""><button className="border-country-btn">France</button></Link>
                    <Link to=""><button className="border-country-btn">Germany</button></Link>
                    <Link to=""><button className="border-country-btn">Netherlands</button></Link>
                  </div>
                </div>
            </div>
          </div>
      </main> */}
    </React.Fragment>
  );
}

export default CountryDetail;

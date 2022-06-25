import React from "react";
import Header from "../components/UI/Header";
import { Link } from "react-router-dom";
import bel from '../assets/belgium.png';
import {BsArrowLeft} from 'react-icons/bs'


// NOTE: I DESIGNED JUST THE UI AS PER THE ISSUE, YOU HAVE FEED THE DATA THAT COMES FROM THE API INTO THESE ELEMENTS

// UNCOMMENT THIS WHOLE CODE


function CountryDetail(props) {
  return (  
    <React.Fragment>
      <Header />
      <main className="p-4 h-screen bg-slate-50">
        
        
        
      NOTE: THIS LINKS TO THE HOMEPAGE
      
      
      
      
        <Link to="/"><button className="flex flex-row shadow-3xl pt-2 pb-2 pr-5 m-3 w-auto"><span className="mr-5 ml-5"><BsArrowLeft size={26}/></span>Back</button></Link>
          <div className="flex flex-col md:flex-row lg:flex-row">
              <div className="base-wrapper">
                <img src={bel}  alt="" className="fw-full h-auto mt-10 mb-10" />
                CHANGE THE IMG SRC TO THE IMG PULLED FROM API
              </div>
              <div className="flex flex-col md:flex-col lg:flex-row p-5 pt-8">
                <div className="w-full m-4">
                <h1 className="text-2xl font-bold mt-1">Belgium</h1>
                  <ul className="basic-info">
                  
                  
                  
                  NOTE: PUT THE INFO PULLED FROM API IN THIS LIST
                  
                  
                  
                  <li><span className="font-semibold">Native Name: </span> Belgie</li> 
                    <li><span className="font-semibold"> Population: </span>11,341,511</li>
                    <li><span className="font-semibold"> Region: </span>Europe</li>
                    <li><span className="font-semibold"> Sub Region: </span> Western Europe</li>
                    <li><span className="font-semibold"> Capital: </span>Brussels</li>
                  </ul>
                </div>
                <div className="w-full m-4">
                  <ul className="mt-8 mb-8">
                  
                  
                  
                  NOTE: PUT THE OTHER INFO PULLED FROM API IN THIS LIST
                  
                  
                  
                  <li><span className="font-semibold">Top Level Domain:</span> .be</li>
                    <li><span className="font-semibold">Currencies</span> Euro</li>
                    <li><span className="font-semibold">Languages</span> Dutch, French, German</li>
                  </ul>
                </div>
                <div className="m-0 w-full">
                  <h1 className="font-semibold ml-5">Border Countries:</h1>
                  <div className="flex flex-row justify-center items-center">
                  
                  //NOTE: PUT THE COUNTRY LINKS IN THESE BUTTONS
                   
                   <Link to=""><button className="shadow-3xl p-2 m-3 text-sm pr-5 pl-5">France</button></Link>
                    <Link to=""><button className="shadow-3xl p-2 m-3 text-sm pr-5 pl-5">Germany</button></Link>
                    <Link to=""><button className="shadow-3xl p-2 m-3 text-sm pr-5 pl-5">Netherlands</button></Link>
                  </div>
                </div>
            </div>
          </div>
      </main>
    </React.Fragment>
  );
}

export default CountryDetail;

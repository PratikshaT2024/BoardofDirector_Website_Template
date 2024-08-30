import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';


import Img1 from "../Images/img1.jpg"

 
export default function BoardofDirector3() {
  return (
<div>
     <div className="max-w-screen-xl  lg:mt-9 bg-[#FEFFFB] flex flex-col lg:flex-row items-center justify-center  ">
      
      <div className=" sm:w-1/2 p-5 text-start lg:justify-center animate__animated animate__fadeInLeft ">
          <div className="" >
              <h2 className="my-4  text-2xl font-serif lg:text-3xl text-black ">
              Name<span className="text-amber-900"></span>
              </h2>
              <h2 className="my-4  text-2xl font-serif lg:text-3xl text-black ">
            Position<span className="text-amber-900"></span>
              </h2>
              
              <p className="text-black text-justify font-serif lg:mt-2 mt-2 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim velit et semper efficitur. Sed feugiat quam sed tortor pulvinar, in viverra odio tempus. Integer facilisis orci vitae nisi congue, at ullamcorper purus fringilla. Fusce gravida eros sit amet felis tincidunt, a efficitur metus pharetra. Donec fringilla mi eget erat volutpat, sed pharetra tortor fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut ac varius lorem, non tincidunt nisl. Nam sit amet felis ut ligula vestibulum tincidunt. Morbi sit amet elit felis. In ac eros eu mauris ullamcorper sodales. Integer sagittis urna ut ligula pharetra, at efficitur risus aliquet.

              </p>
    
          </div>
      </div>
      <div className="p-3 lg:w-1/2 mt-3 flex justify-center  lg:justify-center animate__animated animate__fadeInRight " >
          <div className="image text-center  lg:mr- ">
              <img className="h-[30vh] w-[45vh] lg:h-[55vh] lg:w-[90vh] " src={Img1} alt="Oncology" />
          </div>
      </div>
  </div>
    </div>


  );
}
 
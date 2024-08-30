import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
import Img1 from "../Images/img1.jpg"
import Img2 from "../Images/img2.jpg"
 
export default function BoardofDirector2() {
  return (
    <div>
    <div className="max-w-screen-xl mx-auto mt-1 bg-[#FFF6E7] flex flex-col md:flex-row items-center justify-center">
      <div className="sm:w-1/2 p-10 lg:w-1/2 flex justify-center animate__animated animate__fadeInLeft">
        <div className="image text-center">
          <img className="" src={Img1} alt="Panchakarma"/>
        </div>
      </div>
      <div className="sm:w-1/2 p-5 text-center lg:text-right animate__animated animate__fadeInRight">
        <div className="text">
          <h2 className="my-4  font-serif text-3xl sm:text-4xl text-amber-900 text-start mt-0">
            Name <span className="text-amber-900"></span>
          </h2>
          <h2 className="my-4  font-serif text-3xl sm:text-4xl text-amber-900 text-start mt-0">
            Position<span className="text-amber-900"></span>
          </h2>
          <p className="text-amber-950 text-justify font-serif">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim velit et semper efficitur. Sed feugiat quam sed tortor pulvinar, in viverra odio tempus. Integer facilisis orci vitae nisi congue, at ullamcorper purus fringilla. Fusce gravida eros sit amet felis tincidunt, a efficitur metus pharetra. Donec fringilla mi eget erat volutpat, sed pharetra tortor fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut ac varius lorem, non tincidunt nisl. Nam sit amet felis ut ligula vestibulum tincidunt. Morbi sit amet elit felis. In ac eros eu mauris ullamcorper sodales. Integer sagittis urna ut ligula pharetra, at efficitur risus aliquet.

          </p>
          
        </div>
      </div>





      
    </div>

    </div>


  );
}
 
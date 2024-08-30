import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
    
import Img1 from "../Images/img1.jpg"
import Img2 from "../Images/img2.jpg"
import Img3 from "../Images/img3.jpg"
import Img4 from "../Images/img4.jpg"
import Img5 from "../Images/img5.jpg"




const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

const BoardofDirector1 = () => {
  useScrollToTop();

  const cardsData = [
    {
      image: Img1, 
      title: "Mr. Sandip D. Shete",
      description: "(Founder and Managing Director",
      d_School: "Prabhuram Gurukul, Nashik)"
    },
    {
      image: Img2,
      title: "Dr. Shubham S. Shete",
      description: "(Founder, Director & Chief Advisor",
      d_School: "Prabhuram Gurukul, Nashik)"
    },
    {
      image: Img3,
      title: "Mrs. Sunita S. Shete",
      description:"(Founder  and  Principal",
      d_School: "Prabhuram Gurukul, Nashik)"
    },
    {
      image: Img4,
      title: "Miss Suhani S. Shete",
      description: "(Yoga and Meditation Teacher",
      d_School: "Prabhuram Gurukul, Nashik)"
    },
    {
      image: Img5,
      title: "Mrs. Urmila Sahane",
      description: "(Chief Teacher",
      d_School: "Prabhuram Gurukul, Nashik)"
    },
    
  ];

  const firstHalf = cardsData.slice(0, 3);
  const secondHalf = cardsData.slice(3, 5);

  return (
    <div className="container bg-gray-100 max-w-full px-8 py-6 mx-auto" data-aos="fade-up max-w-7xl">
      
      

      <div className="flex flex-wrap justify-center">
        {/* First row with three images */}
        {firstHalf.map((card, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full transition-transform transform hover:scale-105" data-aos="zoom-in">
              <img src={typeof card.image === 'string' ? card.image : card.image} alt={card.title} className="w-full h-96 object-cover" />
              <div className="px-6 py-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="font-bold text-xl mb-2">{card.title}</div>
                  <p className="text-gray-700 text-base text-sm">{card.description}</p>
                  <p className="text-gray-700 text-base text-sm">{card.d_School}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center mt-8">
        {/* Second row with two images */}
        {secondHalf.map((card, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full transition-transform transform hover:scale-105" data-aos="zoom-in">
              <img src={typeof card.image === 'string' ? card.image : card.image} alt={card.title} className="w-full h-96 object-cover" />
              <div className="px-6 py-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="font-bold text-xl mb-2">{card.title}</div>
                  <p className="text-gray-700 text-base">{card.description}</p>
                  <p className="text-gray-700 text-base">{card.d_School}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video section can be added here */}

    </div>
  );
};

export default BoardofDirector1;
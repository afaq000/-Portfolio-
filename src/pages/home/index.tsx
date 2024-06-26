import React, { useEffect, useState } from "react";
import Layout from "@/components/newcomponents/layout";
import HomeSlider from "@/components/newcomponents/HomeSilder";
import Navbar from "@/components/Navbar";
import Aos from "aos";

function Index() {
  const cards = [
    {
      id: 1,
      role: "Web Developer",
      borderColor: "#101825",
      description: "Builds and maintains websites.",
      imgSrc: "/About/web developer.jpg",
    },
    {
      id: 2,
      role: "Front-End Developer",
      borderColor: "#1F2021",
      description: "Focuses on the visual and interactive aspects of websites.",
      imgSrc: "/About/Front-end developer.png",
    },
    {
      id: 3,
      role: "Back-End Developer",
      borderColor: "#0A1D26",
      description: "Manages server-side logic and database interactions.",
      imgSrc: "/About/Back-end_developer-removebg-preview.png",
    },
    {
      id: 4,
      role: "UI/UX Developer",
      borderColor: "#171810",
      description: "Designs user interfaces and enhances user experience.",
      imgSrc: "/About/UIUX developer.png",
    },
  ];

  useEffect(function () {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Layout>
      <div
        className="w-full h-screen text-[#101825] overflow-y-auto overflow-hidden bg-gray-100"
        id="scroll-1"
      >
        <div className="w-full h-screen" id="home">
          <div className="">
            <HomeSlider />
          </div>
        </div>

        <div className=" w-full px-10 mt-10" id="about">
          <div className=" w-full flex flex-col mt-3">
            <div className="about-us-section">
              <p className="text-gray-400 text-xs tracking-[8px] "> ABOUT US</p>
              <div className="border-container flex justify-center">
                <div className="relative border-line w-[120px] border-[6px] border-orange-500">
                  <span className="star absolute left-0 -top-[12px]">★</span>
                </div>
              </div>
            </div>
            <p className="py-5 text-lg font-bold">WHO AM I?</p>
            <p className="mt-12">
              <span className="font-bold">Hi I,m Jackson Ford</span> On her way
              she met a copy. The copy warned the Little Blind Text, that where
              it came from it would have been rewritten a thousand times and
              everything that was left from its origin would be the word and and
              the Little Blind Text should turn around and return to its own,
              safe country.
            </p>
            <p className="py-5">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar.
            </p>
          </div>

          <div className="w-full flex justify-center items-center">
            <div className="w-full flex justify-between flex-wrap">
              <div className="w-1/5 px-4 py-4">
                <div className="">

                </div>

              </div>
              {/* {cards.map((card) => (
                <div
                  key={card.id}
                  className="w-full md:w-[40%] xmd:w-[30%] lg:w-[20%] relative mt-16 md:mt-20 rounded-lg cursor-pointer bg-white box-shadow1 flex flex-col py-3 px-3 items-center box-shadow1"
                  style={{
                    borderColor: card.borderColor,
                    borderBottomColor: card.borderColor,
                  }}
                >
                  <div className="flex justify-center md:w-1/2 rounded-full">
                     <img
                      src={card.imgSrc}
                      alt={`${card.role} Logo`}
                      className="object-cover w-1/3 xxs:w-1/5 md:w-1/2 absolute border-[2px] box-shadow1 -top-[40px] sm:-top-[50px] rounded-full"
                    /> 
                  </div>
                  <p className="text-center font-bold py-1 mt-20  md:mt-20 xmd:mt-14 lg:mt-20">
                    {card.role}
                  </p>
                  <p className="text-center py-1">{card.description}</p>
                </div>
              ))} */}
            
            </div>
          </div>
        </div>


        {/* <div className=" w-full px-10 mt-10" id="services">
          <div className=" w-full flex flex-col mt-3">
            <div className="about-us-section">
              <p className="text-gray-400 text-xs tracking-[8px] "> Services</p>
              <div className="border-container flex justify-center">
                <div className="relative border-line w-[120px] border-[6px] border-orange-500">
                  <span className="star absolute left-0 -top-[12px]">★</span>
                </div>
              </div>
            </div>
            <p className="py-5 text-lg font-bold">WHO AM I?</p>
            <p className="mt-12">
              <span className="font-bold">Hi I,m Jackson Ford</span> On her way
              she met a copy. The copy warned the Little Blind Text, that where
              it came from it would have been rewritten a thousand times and
              everything that was left from its origin would be the word and and
              the Little Blind Text should turn around and return to its own,
              safe country.
            </p>
            <p className="py-5">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar.
            </p>
          </div>

          <div className="w-full flex justify-center items-center">
            <div className="w-full md:flex md:flex-row md:flex-wrap text-white px-1 mt-10 gap-2 md:justify-center xmd:justify-start">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="w-full md:w-[40%] xmd:w-[30%] lg:w-[24%] relative mt-16 md:mt-20 rounded-lg cursor-pointer bg-[#313131] box-shadow1 flex flex-col py-3 px-3 items-center box-shadow1 border-[2px]"
                  style={{
                    borderColor: card.borderColor,
                    borderBottomColor: card.borderColor,
                  }}
                >
                  <div className="flex justify-center md:w-1/2 rounded-full">
                    <img
                      src={card.imgSrc}
                      alt={`${card.role} Logo`}
                      className="object-cover w-1/3 xxs:w-1/5 md:w-1/2 absolute border-[2px] box-shadow1 -top-[40px] sm:-top-[50px] rounded-full"
                    />
                  </div>
                  <p className="text-center font-bold py-1 mt-20  md:mt-20 xmd:mt-14 lg:mt-20">
                    {card.role}
                  </p>
                  <p className="text-center py-1">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* <div className=" w-full px-10 mt-10" id="services">
          <div className=" w-full flex flex-col mt-3">
           <div className="about-us-section">
    <p className="text-gray-400 text-xs tracking-[8px]">OUR SERVICES</p>
    <div className="border-container flex justify-center">
        <div className="relative border-line w-[150px] border-[6px] border-orange-500">
            <span className="star absolute left-0 -top-[12px]">★</span>
        </div>
    </div>
</div>
            <p className="py-5 text-lg font-bold">WHO AM I?</p>
            <p className="mt-12">
              <span className="font-bold">Hi I,m Jackson Ford</span> On her way
              she met a copy. The copy warned the Little Blind Text, that where
              it came from it would have been rewritten a thousand times and
              everything that was left from its origin would be the word and
              and the Little Blind Text should turn around and return to its
              own, safe country.
            </p>
            <p className="py-5">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar.
            </p>
          </div>

          <div className="w-full flex justify-center items-center">
          <div className="w-full md:flex md:flex-row md:flex-wrap text-white px-1 mt-10 gap-2 md:justify-center xmd:justify-start">
  {cards.map((card) => (
    <div
      key={card.id}
      className="w-full md:w-[40%] xmd:w-[30%] lg:w-[24%] relative mt-16 md:mt-20 rounded-lg cursor-pointer bg-[#313131] box-shadow1 flex flex-col py-3 px-3 items-center box-shadow1 border-[2px]"
      style={{
        borderColor: card.borderColor,
        borderBottomColor: card.borderColor,
      }}
    >
      <div className="flex justify-center md:w-1/2 rounded-full">
        <img
          src={card.imgSrc}
          alt={`${card.role} Logo`}
          className="object-cover w-1/3 xxs:w-1/5 md:w-1/2 absolute border-[2px] box-shadow1 -top-[40px] sm:-top-[50px] rounded-full"
        />
      </div>
      <p className="text-center font-bold py-1 mt-20  md:mt-20 xmd:mt-14 lg:mt-20">
        {card.role}
      </p>
      <p className="text-center py-1">{card.description}</p>
    </div>
  ))}
</div>

          </div>
        </div> */}
      </div>

      {/* <Navbar/> */}
    </Layout>
  );
}

export default Index;

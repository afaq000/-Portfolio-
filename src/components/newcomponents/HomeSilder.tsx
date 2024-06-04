import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "./Image";
import { MdOutlineFileDownload } from "react-icons/md";
import Aos from "aos";

interface SlideProps {
  imgUrl: string;
  text: string;
}

const HomeSlider: React.FC = () => {
  useEffect(function () {
    Aos.init({ duration: 2000 });
  }, []);

  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = "/Document/afaq hussain CV_compressed.pdf";
    link.download = "document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <Slider {...settings}>
      {/* slide 1 */}
      <div data-aos="fade-right" className="Slide relative flex justify-center items-center">
        <Image
          height={0}
          width={0}
          src="/Home/img_bg_2.jpg.webp"
          className="w-full  object-cover h-screen"
          alt="Background Image"
        />
        <div className="w-1/2 absolute top-1/2 left-0 transform -translate-y-1/2 flex items-center px-10">
          <p
            data-aos="fade-right"
            className="text-black text-5xl leading-relaxed font-extrabold font-serif flex flex-col"
          >
            Hi! I'm Jackson
          </p>
        </div>
        <div className="mt-10 absolute  top-[70%] left-0 transform -translate-y-1/2 flex items-center px-10">
          <button
            className="button-- py-2 custom-btn btn-3  px-2 border flex gap-2 items-center justify-center"
            onClick={downloadFile}
          >
            DOWNLOAD CV{" "}
            <span>
              <MdOutlineFileDownload className="border " />
            </span>
          </button>
        </div>
      </div>

      {/* slide 2 */}
      <div className="Slide relative flex justify-center items-center">
        <Image
          height={0}
          width={0}
          src="images/img_bg_1.jpg.webp"
          className="w-full  object-cover h-screen"
          alt="Background Image"
        />
        <div className="w-1/2 absolute top-1/2 left-0 transform -translate-y-1/2 flex items-center px-10">
          <p className="text-black text-5xl leading-relaxed font-extrabold font-serif flex flex-col">
            I am A Full Stack Web Developer
          </p>
        </div>
        <div className="mt-10 absolute  top-[70%] left-0 transform -translate-y-1/2 flex items-center px-10">
          <button
            className="button-- py-2 custom-btn btn-3  px-2 border flex gap-2 items-center justify-center"
            onClick={downloadFile}
          >
            DOWNLOAD CV{" "}
            <span>
              <MdOutlineFileDownload className="border " />
            </span>
          </button>
        </div>
      </div>
    </Slider>
  );
};

export default HomeSlider;

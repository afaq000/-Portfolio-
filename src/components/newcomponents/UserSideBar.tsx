import Link from "next/link";
import { useRouter } from "next/router";
// import Image from '../Image';
import { RxHamburgerMenu } from "react-icons/rx";
import React, { ReactNode } from "react";
// import ChatSideBar from './ChatSideBar';
import { MdKeyboardArrowDown } from "react-icons/md";
import { Logo } from "../icon/logo";
import { Speaker } from "../icon/sidebar";
import Image from "./Image";

interface SideBarArray {
  icon: ReactNode;
  title: string;
  id: string;
}

interface SideBarProps {
  data: SideBarArray[];
  mainClassName?: string;
  SideBarLogoClassName?: string;
}

const UserSideBar: React.FC<SideBarProps> = ({
  data,
  mainClassName,
  SideBarLogoClassName,
}) => {
  const router = useRouter();
  const handleItemClick = () => {};

  return (
    <div
      id="scroll-1"
      className={`h-screen  sm:pr-2 flex flex-col  bg-[#F2F3F7]  ${mainClassName}`}
    >
      <div
        className={` w-full sticky flex flex-col items-center justify-center py-2 ${SideBarLogoClassName}`}
      >
        <Image
          height={0}
          width={0}
          alt=""
          className=" w-[60%] rounded-full border"
          src={"/images/profileImage.webp"}
        />

        <div className="text-center py-2">
          <p>afaq hussain</p>
          <p>Full Stack Developer</p>
        </div>
      </div>
      <div
        id="scroll-1"
        className="overflow-y-auto  items-center sm:items-start flex flex-col bg-[#F2F3F7] custom-scrollbar"
      >
        <div className="flex flex-col  bg-[#F2F3F7]">
          <div>
            <div className="w-full text-black flex flex-col items-center sm:items-start px-4 sm:px-4 gap-2 lg:gap-4 text-xs  whitespace-nowrap sm:text-base lg:text-base  mt-3 md:mt-5">
              {data.map((item, index) => (
                <Link
                  key={item?.id}
                  // href={item?.link}
                  href={`#${item.title.toLowerCase()}`}
                  title={item?.title}
                  onClick={handleItemClick}
                  // id={item?.id}
                  // className={`text-black flex items-center text-center px-3 lg:pl-3 lg:pr-16 py-1 rounded-lg gap-1 md:gap-3 hover:bg-gray-500 w-full cursor-pointer
                  //  ${
                  //   item?.link === router?.pathname ||
                  //   (router?.pathname?.startsWith(item?.link) &&
                  //     item?.link !== '/')
                  //     ? 'bg-gray-500 px-4 w-full'
                  //     : ''
                  // }
                  // `}
                  className={`text-black flex items-center text-center px-3 lg:pl-3 lg:pr-16 py-1 rounded-lg gap-1 md:gap-3 hover:bg-gray-500 w-full cursor-pointer
                 
                 `}
                >
                  <p className="w-[18px] sm:w-[15px] h-[18px] sm:h-[15px]">
                    {item?.icon}
                  </p>
                  <p className="text-base hidden sm:block">{item?.title}</p>
                </Link>
              ))}
            </div>

            <div className="flex sm:w-full px-4 sm:px-5 sm:border-t mt-40 pb-4">
              <div
                onClick={() => {
                  const profileSettingUrl = router.pathname.includes("admin")
                    ? "/admin/feedback"
                    : "/employee/feedback";
                  router.push(profileSettingUrl);
                }}
                className="flex items-center text-center gap-1 md:gap-3 text-white text-[11px] md:text-xs my-2  cursor-pointer mt-4"
              >
                {/* <Speaker /> */}
                <p className="hidden text-black sm:block">
                  © Copyright ©2024 All rights reserved | This template is made
                  with by Colorlib Demo Images: Unsplash.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSideBar;

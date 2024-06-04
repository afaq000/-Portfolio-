import React, { ReactNode, useEffect, useRef } from 'react';
import UserSideBar from '../newcomponents/UserSideBar';
import { Chat, Home, Task } from '../icon/sidebar';

interface Props {
  children?: ReactNode;
  onclick?: () => void;
}

const Layout: React.FC<Props> = ({ children }) => {
  const data = [
    {
      icon: <Home />,
      title: 'Home',
      link: '/Home',
    },
    {
      icon: <Task />,
      title: 'About',
      id: "About"
    },
    {
      icon: <Chat />,
      title: 'Services',
      id: "Services"
    },
  ];

  return (
    <div className="w-full h-screen flex">
      <title>Employee</title>
      <UserSideBar
        data={data}
        mainClassName="max-w-[320px] w-24 sm:w-1/4 text-black"
        SideBarLogoClassName={''}
      />
      {children}
    
    </div>
  );
};

export default Layout;




  // {
    //   icon: <Attendance />,
    //   title: 'SKILLS',
    //   // link: '/employee/attendance',
    // },

    // {
    //   icon: <Salary />,
    //   title: 'EDUCATION',
    //   // link: '/employee/salary',
    // },
    // {
    //   icon: <Rewards />,
    //   title: 'EXPERIENCE',
    //   // link: '/employee/rewards',
    // },

    // {
    //   icon: <Leaves />,
    //   title: 'WORK',
    //   // link: '/employee/leaves',
    // },

    // {
    //   icon: <Certificate />,
    //   title: 'BLOG',
    //   // link: '/employee/certificate',
    // },

    // {
    //   icon: <Complain />,
    //   title: 'CONTACT',
    //   // link: '/employee/complain',
    // },

    // {
    //   icon: <Summary />,
    //   title: 'Summary report',
    //   link: '/employee/summary',
    // },

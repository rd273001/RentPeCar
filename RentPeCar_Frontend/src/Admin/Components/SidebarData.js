
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData  = [
  {
    title: 'PG Buildings',
    path: '/PgBuildings',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'PG Rooms',
    path: '/PgRooms',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Bookings',
    path: '/bookings',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Tenants',
    path: '/Tenants',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Rent',
    path: '/Rent',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Payment',
    path: '/Payment',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Change Password',
    path: '/ChangePassword',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
 
];
            
      
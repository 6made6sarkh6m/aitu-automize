import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io5';


export const SideBarData = [
    {
        title: 'home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'timetable',
        path:'/timetable',
        icon: <IoIcons.IoCalendarSharp/>,
        cName: 'nav-text'
    },
    {
        title: 'cources',
        path:'/cources',
        icon: <FaIcons.FaBook/>,
        cName: 'nav-text'
    }
]

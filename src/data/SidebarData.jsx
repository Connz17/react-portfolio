import React from 'react'

import * as FaIcons from 'react-icons/fa'
import * as MdIcons from 'react-icons/md'
import * as BsIcons from 'react-icons/bs'
import * as AiIcons from 'react-icons/ai'
import * as GiIcons from 'react-icons/gi'
import * as ImIcons from 'react-icons/im'



export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <FaIcons.FaHome/>,
        // class: "nav-text",
    },
    {
        title: "Projects",
        path: "#",
        icon: <GiIcons.GiFullFolder/>,
        iconClosed: <AiIcons.AiFillCaretDown/>,
        iconOpen: <AiIcons.AiFillCaretUp/>,
        subNav: [
            {
                title: "Front End",
                path: "/projects/front-end",
                icon: <BsIcons.BsDisplay/>,
            },
            {
                title: "Back End",
                path: "/projects/back-end",
                icon: <AiIcons.AiOutlineDatabase/>,
            },
            {
                title: "Full Stack",
                path: "/projects/full-stack",
                icon: <GiIcons.GiGoldStack/>,
            },
        ],
        // class: "nav-text",
    },
    {
        title: "Skills",
        path: "/skills",
        icon: <ImIcons.ImTarget/>,
        // class: "nav-text",
    },
    {
        title: "About Me",
        path: "/about",
        icon: <BsIcons.BsFileEarmarkPersonFill/>,
        // class: "nav-text",
    },
    {
        title: "Get In Touch",
        path: "/contact",
        icon: <MdIcons.MdConnectWithoutContact/>,
        // class: "nav-text",
    },
]

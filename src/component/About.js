import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faSchool,
} from '@fortawesome/free-solid-svg-icons';

const work = {
  icon: <FontAwesomeIcon icon={faBriefcase} />,
  iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
};
const school = {
  icon: <FontAwesomeIcon icon={faSchool} />,
  iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
};


let timelineElements = [
  {
    id: 1,
    title: "Firmware Engineer",
    location: "Outpost Central Ltd, Auckland, New Zealand",
    description:
      "Data Logging; Irrigation Control; Cellular network",
    date: "August 2017 - present",
    icon: work,
  },
  {
  id: 2,
  title: "Software Engineer",
  location: "MAS Zengrange Ltd, Lower Hutt, New Zealand",
  description:
    "Remote Initiation equipment development; Ballistic computer development for mortar and artillery",
  date: "August 2009 - 2017",
  icon: work,
  },
  {
    id: 3,
    title: "Diploma in Software Development",
    location: "Computer Power Institute, Wellington, New Zealand",
    description:
      "Course modules in: Networking, Web development, Linux, Java",
    date: "August 1991 - 1996",
    icon: school,
    },
  {
    id: 4,
    title: "Integrated Circuits Engineer",
    location: "Duolog Technologies (now ARM Ltd), Budapest, Dublin",
    description:
      "Design Services for chip design and verification; Texas Instruments OMAP chip verification; 802.11a development",
    date: "August 2001 - 2006",
    icon: work,
  },
  {
    id: 5,
    title: "Hardware Engineer",
    location: "Optics Storage Ltd, Singapore",
    description:
      "MPEG2 multimedia set-top box development; FPGA development",
    date: "August 1999 - 2000",
    icon: work,
  },
  {
    id: 6,
    title: "Hardware Engineer",
    location: "Thakral Technologies, Singapore",
    description:
      "DVD MPEG2 player development; PCB development",
    date: "August 1998 - 1999",
    icon: work,
  },
  {
  id: 7,
  title: "Masters of Engineering",
  location: "University of Canterbury, Christchurch, New Zealand",
  description:
    "Research in Image Processing; Nonlinear image filtering under structual constraints",
  date: "August 1996 - 1997",
  icon: school,
  },
  {
  id: 8,
  title: "Bachelor of Electrical and Electronic Engineering",
  location: "University of Canterbury, Christchurch, New Zealand",
  description:
    "",
  date: "August 1991 - 1996",
  icon: school,
  }
]

function About() {
  return (
    <>
  <h1>About</h1>
  <VerticalTimeline>
  {timelineElements.map(element => {

    const contentStyle = { background: 'rgb(33, 150, 243)', color: '#8B4513' };
    const arrowStyle = { borderRight: '7px solid  rgb(33, 150, 243)' };
    const iconStyle = { background: 'rgb(33, 150, 243)', color: '#fff' };

    return (
    <VerticalTimelineElement               
      className="vertical-timeline-element--work"
      contentStyle={contentStyle}
      contentArrowStyle={arrowStyle}
      iconStyle={iconStyle}
      key={element.key}
      date={element.date}
      {...element.icon}
    >
    <h3>
      {element.title}
    </h3>
    <h5 >
      {element.location}
    </h5>
    <p id="description">{element.description}</p>    
    </VerticalTimelineElement>
    )
  })}
  </VerticalTimeline>
    </>
  )};
  
  export default About;
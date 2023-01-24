import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import { MdEngineering } from "react-icons/md";
import { FaGit, FaReact } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";

const Certificates = () => {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-8xl font-bold py-20 text-center md:text-left">
          Certificates
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
        <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Front-end Development"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<MdOutlineWeb />}
            animate={true}
          >
            <img src="/certificate/front-end.jpg" alt="Front-end Development" />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="React"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<FaReact />}
          >
            <img src="/certificate/react.jpg" alt="react" />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="JavaScript"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<IoLogoJavascript />}
          >
            <img src="/certificate/javascript.jpg" alt="javascript" />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="HTML & CSS"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<AiFillHtml5 />}
          >
            <img src="/certificate/htmlcss.jpg" alt="html & css" />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Git & GitHub"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<FaGit />}
          >
            <img src="/certificate/gitgithub.jpg" alt="Git & GitHub" />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="IT Fundamentals"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<MdEngineering />}
          >
            <img src="/certificate/itf.png" alt="IT Fundamentals" />
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Certificates;

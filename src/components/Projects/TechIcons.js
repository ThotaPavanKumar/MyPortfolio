import React from "react";
import {
  DiReact,
  DiFirebase,
  DiMongodb,
  DiCss3,
  DiJavascript,
  DiWindows,
  DiJava,
} from "react-icons/di";
import { FaNode, FaNodeJs } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
import {
  SiRedux,
  SiJson,
  SiHtml5,
  SiVisualstudiocode,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative, TbLetterL } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { FiType } from "react-icons/fi";
import { FaChartLine } from "react-icons/fa6";

const TechIcons = ({ tag }) => {
  if (tag === "React") return <DiReact size="35%" color="#5ED4F3" />;
  else if (tag === "Firebase") return <DiFirebase size="35%" color="#F7C428" />;
  else if (tag === "Mongodb") return <DiMongodb size="35%" color="#559134" />;
  else if (tag === "Node") return <FaNode size="35%" />;
  else if (tag === "CSS") return <DiCss3 size="35%" color="#2171B6" />;
  else if (tag === "JavaScript")
    return <SiJavascript size="35%" color="#EFD81C" />;
  else if (tag === "JSON") return <SiJson size="35%" />;
  else if (tag === "HTML") return <SiHtml5 size="35%" color="#DC4A25" />;
  else if (tag === "Redux") return <SiRedux size="35%" color="#7248B6" />;
  else if (tag === "Linux") return <FcLinux size="35%" />;
  else if (tag === "Windows") return <DiWindows size="35%" />;
  else if (tag === "VS code")
    return <SiVisualstudiocode size="35%" color="#2174B3" />;
  else if (tag === "Java") return <DiJava size="35%" color="#E06C00" />;
  else if (tag === "ExpressJS") return <FaNodeJs size="35%" color="#E06C00" />;
  else if (tag === "React Native")
    return <TbBrandReactNative size="35%" color="#61dafb" />;
  else if (tag === "Tailwind CSS")
    return <RiTailwindCssFill size="35%" color="#38bdf8" />;
  else if (tag === "Legend State")
    return <TbLetterL size="35%" color="#3178c6" />;
  else if (tag === "TypeScript")
    return <SiTypescript size="35%" color="#3178c6" />;
  else if (tag === "TypeBox") return <FiType size="35%" color="#61dafb" />;
  else if (tag === "Material UI")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        class="css-1170n61"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="#0073E6"
          d="M24 5.601V1.592a.344.344 0 0 0-.514-.298l-2.64 1.508a.688.688 0 0 0-.346.597v4.009c0 .264.285.43.514.298l2.64-1.508A.688.688 0 0 0 24 5.6ZM.515 1.295l7.643 4.383a.688.688 0 0 0 .684 0l7.643-4.383a.344.344 0 0 1 .515.298v12.03c0 .235-.12.453-.319.58l-4.65 2.953 3.11 1.832c.22.13.495.127.713-.009l4.61-2.878a.344.344 0 0 0 .161-.292v-4.085c0-.254.14-.486.362-.606l2.507-1.346a.344.344 0 0 1 .506.303v7.531c0 .244-.13.47-.34.593l-7.834 4.592a.688.688 0 0 1-.71-.009l-5.953-3.681A.344.344 0 0 1 9 18.808v-3.624c0-.115.057-.222.153-.286l4.04-2.694a.688.688 0 0 0 .307-.572v-4.39a.137.137 0 0 0-.208-.117l-4.44 2.664a.688.688 0 0 1-.705.002L3.645 7.123a.138.138 0 0 0-.208.118v7.933a.344.344 0 0 1-.52.295L.5 14.019C.19 13.833 0 13.497 0 13.135V1.593c0-.264.286-.43.515-.298Z"
        ></path>
      </svg>
    );
  else if (tag === "Chart JS")
    return <FaChartLine size="35%" color="#61dafb" />;
  return <SiRedux size="35%" />;
};
export default TechIcons;

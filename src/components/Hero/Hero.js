import React from "react";
import { Link } from "react-router-dom";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
// import Button from "../../../public/images"
import { LeftSection, A } from "./HeroStyles";
import { WritingEffect } from "./WritingEffect";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm <br />
        Pavan Kumar
        {/* My Personal Portfolio */}
      </SectionTitle>
      <WritingEffect />

      {/* <a href='../../'><Button>Download My CV</Button></a> */}

      {/* <Link to='/images/Pavan Kumar Thota Resume.pdf' download={""}><button>Download My CV</button></Link> */}

      {/* <A
                            target='_blank'
                            rel='noreferrer'
                            href='/images/Pavan_Kumar_Thota_Resume.pdf' download={""}
                        >
                            Resume
                        </A> */}

      <Button
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1Wp0usNbE8cgzNC7HnxaEImg27K1e90KL/view?usp=sharing&export=download",
            "_blank"
          )
        }
      >
        View My Resume{" "}
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;

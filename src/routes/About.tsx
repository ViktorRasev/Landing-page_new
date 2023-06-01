import {AboutWrapper, Paragraph, CvButton, AboutPage, IconWrapper, Icon} from "../styled/About";
import DownloadIcon from "@mui/icons-material/Download";
import CV from "../assets/Viktor_Rašev_sk_CV.pdf";
import {technologiesIcons} from "../assets/ProjectsData.ts"

import { useState } from "react";


const About = () => {
    const [paragraphIndex, setParagraphIndex] = useState<number>(0);

    const parArray = [
        "Hello, my name is Viktor and I am from Slovakia but currently living in Prague. I have been studying front-end web development on my own for more than a year at this moment, and in my opinion, it is the right time to look for my first job connected to this field.",
        "I consider myself as a responsible person and I never had a problem with working hard and being flexible.",
        "I am a team-player but according to circumstances I am capable of working by myself as well.",
        "I am aware that my journey as a programmer is at the very beginning, but I am sure that my wish to become better and ability to learn fast will make me a good addition to your team."
    ];

    return (
        <AboutPage>
            <CvButton to={CV} target="_blank" download>
                <DownloadIcon />
                <p>Download CV</p>
            </CvButton>
            <AboutWrapper>
                <IconWrapper>
                    {technologiesIcons.map((item, idx) => {
                        return (
                            <Icon key={idx}>
                                <h4>{item.name}</h4>
                                <img src={item.icon} alt=""/>
                            </Icon>
                        )
                    })}
                </IconWrapper>

                {parArray.map((item, index) => {
                    return (
                        <div key={index}>
                            {index <= paragraphIndex ? (
                                <Paragraph
                                    cursor={false}
                                    speed={99}
                                    sequence={[`${item}`, () => {
                                        setParagraphIndex((prevIndex) => {
                                            const nextIndex = prevIndex + 1;
                                            if (nextIndex < parArray.length) {
                                                return nextIndex;
                                            } else {
                                                return prevIndex;
                                            }
                                        });
                                    }]}
                                />
                            ) : null}
                        </div>
                    );
                })}
            </AboutWrapper>
        </AboutPage>
    );
};

export default About;

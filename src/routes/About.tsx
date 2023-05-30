import { AboutWrapper, Paragraph, CvButton, AboutPage } from "../styled/About";
import DownloadIcon from "@mui/icons-material/Download";
import CV from "../assets/Viktor_Rašev_sk_CV.pdf";

import { useWindupString } from "windups";

const About = () => {


  const [p1] = useWindupString(
    "Hello, my name is Viktor and I am from Slovakia. Currently, I am\n" +
      "              living in Prague. I have been studying front-end web development on my\n" +
      "              own for nearly 2 years, and I believe that the time has come for me to\n" +
      "              pursue job opportunities in this field."
  )
  const [p2] = useWindupString("I consider myself as a responsible person and I never had a problem\n" +
      "          with working hard and being flexible.")
  const [p3] = useWindupString("I am a team-player but according to circumstances I am capable of\n" +
      "          working by myself as well.")
  const [p4] = useWindupString("I am aware that my journey as a programmer is at the very beginning,\n" +
      "          but I am sure that my wish to become better and ability to learn fast\n" +
      "          will make me a good addition to your team.")

  return (
<AboutPage>
      <AboutWrapper>
        <CvButton to={CV} target="_blank" download>
          <DownloadIcon />
          <p>Download CV</p>
        </CvButton>
        <Paragraph>{p1}</Paragraph>
        <Paragraph>{p2}</Paragraph>
        <Paragraph>{p3}</Paragraph>
        <Paragraph>{p4}</Paragraph>
      </AboutWrapper>
</AboutPage>
  );
};

export default About;

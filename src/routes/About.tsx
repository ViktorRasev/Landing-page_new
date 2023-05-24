import { AboutWrapper, Paragraph, CvButton } from "../styled/About";
import DownloadIcon from '@mui/icons-material/Download';
import CV from "../assets/Viktor_Rašev_sk_CV.pdf"

// <Link to="/files/myfile.pdf" target="_blank" download>Download</Link>

const About = () => {
  return (
    <AboutWrapper>
      <div>
        <CvButton to={CV} target="_blank" download>
          <DownloadIcon />
          <p>Download CV</p>
        </CvButton>
        <Paragraph>
          Hello, my name is Viktor and I am from Slovakia. Currently, I am
          living in Prague. I have been studying front-end web development on my
          own for nearly 2 years, and I believe that the time has come for me to
          pursue job opportunities in this field.
        </Paragraph>
        <Paragraph>
          I consider myself as a responsible person and I never had a problem
          with working hard and being flexible.
        </Paragraph>
        <Paragraph>
          I am a team-player but according to circumstances I am capable of
          working by myself as well.
        </Paragraph>
        <Paragraph>
          I am aware that my journey as a programmer is at the very beginning,
          but I am sure that my wish to become better and ability to learn fast
          will make me a good addition to your team.
        </Paragraph>
      </div>
    </AboutWrapper>
  );
};

export default About;

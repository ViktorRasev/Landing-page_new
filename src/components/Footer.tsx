import {
  FooterWrapper,
  Social,
  Link,
  Contact,
  Icon,
  CopyrightWrapper,
} from "../styled/Footer.ts";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <FooterWrapper>
      <Social>
        <Link href="https://github.com/ViktorRasev">
          <GitHubIcon className="social-icon" />
        </Link>
        <Link href="https://www.linkedin.com/in/viktor-ra%C5%A1ev-991a0423b/">
          <LinkedInIcon className="social-icon" />
        </Link>
      </Social>
      <Contact>
        <Link href="mailto: vrasev@gmail.com">
          <Icon>
            <EmailIcon />
          </Icon>
          vrasev@gmail.com
        </Link>
        <Link href="tel:+420792362670">
          <Icon>
            <PhoneIphoneIcon />
          </Icon>
          +420 792 362 670
        </Link>
      </Contact>
      <CopyrightWrapper>
        <p>2023 | Viktor Rašev</p>
      </CopyrightWrapper>
    </FooterWrapper>
  );
};

export default Footer;

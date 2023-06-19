import { projectData } from "../assets/ProjectsData.ts";
import {
  Grid,
  Card,
  Image,
  CardMobile,
  ImageMobile,
  Icon,
  IconWrapper,
  CardTitle,
} from "../styled/Projects.ts";

const Projects = () => {
  return (
    <>
      {projectData.map((item, idx) => {
        return (
          <Grid key={idx} rowDirection={idx % 2 === 0 ? "row" : "row-reverse"}>
            <Card href={item.projectUrl} target="_blank">
              <CardTitle>
                <IconWrapper>
                  {item.usedInProject.map((icon, idx) => {
                    return <Icon key={idx} src={icon} alt="" />;
                  })}
                </IconWrapper>
              </CardTitle>
              <Image
                src={item.imageDesktop}
                alt={`Image of ${item.name} for desktop layout`}
              />
            </Card>
            <CardMobile href={item.projectUrl} target="_blank">
              <ImageMobile
                src={item.imageMobile}
                alt={`Image of ${item.name} for mobile layout`}
              />
            </CardMobile>
          </Grid>
        );
      })}
    </>
  );
};

export default Projects;

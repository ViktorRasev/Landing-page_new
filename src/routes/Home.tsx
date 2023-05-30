import { Grid, Card, Image, CardMobile, ImageMobile, Icon, IconWrapper, CardTitle} from "../styled/Home.ts"
import MainTitle from "../components/MainTitle.tsx";
import {projectData} from "../assets/ProjectsData.ts"




const Projects = () => {

    const handleClick = () => {
        console.log("HELLO")
    }


    return (
        <>
            <MainTitle />
            {
            projectData.map((item, idx) => {
                return (
                      <Grid key={idx} index={idx}>
                        <Card href={item.projectUrl} target="_blank">
                            <CardTitle>
                                <IconWrapper>
                                {item.usedInProject.map((icon) => {
                                    return <Icon src={icon} alt=""/>
                                })}
                                </IconWrapper>
                                <h2>{item.name}</h2>
                            </CardTitle>
                            <Image src={item.imageDesktop} alt={`Image of ${item.name} for desktop layout`}/>
                        </Card>
                        <CardMobile href={item.projectUrl} target="_blank">
                            <ImageMobile src={item.imageMobile} alt={`Image of ${item.name} for mobile layout`}/>
                        </CardMobile>
                    </Grid>
                )
            })
        }</>
    )
}

export default Projects
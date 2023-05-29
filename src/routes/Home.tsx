import {Grid, Card, Image, CardMobile, ImageMobile, Icon, IconWrapper, CardTitle} from "../styled/Home.ts"
import MainTitle from "../components/MainTitle.tsx";
import {projectData} from "../assets/ProjectsData.ts"




const Projects = () => {

    return (
        <>
            <MainTitle />
            {
            projectData.map((item, idx) => {
                return (
                    <Grid key={idx}>
                        <Card cardColor={item.cardColor}>
                            <CardTitle>
                                <IconWrapper>
                                {item.usedInProject.map((icon) => {
                                    return <Icon src={icon} alt=""/>
                                })}
                                </IconWrapper>
                                <h2>{item.name}</h2>
                            </CardTitle>
                            <Image src={item.imageDesktop} alt=""/>
                        </Card>
                        <CardMobile cardColor={item.cardColor}>
                            <ImageMobile src={item.imageMobile} alt=""/>
                        </CardMobile>
                    </Grid>
                )
            })
        }</>
    )
}

export default Projects
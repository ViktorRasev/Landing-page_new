import {Grid, Card, Image, CardMobile, ImageMobile} from "../styled/Home.ts"

type ProjectTypes = {
    name: string,
    imageDesktop: string,
    imageMobile: string,
    usedInProject: string[],
    id: string
}




const Projects = () => {

    const projectData: ProjectTypes[]= [
        {
            name: "Cookbook",
            imageDesktop: "https://i.imgur.com/kK4VWIw.png",
            imageMobile: "https://i.imgur.com/O1GM1eI.png",
            usedInProject:["html", "css", "javascript", "react", "firebase", "bootstrap"],
            id: "1"
        }, {
            name: "Quiz",
            imageDesktop: "https://i.imgur.com/dz3M3zn.png",
            imageMobile: "https://i.imgur.com/yJic1Ah.png",
            usedInProject: ["html", "css", "javascript", "vue"],
            id: "2"
        }, {
            name: "Simple Eshop",
            imageDesktop: "https://i.imgur.com/EH0mGho.png",
            imageMobile: "https://i.imgur.com/wRKBAMU.png",
            usedInProject: ["html", "css", "javascript"],
            id: "3"
        }, {
            name: "Todo List",
            imageDesktop: "https://i.imgur.com/PJoPycg.png",
            imageMobile: "https://i.imgur.com/Nk0BP34.png",
            usedInProject: ["html", "css", "javascript"],
            id: "4"
        },
    ]




    return (
        <>{
        projectData.map((item) => {
            return (
                <Grid>
                    <Card>
                        <Image src={item.imageDesktop} alt=""/>
                    </Card>
                    <CardMobile>
                        <ImageMobile src={item.imageMobile} alt=""/>
                    </CardMobile>
                </Grid>
            )
            })
        }</>
    )
}

export default Projects
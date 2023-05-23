import {Grid, Card, Image, CardMobile, ImageMobile} from "../styled/Home.ts"
import MainTitle from "../components/MainTitle.tsx";


type HomeTypes = {
    name: string,
    imageDesktop: string,
    imageMobile: string,
    usedInProject: string[],
    id: string
}





const Projects = () => {

    const projectData: HomeTypes[]= [
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
        <>
            <MainTitle />
            {
            projectData.map((item) => {
                return (
                    <Grid>
                        <Card>
                            <div>
                                {/*<img src={ReactIcon} alt="" style={{width:"50px", height:"50px"}}/>*/}
                                <h2>{item.name}</h2>
                            </div>
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
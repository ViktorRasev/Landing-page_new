import {Grid, Card, Image, CardMobile, ImageMobile} from "../styled/Home.ts"
import MainTitle from "../components/MainTitle.tsx";


type HomeTypes = {
    name: string,
    imageDesktop: string,
    imageMobile: string,
    usedInProject: string[],
    id: string,
    cardColor: string
}





const Projects = () => {

    const projectData: HomeTypes[]= [
        {
            name: "Cookbook",
            imageDesktop: "https://i.imgur.com/kK4VWIw.png",
            imageMobile: "https://i.imgur.com/O1GM1eI.png",
            usedInProject:["html", "css", "javascript", "react", "firebase", "bootstrap"],
            id: "1",
            cardColor: "hsl(171.58deg 44.88% 75.1%)"
        }, {
            name: "Quiz",
            imageDesktop: "https://i.imgur.com/dz3M3zn.png",
            imageMobile: "https://i.imgur.com/yJic1Ah.png",
            usedInProject: ["html", "css", "javascript", "vue"],
            id: "2",
            cardColor: "hsla(22, 62%, 76%, 1)"
        }, {
            name: "Simple Eshop",
            imageDesktop: "https://i.imgur.com/EH0mGho.png",
            imageMobile: "https://i.imgur.com/wRKBAMU.png",
            usedInProject: ["html", "css", "javascript"],
            id: "3",
            cardColor: "hsla(0, 0%, 100%, 1)"
        }, {
            name: "Todo List",
            imageDesktop: "https://i.imgur.com/PJoPycg.png",
            imageMobile: "https://i.imgur.com/Nk0BP34.png",
            usedInProject: ["html", "css", "javascript"],
            id: "4",
            cardColor: "hsla(284, 61%, 74%, 1)"
        },
    ]


    return (
        <>
            <MainTitle />
            {
            projectData.map((item) => {
                return (
                    <Grid>
                        <Card cardColor={item.cardColor}>
                            <div>
                                {/*<img src={ReactIcon} alt="" style={{width:"50px", height:"50px"}}/>*/}
                                <h2>{item.name}</h2>
                            </div>
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
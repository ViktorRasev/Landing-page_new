import {HeaderWrapper, HeaderNav, NavButton} from "../styled/Header";
import {useState, useEffect} from "react";
const Header = () => {
    const [blur, setBlur] = useState<string>("none")
    const [backgroundColor, setBackgroundColor] = useState<string>("none")



    useEffect(() => {
        const handleScroll = () => {
            if(window.pageYOffset > 40) {
                setBlur("blur(10px) saturate(1%)" )
                setBackgroundColor("rgba(0, 56, 36, 0.70)")
            } else{
                setBlur("none")
                setBackgroundColor("none")
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    })

    return (
        <HeaderWrapper>
            <HeaderNav blur={blur} backgroundColor ={backgroundColor}>
                <NavButton to="/">
                     <span>Home</span>
                     <p>/</p>
                </NavButton>
                    <NavButton to="/about">About</NavButton>
                <NavButton>Skills</NavButton>
                <NavButton>Contact</NavButton>
            </HeaderNav>
        </HeaderWrapper>
    )
}

export default Header
import {HeaderWrapper, HeaderNav, NavButton} from "../styled/Header";
import {useState, useEffect} from "react";

const Header = () => {
    const [blur, setBlur] = useState<string>("none")
    const [background, setBackground] = useState<string>("none")




    useEffect(() => {
        const handleScroll = () => {
            if(window.pageYOffset > 40) {
                setBlur("blur(10px) saturate(1%)" )
                setBackground("rgba(0, 56, 36, 0.70)")
            } else{
                setBlur("none")
                setBackground("none")
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    })

    const handleNavLinkClick = () => {
        window.scrollTo(0, 0)
    }

    return (
        <HeaderWrapper>
            <HeaderNav blur={blur} background={background}>
                <NavButton to="/" onClick={handleNavLinkClick}>
                     <span>Home</span>
                     <p>/</p>
                </NavButton>
                    <NavButton to="/about" onClick={handleNavLinkClick}>About</NavButton>
            </HeaderNav>
        </HeaderWrapper>
    )
}

export default Header
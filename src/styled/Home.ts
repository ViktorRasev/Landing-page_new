import styled from "styled-components";

type HomeProps = {
    cardColor: string
}

export const Grid = styled.div`
  font-family: "Cairo", sans-serif;
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 3em;
  justify-content: space-around;
  align-items: center;
  height: 100%;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    
  }
`;

// DESKTOP
export const Image = styled.img`
  width: 100%;
  position: relative;
  left: 5%;
  top: 10%;
  z-index: 3;
  transition: all 0.5s ease-in-out;
`;


// ICONS
export const IconWrapper = styled.div`
position: absolute;

  left: -200%;
  transition: all 0.3s ease-in-out;
  display: flex;
  >* {
    &:last-child {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
  
`
export const CardTitle = styled.div`

  margin-top: 1rem;
 position: relative;
`


export const Icon = styled.img`
  width: 7%;
  background-color: rgba(33, 33, 33, 0.74);
  padding: 10px;
  

`

export const Card = styled.div<HomeProps>`
  border-radius: 24px;
  overflow: hidden;
  height: 80%;
  background: ${({cardColor}) => cardColor};
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    ${Image} {
      transition: all 0.2s ease-in-out;
      top: 15%;
    }
    ${IconWrapper} {
      left: 0;
    }
  }
`;

// MOBILE
export const ImageMobile = styled.img`
  width: 80%;
  position: relative;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  transition: all 0.5s ease-in-out;
`;

export const CardMobile = styled.div<HomeProps>`
  background: ${({cardColor}) => cardColor};
  border-radius: 24px;
  overflow: hidden;
  height: 80%;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    ${ImageMobile} {
      transition: all 0.2s ease-in-out;
      top: 25%;
    }
  }
`;


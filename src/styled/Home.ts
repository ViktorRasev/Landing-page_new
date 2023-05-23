import styled from "styled-components";
export const Grid = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 3em;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

// DESKTOP
export const Image = styled.img`
  width: 100%;
  position: relative;
  left: 5%;
  top: 20%;
  z-index: 3;
  transition: all 0.5s ease-in-out;
`;

export const Card = styled.div`
  border-radius: 24px;
  overflow: hidden;
  height: 80%;
  background: #55399d;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    ${Image} {
      transition: all 0.2s ease-in-out;
      top: 30%;
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

export const CardMobile = styled.div`
  background: #a84a29;
  border-radius: 24px;
  overflow: hidden;
  height: 80%;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    ${ImageMobile} {
      transition: all 0.2s ease-in-out;
      top: 30%;
    }
  }
`;

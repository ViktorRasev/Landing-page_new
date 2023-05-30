import styled from "styled-components";

type HomeProps = {
  index?: number;
};


export const Grid = styled.div<HomeProps>`
  font-family: "Cairo", sans-serif;
  width: 90%;
  margin: 3rem auto;
  display: flex;
  gap: 3rem;
  flex-direction: ${({ index }) => (index % 2 === 0 ? "row" : "row-reverse")};

  @media (max-width: 768px) {
    > * {
      margin-bottom: 3rem;
    }
    margin: 0 auto;
    display: grid;
    gap: 0;
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
  > * {
    &:last-child {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
`;
export const CardTitle = styled.div`
  margin-top: 1rem;
  position: relative;
`;

export const Icon = styled.img`
  width: 7%;
  background-color: rgba(33, 33, 33, 0.74);
  padding: 10px;
`;

export const Card = styled.a<HomeProps>`
  border-radius: 24px;
  overflow: hidden;
  background-image: linear-gradient(to right top, #3ea87c, #4ca977, #59aa71, #65ab6d, #70ac68, #69af72, #62b17d, #5cb387, #47b6a1, #40b6b8, #4fb5c9, #6ab3d3);
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

export const CardMobile = styled.a<HomeProps>`
  background-image: linear-gradient(to left bottom, #3ea87c, #4ca977, #59aa71, #65ab6d, #70ac68, #69af72, #62b17d, #5cb387, #47b6a1, #40b6b8, #4fb5c9, #6ab3d3);
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    ${ImageMobile} {
      transition: all 0.2s ease-in-out;
      top: 25%;
    }
  }
`;

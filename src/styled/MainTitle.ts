import styled from "styled-components"


export const MainTitleWrapper = styled.div`
  padding-top: 8rem;
`

export const Title = styled.div`
  text-align: center;
  font-family: 'Cairo Play', sans-serif;
  color: #22bcb9;
  letter-spacing: -2px;
  font-size: clamp(1.2rem, 4vw, 8rem);
  line-height: -5px;


`

export const Subtitle = styled.div`
  text-align: center;
  font-family: 'Cairo', sans-serif;
  font-weight: 400;
  font-size: clamp(1rem, 2vw, 5rem);
  padding: 3rem .8rem;

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  background: linear-gradient(90deg, #3ea87c, #7fad63, #6ab3d3, #32ef6e);
  background-size: 600% 100%;
  animation: gradientAnimation 10s ease infinite; /* Adjusted animation duration */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #fff; /* Text color to ensure good readability */
`
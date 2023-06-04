import styled from "styled-components"

export const FooterWrapper = styled.div`
  font-family: "Cairo", sans-serif;
  background-color: rgba(44, 69, 62, 0.2);
  height: 11rem;
  border: 1px solid #5e8181;
  position: relative;
`

export const Contact = styled.div`
display: flex;
  flex-direction: column;
  min-width: 30%;
  margin: 0 auto;
  align-items: center;
`;

export const Link = styled.a`
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
`;

export const Social = styled.div`
  margin:1rem auto;
  display: flex;
  justify-content: space-evenly;
  width: 150px;
  gap: 2rem;
`;
export const Icon = styled.span`
  margin-right: 8px;
`

export const CopyrightWrapper = styled.span`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: rgba(255, 255, 255, 0.09) solid 1px;
  color: rgba(255, 255, 255, 0.65);

  > p {
    margin-top: 2.5px;
  }

  &:before {
    content: "©";
    font-size: 1.3rem;
  }
`;

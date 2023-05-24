import styled from "styled-components";
import {NavLink} from "react-router-dom"

type NavProps = {
    blur: string,
    backgroundColor :string
}

export const HeaderWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 4;
  margin-top: 1rem;
  font-weight: 500;
  font-size: 14px;
  @media (max-width: 768px) {
    font-size: 13px;
    margin-top: .5rem;
  }
`;

export const HeaderNav = styled.div<NavProps>`
  font-family: 'Cairo', sans-serif;
  margin: 0 auto ;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  max-width: 310px;
  height: 3rem;
  background: ${({backgroundColor}) => backgroundColor};
  backdrop-filter: ${({blur}) => blur};
  transition: backdrop-filter 0.3s ease-in-out;
  border-radius: 24px;
  
  &:first-child {
    position: relative;
  }
`;

export const NavButton = styled(NavLink)`
  background: transparent;
  border: none;
  cursor: pointer;
  text-decoration: none;
  color: #fff;

  &.active {
    background-color: rgba(194, 194, 194, 0.23);
    border: 1px solid rgba(82, 82, 82, 0.56);
    border-radius: 24px;
    padding: 3px 7px;
  }

  &:first-child {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
    
    p {
      font-size: 10px;
      padding: 0 7px;
      color: rgba(245, 245, 245, 0.82);
      font-weight: 700;
      border: 1.3px solid rgba(255, 255, 255, 0.48);
      border-radius: 3px;

    }
  }
`
import styled from 'styled-components';

export const Button = styled.button`
  position: absolute;
  font-weight: 600;;
  background: white;
  border: 2px solid black;
  padding: 10px;
  border-radius: 7px;
  top: 2rem;
  right: 1rem;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`;

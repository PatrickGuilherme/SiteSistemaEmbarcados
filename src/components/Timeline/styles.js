import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-around;
  margin: 6rem 0;
`
export const YearBox = styled.div`
  width: 25%;
  :hover {
    background-color: #eee;
    cursor: pointer;
  }
`

export const YearText = styled.span`
  font-weight: 700;
  font-size: 1.5rem;
  color: ${props => props.color};
`
import React from 'react'
import styled, { keyframes } from 'styled-components'


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const HeaderSeciton = styled.section`
display: flex;
justify-content: center;
align-items: center;
margin-top: 1rem;
`

const Logo = styled.img`
width: 150px;
height: auto;
animation: ${rotate} 15s linear infinite;
`
const HeaderTitle = styled.div`
text-transform: uppercase;
font-size: 3rem;
margin-left: 5rem;
display: flex;
flex-direction: column;
align-content: center;
align-items: center;
h1{
    color: #b33939;
}
`

const Header = () => {
    return (
        <>
            <HeaderSeciton>
                <Logo src='/assets/img/coronavirus-5107715.svg' alt='covid-tracker' />
                <HeaderTitle>
                    <h1>Covid-19</h1>
                    <h6>Global wise cases of coronavirus</h6>
                </HeaderTitle>
            </HeaderSeciton>
        </>
    )
}

export default Header
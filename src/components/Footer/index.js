import React from 'react'
import styled from 'styled-components'
const FooterSection = styled.footer`
display:flex;
align-items: center;
justify-content: center;
height: 50px;
background-color: #1e272e;
color:#d2dae2;
font-size: 1.5rem;
a{
    color:#ff5e57;
    text-decoration: none;
    margin-left:2rem;
    font-weight: bold;
    :hover{
        color:#ff3f34
    }
}
`
function Footer() {
    return (
        <FooterSection>
            This web site designed by <a href="https://github.com/benguyucel">Can Yücel Bengü</a>
        </FooterSection>
    )
}

export default Footer
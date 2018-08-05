import React from 'react'
import styled from 'styled-components'

const Section = props => (
    <SectionGroup image={props.image}>
        <SectionLogo src={props.logo} />
        <SectionTitleGroup >
            <SectionTitle>
                {props.title}
            </SectionTitle>
            <SectionText>
                {props.text}
            </SectionText>
        </SectionTitleGroup>
    </SectionGroup>
)

export default Section

const SectionGroup = styled.div`
    margin: 100px 0 0;
    background: url(${props => props.image});
    background-size: cover;
    height: 720px;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 20px;
`

const SectionLogo = styled.img`
    width: 128px;
    margin: 0 auto;
    align-self: end;
`

const SectionTitleGroup = styled.div`
    max-width: 800px;
    margin: 0 40px;
    display: grid;
    grid-template-columns: 300px auto;
    grid-template-rows: auto 100%;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`

const SectionTitle = styled.h3`
    color: white;
    font-size: 60px;
    margin: 0;
    line-height: 1.2;
`

const SectionText = styled.p`
    color: white;
`
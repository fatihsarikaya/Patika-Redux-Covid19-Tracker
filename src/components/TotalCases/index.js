import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { getCases } from '../../redux/slice/trackerSlice'
import Moment from 'react-moment';
//Components
import Spinner from '../Spinner'
import { useSpring, animated } from 'react-spring'
const CaseCardContainer = styled.div`
justify-content: space-evenly;
display: flex;
flex-wrap: wrap;
margin-top: 7rem;
min-height: 38rem;
`
const CaseCard = styled.div`
padding: 2rem;
max-width: 280px;
background-color: ${props => props.bgColor || "#706fd3"};
border-radius: 1rem;
text-align: center;
display: flex;
flex-direction: column;
color: #fff;
gap: 4rem;
margin-bottom: 2rem;

`
const Title = styled.div`
font-size: 3rem;
font-weight: bold;
color: #fff;
text-align: center;
`
const Text = styled.p`
font-size: 2.2rem;
margin-top: 2px;
`
const SmallText = styled.span`
    font-size: 1.7rem;
    color: #fff;
`


Moment.globalFormat = 'D MMMM YYYY dddd';
const TotalCases = ({ scroollRef }) => {
    const { cases, status, error, countryName } = useSelector(state => state.cases)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCases())
    }, [])
    if (status === "pending") return <CaseCardContainer> <Spinner /></CaseCardContainer>
    return (
        <CaseCardContainer ref={scroollRef}>
            <CaseCard>
                <Title>Confirmed</Title>
                <Text>{<AnimateIt cases={cases.confirmed?.value} />}</Text>
                <Text>Last Update {<Moment date={cases?.lastUpdate} />}</Text>
                <SmallText>Number of Confirmed Cases of Covid-19 </SmallText>
                <Title>{countryName}</Title>
            </CaseCard>
            <CaseCard bgColor='#33d9b2'>
                <Title>Recovered</Title>
                <Text>{cases.recovered?.value ? <AnimateIt cases={Number(cases.recovered?.value)} /> : 0}</Text>
                <Text>Last Update {<Moment date={cases?.lastUpdate} />}</Text>
                <SmallText>Number of Confirmed Cases of Covid-19 </SmallText>
                <Title>{countryName}</Title>

            </CaseCard>
            <CaseCard bgColor="#ff5252">
                <Title>Deaths</Title>
                <Text>{<AnimateIt cases={cases.deaths?.value} />}</Text>
                <Text>Last Update {<Moment date={cases?.lastUpdate} />}</Text>
                <SmallText>Number of Deaths Cases of Covid-19 </SmallText>
                <Title>{countryName}</Title>

            </CaseCard>
            <CaseCard bgColor="#ffb142">
                <Title>Active</Title>
                <Text><AnimateIt cases={cases.confirmed?.value - cases.deaths?.value} /></Text>
                <Text>Last Update {<Moment date={cases?.lastUpdate} />}</Text>
                <SmallText>Number of Active Cases of Covid-19 Global</SmallText>
                <Title>{countryName}</Title>

            </CaseCard>
        </CaseCardContainer>
    )
}


function AnimateIt({ cases }) {

    const props = useSpring({ val: cases, from: { val: 0 } });
    let values = props.val.to((val) => {
        let variable = Math.floor(val)
        return variable.toLocaleString()
    })
    return (
        <animated.span>
            {values}
        </animated.span>
    );
}

export default TotalCases



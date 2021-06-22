import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'


const Section = styled.section`
width:100%;
heigth:100%;
background-color: bisque;
padding: 4rem 0rem;
`;

const Container = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 800px;

@media screen and (ma
    x-width:768px){
    grid-template-columns: 1fr;
}
`;

const ColumnLeft = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
line-height: 1.4;
padding: 1rem 2rem; 
order: ${({reverse}) => (reverse ? '2' : '1')};

h1{
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem)
}
p{
    margin-bottom: 2rem;
}

`;

const ColumnRight = styled.div`
padding: 1rem 2rem;
order: ${({reverse}) => (reverse ? '1' : '2')};
display: flex;
justify-content: center;
align-items: center;

img{
    width: 600px;
    height: 600px;
    object-fit: cover;
    border-radius: 300px;
    
    @media screen and (max-width: 768px){
        width: 90%;
        height: 90%;
    }
}
`;

const AboutSection = ({
    heading,
    paragraph1,
    paragraph2,
    buttonLabel,
    reverse,
    image
}) => {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <h1>{heading}</h1>
                    <p>{paragraph1}</p>
                    <p>{paragraph2}</p>
                    <Button to="/" primary='true'>{buttonLabel}</Button>
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                    <img src={image} alt='home' />
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default AboutSection

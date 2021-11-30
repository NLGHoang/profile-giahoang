import React from 'react'
import styled from "styled-components";


function ReviewItem({ text }) {
    return (
        <ReviewItemStyled>
            <p>{text}</p>
        </ReviewItemStyled>
    )
}

const ReviewItemStyled = styled.div`
    @media (max-width:560px){
        width: 100%;
        margin: 2rem 0;
        &:not(:first-child){
        margin-left: 0 !important;
    }
    }
    padding: 3rem 2rem;
    border-left: .5rem solid var(--border-color);
    background-color: var(--background-dark-grey);
    position: relative;
    width: 50%;
    &:not(:first-child){
        margin-left: 2rem;
    }
    &::after{
        content: "";
        position: absolute;
        left: 4rem;
        top: 100%;
        border-width: 1.5rem;
        border-style: solid;
        border-color: var(--background-dark-grey) transparent transparent var(--background-dark-grey);
    }
    
    p{
        padding: 1rem 0;
    }
    
`;

export default ReviewItem

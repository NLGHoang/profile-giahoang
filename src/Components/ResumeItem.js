import React from 'react'
import styled from 'styled-components'

function ResumeItem({ year, title, subTitle, text}) {
    return (
        <ResumeItemStyled>
            <div className="leftContent">
                <p>{year}</p>
            </div>
            <div className="rightContent">
                <h5>{title}</h5>
                <h6>{subTitle}</h6>
                <p>{text}</p>
            </div>
        </ResumeItemStyled>
    )
}

const ResumeItemStyled = styled.div`
    @media (max-width:991px){
        .leftContent{
            p{
                font-size: 1.8rem !important;
                margin: 0 1rem;
                padding-right: 5rem;
            }
        }
        .rightContent{
            top: -.5rem !important;
        }
    }
    @media (max-width:450px){
        .rightContent{
            /* padding: 0 0 !important; */
            &::before{
                /* left: -4.5rem !important; */
                display: none;
            }
        }
    }
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-left: 1.5rem;
    &:not(:last-child){
        padding-bottom: 3rem;
    }
    .leftContent{
        flex: 10rem;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            left: -2.8rem;
            top: .6rem;
            height: 1.7rem;
            width: 1.7rem;
            border-radius: 50%;
            border: 2px solid var(--border-color);
            background-color: var(--background-dark-color);
        }
        p{
            color: var(--white-color);
            display: inline-block;
            font-size: 2.7rem;
        }
    }
    .rightContent{
        flex: 1 1 42rem;
        padding-left: 5rem;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 1.5rem;
            height: .5rem;
            width: 2rem;
            background-color: var(--border-color);
        }
        h5{
            font-size: 2.7rem;
            color: var(--primary-color);
        }
        h6{
            padding: 1.2rem 0;
            font-size: 2.3rem;
            color: var(--white-color);
        }
        p{
            font-size: 2.1rem;
            font-weight: 300;
            width: 90%;
        }
    }
`;

export default ResumeItem

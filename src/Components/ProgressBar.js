import React from 'react'
import styled from 'styled-components'

function ProgressBar({ title , width, text}) {
    return (
        <ProgressBarStyled>
            <h6>{title}</h6>
            <div className="progressBar">
                <p>{text}</p>
                <div className="progress">
                    <span style={{width: width}}></span>
                </div>
            </div>
        </ProgressBarStyled>
    )
}
const ProgressBarStyled = styled.div`
    &:not(:last-child){
        margin-bottom: 2rem;
    }
    h6{
        font-size: 2.5rem;
        color: var(--white-color);
    }
    .progressBar{
        display: flex;
        align-items: center;
        p{
            margin-right: 1rem;
            font-size: 1.9rem;
        }
        .progress{
            position: relative;
            width: 100%;
            height: .6rem;
            background-color: var(--border-color);
            span{
                position: absolute;
                background-color: var(--primary-color);
                left: 0;
                bottom: 0;
                height: 100%;
            }
        }
    }
`;

export default ProgressBar

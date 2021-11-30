import React from 'react'
import styled from "styled-components";


function ServiceCard({ image, title, paragraph }) {
    return (
        <ServiceCardStyled>
            <div className="container">
                <img src={image} alt="" />
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
        </ServiceCardStyled>
    )
}

const ServiceCardStyled = styled.div`
    background-color: var(--sidebar-dark-color);
    border-left: .1rem solid var(--border-color);
    border-top: .8rem solid var(--border-color);
    border-right: .1rem solid var(--border-color);
    border-bottom: .1rem solid var(--border-color);
    transition: all .4s ease-in-out;
    &:hover{
        border-top: .8rem solid var(--primary-color);
        transform: translateY(.5rem);
    }
    .container{
        padding: 1.7rem;
        h4{
            font-size: 2.5rem;
            color: var(--white-color);
            padding: 1.8rem 0;
            position: relative;
            &::after{
                content: "";
                position: absolute;
                width: 15%;
                height: .3rem;
                background-color: var(--border-color);
                border-radius: 2rem;
                left: 0;
                bottom: 0;
            }
        }
        p{
            padding: 1rem 0;
        }
    }
`;

export default ServiceCard

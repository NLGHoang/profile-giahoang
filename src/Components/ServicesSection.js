import React from 'react';
import styled from "styled-components";
import { InnerLayout } from '../styles/Layouts';
import Title from './Title';
import ServiceCard from './ServiceCard';
import design from '../image/design.svg';
import intelligence from '../image/intelligence.svg';
import gamedev from '../image/game-dev.svg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'Services'} />
                <div className="services">
                    <ServiceCard 
                        image={design} 
                        title={'Web Design'} 
                        paragraph={'Tạo nên những trang web đáp ứng người dùng'} 
                    />
                    {/*<div className="mid-card">
                        <ServiceCard 
                            image={intelligence} 
                            title={'Web Design'} 
                            paragraph={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, ducimus!'} 
                        />
                    </div>
                    <ServiceCard 
                        image={gamedev} 
                        title={'Web Design'} 
                        paragraph={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, ducimus!'} 
                    />*/}
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`

    @media (max-width:560px){
        .services{
            flex-direction: column;
            .mid-card{
                margin: 2rem 0 !important;
            }
        }
    }
    .services{
        display: flex;
        margin-top: 7rem;
        .mid-card{
            margin: 0 2rem;
        }
    }
`;

export default ServicesSection

import React from 'react'
import styled from "styled-components";
import { InnerLayout } from '../styles/Layouts'
import Title from './Title'
import ReviewItem from './ReviewItem';

function ReviewsSection() {
    return (
        <ReviewsSectionStyled>
            <Title title={'Reviews'} span={'Reviews'} />
            <InnerLayout>
                <div className="reviews">
                    <ReviewItem 
                        text={'Luôn tích cực hướng về phía trước.'} 
                    />
                    <ReviewItem 
                        text={'Thích sự cầu toàn, chỉnh chu về mọi thứ.'} 
                    />
                    <ReviewItem 
                        text={'Chịu khó và có trách nhiệm.'} 
                    />
                </div>
            </InnerLayout>
        </ReviewsSectionStyled>
    )
}

const ReviewsSectionStyled = styled.section`
    @media (max-width:560px){
        .reviews{
            flex-direction: column;
        }
    }
    .reviews{
        display: flex;
    }
`;

export default ReviewsSection

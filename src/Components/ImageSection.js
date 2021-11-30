import React from 'react';
import styled from "styled-components";
import resume from '../image/resume.jpg';
import PrimaryButton from '../Components/PrimaryButton'

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="" />
            </div>
            <div className="right-content">
                <h4>I am <span>Gia Hoang</span></h4>
                <p className="paragraph">
                    Xin chào ! Nếu dám ước mơ tôi sẽ dám thực hiện và hiện tại tôi đang theo đuổi điều đó. Tôi là một người hoà đồng, vui vẻ và luôn chạy lên phía trước. Hiện tại tôi đang là Font-End developer và sau này định hướng sẽ trở thành Full-stack sau 3 năm nữa. Hy vọng tôi sẽ làm được.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name </p>
                        <p>Age </p>
                        <p>Nationally </p>
                        <p>Langueges </p>
                        <p>Location </p>
                        <p>Service </p>
                    </div>
                    <div className="info">
                        <p>: Nguyen Luu Gia Hoang</p>
                        <p>: 23</p>
                        <p>: Viet Nam </p>
                        <p>: VietNamese, English </p>
                        <p>: Ho Chi Minh, Viet Nam </p>
                        <p>: Freelance </p>
                    </div>
                </div>
                <PrimaryButton title={'Download Cv'} />
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
    display: flex;
    margin-top: 8rem;
    @media (max-width:991px) {
        flex-direction: column;
        .right-content{
            h4{
                margin-top: 2rem;
            }
        }
    }
    @media (max-width:450px) {
        .right-content{
            h4{
                font-size: 3.5rem !important;
                span{
                    font-size: 3.5rem !important;
                }
            }
        }
        .about-info{
            p{
                font-size: 2.3rem;
            }
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 90%;
        }
    }
    .right-content{
        h4{
            font-size: 4rem;
            color: var(--white-color);
            span{
                font-size: 4rem;
            }
        }
        .paragraph{
            padding: 2rem 0;
            font-size: 2.2rem;
            font-weight: 300;
        }
        .about-info{
            display: flex;
            font-size: 2.2rem;
            .info-title{
                padding-right: 4rem;
                p{
                    font-weight: 600;
                }
            }
            .info{
                p{
                    font-weight: 300;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;

export default ImageSection;

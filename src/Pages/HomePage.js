import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Particle from '../Components/Particles'
function HomePage() {
    return (
        <HomePageStyled>
            <div className="p-tsparticles-js">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi I am
                    <span> Gia Hoang </span>
                </h1>
                <p>Cảm mơn vì bạn đã ghé thăm. Tôi là Front-End developer còn khá thiếu kinh nghiệm, nhưng luôn cố gắn và nổ lực, mong ước của tôi 3 năm nữa sẽ trở thành Full-stack developer.
                </p>
                <div className="icons">
                    <a href="https://www.facebook.com/nguyenluugiahoang" className="icon i-facebook">
                        <FacebookIcon />
                    </a>
                    <a href="https://github.com/NLGHoang" className="icon i-github">
                        <GitHubIcon />
                    </a>
                    <a href="http://" className="icon i-youtube">
                        <YouTubeIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    @media (max-width:450px){
        .typography{
            span {
                display: block;
            }
        }
    }

    .p-tsparticles-js{
        position: absolute;
        top: 0;
        left: 0;
    }

    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                font-size: 0;
                border: .2rem solid var(--border-color);
                border-radius: 50%;
                cursor: pointer;
                transition: all .4s ease-in-out;
                &:hover{
                    border: .2rem solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                    font-size: 2.5rem;
                }
            }
            .i-youtube{
                &:hover{
                    border: .2rem solid red;
                    color: red;
                }
            }

            .i-github{
                &:hover{
                    border: .2rem solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage

import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';
import PinterestIcon from '@mui/icons-material/Pinterest';

function Menu({ menuItems }) {
    return (
        <MenuStyled>
            {
                menuItems.map((item) => {
                    return (
                        <div className="grid-item" key={item.id}>
                            <div className="portfoliosContent">
                                <div className="portfoliosImage">
                                    <img src={item.image} alt="" />
                                    <ul className="portfoliosLinks">
                                        <li>
                                            <a href={item.link1}>
                                                <GitHubIcon />
                                            </a>
                                        </li>
                                        <li>
                                            <a href={item.link2}>
                                                <PinterestIcon />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <h6>{item.title}</h6>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    )
                })
            }
        </MenuStyled>
    )
}

const MenuStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    @media (max-width:768px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width:450px){
        grid-template-columns: repeat(1, 1fr);
    }
    .portfoliosContent{
        display: block;
        position: relative;
        overflow: hidden;
        background-color: var(--background-dark-grey);
        h6{
            font-size: 2.2rem;
            padding: 1rem 1rem;
            color: var(--white-color);
        }
        p{
            font-size: 2rem;
            padding: 0 1rem;
            padding-bottom: .5rem;
        }
        .portfoliosImage{
            position: relative;
            width: 100%;
            height: 30vh;
            overflow: hidden;
            &:hover > ul{
                right: 1rem;
            }
            &:hover > img{
                opacity: 0.8;
            }
            img{
                position: absolute;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .portfoliosLinks{
                background-color: var(--background-dark-grey);
                position: absolute;
                display: flex;
                flex-direction: column;
                align-items: center;
                right: -8rem;
                top: 1.5rem;
                border-radius: 5rem;
                transition: all .3s ease-in-out;
                li{
                    a{
                        font-size: 0;
                        svg{
                            border: .1rem solid var(--background-dark-grey);
                            padding: .2rem 0;
                            border-radius: 50%;
                            font-size: 3.5rem;
                            margin: .5rem;
                            color: var(--white-color);
                            transition: all .4s ease-in-out;
                            &:hover{
                                color: var(--primary-color);
                                border: .1rem solid var(--primary-color);
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default Menu

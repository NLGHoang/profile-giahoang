import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import avatar from '../image/avatar.jpg'

function Navigation() {
    
    return (
        <NavigationStyled>
            <div className="avatar">
                <img src={avatar} alt="" />
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/" className={({ isActive }) => isActive ? "active": ''}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className={({ isActive }) => isActive ? "active": ''}>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/resume" className={({ isActive }) => isActive ? "active": ''}>Resume</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/portfolios" className={({ isActive }) => isActive ? "active": ''}>Portfolios</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/blogs" className={({ isActive }) => isActive ? "active": ''}>Blogs</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "active": ''}>Contact</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/login" className={({ isActive }) => isActive ? "active": ''}>Login</NavLink>
                </li>
            </ul>
            <footer className="footer">
                <p>@2021 My Portfolio Website</p>
            </footer>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: .1rem solid var(--border-color);
    padding: 0 1rem;

    .avatar{
        width: 100%;
        border-bottom: .1rem solid var(--border-color);
        text-align: center;
        padding: 1.5rem 0;
        &:hover > img{
            transition: all 1.5s;
            transform: rotate(360deg);
        }
        img{
            width:80%;
            border-radius: 50%;
            border: .8rem solid var(--border-color);
            transition: all 0.4s ease-in-out;
            &:hover{
                border: .8rem solid var(--primary-color);
                box-shadow: 0rem 0rem 1rem 0rem var(--primary-color);
            }
        }
    }

    .nav-items{
        width: 100%;
        text-align: center;

        .active{
            background-color: var(--primary-color);
            border-radius: 0 1rem 1rem 0rem;
            transform: translateX(-1rem);
            color: #fff;
            transition: all 0.4s;
            font-weight: bolder;
        }

        li{
            display: block;
            a{
                display: block;
                padding: .9rem 0;
                position: relative;
                z-index: 10;
                text-transform: uppercase;
                font-weight: 600;
                letter-spacing: .1rem;

                &:hover{
                    cursor: pointer;
                }
                &::before{
                    content: "";
                    position: absolute;
                    transform: translateX(-1rem);
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: var(--primary-color);
                    transition: all .4s cubic-bezier(.89,-0.07,.4,.91);
                    z-index: 3;
                    opacity: 0.21;
                }
            }
            a:hover::before{
                width: 100%;
                height: 100%;
                border-radius: 0 1rem 1rem 0rem;
            }
        }
    }

    .footer{
        border-top: .1rem solid var(--border-color);
        width: 100%;
        p{
            font-size: 1.5rem;
            padding: 2rem 0;
            display: block;
            text-align: center;
        }
    }
`;
export default Navigation;

import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import { MainLayout, InnerLayout } from '../styles/Layouts'
import blogs from '../data/blogs'

function BlogsPage() {
    return (
        <MainLayout>
            <BlogsPageStyled>
                    <Title title={'Blogs'} span={'Blogs'} />
                    <InnerLayout className={'blog'}>
                        {blogs.map((blog) => {
                            return (
                                <div key={blog.id} className={'blogContent'}>
                                    <div className="image">
                                        <img src={blog.image} alt="" />
                                    </div>
                                    <div className="title">
                                        <a href={blog.link}>{blog.title}</a>
                                        <span>{blog.month}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </InnerLayout>
            </BlogsPageStyled>
        </MainLayout>
    )
}

const BlogsPageStyled = styled.div`
    .blog{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        @media (max-width:991px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width:450px){
            grid-template-columns: repeat(1, 1fr);
        }
        .blogContent{
            background-color: var(--background-dark-grey);
            padding: 1rem;
            
            .image{
                height: 30rem;
                overflow: hidden;
                padding-bottom: 2rem;
                img{
                    width: 100%;
                    height: 95%;
                    object-fit: cover;
                    transition: all .4s linear;
                    &:hover{
                        cursor: pointer;
                        transform: rotate(3deg) scale(1.1);
                    }
                }
            }
            .title{
                border-bottom: .1rem solid var(--border-color);
                position: relative;
                a{
                    cursor: pointer;
                    font-size: 3rem;
                    color: var(--white-color);
                    transition: all .4s ease-in-out;
                    &:hover{
                        color: var(--primary-color);
                    }
                }
                span{
                    position: absolute;
                    display: inline-block;
                    font-size:1.5rem;
                    color: var(--font-light-color);
                    right: 1rem;
                    top: 1rem;
                }
            }
        }
    }
`;

export default BlogsPage

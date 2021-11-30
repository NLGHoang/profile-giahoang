import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import { InnerLayout } from '../styles/Layouts'
import ProgressBar from './ProgressBar'

function Skills() {
    return (
        <SkillsStyled>
            <Title title={'My Skills'} span={'My Skills'} />
            <InnerLayout>
                <div className="skills">
                    <ProgressBar 
                        title={'HTML5'}
                        width={'90%'}
                        text={'90%'}
                    />
                    <ProgressBar 
                        title={'CSS3'}
                        width={'90%'}
                        text={'90%'}
                    />
                    <ProgressBar 
                        title={'SASS'}
                        width={'90%'}
                        text={'90%'}
                    />
                    <ProgressBar 
                        title={'JAVASCRIPT'}
                        width={'85%'}
                        text={'85%'}
                    />
                    <ProgressBar 
                        title={'REACT JS'}
                        width={'75%'}
                        text={'75%'}
                    />
                    <ProgressBar 
                        title={'REDUX'}
                        width={'10%'}
                        text={'10%'}
                    />
                </div>
            </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 4rem;
    }

    @media (max-width:450px) {
        .skills{
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills

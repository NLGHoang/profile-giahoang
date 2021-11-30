import React from 'react'
import styled from 'styled-components'
import Skills from '../Components/Skills'
import Resume from '../Components/Resume'
import { MainLayout } from '../styles/Layouts'

function ResumePage() {
    return (
        <MainLayout>
            <ResumePageStyled>
                <Skills/>
                <Resume/>
            </ResumePageStyled>
        </MainLayout>
    )
}

const ResumePageStyled = styled.div`

`;

export default ResumePage

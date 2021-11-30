import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import { InnerLayout } from '../styles/Layouts'
import SmallTitle from './SmallTitle'
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import ResumeItem from './ResumeItem'

function Resume() {
    const workIcon = <WorkIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'Resume'}/>
            <InnerLayout>
                <div className="smallTitle">
                    <SmallTitle 
                        icon={workIcon} 
                        title={'Working Experince'}
                    />
                </div>
                <div className="resumeContent">
                    <ResumeItem 
                    year={'2016 - 2021'}
                    title={'Internship'}
                    subTitle={'Dong Kinh Company'}
                    text={'Digitize data'}
                    />
                    <ResumeItem 
                    year={'2019 - 2020'}
                    title={'Parttime'}
                    subTitle={''}
                    text={'Partime Bobapop, Hot and Cold, Delevery Now'}
                    />
                    <ResumeItem 
                        year={'2021 - present'}
                        title={'Information Technology'}
                        subTitle={'Experience'}
                        text={'6+  months of self-study experience'}
                    />
                </div>
                <div className="smallTitle">
                    <SmallTitle 
                        icon={school} 
                        title={'School'}
                    />
                </div>
                <div className="resumeContent">
                    <ResumeItem 
                        year={'2012 - 2016'}
                        title={'Tốt nghiệp cấp 3'}
                        subTitle={'Trường THPT Vĩnh Lộc'}
                        text={'Giai đoạn vui nhất, đẹp nhất của tuổi học sinh. 4 năm học tưởng chừng rất lâu, nhưng vừa chóp mắt đã tốt nghiệp. Đây là giai đoạn định hướng cũng như bước đệm cho tương lai sau này. Thầy cô, bạn bè có thể là những người thân nhất và đáng nhớ nhất trong cả 3 cấp từ tiểu học lên trung học.'}
                    />
                    <ResumeItem 
                        year={'09/2016 - 10/2021'}
                        title={'Information Technology'}
                        subTitle={'Van Hien University'}
                        text={'Bước đầu vào đại học còn nhiều bỡ ngỡ, nó quá khác, mọi thứ đều là bắt đầu mới, tự lực mới, là giai đoạn tự lập cũng như tự giác học tập. Môi trường đại học rèn luyện nhiều kỹ năng sống, kỹ năng tự học vì những kiến thức ở trường là chưa đủ để có được công việc tốt. Mọi thứ dường như phải nhờ vào bản thân!'}
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>
    )
}

const ResumeStyled = styled.section`
    .smallTitle{
        padding-bottom: 3rem;
        &:not(:first-child){
            padding-top: 5rem;
        }
    }
    .resumeContent{
        border-left: .5rem solid var(--border-color);
    }
`;

export default Resume

import React, { useState } from 'react'
import styled from 'styled-components'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Title from '../Components/Title'
import { MainLayout, InnerLayout } from '../styles/Layouts'
import ContactItem from '../Components/ContactItem';
import FormContact from '../Components/FormContact';
import ButtonSubmit from '../Components/ButtonSubmit'

function ContactPage() {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />

    const [values, setValues] = useState({
        username: "",
        email: "",
        subject: "",
        message: "",
    })

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            label: "Enter your name*",
        },
        {
            id: 2,
            name: "email",
            type: "email",
            errorMessage: "Đây phải là địa chỉ email hợp lệ",
            label: "Enter your email*",
            required: true,
        },
        {
            id: 3,
            name: "subject",
            type: "text",
            label: "Enter your subject",
        },
        {
            id: 4,
            name: "message",
            type: "textarea",
            label: "Enter your Message",
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    }
    console.log(values)
    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'}/>
            <ContactPageStyled>
                <InnerLayout className={'contactSection'}>
                    <div className="leftContent">
                        <div className="contactTitle">
                            <h4>Get In Touch</h4>
                        </div>
                        <form 
                            className="form"
                            onSubmit={handleSubmit}
                        >
                            {inputs.map(input => {
                                return (
                                    <FormContact 
                                        key={input.id} 
                                        {...input}
                                        value={values[input.name]}
                                        onChange={onChange}
                                    />
                                )
                            })}
                            <ButtonSubmit title="submit"/>
                        </form>
                    </div>
                    <div className="rightContent">
                        <ContactItem 
                            icon={phone}
                            title={'Phone'}
                            contact1={'0934-848-162'}
                            contact2={'+84-934848162'}
                        />
                        <ContactItem 
                            icon={email}
                            title={'Email'}
                            contact1={'nguyenluugiahoang@gmail.com'}
                            contact2={'hoang.nlgh@gmail.com'}
                        />
                        <ContactItem 
                            icon={location}
                            title={'Address'}
                            contact1={'78 Nguyen Thi Tu, P. BHH B, Q. Binh Tan, TP HCM'}
                            // contact2={'TP HCM'}
                        />
                    </div>
                </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}

const ContactPageStyled = styled.section`
    .contactSection{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        @media (max-width:768px){
            grid-template-columns: repeat(1, 1fr);
            .rightContent{
                margin-top: 2rem;
            }
        }
        .rightContent{
            /* margin-top: 2rem; */
            display: flex;
            flex-direction: column;
        }
        .contactTitle{
            h4{
                color: var(--white-color);
                font-size: 3rem;
                padding: 1rem 0;
            }
        }
        
    }
`;

export default ContactPage

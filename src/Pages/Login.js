import React, { useState } from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import { MainLayout, InnerLayout } from '../styles/Layouts'
import FormInput from '../Components/FormInput'
import ButtonSubmit from '../Components/ButtonSubmit'

function Login() {

    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    });

    const inputs = [
        {
            id:1,
            name: "username",
            type: "text",
            placeholder: "username",
            errorMessage: "Username phải từ 3-16 ký tự và không phải là ký tự đặc biệt !",
            label: "Username",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id:2,
            name: "email",
            type: "email",
            placeholder: "email",
            errorMessage: "Đây phải là địa chỉ email hợp lệ",
            label: "email",
            required: true,
        },
        {
            id:3,
            name: "birthday",
            type: "date",
            placeholder: "birthday",
            label: "birthday",
        },
        {
            id:4,
            name: "password",
            type: "password",
            placeholder: "password",
            errorMessage: "Password phải từ 8-20 ký tự và chứa ít nhất 1 chữ cái, 1 số, 1 ký tự đặc biệt !",
            label: "password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id:5,
            name: "confirmPassword",
            type: "password",
            placeholder: "confirm password",
            errorMessage: "Password không khớp !",
            label: "confirm Password",
            pattern: values.password,
            required: true,
        },
    ]
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value} )
    }

    return (
        <MainLayout>
            <Title title={'Login'} span={'Login'}/>
            <FormInputStyled>
                <InnerLayout className={'contactSection'}>
                    <div className="leftContent">
                        <form 
                            className="form" 
                            onSubmit={handleSubmit}
                        >
                            {inputs.map(input => {
                                return (
                                    <FormInput 
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
                </InnerLayout>
            </FormInputStyled>
        </MainLayout>
    )
}

const FormInputStyled = styled.section`
    .contactSection{
        margin: 0 auto;
        display: flex;
        width: 40rem;
        align-items: center;
        justify-content: center;
        .leftContent{
            background-color: var(--background-dark-grey);
            padding: 2rem 5rem;
            border-radius: 1rem;

            .contactTitle{
                form{
                }
            }
        }
    }
`;

export default Login

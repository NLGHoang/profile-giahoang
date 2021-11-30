import React, { useState } from 'react'
import styled from 'styled-components'


function FormInput(props) {
    const [focused, setFocused] = useState(false);
    const {label,errorMessage, onChange, id, ...inputProps} = props;
    const handleFocus = (e) => {
        setFocused(true);
    }
    return (
        <FromInputStyled>
            <div className="formInput">
                <label>{label}</label>
                <input
                    {...inputProps} 
                    onChange={onChange}
                    onBlur={handleFocus}
                    onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
                    focused={focused.toString()}
                />
                <span>{errorMessage}</span>
            </div>
        </FromInputStyled>
    )
}
const FromInputStyled = styled.div`
    .formInput{
        label{
            font-size: 2.2rem;
            text-transform: capitalize;
        }
        input{
            width: 100%;
            border: .1rem solid var(--border-color);
            color: var(--white-color);
            font-size: 2rem;
            outline: none;
            padding: 1rem 1.5rem;
            border-radius: .2rem;
            margin-top: 1rem;
            background-color: var(--background-dark-color);
            font-weight: 300;
            transition: all .4s ease-in-out;
            position: relative;
            &:not(:last-child){
                margin-bottom: 1rem;
            }
            &:hover{
                border: .1rem solid var(--background-light-color-2);
                box-shadow: 0 0 .6rem 0 var(--background-light-color-2);
            }
            &:focus{
                border: .1rem solid var(--primary-color);
            }
            &:invalid[focused="true"]{
                border: .1rem solid red;
            }
            &:invalid[focused="true"] ~ span{
                display: block;
            }
        }
        input[type="date"]::-webkit-calendar-picker-indicator {
            background-color: var(--border-color);
            border-radius: .3rem;
        }
        span{
            display: none;
            transform: translateY(-.5rem);
            padding-bottom: 1rem;
            color: red;
            font-size: 1.4rem;
            font-weight: 300;
        }
    }
`;

export default FormInput

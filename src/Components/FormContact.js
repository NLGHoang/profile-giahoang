import React, {useState} from 'react'
import styled from 'styled-components'


function FormContact(props) {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps} = props;
    const handleFocus = (e) => {
        setFocused(true);
    }
    return (
        <FormContactStyled>
            <div className="formField">
                <input 
                    {...inputProps}
                    onChange={onChange}
                    onBlur={handleFocus}
                    onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
                    focused={focused.toString()}
                />
                <label>{label}</label>
                <span>{errorMessage}</span>
            </div>
        </FormContactStyled>
    )
}

const FormContactStyled = styled.div`
    .formField{
        /* margin-top: .2rem; */
        position: relative;
        label{
            position: absolute;
            font-size: 1.7rem;
            top: 2.1rem;
            left: 0;
            transition: all .4s ease-in-out;
            opacity: 0.3;
        }
        input{
            margin: 1.5rem 0;
            font-size: 2.5rem;
            outline: none;
            border: .1rem solid var(--border-color);
            background-color: var(--background-dark-color);
            height: 3.5rem;
            padding: 1rem 1.5rem;
            width: 100%;
            text-transform: none;
            color: var(--white-color);
            font-weight: 300;
            transition: all .4s ease-in-out;
            &:focus{
                border-color: var(--primary-color);
            }
            &:invalid[focused="true"]{
                border: .1rem solid red;
            }
            &:invalid[focused="true"] ~ span{
                display: block;
            }
            &:focus ~ label{
                top: -.3rem;
                font-size: 1.5rem;
                color: var(--secondary-color);
                opacity: 1;
            }
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

export default FormContact

import React from 'react'
import styled from 'styled-components'

function ContactItem({icon, title, contact1, contact2}) {
    return (
        <ContactItemStyled>
            <div className="leftContent">
                <p>{icon}</p>
            </div>
            <div className="rightContent">
                <h3>{title}</h3>
                <p>{contact1}</p>
                <p>{contact2}</p>
            </div>
            
        </ContactItemStyled>
    )
}

const ContactItemStyled = styled.div`
    padding: 1.5rem 2rem;
    background-color: var(--background-dark-grey);
    display: flex;
    align-items: center;
    &:not(:last-child){
        margin-bottom: 4rem;
    }
    .leftContent{
        svg{
            border: .1rem solid var(--border-color);
            font-size: 6.5rem;
            margin-right: 2rem;
            padding: 1.5rem;
            transition: all .4s ease-in-out;
            &:hover{
                color: var(--primary-color);
                border: .1rem solid var(--primary-color);
            }
        }
    }
    .rightContent{
        h3{
            font-size: 2.2rem;
            color: var(--primary-color);
            padding-bottom: .2rem;
        }
        p{
            font-size: 1.9rem;
            font-weight: 300;
            padding: .1rem;
        }
    }
`;

export default ContactItem

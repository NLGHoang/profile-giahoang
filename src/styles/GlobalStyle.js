import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    // :root{
    //     --primary-color: #007bff;
    //     --secondary-color: #6c757d;
    //     --background-dark-color: #10121A;
    //     --border-color: #2e344e;
    //     --background-dark-grey: #191D2B;
    //     --background-light-color: #F1F1F1;
    //     --background-light-color-2: rgba(3,127, 255, .3);
    //     --white-color: #FFF;
    //     --font-light-color: #a4acc4;
    //     --font-dark-color: #313131;
    //     --font-dark-color-2: #151515;
    //     --sidebar-dark-color: #191D2B;
    //     --scrollbar-thump-color: #6b6b6b;
    //     --scrollbar-track-color: #383838;
    // }

    .light-theme{
        --primary-color: #007bff;
        --primary-color-light: #057FFF;
        --secondary-color: #6c757d;
        --background-dark-color: #F1F1F1;
        --border-color: #6c757d;
        --background-dark-grey: #aaa79c;
        --background-light-color: #F1F1F1;
        --background-light-color-2: rgba(3,127, 255, .3);
        --white-color: #151515;
        --font-light-color: #313131;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #E4E4E4;
        --scrollbar-thump-color: #6b6b6b;
        --scrollbar-track-color: #383838;
    }
    .dark-theme{
        --primary-color: #007bff;
        --secondary-color: #6c757d;
        --background-dark-color: #10121A;
        --border-color: #2e344e;
        --background-dark-grey: #191D2B;
        --background-light-color: #F1F1F1;
        --background-light-color-2: rgba(3,127, 255, .3);
        --white-color: #FFF;
        --font-light-color: #a4acc4;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #191D2B;
        --scrollbar-thump-color: #6b6b6b;
        --scrollbar-track-color: #383838;
    }

    *{
        font-family: 'Nunito', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }

    html{
        font-size: 62.5%;
        overflow-x: hidden;
    }

    body{
        background-color: var(--background-dark-color);
        color: var(--font-light-color);
        scroll-behavior: smooth;
    }

    body::-webkit-scrollbar{
        width: .8rem;
        background-color: var(--sidebar-dark-color);
    }
    body::-webkit-scrollbar-thumb{
        border-radius: .8rem;
        background-color: var(--background-light-color-2);
    }
    body::-webkit-scrollbar-track{
        background-color: var(--scrollbar-track-color);
    }

    a{
        font-family: inherit;
        color: inherit;
        font-size: 1.8rem;
    }

    h1{
        font-size: 6rem;
        color: var(--white-color);
        span{
            font-size: 6rem;
        }
    }

    span{
        color: var(--primary-color);
    }

    p{
        font-size: 2.5rem;
        color: var(--font-light-color);
    }

    //Floating toggle
    .lightDarkMode{
        position: fixed;
        right: 1rem;
        top: 30%;
        background-color: var(--background-light-color-2);
        width: 9rem;
        height: 3.5rem;
        z-index: 15;
        display: flex;
        align-items: center;
        justify-content:space-evenly;
        border-radius: 2rem;
        .leftContent{
          margin-left: 1rem;
          svg{
            font-size: 2.1rem;
            color: var(--white-color);
          }
        }
    }
    //Toggle menu
    .menuToggle{
        display: none;
        .MuiButtonBase-root{
            position: absolute;
            right: 10%;
            top: 5%;
            z-index: 20;
            color: var(--primary-color);
            svg{
                font-size: 4rem;
            }

        }
    }


    .activeToggle{
        transform: translateX(0);
    }

    // media queries
    @media (max-width: 1200px){
        .menuToggle{
            display: block;
        }
    }

    @media (max-width:991px){
        html{
            font-size: 55%;
        }
        
    }

    @media (max-width:450px){
        html{
            font-size: 50%;
            .menuToggle{
                .MuiButtonBase-root{
                    right: 5%;
                }
            }
        }
    }

`;

export default GlobalStyle;
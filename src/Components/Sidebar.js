import React from 'react';
import styled from 'styled-components'
import Navigation from './Navigation'

function Sidebar({ navToggle }) {
    // console.log(navToggle)

    // const [close, setClose] = useState(false);

    // const navRef = useRef();

    // useEffect(() => {
    //     navRef.current.classList.toggle('activeToggle');
    // },[close])
    
    // const handleClose = (navToggle) => {
    //     if(navRef.current.className){
    //         return navRef.current.classList.toggle('activeToggle')
    // }

    return (
        <SidebarStyled 
            // ref={navRef}
            className={`${navToggle ? 'activeToggle' : ''}`}
            // onClick={() => setClose(!close)}
        >
            <Navigation />
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`
    position: fixed;
    width: 25rem;
    height: 100vh;
    background-color: var(--sidebar-dark-color);
    z-index: 20;
    transition: all .4s ease-in-out;
    @media (max-width: 1200px){
        transform: translateX(-100%);
    }
`;

export default Sidebar
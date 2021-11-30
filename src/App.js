import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Switch from '@mui/material/Switch';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import Sidebar from './Components/Sidebar';
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ResumePage from './Pages/ResumePage'
import PortfoliosPage from './Pages/PortfoliosPage'
import BlogsPage from './Pages/BlogsPage'
import ContactPage from './Pages/ContactPage'
import Login from './Pages/Login'

function App() {

  const [theme, setTheme] = useState('dark-theme');
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  },[theme])

  const themeToggle = () => {
    if(theme === 'light-theme'){
      setTheme('dark-theme');
      setChecked(false);
    }else{
      setTheme('light-theme');
      setChecked(true);
    }
  }

  return (
    <div className="App">
      <Sidebar navToggle={navToggle} />
      <div className="theme">
        <div className="lightDarkMode">
          <div className="leftContent">
            <Brightness4Icon />
          </div>
          <div className="rightContent">
            <Switch  
              value=""
              checked={checked}
              inputProps={{ 'aria-label': '' }}
              size="medium"
              onClick={themeToggle}
            />
          </div>
        </div>
      </div>

      <div className="menuToggle">
        <IconButton 
          onClick={() => setNavToggle(!navToggle)}
        >
          <MenuIcon />
        </IconButton>
      </div>

      <MainContentStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/resume" element={<ResumePage />}/>
          <Route path="/portfolios" element={<PortfoliosPage />}/>
          <Route path="/blogs" element={<BlogsPage />}/>
          <Route path="/contact" element={<ContactPage />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>

      </MainContentStyled>
    </div>
  );
}
const MainContentStyled = styled.main`
  position: relative;
  margin-left: 25rem;
  min-height: 100vh;
  @media (max-width: 1200px){
    margin-left: 0;
  }

  @media (max-width:991px){
    .lines{
      .line-4{
        display: none;
      }
    }
  }

  @media (max-width:450px){
    .lines{
      .line-3{
        display: none;
      }
    }
  }

  .lines{
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    z-index: -1;
    opacity: .7;

    .line-1, .line-2, .line-3, .line-4{
      width: .1rem;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;

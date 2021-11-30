import React, { useState } from 'react'
// import styled from 'styled-components'
import Title from '../Components/Title'
import { MainLayout, InnerLayout } from '../styles/Layouts'
import portfolios from '../data/portfolios'
import Menu from '../Components/Menu'
import Button from '../Components/Button'

const allButtons = ['All', ...new Set(portfolios.map(item => item.category))]

function PortfoliosPage() {

    const [menuItems, setMenuItems] = useState(portfolios);
    const [button, setButton] = useState(allButtons);

    const filter = (button) => {

        if(button === 'All'){
            setMenuItems(portfolios);
            return;
        }

        const filteredData = portfolios.filter(item => item.category === button);
        setMenuItems(filteredData);
    }

    return (
        <MainLayout>
            <Title title={'Portfolios'} span={'Portfolios'} />
            <InnerLayout>
                <Button filter={filter} button={button} />
                <Menu menuItems={menuItems} />
            </InnerLayout>
        </MainLayout>
    )
}

export default PortfoliosPage

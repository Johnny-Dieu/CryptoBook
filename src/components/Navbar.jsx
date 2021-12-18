import React, { useState, useEffect } from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import  { NavLink, Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, MenuOutlined, FundOutlined } from '@ant-design/icons' 

import icon  from '../images/crypto.png'

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);

    useEffect(() =>{
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if(screenSize <= 900){
            setActiveMenu(false);
        }
        else{
            setActiveMenu(true);
        }
    }, [screenSize])

    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size={70}/>
                <Typography.Title level={2} className="logo">
                    <Link to="/">CryptoBook</Link>
                </Typography.Title>
            </div>
                <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
                    <MenuOutlined/>
                </Button>
            {activeMenu &&(
                <Menu selectedKeys="/" style={{color: "red"}}>
                <Menu.Item icon={<HomeOutlined className="menu-item-icon"/>} key="1">
                    <NavLink to="/" style={{ color: '#FFF' }} onClick={() => setActiveMenu(!activeMenu)}>Home</NavLink>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined className="menu-item-icon"/>} key="2">
                    <NavLink to="/cryptocurrencies" style={{ color: '#FFF' }} onClick={() => setActiveMenu(!activeMenu)}>Crypto Currencies</NavLink>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined className="menu-item-icon"/>} key="3">
                    <NavLink to="/exchanges" style={{ color: '#FFF' }} onClick={() => setActiveMenu(!activeMenu)}>Exchanges</NavLink>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined className="menu-item-icon"/>} key="4">
                    <NavLink to="/news" style={{ color: '#FFF' }} onClick={() => setActiveMenu(!activeMenu)}>News</NavLink>
                </Menu.Item>
            </Menu>
            )}
        </div>
    )
}

export default Navbar

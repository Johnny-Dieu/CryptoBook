import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Exchanges, Homepage, CryptoCurrencies, News, CryptoDetails }  from './components'
import './app.css'
const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar/>
            </div>
            <div className="main">
                <Layout>
                    <div class="routes">
                        <Switch>
                            <Route exact path="/">
                                <Homepage/>
                            </Route>
                            <Route exact path="/exchanges">
                                <Exchanges/>
                            </Route>
                            <Route exact path="/cryptocurrencies">
                                <CryptoCurrencies/>
                            </Route>
                            <Route exact path="/crypto/:coinId">
                                <CryptoDetails/>
                            </Route>
                            <Route exact path="/news">
                                <News/>
                            </Route>
                        </Switch>
                    </div>
                </Layout>
                <div className="footer">
                <Typography.Title level={5} style={{color:"white", textAlign:"center"}}>
                    CryptoBook<br/>
                    All rights reserved
                </Typography.Title>
                <Space>
                    <Link to="/" className="footer-link">Home</Link>
                    <Link to="/exchanges" className="footer-link">Exchanges</Link>
                    <Link to="/news" className="footer-link">News</Link>
                </Space>
            </div>
            </div>
        </div>
    );
}

export default App

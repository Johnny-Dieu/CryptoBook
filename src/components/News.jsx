import React, { useState } from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi'
import Loader from './Loader';

const { Text, Title } = Typography;
const { Option } = Select;
const { defaultImage } = 'https://www.reuters.com/resizer/G1--GZjhoLr2M2IZbF7_SIdGN1I=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JW4FQGBO4FLVBC6Z2PN63XTY3I.jpg'
const News = ({ simplified }) => {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const { data } = useGetCryptosQuery(100);
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: newsCategory, count: simplified ? 6: 12 });

    if(!cryptoNews?.value) return <Loader/>;
    return (
        <Row gutter={[ 24, 24 ]}>
            <Col span={24}>
                <Select showSearch className="select-news" placeholder="Select a Crypto" optionFilterProp="children" onChange={(value) => setNewsCategory(value)} filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                <Option value="Cryptocurrency">CryptoCurrency</Option>
                {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
                </Select>
            </Col>
            {cryptoNews.value.map((news, i)=> (
                <Col xs={24} sm={12} lg={8} key={i}>
                    <Card hoverable className="news-card">
                        <a href={news.url} target="_blank" rel="noreferrer">
                            <div className="news-image-container">
                                <Title className="news-title" level={4}>{news.name}</Title>
                                <img style={{ maxWidth: '200px', maxHeight: '100px'}}src={news?.image?.thumbnail?.contentUrl || defaultImage} alt="news"/>
                            </div>
                            <p>
                                {news.description > 100 ? `${news.description.substring(0,100)}...` : news.description}
                            </p>
                            <div className="provider-container">
                                <div>
                                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || defaultImage} alt="news"/>
                                    <Text className="provider-name">{news.provider[0]?.name}</Text>
                                </div>
                                <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default News

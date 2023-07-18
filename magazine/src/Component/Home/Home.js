import { Container, Carousel, Row, Col, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import Trending from "./Trending";
import Community from "./LPSide";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Home = () => {

    const [id, setid] = useState(0);
    const [post, setpost] = useState([]);
    const [carousel, setcarousel] = useState([]);


    //Call API: /posts
    useEffect(() => {
        fetch('http://localhost:9999/posts')
            .then(resp => resp.json())
            .then(data => {
                setpost(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    //Call API: /Carousel
    useEffect(() => {
        fetch('http://localhost:9999/carousel')
            .then(resp => resp.json())
            .then(data => {
                setcarousel(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <Container fluid>
            <Row>
                <Col xs={12} md={12} lg={12}>
                    <Carousel style={{ margin: '0 20px 0 20px' }}>
                        {

                            carousel.map(ca => {
                                const pst = post.find(p => p.id === ca.id);
                                const thumbnail = pst ? pst.thumbnail : '';
                                const title = pst ? pst.title : '';
                                const describe = pst ? pst.describe : '';

                                return (

                                    <Carousel.Item key={ca.carousel_id}>
                                        <Link to={'/post/detail/' + ca.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <Image
                                                className="d-block w-100"
                                                src={thumbnail}
                                                alt="First slide"
                                            />

                                            <Carousel.Caption style={{ backgroundColor: 'black', opacity: '0.8', display: 'block' }}>
                                                <h3>{title}</h3>
                                                <p>{describe}</p>
                                            </Carousel.Caption>
                                        </Link>
                                    </Carousel.Item>

                                );
                            })}
                    </Carousel>
                </Col>
            </Row>
            <Row>
                <Col lg={9}>
                    <Trending />
                </Col>

                <Col lg={3}>
                    <Community />
                </Col>
            </Row>
        </Container >
    );
}

export default Home;
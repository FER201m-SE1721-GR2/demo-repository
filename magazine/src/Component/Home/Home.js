import { Container, Carousel, Row, Col, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import Trending from "./Trending";
import Community from "./LPSide";
import News from "./News";


const Home = () => {

    const [post_id, setpost_id] = useState(0);
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
                                const pst = post.find(p => p.post_id === ca.post_id);
                                const thumbnail = pst ? pst.thumbnail : '';
                                const title = pst ? pst.title:'';
                                const body = pst ? pst.body:'';

                                return (
                                    <Carousel.Item key={ca.carousel_id}>
                                        <Image
                                            className="d-block w-100"
                                            src={thumbnail}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <h3>{title}</h3>
                                            <p>{body}</p>
                                        </Carousel.Caption>
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
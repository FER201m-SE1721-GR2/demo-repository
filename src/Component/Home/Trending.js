import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
import { Row, Col, Image, Card, Button } from "react-bootstrap";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Trending = () => {

    const [post, setpost] = useState([]);


    const settings = {
        slidesToShow: 1,
        speed: 500,
        rows: 2,
        slidesPerRow: 1
    };

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



    return (
        <>
            <section className='trending'>
                <div className="heading">
                    <h6>Trending &nbsp; <FontAwesomeIcon icon={faFire} size="lg" style={{ color: "#f9291a", }} /></h6>
                </div>
            </section>

            <Row>
                {
                    post.map(p => (

                        <Col lg={6} className="card-wrapper">
                            <Card className="custom-card" style={{ marginTop: '20px' }} key={p.post_id}>
                                <Card.Img variant="top" src={p.img} />
                                <Card.Body>
                                    <Card.Title>
                                        {p.title}
                                    </Card.Title>
                                    <Card.Text className="text">
                                        {p.body.length > 50 ? `${p.body.substring(0, 50)}...` : p.body}
                                    </Card.Text>
                                    <p className="incard-fontsize"><FontAwesomeIcon icon={faCalendarDays} style={{ color: "#737882", }} /> {p.date} by {p.author}</p>
                                </Card.Body>
                            </Card>
                        </Col>

                    ))
                }

            </Row >

        </>
    );
}

export default Trending;
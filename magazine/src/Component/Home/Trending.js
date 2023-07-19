import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
import { Row, Col, Image, Card, Button } from "react-bootstrap";
import { useParams, Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Trending = () => {

    const [post, setpost] = useState([]);
    const [trend, settrend] = useState([]);


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

    //Call API: /trending
    useEffect(() => {
        fetch('http://localhost:9999/trending')
            .then(resp => resp.json())
            .then(data => {
                settrend(data);
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
                    trend.map(tn => {
                        const pst = post.find(p => p.id === tn.id);
                        const thumbnail = pst ? pst.thumbnail : '';
                        const title = pst ? pst.title : '';
                        const describe = pst ? pst.describe : '';
                        const date = pst ? pst.date : '';
                        const author = pst ? pst.author : '';

                        return (


                            <Col lg={6} className="card-wrapper">
                                <Link to={'/post/detail/' + tn.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <Card className="custom-card" style={{ marginTop: '20px' }} key={tn.id}>
                                        <Card.Img variant="top" src={thumbnail} />
                                        <Card.Body>
                                            <Card.Title>
                                                {title}
                                            </Card.Title>
                                            <Card.Text className="text">
                                                {describe.length > 50 ? `${describe.substring(0, 50)}...` : describe}
                                            </Card.Text>
                                            <p className="incard-fontsize">Được viết bởi {author}  <FontAwesomeIcon icon={faCalendarDays} style={{ color: "#737882", }} /> {date}</p>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>

                        );
                    })}

            </Row >

        </>
    );
}

export default Trending;
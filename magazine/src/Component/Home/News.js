import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useState, useEffect } from "react";




const News = () => {

    const [post, setpost] = useState([]);
    const [news, setnews] = useState([]);


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


    //Call API: /news
    useEffect(() => {
        fetch('http://localhost:9999/news')
            .then(resp => resp.json())
            .then(data => {
                setnews(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <>
            <section className='news'>
                <div className="heading">
                    <h6>News &nbsp; <FontAwesomeIcon icon={faNewspaper} style={{ color: "#ededed", }} /></h6>
                </div>

                <Container>
                    {
                        news.map(n => {
                            const pst = post.find(p => p.post_id === n.post_id);
                            const img = pst ? pst.img : '';
                            const title = pst ? pst.title : '';
                            const body = pst ? pst.body : '';
                            const date = pst ? pst.date : '';
                            const author = pst ? pst.author : '';

                            return (
                                <Row className="card-wrapper" key={n.news_id} style={{padding:'10px 0 10px 0'}}>
                                    <Card>
                                        <Row style={{padding:'10px 0 10px 0'}}>
                                            <Col xs={3} md={3} lg={3}>
                                                <Card.Img className='news-img' src={img} alt='' />
                                            </Col>
                                            <Col xs={9} md={9} lg={9}>
                                                <Row>
                                                    <h6 className='news-logo'>News</h6>
                                                </Row>
                                                <Row>
                                                    <h4>{title}</h4>
                                                </Row>
                                                <Row>
                                                    <p>{body.length > 50 ? `${body.substring(0, 50)}...` : body}</p>
                                                </Row>
                                                <Row>
                                                    <p className="incard-fontsize">By {author} &nbsp; <FontAwesomeIcon icon={faCalendarDays} style={{ color: "#737882", }} />&nbsp; {date} </p>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Row>
                            );
                        })}
                </Container>
            </section>
        </>
    );
}

export default News;
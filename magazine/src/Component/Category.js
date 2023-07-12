import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { Card, Col, Container, Image, Pagination, Row } from 'react-bootstrap';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const Category = () => {

    const [post, setpost] = useState([]);
    const [category, setcategory] = useState([]);
    const [category_id, setcategory_id] = useState([]);
    const { pid } = useParams();


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
    }, []);


    //Call API: /category
    useEffect(() => {
        fetch('http://localhost:9999/category')
            .then(resp => resp.json())
            .then(data => {
                setcategory(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <>
            <section className='news'>
                <Container>
                    <div className="heading">
                        <h6>News &nbsp; <FontAwesomeIcon icon={faNewspaper} style={{ color: "#ededed", }} /></h6>
                    </div>
                    {
                        post.map(p => (
                            <Row className="card-wrapper" key={p.category_id} style={{ padding: '10px 0 10px 0' }}>
                                <Card>
                                    <Row style={{ padding: '10px 0 10px 0' }}>
                                        <Col xs={3} md={3} lg={3}>
                                            <Card.Img className='news-img' src={p.thumbnail} alt='' />
                                        </Col>
                                        <Col xs={9} md={9} lg={9}>

                                            < Row >
                                                {category.map((c) => (<h6 className='news-logo' style={{marginLeft:'20px'}}>{c.category_id === p.category_id ? c.category_name:''}</h6>))}
                                            </Row>

                                            <Row>
                                                <h4>{p.title}</h4>
                                            </Row>
                                            <Row>
                                                <p>{p.body.length > 50 ? `${p.body.substring(0, 50)}...` : p.body}</p>
                                            </Row>
                                            <Row>
                                                <p className="incard-fontsize">By {p.author} &nbsp; <FontAwesomeIcon icon={faCalendarDays} style={{ color: "#737882", }} />&nbsp; {p.date} </p>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card>
                            </Row>
                        ))}
                </Container >
            </section >
        </>
    );
}

export default Category;
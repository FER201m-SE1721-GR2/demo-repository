import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Post = () => {
    const [post, setpost] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 4;
    const lastIndex = currentPage * recordsPerPage;
    const fistIndex = lastIndex - recordsPerPage;
    const records = post.slice(fistIndex, lastIndex);
    const npage = Math.ceil(post.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

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
        <section className='news'>
            <Container>
                <div className="heading">
                    <h6>New &nbsp; <FontAwesomeIcon icon={faNewspaper} style={{ color: "#ededed", }} /></h6>
                </div>
                {
                    records.map(p => (
                        <Row className="card-wrapper" key={p.id} style={{ padding: '10px 0 10px 0' }}>

                            <Link to={'/post/detail/'+p.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Card>
                                    <Row style={{ padding: '10px 0 10px 0' }}>
                                        <Col xs={3} md={3} lg={3}>
                                            <Card.Img className='news-img' src={p.thumbnail} alt='' />
                                        </Col>
                                        <Col xs={9} md={9} lg={9}>
                                            <Row>
                                                <h6 className='news-logo'>Post</h6>
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
                            </Link>
                        </Row>

                    ))}
            </Container>
            <Row className="custom-pagination">
                <ul className='pagination'>
                    <li className='page-item'>
                        <a className='page-link' onClick={prePage}>Prev</a>
                    </li>
                    {
                        numbers.map((n, i) => (
                            <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                                <a className='page-link' onClick={() => changeCPage(n)}>{n}</a>

                            </li>
                        ))
                    }
                    <li className='page-item'>
                        <a className='page-link' onClick={nextPage}>Next</a>
                    </li>
                </ul>
            </Row>
        </section>
    );
    function prePage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    function changeCPage(id) {
        setCurrentPage(id)
    }

    function nextPage() {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }

    }
}

export default Post;
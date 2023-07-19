import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';




const New = () => {

    const [post, setpost] = useState([]);
    const [news, setnews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 4;
    const lastIndex = currentPage * recordsPerPage;
    const fistIndex = lastIndex - recordsPerPage;
    const records = news.slice(fistIndex, lastIndex);
    const npage = Math.ceil(news.length / recordsPerPage);
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
                <Container>
                    <div className="heading">
                        <h6 style={{fontWeight:'boldẻr'}}>Mới &nbsp; <FontAwesomeIcon icon={faNewspaper} style={{ color: "#ededed", }} /></h6>
                    </div>
                    {
                        records.map(n => {

                            const pst = post.find(p => p.id === n.id);
                            const thumbnail = pst ? pst.thumbnail : '';
                            const title = pst ? pst.title : '';
                            const describe = pst ? pst.describe : '';
                            const date = pst ? pst.date : '';
                            const author = pst ? pst.author : '';
                            
                            return (
                                <Row className="card-wrapper" key={n.news_id} style={{ padding: '10px 0 10px 0' }}>
                                    
                                    <Link to={'/post/detail/' + n.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <Card>
                                            <Row style={{ padding: '10px 0 10px 0' }}>
                                                <Col xs={3} md={3} lg={3}>
                                                    <Card.Img className='news-img' src={thumbnail} alt='' />
                                                </Col>
                                                <Col xs={9} md={9} lg={9}>
                                                    <Row>
                                                        <h6 className='news-logo' style={{fontWeight:'boldẻr'}}>Mới</h6>
                                                    </Row>
                                                    <Row>
                                                        <Link to={'/post/detail/' + n.id} style={{ color: 'inherit' }}><h4>{title}</h4></Link>
                                                    </Row>
                                                    <Row>
                                                        <p>{describe.length > 50 ? `${describe.substring(0, 50)}...` : describe}</p>
                                                    </Row>
                                                    <Row>
                                                        <p className="incard-fontsize">Được viết bởi {author} &nbsp; <FontAwesomeIcon icon={faCalendarDays} style={{ color: "#737882", }} />&nbsp; {date} </p>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Link>
                                </Row>
                            );
                        })}
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
        </>
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

export default New;
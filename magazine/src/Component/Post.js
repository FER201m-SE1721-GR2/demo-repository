import { Button, Col, Container, Form, FormGroup, Row, Table } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faCalendarDays, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Post = () => {
    const [post, setpost] = useState([]);
    const [title, setTitle] = useState("");
    const [categories, setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 4;
    const lastIndex = currentPage * recordsPerPage;
    const fistIndex = lastIndex - recordsPerPage;
    const posts = post.slice(fistIndex, lastIndex);
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

    useEffect(() => {
        fetch('http://localhost:9999/category')
            .then(resp => resp.json())
            .then(data => {
                setCategories(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    
    const handleSearch = () => {
        fetch('http://localhost:9999/posts')
        .then(resp => resp.json())
        .then(data => {
            if(title.length > 0)
                setpost(data.filter(p => typeof p.title === 'string' && p.title.toLowerCase().includes(title.toLowerCase())));
            else
                setpost(data);
        })
    }
    
    return (
        <>
        <section className="news">
        <Container>
            <div className="searchbar">
                <FormGroup>
                <Row>
                    <Col xs={8}></Col>
                    <Col xs={4}>
                        <input type={'text'} value={title} onChange={e => setTitle(e.target.value)} />
                        <Link style={{fontSize:'15px'}} onClick={handleSearch}><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon></Link>
                    </Col>
                </Row>
                
                </FormGroup>
                
            </div>
            <ol className="postlist" type="none">
                {
                    posts.map(p => (
                        <li key={p.post_id} className="listposts">
                            <Link to={'/post/detail/'+p.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <article className="articleclass row">
                                    <div className="articleimage col-5">
                                        <img src={p.thumbnail}/>
                                    </div>
                                    <div className="articlecontent col-7">
                                        <h4>{p.title.length > 50 ? `${p.title.substring(0, 50)}...` : p.title}</h4>
                                        <br/>
                                        <Row style={{paddingLeft:'15px'}}><h6 className='news-logo'>{categories.map(c => c.category_id === p.category_id ? c.category_name : '')}</h6></Row>
                                        <br/>
                                        <p>{p.describe.length > 100 ? `${p.describe.substring(0, 100)}...` : p.describe}</p>
                                        <br/>
                                        <p className="incard-fontsize">By {p.author} &nbsp; <FontAwesomeIcon icon={faCalendarDays} style={{ color: "#737882", }} />&nbsp; {p.date} </p>
                                    </div>
                                </article>
                            </Link>
                        </li>
                    ))
                }
            </ol>

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

export default Post;
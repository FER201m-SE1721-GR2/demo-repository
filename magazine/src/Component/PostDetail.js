import { useEffect, useState } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const PostDetail = () => {

    const { pid } = useParams();
    const [p, setPost] = useState({});
    const [category, setcategory] = useState([]);


    useEffect(() => {
        fetch('http://localhost:9999/posts/' + pid).then((res) => {
            return res.json();
        }).then((resp) => {
            setPost(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [pid]);

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

    const renderParagraphs = (text) => {
        const paragraphs = text?.split("\n") || [];
        return paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
        ));
    };

    return (
        <Container>
            <Card style={{marginTop:'60px'}}>
                <Col xs={12} style={{ marginTop: '50px' }}>
                    <Row style={{ justifyContent: 'left', display: 'block' }}>
                        <Col >
                            <h2 className="title-detail">{p.title}</h2>

                            <p style={{ marginBottom:'60px' }}>
                                <span className="author-detail-1">Được viết bởi </span><span className="author-detail-2">{p.author}</span>
                                <span className="sub-information">&nbsp;|&nbsp;Thuộc thể loại {category.map(c => c.category_id === p.category_id ? c.category_name : '')}&nbsp;|&nbsp; {p.date}</span>
                            </p>
                            <div className='quote' style={{ marginBottom:'90px' }}>
                                <FontAwesomeIcon icon={faQuoteLeft} style={{ color: "#bd0f0f", }} />
                                <p className="describe-detail">{p.describe}</p>
                                <FontAwesomeIcon icon={faQuoteRight} style={{ color: "#bd0f0f", marginLeft: '1040px' }} />
                            </div>
                            <Image className="coverimg" src={p.thumbnail} style={{ marginTop: '20px' }}></Image>
                            <p className="paragraph-detail" style={{ marginTop: '50px', marginBottom:'50px' }}>{renderParagraphs(p.paragraph)}</p>
                        </Col>

                    </Row>
                </Col>
            </Card>
        </Container>
    );
}

export default PostDetail;
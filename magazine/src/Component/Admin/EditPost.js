import { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
    const { pid } = useParams();
    const [id, setId] = useState(0);
    const [title, setTitle] = useState('');
    const [category_id, setCategory__id] = useState(0);
    const [date, setDate] = useState('');
    const [author, setAuthor] = useState('');
    const [describe, setDescriber] = useState('');
    const [paragraph, setParagraph] = useState('');
    const [thumbnail, setThumbnail] = useState('');

    useEffect(() => {
        fetch('http://localhost:9999/posts/' + pid).then(resp => resp.json()).then(data => {
            setId(data.id);
            setCategory__id(data.category_id);
            setDate(data.date);
            setAuthor(data.author);
            setDescriber(data.describe);
            setParagraph(data.paragraph);
            setThumbnail(data.thumbnail);
            setTitle(data.title);
        })
            .catch(err => {
                console.log(err.message);
            })
    }, [pid]);



    const navigate = useNavigate();
    const handleSubmit = e => {
        e.preventDefault();
        const post = { id, title, category_id, date, author, describe, paragraph, thumbnail }
        console.log(post);
        if (title.length === 0 || describe.length === 0 || paragraph.length === 0 || category_id > 100) {
            alert("Please fill all fields.")
        }
        else {
            fetch('http://localhost:9999/posts/' + pid, {
                method: 'PUT',
                headers: { 'Content-Type': 'Application/Json', 'Charset': "UTF8" },
                body: JSON.stringify(post)
            }).then(() => {
                alert("Add successful");
                navigate('/');
            })
                .catch(err => {
                    console.loog(err.message);
                })
        }
    }

    return (
        <Row style={{ border: '1px solid red' }}>
            <Col>
                <Row>
                    <Col>
                        <h2 style={{ textAlign: 'center' }}>Edit post</h2>
                    </Col>
                </Row>
                <Row>
                    <Col className="offset-2 col-md-8">
                        <Form onSubmit={e => handleSubmit(e)}>
                            <Row style={{ marginBottom: '15px' }}>
                                <Form.Group className="col-md-6">
                                    <label>Id</label>
                                    <Form.Control value={id} disabled />
                                </Form.Group>
                                <Form.Group className="col-md-6">
                                    <label>tiêu đề<span style={{ color: 'red' }}>*</span></label>
                                    <Form.Control value={title} onChange={e => setTitle(e.target.value)} />
                                    {title.length === 0 && <label style={{ color: 'red' }}>Xin hãy nhập tiêu đề</label>}
                                </Form.Group>
                            </Row>
                            <Row style={{ marginBottom: '15px' }}>
                                <Form.Group className="col-md-6">
                                    <label>tác giả<span style={{ color: 'red' }}>*</span></label>
                                    <Form.Control value={title} onChange={e => setAuthor(e.target.value)} />
                                    {author.length === 0 && <label style={{ color: 'red' }}>Xin hãy nhập tác giả</label>}
                                </Form.Group>
                                <Form.Group className="col-md-6">
                                    <label>Xin nhập mã số thể loại<span style={{ color: 'red' }}>*</span></label>
                                    <Form.Control value={category_id} onChange={e => setCategory__id(parseFloat(e.target.value))} />
                                    {(category_id < 1 || category_id > 6) && <label style={{ color: 'red' }}>Khoảng từ 1 đến 6</label>}
                                </Form.Group>
                            </Row>


                            <Row style={{ marginBottom: '15px' }}>
                                <Form.Group className="col-md-6">
                                    <label>Ngày Đăng<span style={{ color: 'red' }}>*</span></label>
                                    <Form.Control value={date} onChange={e => setDate(e.target.value)} />
                                    {date.length === 0 && <label style={{ color: 'red' }}>Xin hãy nhập ngày tháng</label>}
                                </Form.Group>
                                <Form.Group className="col-md-6">
                                    <label>Miêu tả<span style={{ color: 'red' }}>*</span></label>
                                    <Form.Control value={describe} onChange={e => setDescriber(e.target.value)} />
                                    {date.length === 0 && <label style={{ color: 'red' }}>Xin hãy nhập miêu tả</label>}
                                </Form.Group>
                            </Row>
                            <Row style={{ marginBottom: '15px' }}>
                                <Form.Group className="col-md-6">
                                    <label>Ảnh<span style={{ color: 'red' }}>*</span></label>
                                    <Form.Control value={thumbnail} onChange={e => setThumbnail(e.target.value)} />
                                    {date.length === 0 && <label style={{ color: 'red' }}>Xin hãy nhập ảnh</label>}
                                </Form.Group>
                            </Row>
                            <Row>
                            <Form.Group className="col-md-12">
                                    <label>Xin nhập đoạn văn<span style={{ color: 'red' }}>*</span></label>
                                    <textarea style={{display:'block',width:'900px',height:'300px',marginBottom: '55px'}} value={paragraph} onChange={e => setParagraph(e.target.value)} />
                                    {date.length === 0 && <label style={{ color: 'red' }}>Xin hãy nhập đoạn văn</label>}
                                </Form.Group>
                            </Row>

                            <Row style={{ marginBottom: '15px', textAlign: 'center'}}>
                                <Form.Group className="col-md-12">
                                    <Button type="submit" className="btn btn-success">Lưu</Button> &nbsp;
                                    <Link to={'/post/management'} className="btn btn-danger">Quay về</Link>
                                </Form.Group>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default EditPost;

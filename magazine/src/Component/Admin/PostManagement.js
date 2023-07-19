import { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PostManagement = () => {
    const [post, setPost] = useState([]);
    const [title, setTitle] = useState("");
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
                setPost(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    //Delete event
    const handleDelete = (id) => {
        if (window.confirm("Do you want to remove?")) {
            fetch('http://localhost:9999/post/' + id, {
                method: "DELETE"
            })
                .then(() => {
                    //Reloaded page
                    alert("Delete successful");
                    window.location.reload();
                })
                .catch(err => {
                    console.log(err.message);
                })
        }
    }


    const handleSearch = () => {
        fetch('http://localhost:9999/posts')
            .then(resp => resp.json())
            .then(data => {
                if (title.length > 0)
                    setPost(data.filter(p => typeof p.title === 'string' && p.title.toLowerCase().includes(title.toLowerCase())));
                else
                    setPost(data);
            })
    }


    return (
        <Container>
            <Row>
                <Col>
                    <h2 style={{ textAlign: "center", marginTop: "60px" }}>Danh sách bài đăng</h2>
                </Col>
            </Row>
            <Row>
                <Col style={{ textAlign: "left" }}>
                    <Link to={'/post/create'}>Tạo một bài đăng</Link>
                </Col>
                <Col style={{ textAlign: "right", marginBottom: '30px' }}>
                    <input type={'text'} value={title} onChange={e => setTitle(e.target.value)} />
                    <button onClick={handleSearch}>Tìm</button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table>
                        <thead style={{ backgroundColor: 'beige' }}>
                            <tr>
                                <th>Id</th>
                                <th>Mã số thể loại</th>
                                <th>Ngày đăng</th>
                                <th>Tác giả</th>
                                <th>Tiêu đề</th>
                                <th>Miêu tả</th>
                                <th>Đoạn văn</th>
                                <th>Ảnh</th>
                                <th colSpan={2}>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                posts.map(p => (
                                    <tr key={p.id}>
                                        <td>{p.id}</td>
                                        <td>
                                            <Link to={'/post/detail/' + p.id}>{p.title}</Link>
                                        </td>
                                        <td>{p.date}</td>
                                        <td>{p.author}</td>
                                        <td>{p.title}</td>
                                        <td>{p.describe.length > 50 ? `${p.describe.substring(0, 50)}...` : p.describe}</td>
                                        <td>{p.paragraph.length > 50 ? `${p.paragraph.substring(0, 50)}...` : p.paragraph}</td>
                                        <td>{p.thumbnail.length > 10 ? `${p.thumbnail.substring(0, 10)}...` : p.thumbnail}</td>
                                        <td>
                                            <Link to={'/post/edit/' + p.id}>Sửa</Link>
                                        </td>
                                        <td>
                                            <Link to={'/'} onClick={() => handleDelete(p.id)}>Xóa</Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>


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
        </Container>
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

export default PostManagement;
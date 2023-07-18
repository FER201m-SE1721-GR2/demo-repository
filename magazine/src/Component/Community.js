import { Container, Col, Row, Table, Button } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Community = () => {

    const [post,setPost] = useState([]);

    //API products
    useEffect(() => {
        fetch('http://localhost:9999/posts')
            .then(resp => resp.json())
            .then(data => {
                setPost(data);
            })
            .catch(err => {
                console.log(err.message);
            })
    }, []);

    return (
        <>
            {
                post.map(p => (
                    <div key={p.id}>
                        <div>{p.id}</div>
                        <Link to={'/post/detail/'+p.id}>{p.title}</Link>
                    </div>
                ))
            }
        </>
    );
}

export default Community;
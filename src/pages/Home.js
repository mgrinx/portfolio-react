import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from '../components/Grid';
import Portrait from '../assets/IMG_0015.jpg';
import './Home.css';

function Home() {
    return (
        <Container>
            <Row>
                <Col size='sm-4 md-3' offset='md-2'>
                    <img src={Portrait} alt="portrait" id="portrait" className="img-fluid mx-auto mb-3 d-block rounded" />
                </Col>
                <Col size='sm-8 md-5'>
                    <p>Hi, my name is Misha Gringauze and I am a <Link to="/portfolio">full stack web developer</Link> from Seattle, Washington.</p>
                    <p>This page was built using <a href="https://reactjs.org/">React.js</a> and <a href="https://getbootstrap.com/">Bootstrap</a>.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
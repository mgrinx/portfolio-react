import React from 'react';
import { Col } from '../Grid';
import './style.css'

function Project({ children, name, link, github, image }) {
    return (
        <Col size='md-6 xl-4'>
            <div className="card mb-3 mx-0">
                <div className="image-wrapper">
                    <img src={image} alt={name} />
                </div>
                <div className="card-body">
                    <h5 className="card-title font-weight-normal">{name}</h5>
                    <p className="card-text text-muted font-weight-light">{children}</p>
                    <a href={link} className="btn btn-sm btn-success mr-2">Try it</a>
                    <a href={github} className="btn btn-sm btn-light">View source</a>
                </div>
            </div>
        </Col>
    );
}

export default Project;
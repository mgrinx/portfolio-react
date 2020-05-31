import React from 'react';
import { Col } from '../Grid';
import './style.css'

function Project(props) {
    let { children, name, link, github, image } = props;
    return (
        <Col size='sm-6 col-xl-4'>
            <div className="card my-3">
                <img className="card-img-top" src={image} alt={name}></img>
                <div className="card-body">
                    <div className="d-flex flex-row align-items-center justify-content-start">
                        <h5 className="card-title font-weight-normal">{name}</h5>
                        <a href={link} className="btn btn-sm btn-primary mr-2">Try</a>
                        <a href={github} className="btn btn-sm btn-secondary">Git</a>
                    </div>
                    <p className="card-text text-muted font-weight-light">
                        {children}
                    </p>
                </div>
            </div>
        </Col>
    );
}

export default Project;
import React from 'react';
import { Col } from '../Grid';

function Project(props) {
    let { children, name, link, github, image } = props;
    return (
        <Col size='sm-6 col-lg-4'>
            <div className="card my-3">
                <img className="card-img-top" src={image} alt={name}></img>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                        {children}
                    </p>
                    <a href={link} className="btn btn-primary mr-2">Try it!</a>
                    <a href={github} className="btn btn-secondary">Github</a>
                </div>
            </div>
        </Col>
    );
}

export default Project;
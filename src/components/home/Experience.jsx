import React from 'react';
import ExperienceCard from "./ExperienceCard";

import {
    Container,
    Row,
} from "react-bootstrap";
import {Jumbotron} from "./migration";

const Experience = ({experiences}) => {
    return (
        <Jumbotron fluid id="experiences" className="bg-light m-0">
            <Container>
                <h2 className="display-4 pb-5 text-center">{experiences.heading}</h2>
                <Row className=" px-2 py-2">
                    <div className="container text-center">
                        <div className="row row-cols-2">
                            {
                                experiences.data.map((data, index) => {
                                    return <ExperienceCard key={index} data={data}/>
                                })
                            }
                        </div>
                    </div>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Experience;
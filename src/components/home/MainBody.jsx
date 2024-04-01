import React from "react";
import Container from "react-bootstrap/Container";
import Typist from 'react-typist-component';
import {Jumbotron} from "./migration";
import Linkedin from "../icons/Linkedin";
import Github from "../icons/Github";
import Telegram from "../icons/Telegram";

const MainBody = React.forwardRef(
    ({gradient, title, message, icons}, ref) => {
        console.log(icons)
        return (
            <Jumbotron
                fluid
                id="home"
                style={{
                    background: `linear-gradient(136deg,${gradient})`,
                    backgroundSize: "1200% 1200%",
                }}
                className="title bg-transparent bgstyle text-white min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
            >
                <div id="stars"></div>
                <Container>
                    <h1 ref={ref} className="display-1">
                        {title}
                    </h1>
                    <Typist>
                        <div className="lead typist">
                            {message}
                        </div>
                    </Typist>
                    <div className="p-5" style={{display: 'flex', justifyContent: 'center', gap: '2rem'}}>
                        {icons.map((icon, index) => (
                            <a
                                key={`social-icon-${index}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                href={icon.url}
                                aria-label={`My ${icon.image.split("-")[1]}`}
                                style={{textDecoration: 'none'}}
                            >
                                {icon.image === "fa-linkedin" && <Linkedin style={{width: '24px', height: '24px'}}/>}
                                {icon.image === "fa-github" && <Github style={{width: '24px', height: '24px'}}/>}
                                {icon.image === "fa-telegram" && <Telegram style={{width: '24px', height: '24px'}}/>}
                            </a>
                        ))}
                    </div>


                    <a
                        className="btn btn-outline-light btn-lg "
                        href="#aboutme"
                        role="button"
                        aria-label="Learn more about me"
                    >
                        More about me
                    </a>
                </Container>
            </Jumbotron>
        );
    }
);

export default MainBody;

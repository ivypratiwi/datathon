import React from 'react'
import { Button, ResponsiveEmbed, Col, Row, Container, Jumbotron } from 'react-bootstrap'
import styled from 'styled-components'
import jumbo1 from '../img/wallpaper.jpg';

export default function HomePage() {
    const iframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/FS-XvCog9Ps" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    return (
        <Styles>
            <Jumbotron fluid className="jumbotron">
                <Container>
                    <Row className="row">
                        <Col lg={6} className="col-div">
                            <h1>Hey.</h1><br></br>
                            <h4>Do you want to know about the employment in
                                different Industries in Australia?</h4><br></br>
                            <h4>This platform might be what you need!</h4><br></br>
                            <Button variant="outline-light" size="lg" href="/data">Start Exploring</Button>{' '}
                        </Col>
                        <Col md={6} className="col-div2">
                            <div>
                                <h5>View the video to understand more about the problem statement.</h5>
                                <ResponsiveEmbed aspectRatio="16by9">
                                    <div dangerouslySetInnerHTML={{ __html: iframe }} />
                                </ResponsiveEmbed>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </Styles>
    )
}

const Styles = styled.div` 

@media (max-width: 2000px) {
    .jumbotron{
        background: url(${jumbo1})fixed bottom;
        height: 120vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        margin-bottom:0px;
    }
    .col-div{
        color:white;
        padding: 20vh 0;
    }
    .col-div2{
        color:white;
        padding: 18vh 0;
    }
}
@media (max-width: 1400px) {
    .jumbotron{
        height: 120vh;
    }
}

@media (max-width: 1000px) {
    .row{
        padding:8%;
    }
    .col-div{
        padding: 5vh 0;
    }
    .col-div2{
        padding: 3vh 0;
    }
    h1{
        font-size:150%;
    }
    h4{
        font-size:120%;
    }
    h5{
        font-size:100%;
    }
}
@media (max-width: 500px) {
    .btn{
        background-color:black;
        color:white;
    }
}
`
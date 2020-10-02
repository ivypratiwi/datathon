import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import styled from 'styled-components'


export default function Footer() {
    return (
        <Styles>
            <Container fluid className="footer-container">
                <Row>
                    <Col>
                        <p>&copy; Created 2020 for Datathon </p>
                    </Col>
                </Row>

            </Container>
        </Styles >
    )
}

const Styles = styled.div`
.footer-container{
    background-color:#1A1A1A;
}
.row{
    margin-left: auto; 
    margin-right: auto;
}
p{
    text-align: center;
    color:white;
}
`
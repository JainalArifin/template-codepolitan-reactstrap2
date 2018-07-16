import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap';
import '../css/Program.css'

export default class Program extends Component{
    render(){
        return (
            <div>
                <Container className="programStyle">
                    <Row>
                        <Col className="text-center mb-5 leftArticle" xs="12" md="6">
                            <h3>START LEARNING</h3>
                            <p>Semua yang perlu kamu ketahui untuk memulai belajar pemrograman dan menjadi seorang programmer</p>
                            <Button color="info">MULAI SEKARANG <i class="fas fa-arrow-right"></i></Button>
                        </Col>
                        <Col className="text-center" xs="12" md="6">
                            <h3>INTENSIVE LEARNING</h3>
                            <p>Semua yang kamu butuhkan untuk meningkatkan skill pemrogramanmu agar menjadi great programmer</p>
                            <Button color="info">MULAI SEKARANG <i class="fas fa-arrow-right"></i></Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
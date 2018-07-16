import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody } from 'reactstrap';
import '../css/interactive.css'

export default class Interactiv extends Component{
    render(){
        return (
            <div className="interactiveStyle">
                <Container>
                    <Row>
                        <Col md="8 ineractiveLeft pl-0 border-right">
                            <h2 className="mt-5">LEARN CODING</h2>
                            <p>Belajar pemrograman lebih mudah, fitur ini memungkinkan kamu belajar coding sambil praktek di satu tempat yang sama. <a href="#" className="text-info">Lihat materi lainnya</a></p>
                            {/* CARD */}
                            <CardDeck>
                                <Card className="text-center">
                                    <CardImg top width="100%" src="https://static.cdn-cdpl.com/source/00600bfb26f44c7427a680235c2e3042/c-lang.png" alt="Card image cap" />
                                    <CardBody>
                                    <CardTitle>INTERACTIVE CODING</CardTitle>
                                    <CardSubtitle>C</CardSubtitle>
                                    <CardText>Min 200 VAL</CardText>
                                    <Button outline color="secondary">Mulai Belajar</Button>
                                    </CardBody>
                                </Card>
                                <Card className="text-center">
                                    <CardImg top width="100%" src="https://static.cdn-cdpl.com/source/b8e29e8f0b15aab3473fed5df06c9186/cover_python_tutorialset.png" alt="Card image cap" />
                                    <CardBody>
                                    <CardTitle>INTERACTIVE CODING</CardTitle>
                                    <CardSubtitle>Python</CardSubtitle>
                                    <CardText>Min 200 VAL</CardText>
                                    <Button outline color="secondary">Mulai Belajar</Button>
                                    </CardBody>
                                </Card>
                                <Card className="text-center">
                                    <CardImg top width="100%" src="https://static.cdn-cdpl.com/source/b8e29e8f0b15aab3473fed5df06c9186/java_logo_big_1.jpg" alt="Card image cap" />
                                    <CardBody>
                                    <CardTitle>INTERACTIVE CODING</CardTitle>
                                    <CardSubtitle>Java</CardSubtitle>
                                    <CardText>Min 200 VAL</CardText>
                                    <Button outline color="secondary">Mulai Belajar</Button>
                                    </CardBody>
                                </Card>
                            </CardDeck>
                            {/* card bottom */}
                            <CardDeck className="mt-3 mb-5">
                                <Card className="text-center">
                                    <CardImg top width="100%" src="https://static.cdn-cdpl.com/source/abf992b0d0f0a1b46b22e7eb4de4d901/assets/logo-js.png" alt="Card image cap" />
                                    <CardBody>
                                    <CardTitle>INTERACTIVE CODING</CardTitle>
                                    <CardSubtitle>JavaScript</CardSubtitle>
                                    <CardText>Min 200 VAL</CardText>
                                    <Button outline color="secondary">Mulai Belajar</Button>
                                    </CardBody>
                                </Card>
                                <Card className="text-center">
                                    <CardImg top width="100%" src="https://static.cdn-cdpl.com/source/b8e29e8f0b15aab3473fed5df06c9186/php_logo_big.jpg" alt="Card image cap" />
                                    <CardBody>
                                    <CardTitle>INTERACTIVE CODING</CardTitle>
                                    <CardSubtitle>PHP</CardSubtitle>
                                    <CardText>Min 200 VAL</CardText>
                                    <Button outline color="secondary">Mulai Belajar</Button>
                                    </CardBody>
                                </Card>
                                <Card className="text-center">
                                    <CardImg top width="100%" src="https://static.cdn-cdpl.com/source/b8e29e8f0b15aab3473fed5df06c9186/html5_logo_big.jpg" alt="Card image cap" />
                                    <CardBody>
                                    <CardTitle>INTERACTIVE CODING</CardTitle>
                                    <CardSubtitle>HTML</CardSubtitle>
                                    <CardText>Min 200 VAL</CardText>
                                    <Button outline color="secondary">Mulai Belajar</Button>
                                    </CardBody>
                                </Card>
                                </CardDeck>
                            {/* Card end-of */}
                        </Col>
                        <Col md="4">
                            <h3 className="mt-5 mb-3"><i class="fas fa-calendar-alt"></i> UPCOMING TECH EVENT</h3>

                            <a href="" className="text-secondary "><b>Workshop Laravel Bandung</b></a>
                            <div className="text-black-50"><i class="fas fa-calendar-alt"></i> May 19, 2018</div>
                            <div className="text-black-50 mb-3"><i class="fas fa-map-marker-alt"></i> Cimahi Bandung <a href="#" className=" text-info">Lihat Detail</a></div>

                            <a href="" className="text-secondary "><b>HIFASCO 2018 ( HIMIFDA Seminar And Competition 2018 )</b></a>
                            <div className="text-black-50"><i class="fas fa-calendar-alt"></i> May 19, 2018</div>
                            <div className="text-black-50 mb-3"><i class="fas fa-map-marker-alt"></i> Cimahi Bandung <a href="#"  className=" text-info">Lihat Detail</a></div>

                            <Button outline color="secondary" className="mb-3">Lihat Selangkapnya Event <i class="fas fa-arrow-right"></i></Button>
                            <div>
                                <a href="#"  className=" text-info">Cara publikasi event di CodePolitan</a>
                            </div>

                            <h3 className="followStyle">FOLLOW CODEPOLITAN</h3>
                            <p>Tetap terhubung bersama CodePolitan melalui akun sosial mediamu</p>
                            <div>
                                <a className="socialMedia text-info">
                                    <i class="fab fa-facebook-square"></i>
                                </a>
                                <a className="socialMedia text-info">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a className="socialMedia text-info">
                                     <i class="fab fa-google-plus-g"></i>
                                </a>
                                <a className="socialMedia text-info">
                                    <i class="fab fa-youtube"></i>
                                </a>
                                <a className="socialMedia text-info">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                                <a className="socialMedia text-info">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
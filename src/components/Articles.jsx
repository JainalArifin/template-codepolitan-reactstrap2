import React, { Component } from 'react'
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { CardImg, CardDeck,
    CardSubtitle, CardBody } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../css/Articles.css'

export default class Articles extends Component{
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
      }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
            activeTab: tab
            });
        }
    }

    render(){
        return (
            <div>
                 <Nav tabs className="articleStyle mt-3 mb-5">
                    <NavItem>
                        <NavLink
                        className={classnames({ active: this.state.activeTab === '1' })}
                        onClick={() => { this.toggle('1'); }}
                        >
                            ARTIKEL PILIHAN
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        className={classnames({ active: this.state.activeTab === '2' })}
                        onClick={() => { this.toggle('2'); }}
                        >
                        ARTIKEL TERBARU
                        </NavLink>
                    </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Container>
                            {/* search */}
                            <Row className="mb-3">
                                <Col md="6">
                                    <h3>ARTIKEL PILIHAN</h3>
                                </Col>
                                <Col md="6">
                                    <Row>
                                        <Col md="6">
                                            <FormGroup>
                                                <Input className="form-control fa fa-search" placeholder="Search.."/>
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <Button outline color="secondary">Lihat Artikel Lainnya <i class="fas fa-arrow-right"></i>
                                            </Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            {/* article Top */}
                            <Row className="mb-3">
                                <Col md="3">
                                    <Card>
                                        <CardImg top width="100%" src="https://static.cdn-cdpl.com/270x135/8b81700471e8917196897fec5d8e28e9/python-arcade-2d-game.png" alt="Card image cap" />
                                        <CardBody>
                                        <CardText>
                                            TUTORIAL
                                        </CardText>
                                        <CardTitle>Belajar Cara Membuat Game 2D dengan Python dan Arcade</CardTitle>
                                        <p><small>
                                            Takagi Fujimaru</small></p>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="3">
                                    <Card>
                                        <CardImg top width="100%" src="https://static.cdn-cdpl.com/270x135/998b78e349061b4971c0a2b0e8d6be41/aa.png" alt="Card image cap" />
                                        <CardBody>
                                        <CardText>
                                            INFO
                                        </CardText>
                                        <CardTitle>Programmer JavaScript lokal keren yang bisa kalian ikuti</CardTitle>
                                        <p>
                                            <small>
                                                Irfan Maulana
                                            </small>
                                        </p>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="3">
                                    <Card>
                                        <CardImg top width="100%" src="https://static.cdn-cdpl.com/270x135/6b73e0c292f5d9e2a74cd3f02f5c9d80/photo-1484557052118-f32bd25b45b5.jpg" alt="Card image cap" />
                                        <CardBody>
                                        <CardText>
                                            OPINI
                                        </CardText>
                                        <CardTitle>Berkenalan dengan DevOps</CardTitle>
                                        <p>
                                            <small>                 Fajri Abdillah
                                            </small>
                                        </p>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="3">
                                    <Card>
                                        <CardImg top width="100%" src="https://static.cdn-cdpl.com/270x135/programmer_wanita.jpg" alt="Card image cap" />
                                        <CardBody>
                                        <CardText>
                                            INFO
                                        </CardText>
                                        <CardTitle>15 Bahasa Pemrograman Paling Popouler di Kalangan Programmer Wanita</CardTitle>
                                        <p><small>
                                            Takagi Fujimaru</small></p>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            {/* article Bottom */}
                            <Row className="mb-3">
                                <Col md="3">
                                    <Card>
                                        <CardImg top width="100%" src="https://static.cdn-cdpl.com/270x135/b8e29e8f0b15aab3473fed5df06c9186/cover-devschool-depok.jpg" alt="Card image cap" />
                                        <CardBody>
                                        <CardText>
                                            TUTORIAL
                                        </CardText>
                                        <CardTitle>Belajar Cara Membuat Game 2D dengan Python dan Arcade</CardTitle>
                                        <p><small>
                                            Takagi Fujimaru</small></p>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="3">
                                    <Card>
                                        <CardImg top width="100%" src="https://static.cdn-cdpl.com/270x135/Screenshot_from_2018-03-01_12-20-21.png" alt="Card image cap" />
                                        <CardBody>
                                        <CardText>
                                            INFO
                                        </CardText>
                                        <CardTitle>Programmer JavaScript lokal keren yang bisa kalian ikuti</CardTitle>
                                        <p>
                                            <small>
                                                Irfan Maulana
                                            </small>
                                        </p>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="3">
                                    <Card>
                                        <CardImg top width="100%" src="https://static.cdn-cdpl.com/270x135/b8e29e8f0b15aab3473fed5df06c9186/niagahoster-devcussion-cover.jpg" alt="Card image cap" />
                                        <CardBody>
                                        <CardText>
                                            OPINI
                                        </CardText>
                                        <CardTitle>Berkenalan dengan DevOps</CardTitle>
                                        <p>
                                            <small>                 Fajri Abdillah
                                            </small>
                                        </p>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="3">
                                    <Card>
                                        <CardImg top width="100%" src="https://static.cdn-cdpl.com/270x135/lock.jpg" alt="Card image cap" />
                                        <CardBody>
                                        <CardText>
                                            INFO
                                        </CardText>
                                        <CardTitle>15 Bahasa Pemrograman Paling Popouler di Kalangan Programmer Wanita</CardTitle>
                                        <p><small>
                                            Takagi Fujimaru</small></p>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </TabPane>
                    <TabPane tabId="2">
                        <Container>

                            {/* search */}
                            <Row className="mb-3">
                                <Col md="6">
                                    <h3>ARTIKEL PILIHAN</h3>
                                </Col>
                                <Col md="6">
                                    <Row>
                                        <Col md="6">
                                            <FormGroup>
                                                <Input className="form-control fa fa-search" placeholder="Search.."/>
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <Button outline color="secondary">Lihat Artikel Lainnya <i class="fas fa-arrow-right"></i>
                                            </Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            {/* article Top */}
                            <Row className="mb-3">
                                <Col md="3">
                                    <Card>
                                        <CardImg top width="100%" src="https://static.cdn-cdpl.com/270x135/b8e29e8f0b15aab3473fed5df06c9186/cover-devschool-depok.jpg" alt="Card image cap" />
                                        <CardBody>
                                        <CardText>
                                            TUTORIAL
                                        </CardText>
                                        <CardTitle>Belajar Cara Membuat Game 2D dengan Python dan Arcade</CardTitle>
                                        <p><small>
                                            Takagi Fujimaru</small></p>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="3">
                                    <Card>
                                        <CardImg top width="100%" src="https://static.cdn-cdpl.com/270x135/Screenshot_from_2018-03-01_12-20-21.png" alt="Card image cap" />
                                        <CardBody>
                                        <CardText>
                                            INFO
                                        </CardText>
                                        <CardTitle>Programmer JavaScript lokal keren yang bisa kalian ikuti</CardTitle>
                                        <p>
                                            <small>
                                                Irfan Maulana
                                            </small>
                                        </p>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="3">
                                    <Card>
                                        <CardImg top width="100%" src="https://static.cdn-cdpl.com/270x135/b8e29e8f0b15aab3473fed5df06c9186/niagahoster-devcussion-cover.jpg" alt="Card image cap" />
                                        <CardBody>
                                        <CardText>
                                            OPINI
                                        </CardText>
                                        <CardTitle>Berkenalan dengan DevOps</CardTitle>
                                        <p>
                                            <small>                 Fajri Abdillah
                                            </small>
                                        </p>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="3">
                                    <Card>
                                        <CardImg top width="100%" src="https://static.cdn-cdpl.com/270x135/lock.jpg" alt="Card image cap" />
                                        <CardBody>
                                        <CardText>
                                            INFO
                                        </CardText>
                                        <CardTitle>15 Bahasa Pemrograman Paling Popouler di Kalangan Programmer Wanita</CardTitle>
                                        <p><small>
                                            Takagi Fujimaru</small></p>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            {/* article Bottom */}
                            <Row className="mb-3">
                                <Col md="3">
                                    <Card>
                                        <CardImg top width="100%" src="https://static.cdn-cdpl.com/270x135/8b81700471e8917196897fec5d8e28e9/python-arcade-2d-game.png" alt="Card image cap" />
                                        <CardBody>
                                        <CardText>
                                            TUTORIAL
                                        </CardText>
                                        <CardTitle>Belajar Cara Membuat Game 2D dengan Python dan Arcade</CardTitle>
                                        <p><small>
                                            Takagi Fujimaru</small></p>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="3">
                                    <Card>
                                        <CardImg top width="100%" src="https://static.cdn-cdpl.com/270x135/998b78e349061b4971c0a2b0e8d6be41/aa.png" alt="Card image cap" />
                                        <CardBody>
                                        <CardText>
                                            INFO
                                        </CardText>
                                        <CardTitle>Programmer JavaScript lokal keren yang bisa kalian ikuti</CardTitle>
                                        <p>
                                            <small>
                                                Irfan Maulana
                                            </small>
                                        </p>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="3">
                                    <Card>
                                        <CardImg top width="100%" src="https://static.cdn-cdpl.com/270x135/6b73e0c292f5d9e2a74cd3f02f5c9d80/photo-1484557052118-f32bd25b45b5.jpg" alt="Card image cap" />
                                        <CardBody>
                                        <CardText>
                                            OPINI
                                        </CardText>
                                        <CardTitle>Berkenalan dengan DevOps</CardTitle>
                                        <p>
                                            <small>                 Fajri Abdillah
                                            </small>
                                        </p>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="3">
                                    <Card>
                                        <CardImg top width="100%" src="https://static.cdn-cdpl.com/270x135/programmer_wanita.jpg" alt="Card image cap" />
                                        <CardBody>
                                        <CardText>
                                            INFO
                                        </CardText>
                                        <CardTitle>15 Bahasa Pemrograman Paling Popouler di Kalangan Programmer Wanita</CardTitle>
                                        <p><small>
                                            Takagi Fujimaru</small></p>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>

                        </Container>
                    </TabPane>
                    </TabContent>
            </div>
        )
    }
}
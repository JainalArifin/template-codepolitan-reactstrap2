import React, {Component} from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import '../css/sectionSubmit.css'

export default class SectionSubmit extends Component{
    render(){
        return (
            <div className="sectionSubmit pt-5 pb-3">
                <Container>
                <Row>
                    <Col md="8">
                        <p>Bagi pengetahuanmu untuk bersama membangun komunitas developer di Indonesia! Kita bisa jika semua terlibat dan saling memberi manfaat.</p>
                    </Col>
                    <Col md="4">
                        <Button color="info"><i class="fas fa-pen-square"></i> Tulis Artikel Sekarang</Button>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}
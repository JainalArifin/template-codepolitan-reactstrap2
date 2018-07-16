import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap'

export default class Footer extends Component{
    render(){
        return (
            <div className="bg-light">
                <Container>
                    <Row>
                        <Col md="6">
                            <p>Copyright &copy; 2018 <a className="text-info">CodePolitan</a>. All rights reserved</p>
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        )
    }
}
import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap';
import '../css/Jumbotron.css'

export default class Jumbotron extends Component{
    render(){
        return (
            <div className="jumbotronStyle">
                <Container className="text-center text-jumbotron">
                    <h1>Jadilah DevOps Engineer dalam Waktu 3 Bulan</h1>
                    <p> Manfaatkan waktu luangmu di akhir pekan untuk mengupgrade kemampuan teknismu untuk mempelajari Devops Engineering. Persiapkan karirmu sebagai DevOps Engineer dalam waktu 3 bulan.</p>
                    <Button color="info">Selengkapnya</Button>
                </Container>
            </div>
        )
    }
}
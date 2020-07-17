import Box from '@material-ui/core/Box';
import React from 'react';
import Container from '@material-ui/core/Container'
import HeaderCss from '../header/header.css'
import Image from 'react-bootstrap/Image'
import {Row, Col } from 'react-grid-system';
import InstaPostCss from '../InstaPost/InstaPost.css'
import column from '../InstaPost/InstaPost.css'

class InstaPost extends React.Component {
    render() {
        return (
            <div className="InstaPostCss">
            <Container >
                <Row>
                    <Col lg={4} md={4} className="column">
                        <Image src="saloon1.jpg" fluid style={{width:"100%"}} />
                    </Col>
                    <Col lg={4} md={4}>
                        <Image src="saloon2.jpg" style={{width:"100%"}} />
                    </Col>
                    <Col lg={4} md={4}>
                        <Image src="saloon3.jpg" style={{width:"100%"}} />
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}

export default InstaPost;
import React from 'react'
import { Row, Col } from 'react-bootstrap'
const ContactItem = () => {
  return (
    <Row>
        <Col lg={2}>
            <img width={70} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP7g-S9-DLSLrx8D5LWReDH3k44y9K4GnK5g&s"/>
        </Col>
        
        <Col lg={10}>
            <div>박찬후</div>
            <div>0105859934</div>
        </Col>        

    </Row> 
)
}

export default ContactItem
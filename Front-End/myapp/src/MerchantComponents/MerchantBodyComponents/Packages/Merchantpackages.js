import React from 'react'
//import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './../Packages/Merchantpackages.css'
export default function packages() {
  return (
    <div>
      <h3>Select Your Packages</h3>
      <Row>
        <Col sm={12} md={9} xl={9} lg={9}>
          <p><strong>Note:</strong>You Can Choose Only Option After Choosing Please Read our Terms And Condition And Accepet That</p>
          <hr></hr>
          <div className='d-flex flex-wrap'>
            <Form>
              <Row>
                <Col><Form.Floating className="mb-2 form-float">
                  <Form.Control
                    id="floatingInputCustom"
                    type="name"
                    placeholder="name@example.com"
                    disabled
                  />
                  <label htmlFor="floatingInputCustom">For 3 Months Membership</label>
                </Form.Floating>
                </Col>
                <Col><Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="name" placeholder="For 3 Months Membership" disabled />
                </Form.Group>
                </Col>
                <Col><Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="name" placeholder="For 3 Months Membership" disabled />
                </Form.Group>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  )
}

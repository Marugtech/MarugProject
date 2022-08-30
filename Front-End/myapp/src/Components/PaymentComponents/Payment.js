import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Header from '../HeaderComponents/Header';
import Footer from '../FooterComponents/Footer';
import './Payment.css'
import Card from 'react-bootstrap/Card';
import { IoMdPin } from "react-icons/io";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { AiFillCreditCard } from "react-icons/ai";
import { BsCreditCardFill } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import Gpay from './../../assets/Payment/gpay.jpg'
import Phonepay from './../../assets/Payment/PhonePe.jpg'
import Bhimupi from './../../assets/Payment/bhimupi.jpg'
import Visa from './../../assets/Payment/visa.jpg'
import Mastercard from './../../assets/Payment/mastercard.png'
import AmericanExpress from './../../assets/Payment/americanexpress.png'
import Zeta from './../../assets/Payment/zeta.jpg'
import Rupay from './../../assets/Payment/RuPay.png'
import Hdfc from './../../assets/Payment/hdfc.png'
import ICICI from './../../assets/Payment/icici.png'
import SBI from './../../assets/Payment/sbi.png'
import Axis from './../../assets/Payment/axis.png'
import Kotak from './../../assets/Payment/kotak.png'

export default function Payment() {
    return (
        <div><Header></Header><hr></hr>
            <Container>
                <Card className='payment-card'>
                    <div className='p-3'>
                        <Card.Header><h4>Make Your Payment</h4></Card.Header>
                        <Card.Body>
                            <div>
                                <h5><IoMdPin></IoMdPin> Delivery Address</h5>
                                <p>No.25, Streling Road <br></br> Surya Appartments,<br></br> Nungapakam High Road,,<br></br> Chennai - 600034</p>
                            </div>
                            <div>
                                <h5>Payment Methods</h5>
                            </div>
                            <div className='pt-3'>
                                <Tabs
                                    style={{color:'#343537', borderColor:'#ffff'}}
                                    defaultActiveKey="home"
                                    transition={false}
                                    id="noanim-tab-example"
                                    className="mb-3">
                                    <Tab eventKey="home" title={<span><i><AiFillCreditCard></AiFillCreditCard></i> Internet Banking </span>}>
                                    <div class="d-flex flex-wrap bd-highlight">
                                            <div class=" p-2 bd-highlight"><button id='btn' className='btn-bank'><img className='img-bank' src={Hdfc} alt=''></img>HDFC</button></div>
                                            <div class=" p-2 bd-highlight"><button id='btn' className='btn-bank'><img className='img-bank' src={ICICI} alt=''></img>ICICI</button></div>
                                            <div class="p-2 bd-highlight"><button id='btn' className='btn-bank'><img className='img-bank' src={SBI} alt=''></img>SBI</button></div>
                                            <div class="p-2 bd-highlight"><button id='btn' className='btn-bank'><img className='img-bank' src={Axis} alt=''></img>AXIS</button></div>
                                            <div class="p-2 bd-highlight"><button id='btn' className='btn-bank'><img className='img-bank' src={Kotak} alt=''></img>KOTAK</button></div>
                                        </div>
                                        <br></br>
                                        <div className='bank-selector'>
                                            <Form>
                                                <Form.Select aria-label="Default select example">
                                                    <option>Other Banks</option>
                                                    <option value="1">Canara Bank</option>
                                                    <option value="2">IOB Bank</option>
                                                    <option value="3">RBI Bank</option>
                                                </Form.Select>
                                                <br></br>
                                                <Button href="/map" className='btn-payment' style={{background:'#d10000', borderStyle:'none', boxShadow:'none'}}>PAY ₹ 1700</Button>
                                            </Form>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="profile" title={<span><i><AiFillCreditCard></AiFillCreditCard></i> UPI Payment </span>}>
                                        <div >
                                            <Button className='upi-button' style={{ background: 'none', borderStyle: 'none', boxShadow: 'none', alignItems: 'left', textAlign: 'left' }}><img src={Gpay} className='upi-images' alt="" /></Button>
                                            <Button className='upi-button' style={{ background: 'none', borderStyle: 'none', boxShadow: 'none', alignItems: 'left', textAlign: 'left' }}><img src={Phonepay} className='upi-images' alt="" /></Button>
                                            <Button className='upi-button' style={{ background: 'none', borderStyle: 'none', boxShadow: 'none', alignItems: 'left', textAlign: 'left' }}><img src={Bhimupi} className='upi-images' alt="" /></Button>
                                        </div>
                                        <Form>
                                            <div className='upi-inputbox'>
                                                <Form.Group
                                                    className="mb-3"
                                                    controlId="Input2"
                                                >
                                                    <Form.Control type='text' placeholder='Enter UPI Code' />
                                                </Form.Group>
                                            </div>
                                            <div >
                                                {['checkbox'].map((type) => (
                                                    <div key={`inline-${type}`} className="">
                                                        <Form.Check
                                                            inline
                                                            label="Securely save this UPI for a faster checkout next time."
                                                            name="group1"
                                                            type={type}
                                                            id={`inline-${type}-1`}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                            <br></br>
                                            <div className='upi-inputbox'>
                                                <Button href="/map" className='btn-payment' style={{background:'#d10000', borderStyle:'none', boxShadow:'none'}}>VERIFY AND PAY ₹ 1700</Button>
                                            </div>
                                        </Form>
                                    </Tab>
                                    <Tab eventKey="contact" title={<span><i><BsCreditCardFill></BsCreditCardFill></i> Credit Card </span>}>
                                        <div>

                                            WE ACCEPT <Button className='credit-button' style={{ background: 'none', borderStyle: 'none', boxShadow: 'none', alignItems: 'left', textAlign: 'left' }}><img src={Visa} className='credit-images' alt="" /></Button>
                                            <Button className='credit-button' style={{ background: 'none', borderStyle: 'none', boxShadow: 'none', alignItems: 'left', textAlign: 'left' }}><img src={Mastercard} className='credit-images' alt="" /></Button>
                                            <Button className='credit-button' style={{ background: 'none', borderStyle: 'none', boxShadow: 'none', alignItems: 'left', textAlign: 'left' }}><img src={AmericanExpress} className='credit-images' alt="" /></Button>
                                            <Button className='credit-button' style={{ background: 'none', borderStyle: 'none', boxShadow: 'none', alignItems: 'left', textAlign: 'left' }}><img src={Zeta} className='credit-images' alt="" /></Button>
                                            <Button className='credit-button' style={{ background: 'none', borderStyle: 'none', boxShadow: 'none', alignItems: 'left', textAlign: 'left' }}><img src={Rupay} className='credit-images' alt="" /></Button>
                                        </div>
                                        <div className="d-flex">
                                            <div className="creditcard-flex" >
                                                <Form>
                                                    <Form.Group
                                                        controlId="Input2"
                                                    >
                                                        <Form.Control type='text' placeholder='Card Number' style={{ height: '100px' }} />
                                                    </Form.Group>
                                                </Form>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="mr-auto creditcard-flex1" >
                                                <Form>
                                                    <Form.Group
                                                        controlId="Input2"
                                                    >
                                                        <Form.Control type='text' placeholder='Valid through(MM/YY)' style={{ height: '100px' }} />
                                                    </Form.Group>
                                                </Form>
                                            </div>
                                            <div className='creditcard-flex1' >
                                                <Form>
                                                    <Form.Group
                                                        controlId="Input2"
                                                    >
                                                        <Form.Control type='text' placeholder='CVV' style={{ height: '100px' }} />
                                                    </Form.Group>
                                                </Form>
                                            </div>
                                        </div>
                                        <div className="d-flex ">
                                            <div className="ml-auto creditcard-flex">
                                                <Form >
                                                    <Form.Group
                                                        controlId="Input2"
                                                    >
                                                        <Form.Control type='text' placeholder='Name on Card' style={{ height: '100px' }} />
                                                    </Form.Group>
                                                </Form></div>
                                        </div>
                                        <br></br>
                                        <div className='bank-selector'>
                                            <Button href="/map" className='btn-payment' style={{background:'#d10000', borderStyle:'none', boxShadow:'none'}}>PAY ₹ 1700</Button>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div><br></br>
                        </Card.Body>
                    </div>
                </Card>
                <br></br>
            </Container>
            <Footer></Footer>
        </div>
    )
}
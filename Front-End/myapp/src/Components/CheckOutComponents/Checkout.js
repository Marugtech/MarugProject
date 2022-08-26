import React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import chkoutImg from './../../assets/images/img3.jpeg';
import Header from '../HeaderComponents/Header';
import './../CheckOutComponents/Checkout.css';
import { useState } from 'react';
import Footer from './../FooterComponents/Footer';
import CloseButton from 'react-bootstrap/CloseButton';
import Button from 'react-bootstrap/esm/Button';

function ButtonIncrement(props) {

    return (
        <button style={{ marginLeft: '.5rem' }} className='btn-inc' onClick={props.onClickFunc}>
            +
        </button>
    )
}
function ButtonDecrement(props) {

    return (
        <button style={{ marginLeft: '.5rem' }} className='btn-dec' onClick={props.onClickFunc}>
            -
        </button>
    )
}
function Display(props) {
    return (
        <label style={{ marginLeft: '.5rem' }} className='display-num' >{props.message}</label>
    )
}

export default function Checkout() {
    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    if (counter <= 1) {
        decrementCounter = () => setCounter(1);
    }
    return (
        <><div><Header></Header><hr></hr></div><br></br>
            <Container>
                <div>
                    <h3>Hii,<span className='cmn-clr'> Aravind</span></h3>
                </div><br></br>
                <div>
                    <h2>Order Details</h2>
                </div>
                <hr></hr>
                <Table responsive>
                    <thead>
                        <tr>
                            <th></th>
                            <th><h4>ProductName</h4></th>
                            <th></th>
                            <th><h4>Quantity</h4></th>
                            <th><h4>PriceDetails</h4></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><CloseButton /></td>
                            <td className='food-name'><b>Mutton Biryani</b><br></br><span className='food-quantity'>2Kg Bucket</span></td>
                            <td><img className='chkout-img' src={chkoutImg} alt=''></img></td>
                            <td>
                                <div>
                                    <ButtonDecrement onClickFunc={decrementCounter} /><Display message={counter} /><ButtonIncrement onClickFunc={incrementCounter} /></div>
                            </td>
                            <td className=''><h5>₹750</h5></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><CloseButton /></td>
                            <td className='food-name'><b>Mutton Biryani</b><br></br><span className='food-quantity'>2Kg Bucket</span></td>
                            <td><img className='chkout-img' src={chkoutImg} alt=''></img></td>
                            <td>
                                <div>
                                    <ButtonDecrement onClickFunc={decrementCounter} /><Display message={counter} /><ButtonIncrement onClickFunc={incrementCounter} /></div>
                            </td>
                            <td className=''><h5>₹850</h5></td>
                            <td></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td ></td>
                            <td></td>
                            <td><h5 style={{ textTransform: 'uppercase' }}>Total</h5></td>
                            <td ><h5>₹1600</h5></td>
                            <td ><Button href="/payment" className='btn-chkout' style={{background:'#d10000', borderStyle:'none', boxShadow:'none'}}>Check Out</Button></td>
                        </tr>
                    </tfoot>
                </Table>
            </Container>
            <Footer></Footer>
        </>
    )
}

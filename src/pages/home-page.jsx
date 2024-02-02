import React from 'react';
import Layout from "../layout/layout.jsx";
import {Button} from "react-bootstrap";
import '../assets/css/cusmon.css'
import  car from '../assets/images/car.png'
import Con from '../assets/images/download (1).png'
import  display from '../assets/images/display_car.png'
import  d2 from '../assets/images/download (2).png'


import download from '../assets/images/download.png'
import Accor from "../component/accordion.jsx";
import {Link} from "react-router-dom";



const HomePage = () => {
    return (
        <Layout>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-6 mt-5'>
                        <h6 className='text-dark fw-bold'>Plan your trip now</h6>
                        <h1 className='text-dark fw-bold my-font'>Save<span className=' text-danger fs-1'> big</span> with our<br/> car rental</h1>
                        <p>To contribute to positive change and achieve our sustainability<br/> goals with many extraordinary</p>
                        <div className=''>
                            <Button className='btn btn-success mx-2 fw-bolder my-button '>Buy Now</Button>
                            <Button className='btn btn-danger fw-bolder my-button'>See More</Button>
                        </div>
                    </div>
                    <div className='col-6'>
                        <img src={car}/>
                    </div>
                </div>
            </div>

            <div className='container text-center mt-5'>
                <div className='row'>
                    <h3>Plan your trip now</h3>
                    <h1>Quick & easy car rental</h1>

                    <div className='col-4 mt-5 pt-3 border border-primary '>
                        <img src={Con} className=''/>
                        <h2 className='mt-2'>Select Car </h2>
                        <p className='mt-2'>To contribute to positive change and achieve our sustainability goals with many extraordinary </p>
                    </div>
                    <div className='col-4 mt-5 border border-danger border-end-0 border-start-0 '>
                        <img src={Con} className=''/>
                        <h2 className='mt-2'>Select Car </h2>
                        <p className='mt-2'>To contribute to positive change and achieve our sustainability goals with many extraordinary </p>
                    </div>
                    <div className='col-4 mt-5 border border-primary'>
                        <img src={Con} className=''/>
                        <h2 className='mt-2'>Select Car </h2>
                        <p className='mt-2'>To contribute to positive change and achieve our sustainability goals with many extraordinary </p>
                    </div>

                </div>

            </div>


            <div className='container mt-5 '>
                <div className='row'>
                    <div className='col text-center'>
                        <img src={display}/>
                    </div>
                    <div className='col-6 float-end mt-5'>
                        <p>Why Choose Us</p>
                        <h1>Best valued deals you will ever find</h1>

                        <p>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p>
                        <button className='btn btn-danger'><i className="bi bi-arrow-right"></i>Find Details</button>
                    </div>
                    <div className='col-6'>
                        {
                            Array.from({length:3}).map(()=>{
                                return(
                                    <div className='d-flex mt-5 '>
                                        <div className=''>
                                            <img src={d2} />
                                        </div>
                                        <div className=' mx-2'>
                                            <h1 className='fw-bolder'>Cross Country Drive</h1>
                                            <p>Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.</p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>




            <div className='container container-fluid margin '>
                <div className='row '>
                    <div className='cover w-100'>
                        <div className='col-6 '>
                            <h1 className='fw-bolder'>Download our app to get most out of it</h1>
                            <p>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p>
                            <div >
                                <img className='mx-2' src={download}/>
                                <img className='mx-2' src={download}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container margin'>
                <div className='row justify-content-center text-center'>
                    <h3>FAQ</h3>
                    <h1>Frequently Asked Questions</h1>
                    <p>Use securing confined his shutters. Delightful as he it acceptance an solicitude discretion reasonably. <br/>Carriage we husbands advanced an perceive greatest.</p>
                    <div className='col-6 mt-5 '>
                        <Accor/>
                    </div>
                    <div className='col-6'>
                        <Link to='/detail'><img src={car}/></Link>
                    </div>
                </div>
            </div>

        </Layout>
    );
};

export default HomePage;
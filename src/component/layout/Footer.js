import React from 'react';
import Association from '../../image/association-.png';
import Payment  from '../../image/payment.png';

export default function Footer() {
    return (
        <footer className="footer mt-4">
            <div className="containerr">
                <div className="row gy-4 d-flex">
                    <div className="col-lg-3 md-6 text-light">
                        <h2 className="text-uppercase">Quick Links</h2>
                        <ul className="ps-0 py-2">
                            <li>
                                <a href="/">Company Profile</a>
                            </li>
                            <li>
                                <a href="/">About Us</a>
                            </li>
                            <li>
                                <a href="/">FAQ</a>
                            </li>
                            <li>
                                <a href="/">Contact Us</a>
                            </li>
                            <li>
                                <a href="/">Testimonials</a>
                            </li>
                            <li>
                                <a href="/">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 md-6 text-light">
                        <h2 className="text-uppercase">Trek in nepal</h2>
                        <ul className="ps-0 py-2">
                            <li>
                                <a href="/">Best of Nepal Tour</a>
                            </li>
                            <li>
                                <a href="/">Classical Nepal Tour</a>
                            </li>
                            <li>
                                <a href="/">Nepal Hiking Tour</a>
                            </li>
                            <li>
                                <a href="/">Kathmandu Valley Trek</a>
                            </li>
                            <li>
                                <a href="/">Chitwan Safari Tour</a>
                            </li>
                            <li>
                                <a href="/">Yoga / Meditation Tour</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 md-6 text-light">
                        <h2 className="text-uppercase">Tours in Nepal</h2>
                        <ul className="ps-0 py-2">
                            <li>
                                <a href="/">Ghorepani Poonhill Trek</a>
                            </li>
                            <li>
                                <a href="/">Annapurna Base Camp Trek</a>
                            </li>
                            <li>
                                <a href="/">Instant Everest Trek</a>
                            </li>
                            <li>
                                <a href="/">Annpaurna Circuit Trek</a>
                            </li>
                            <li>
                                <a href="/">Langtang Valley Trek</a>
                            </li>
                            <li>
                                <a href="/">Everest Base Camp Trek</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 md-6 text-light py-2">
                        <h2 className="text-uppercase">contact details</h2>
                        <ul className="ps-0 py-2">
                            <li>
                                <a href="/">Thamel, Kathmandu, Nepal</a>
                            </li>
                            <li>
                                <a href="/">Tel: +977-1-4435300 , 4422325</a>
                            </li>
                            <li>
                                <a href="/">Cell: +977-9851093862</a>
                            </li>
                            <li>
                                <a href="/">Email: info@plannepal.com / plannepaltours@gmail.com</a>
                            </li>
                            <li>
                                <a href="/">whatapps/Viber : 9801044333</a>
                            </li>
                            <button className="text-uppercase bg-warning mt-3 p-2">
                                Quick inquiry
                            </button>
                        </ul>
                    </div>
                </div>
                <h2 className="text-uppercase text-center text-light mt-3">
                    we are associated with
                </h2>
                <div className="footer_flex">
                    <div className=" text-light text-center ">
                        <h4>PAYMENT MODE WE ACCEPT</h4>
                        <img src={Payment} alt="payment" />
                    </div>
                    <div className=" text-light text-center ">
                        <h4>WE ARE AFFILIATED</h4>
                        <img src={Association} alt="Association" />
                    </div>
                </div>
            </div>
            <div className="footer_end">
                <div className="container d-flex justify-content-between text-light pt-1 pb-1">
                    <div className="">
                        <p className="mb-0">Copyright 2025, Plan Nepal Travel and Tours</p>
                    </div>
                    <div className="">
                        <p className="">Design &amp; Developed By: Black Sheep Pvt. Ltd</p>
                    </div>
                </div>
            </div>
        </footer>

    )
}

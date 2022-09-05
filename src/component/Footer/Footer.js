import React from 'react';

function Footer(props) {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="contact">
                            <h3>Contact Us</h3>
                            <ul className="p-0 pt-3">
                                <li className="mb-3"><a href="#" className="text-dark"><i className="fa fa-map-marker mx-2" aria-hidden="true" />2751 S Parker Rd, Aurora, CO 80014, United States</a>
                                </li>
                                <li className="mb-3"><a href="#" className="text-dark"><i className="fa fa-phone mx-2" aria-hidden="true" /> +18008660286</a></li>
                                <li className="mb-3"><a href="#" className="text-dark"><i className="fa fa-envelope mx-2" aria-hidden="true" />aytor.info@gmail.com info@aytor.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="Account">
                            <h3>My Account</h3>
                            <ul className="p-0 pt-3">
                                <li className="mb-2">
                                    <a href="#" className="text-dark"><i className="fa fa-angle-right text-dark mx-2" aria-hidden="true" />
                                        My Account</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-dark"><i className="fa fa-angle-right text-dark mx-2" aria-hidden="true" />View Cart</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-dark"><i className="fa fa-angle-right text-dark mx-2" aria-hidden="true" />Wishlist</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-dark"><i className="fa fa-angle-right text-dark mx-2" aria-hidden="true" />Compare</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-dark"><i className="fa fa-angle-right text-dark mx-2" aria-hidden="true" />New Products</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="time">
                            <h3>My Account</h3>
                            <div className="times pt-3">
                                <p className="pb-0"><b>Mon - Tue:</b>&nbsp;&nbsp;&nbsp; 8AM - 10PM</p>
                                <p className="pb-0"><b>Wed:</b> 8AM - 7PM</p>
                                <p className="pb-0"><b>Fri:</b> 7AM - 12PM</p>
                                <p className="pb-0"><b>Sat:</b> 9AM - 8PM</p>
                                <p className="pb-0"><b>Sun:</b> Closed</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="letter pb-3">
                            <h3 className="pb-3">News Letter</h3>
                            <p>Authoritatively morph 24/7 potentialities with error-free partnerships.</p>
                            <form>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Email Address" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span className="input-group-text" id="basic-addon2">Subscribe</span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;
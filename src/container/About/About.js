import React from 'react';

function About(props) {
    return (
        // < !--------------------- about-banner---------------------->
        <div>
            <div className="about" style={{ backgroundImage: 'url(image/breadcumb_bg_about.jpg)' }}>
                <div className="container">
                    <div className="about-text text-center text-white">
                        <h1>About Us</h1>
                    </div>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html" className="text-white">Home</a></li>
                            <li className="breadcrumb-item active text-white" aria-current="page">Library</li>
                        </ol>
                    </nav>
                    <div className="overlay" />
                </div>
            </div>
            {/*-------------------Aytor-Shop--------------------*/}
            <section className="shope">
                <div className="container position-relative py-40">
                    <div className="row">
                        <div className="about-shape" />
                        <div className="col-lg-6">
                            <img src="image/about_2.png" alt className="img-fluid" />
                        </div>
                        <div className="col-lg-6 px-5">
                            <div className="shope-text">
                                <h2 className="fw-bold">Learn About Aytor Shop</h2>
                                <p className="pb-3">Interactively underwhelm effective relationships whereas team driven paradigms.
                                    Uniquely impact impactful meta-services vis -a-vis fully tested best practices.
                                    Appropriately e-enable fully potentialities and economical.</p>
                            </div>
                            <hr className="style1" />
                            <div className="check-list pt-4">
                                <p>Assertively customize potentialities and economical relationships whereas</p>
                                <p>Seamlessly disintermediate distributed relationships intellectual capital.</p>
                                <p>Credibly enable B2C potentialities relationships whereas after strategic.</p>
                            </div>
                            <button className="btn">Discover More <i className="fa fa-angle-double-right" aria-hidden="true" /></button>
                        </div>
                    </div>
                </div>
            </section>
            {/*-------------------space-extra-bottom-------------------*/}
            <section className="counter-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="counter-center text-center">
                                <div className="box text-center rounded-circle">
                                    <img src="image/count_1.png" alt />
                                </div>
                                <div className="counter-title">
                                    <h2 className="mt-4 fw-bold">22.3k</h2>
                                    <p>Products for sale</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="counter-center text-center">
                                <div className="box text-center rounded-circle">
                                    <img src="image/count_2.png" alt />
                                </div>
                                <div className="counter-title">
                                    <h2 className="mt-4 fw-bold">14.6k</h2>
                                    <p>Sellers active on shop</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="counter-center text-center">
                                <div className="box text-center rounded-circle">
                                    <img src="image/count_3.png" alt />
                                </div>
                                <div className="counter-title">
                                    <h2 className="mt-4 fw-bold">25.3k</h2>
                                    <p>Customer active on store</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="counter-center text-center">
                                <div className="box text-center rounded-circle">
                                    <img src="image/count_4.png" alt />
                                </div>
                                <div className="counter-title">
                                    <h2 className="mt-4 fw-bold">95.6k</h2>
                                    <p>Annual gross sales</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*-------------------Our Story-------------------*/}
            <section className="our-Story">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="shope-text">
                                <h2 className="fw-bold">Learn About Aytor Shop</h2>
                                <p className="pb-3">Synergistically pontificate focused services whereas intuitive leadership.
                                    Competently predominate ubiquitous services rather than client-centric scenarios.
                                    Distinctively mesh B2C benefits for superior customer service. Interactively e-enable
                                    inexpensive total linkage without quality materials. Phosfluorescently negotiate.</p>
                                <p>Synergistically pontificate focused services whereas intuitive leadership. Competently
                                    predominate ubiquitous services rather than client-centric scenarios. Distinctively mesh B2C
                                    benefits for superior customer service. Interactively e-enable inexpensive total linkage
                                    without quality materials. Phosfluorescently negotiate.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="story-img px-5">
                                <img src="image/our_story.jpg" alt className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*-------------------feature-box-------------------*/}
            <section className="feature-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="counter-center text-center">
                                <div className="box text-center rounded-circle">
                                    <img src="image/truck.png" alt />
                                </div>
                                <div className="counter-title">
                                    <h5 className="mt-4 fw-bold">FREE SHIPING</h5>
                                    <p>All orders over $150</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="counter-center text-center">
                                <div className="box text-center rounded-circle">
                                    <img src="image/card.png" alt />
                                </div>
                                <div className="counter-title">
                                    <h5 className="mt-4 fw-bold">QUICK PAYMENT</h5>
                                    <p>100% secure payment</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="counter-center text-center">
                                <div className="box text-center rounded-circle">
                                    <img src="image/return.png" alt />
                                </div>
                                <div className="counter-title">
                                    <h5 className="mt-4 fw-bold">FREE RETURNS</h5>
                                    <p>Money back in 30 days</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="counter-center text-center">
                                <div className="box text-center rounded-circle">
                                    <img src="image/support.png" alt />
                                </div>
                                <div className="counter-title">
                                    <h5 className="mt-4 fw-bold">24/7 SUPPORT</h5>
                                    <p>Get Quick Support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*-------------------Expart Team-------------------*/}
            <section className="shope">
                <div className="container">
                    <div className="about-text text-center text-dark">
                        <h1 className="mb-5 fw-bold">Leadership Expart Team</h1>
                    </div>
                    <div className="row team">
                        <div className="col-lg-3">
                            <div className="team-image text-center mx-3">
                                <div className="team-images">
                                    <img src="image/team_3.jpg" alt />
                                </div>
                                <div className="team-text p-3">
                                    <h3>Sudjida Lufz</h3>
                                    <p>Support</p>
                                    <ul className="d-flex justify-content-center p-0">
                                        <li><a href="#"><i className="fab fa-facebook-f text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                        <li><a href="#"><i className="fab fa-twitter text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                        <li><a href="#"><i className="fab fa-instagram text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                        <li><a href="#"><i className="fab fa-pinterest-p text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="team-image text-center mx-3">
                                <div className="team-images">
                                    <img src="image/team_4.jpg" alt />
                                </div>
                                <div className="team-text p-3">
                                    <h3>Henry Josep</h3>
                                    <p>Director</p>
                                    <ul className="d-flex justify-content-center p-0">
                                        <li><a href="#"><i className="fab fa-facebook-f text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                        <li><a href="#"><i className="fab fa-twitter text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                        <li><a href="#"><i className="fab fa-instagram text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                        <li><a href="#"><i className="fab fa-pinterest-p text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="team-image text-center mx-3">
                                <div className="team-images">
                                    <img src="image/team_5.jpg" alt />
                                </div>
                                <div className="team-text p-3">
                                    <h3>Mariya Rozie</h3>
                                    <p>Developer</p>
                                    <ul className="d-flex justify-content-center p-0">
                                        <li><a href="#"><i className="fab fa-facebook-f text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                        <li><a href="#"><i className="fab fa-twitter text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                        <li><a href="#"><i className="fab fa-instagram text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                        <li><a href="#"><i className="fab fa-pinterest-p text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="team-image text-center mx-3">
                                <div className="team-images">
                                    <img src="image/team_2.jpg" alt />
                                </div>
                                <div className="team-text p-3">
                                    <h3>Imon Hossain</h3>
                                    <p>Marketer</p>
                                    <ul className="d-flex justify-content-center p-0">
                                        <li><a href="#"><i className="fab fa-facebook-f text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                        <li><a href="#"><i className="fab fa-twitter text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                        <li><a href="#"><i className="fab fa-instagram text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                        <li><a href="#"><i className="fab fa-pinterest-p text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="team-image text-center mx-3">
                                <div className="team-images">
                                    <img src="image/team_1.jpg" alt />
                                </div>
                                <div className="team-text p-4">
                                    <h3>Michel Richard</h3>
                                    <p>Founder</p>
                                    <ul className="d-flex justify-content-center p-0">
                                        <li><a href="#"><i className="fab fa-facebook-f text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                        <li><a href="#"><i className="fab fa-twitter text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                        <li><a href="#"><i className="fab fa-instagram text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                        <li><a href="#"><i className="fab fa-pinterest-p text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*-------------------avater-fly-------------------*/}
            <section className="avater-fly">
                <div className="container">
                    <div className="row multiple-items">
                        <div className="avater-img">
                            <img src="image/quote_left_2.png" alt className />
                            <img src="image/crown.png" alt />
                            <div className="avater-images">
                                <img src="image/avater_6.jpg" alt className="rounded-circle" />
                            </div>
                            <div className="text-center">
                                <p className="mt-3 pb-3">Distinctively revolutionize functional sources rather than cutting-edge
                                    interfaces.
                                    Appropriately
                                    productize next-generation infomediaries without interoperable e-business. Progressively
                                    empower.</p>
                                <h4>Sowat Ahsan</h4>
                            </div>
                        </div>
                        <div className="avater-img">
                            <img src="image/quote_left_2.png" alt className />
                            <img src="image/crown.png" alt />
                            <div className="avater-images">
                                <img src="image/avater_8.jpg" alt className="rounded-circle" />
                            </div>
                            <div className="text-center">
                                <p className="mt-3 pb-3">Distinctively revolutionize functional sources rather than cutting-edge
                                    interfaces.
                                    Appropriately
                                    productize next-generation infomediaries without interoperable e-business. Progressively
                                    empower.</p>
                                <h4>Imon Hossain</h4>
                            </div>
                        </div>
                        <div className="avater-img">
                            <img src="image/quote_left_2.png" alt className />
                            <img src="image/crown.png" alt />
                            <div className="avater-images">
                                <img src="image/avater_1.jpg" alt className="rounded-circle" />
                            </div>
                            <div className="text-center">
                                <p className="mt-3 pb-3">Distinctively revolutionize functional sources rather than cutting-edge
                                    interfaces.
                                    Appropriately
                                    productize next-generation infomediaries without interoperable e-business. Progressively
                                    empower.</p>
                                <h4>Michel Richard</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*-------------------Aytor-img-------------------*/}
            <section className="shope">
                <div className="container">
                    <div className="about-text text-center text-dark">
                        <h1 className="fw-bold mb-5">@Aytor Instagram</h1>
                    </div>
                    <div className="row aytor">
                        <div className="Aytor-image">
                            <img src="image/insta_2.jpg" alt className="img-fluid" />
                        </div>
                        <div className="Aytor-image">
                            <img src="image/insta_3.jpg" alt className="img-fluid" />
                        </div>
                        <div className="Aytor-image">
                            <img src="image/insta_4.jpg" alt className="img-fluid" />
                        </div>
                        <div className="Aytor-image">
                            <img src="image/insta_5.jpg" alt className="img-fluid" />
                        </div>
                        <div className="Aytor-image">
                            <img src="image/insta_6.jpg" alt className="img-fluid" />
                        </div>
                        <div className="Aytor-image">
                            <img src="image/insta_1.jpg" alt className="img-fluid" />
                        </div>
                        <div className="Aytor-image">
                            <img src="image/insta_8.jpg" alt className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
        </div>

    

    );
}

export default About;



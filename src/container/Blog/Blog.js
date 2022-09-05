import React from 'react';

function Blog(props) {
    return (
        <div>
            {/*-------------------about-banner--------------------*/}
            <div className="about" style={{ backgroundImage: 'url(image/breadcumb_bg_1.jpg)' }}>
                <div className="container">
                    <div className="about-text text-center text-white">
                        <h1>Blog With Sidebar</h1>
                    </div>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html" className="text-white">Home</a></li>
                            <li className="breadcrumb-item active text-white" aria-current="page">Blog With Sidebar</li>
                        </ol>
                    </nav>
                    <div className="overlay" />
                </div>
            </div>
            {/*-------------------blog-img--------------------*/}
            <section className="blog-img">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="blog-main mb-5">
                                <div className="blogs-img">
                                    <img src="image/blog-s-1-1.jpg" alt />
                                </div>
                                <div className="blog-content">
                                    <a href="#" className="text-dark"><i className="fa fa-user mb-3" aria-hidden="true" />Aytor
                                        Studio</a>
                                    <a href="#" className="text-dark"><i className="fa fa-calendar mb-3" aria-hidden="true" />Augest
                                        10, 2021</a>
                                    <h2>Color, Size, Material Swatches</h2>
                                    <p>Seamlessly cultivate low-risk high-yield processes whereas effective platforms.
                                        Professionally restore mission-critical proces improvements error-free results.
                                        Interactively monetize intermandated experiences through equity invested customer
                                        service. Dramatically engage user friendly paradigms via fully tested collaboration and
                                        idea-sharing. Energistically pursue wireless.</p>
                                </div>
                            </div>
                            <div className="blog-main mb-5">
                                <div className="blogs-img">
                                    <img src="image/blog-s-1-2.jpg" alt />
                                </div>
                                <div className="blog-content">
                                    <a href="#" className="text-dark"><i className="fa fa-user mb-3" aria-hidden="true" />Aytor
                                        Studio</a>
                                    <a href="#" className="text-dark"><i className="fa fa-calendar mb-3" aria-hidden="true" />Augest
                                        10, 2021</a>
                                    <h2>Fashion coats 2022: key trends</h2>
                                    <p>Seamlessly cultivate low-risk high-yield processes whereas effective platforms.
                                        Professionally restore mission-critical proces improvements error-free results.
                                        Interactively monetize intermandated experiences through equity invested customer
                                        service. Dramatically engage user friendly paradigms via fully tested collaboration and
                                        idea-sharing. Energistically pursue wireless.</p>
                                </div>
                            </div>
                            <div className="blog-main mb-5">
                                <div className="blogs-img">
                                    <img src="image/blog-s-1-6.jpg" alt />
                                </div>
                                <div className="blog-content">
                                    <a href="#" className="text-dark"><i className="fa fa-user mb-3" aria-hidden="true" />Aytor
                                        Studio</a>
                                    <a href="#" className="text-dark"><i className="fa fa-calendar mb-3" aria-hidden="true" />Augest
                                        10, 2021</a>
                                    <h2>Fashion coats 2022: key trends</h2>
                                    <p>Seamlessly cultivate low-risk high-yield processes whereas effective platforms.
                                        Professionally restore mission-critical proces improvements error-free results.
                                        Interactively monetize intermandated experiences through equity invested customer
                                        service. Dramatically engage user friendly paradigms via fully tested collaboration and
                                        idea-sharing. Energistically pursue wireless.</p>
                                </div>
                            </div>
                            <div className="blog-main mb-5">
                                <div className="blogs-img">
                                    <img src="image/artworks-DuzeporxapxyfgpP-PkGOzQ-t500x500.jpg" alt className="img-fluid w-100" />
                                </div>
                                <div className="blog-content">
                                    <a href="#" className="text-dark"><i className="fa fa-user mb-3" aria-hidden="true" />Aytor
                                        Studio</a>
                                    <a href="#" className="text-dark"><i className="fa fa-calendar mb-3" aria-hidden="true" />Augest
                                        10, 2021</a>
                                    <h2>Fashion coats 2022: key trends</h2>
                                    <p>Seamlessly cultivate low-risk high-yield processes whereas effective platforms.
                                        Professionally restore mission-critical proces improvements error-free results.
                                        Interactively monetize intermandated experiences through equity invested customer
                                        service. Dramatically engage user friendly paradigms via fully tested collaboration and
                                        idea-sharing. Energistically pursue wireless.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <aside className="sidebar-area">
                                <div className="widget-search">
                                    <form action>
                                        <input type="text" placeholder="search here" />
                                        <button className="submit"><i className="fa fa-search" aria-hidden="true" /></button>
                                    </form>
                                </div>
                                <div className="widget-categories">
                                    <h3 className="widget-title">Categories</h3>
                                    <ul className="p-0 justify-content-between d-block">
                                        <li className="d-flex position-relative"><a href="#">Fashion</a>
                                            <span>(15)</span>
                                        </li>
                                        <li className="d-flex position-relative"><a href="#">Furnitures</a>
                                            <span>(15)</span>
                                        </li>
                                        <li className="d-flex position-relative"><a href="#">Electronics</a>
                                            <span>(55)</span>
                                        </li>
                                        <li className="d-flex position-relative"><a href="#">Cosmetics</a>
                                            <span>(60)</span>
                                        </li>
                                        <li className="d-flex position-relative"><a href="#">Wine</a>
                                            <span>(12)</span>
                                        </li>
                                        <li className="d-flex position-relative"><a href="#">Frame Sunglasses</a>
                                            <span>(18)</span>
                                        </li>
                                        <li className="d-flex position-relative"><a href="#">Jewellery</a>
                                            <span>(18)</span>
                                        </li>
                                        <li className="d-flex position-relative"><a href="#">Accessories</a>
                                            <span>(12)</span>
                                        </li>
                                        <li className="d-flex position-relative"><a href="#">New Arrivals</a>
                                            <span>(14)</span>
                                        </li>
                                        <li className="d-flex position-relative"><a href="#">Medicine</a>
                                            <span>(08)</span>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Blog;
import React from 'react';

function Shope(props) {
    return (
        <div>
            {/*-------------------about-banner--------------------*/}
            <div className="about" style={{ backgroundImage: 'url(image/breadcumb_bg_shop.jpg)' }}>
                <div className="container">
                    <div className="about-text text-center text-white">
                        <h1>Shop - Grid</h1>
                    </div>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html" className="text-white">Home</a></li>
                            <li className="breadcrumb-item active text-white" aria-current="page">Shop - Grid</li>
                        </ol>
                    </nav>
                    <div className="overlay" />
                </div>
            </div>
            {/*-------------------products--------------------*/}
            <section className="products">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="products-hover">
                                <div className="product-img">
                                    <img src="image/product_1_1.jpg" alt />
                                    <div className="tag-style3 position-absolute text-white">-45%</div>
                                    <div className="actions position-absolute text-center">
                                        <a href="#"><i className="fas fa-cart-arrow-down mb-2 rounded-circle text-white" aria-hidden="true" /></a>
                                        <a href="#"><i className="fab fa-gratipay mb-2 rounded-circle text-white" aria-hidden="true" /></a>
                                        <a href="#"><i className="fas fa-wifi mb-2 rounded-circle text-white" aria-hidden="true" /></a>
                                    </div>
                                </div>
                                <div className="product-content pt-3">
                                    <h3 className="fw-bold pb-1">Spaghetti Hoodie</h3>
                                    <span>$180.85 <del style={{ color: 'gray' }}>$350.99</del></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="products-hover">
                                <div className="product-img">
                                    <img src="image/product_1_2.jpg" alt />
                                    <div className="tag-style3 position-absolute text-white">-45%</div>
                                    <div className="actions position-absolute text-center">
                                        <a href="#"><i className="fas fa-cart-arrow-down mb-2 rounded-circle text-white" aria-hidden="true" /></a>
                                        <a href="#"><i className="fab fa-gratipay mb-2 rounded-circle text-white" aria-hidden="true" /></a>
                                        <a href="#"><i className="fas fa-wifi mb-2 rounded-circle text-white" aria-hidden="true" /></a>
                                    </div>
                                </div>
                                <div className="product-content pt-3">
                                    <h3 className="fw-bold pb-1">Crew Neck Cotton</h3>
                                    <span>$190.85</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="products-hover">
                                <div className="product-img">
                                    <img src="image/product_1_3.jpg" alt />
                                    <div className="tag-style3 position-absolute text-white">-45%</div>
                                    <div className="actions position-absolute text-center">
                                        <a href="#"><i className="fas fa-cart-arrow-down mb-2 rounded-circle text-white" aria-hidden="true" /></a>
                                        <a href="#"><i className="fab fa-gratipay mb-2 rounded-circle text-white" aria-hidden="true" /></a>
                                        <a href="#"><i className="fas fa-wifi mb-2 rounded-circle text-white" aria-hidden="true" /></a>
                                    </div>
                                </div>
                                <div className="product-content pt-3">
                                    <h3 className="fw-bold pb-1">Spaghetti Strap</h3>
                                    <span>$160.85</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="products-hover">
                                <div className="product-img">
                                    <img src="image/product_1_4.jpg" alt />
                                    <div className="tag-style3 position-absolute text-white">-45%</div>
                                    <div className="actions position-absolute text-center">
                                        <a href="#"><i className="fas fa-cart-arrow-down mb-2 rounded-circle text-white" aria-hidden="true" /></a>
                                        <a href="#"><i className="fab fa-gratipay mb-2 rounded-circle text-white" aria-hidden="true" /></a>
                                        <a href="#"><i className="fas fa-wifi mb-2 rounded-circle text-white" aria-hidden="true" /></a>
                                    </div>
                                </div>
                                <div className="product-content pt-3">
                                    <h3 className="fw-bold pb-1">Pink Neck Frog</h3>
                                    <span>$170.85</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="row pt-5">
                        <div className="col-lg-3">
                            <div className="products-hover">
                                <div className="product-img">
                                    <img src="image/product_1_5.jpg" alt />
                                    <div className="tag-style3 position-absolute text-white">-45%</div>
                                    <div className="actions position-absolute text-center">
                                        <a href="#"><i className="fas fa-cart-arrow-down mb-2 rounded-circle text-white" aria-hidden="true" /></a>
                                        <a href="#"><i className="fab fa-gratipay mb-2 rounded-circle text-white" aria-hidden="true" /></a>
                                        <a href="#"><i className="fas fa-wifi mb-2 rounded-circle text-white" aria-hidden="true" /></a>
                                    </div>
                                </div>
                                <div className="product-content pt-3">
                                    <h3 className="fw-bold pb-1">T-shirt Blouse Sleeve</h3>
                                    <span>$120.85</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="products-hover">
                                <div className="product-img">
                                    <img src="image/product_1_6.jpg" alt />
                                    <div className="tag-style3 position-absolute text-white">-45%</div>
                                    <div className="actions position-absolute text-center">
                                        <a href="#"><i className="fas fa-cart-arrow-down mb-2 rounded-circle text-white" aria-hidden="true" /></a>
                                        <a href="#"><i className="fab fa-gratipay mb-2 rounded-circle text-white" aria-hidden="true" /></a>
                                        <a href="#"><i className="fas fa-wifi mb-2 rounded-circle text-white" aria-hidden="true" /></a>
                                    </div>
                                </div>
                                <div className="product-content pt-3">
                                    <h3 className="fw-bold pb-1">Crew Neck Cotton</h3>
                                    <span>$100.85</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="products-hover">
                                <div className="product-img">
                                    <img src="image/product_1_7.jpg" alt />
                                    <div className="tag-style3 position-absolute text-white">-45%</div>
                                    <div className="actions position-absolute text-center">
                                        <a href="#"><i className="fas fa-cart-arrow-down mb-2 rounded-circle text-white" aria-hidden="true" /></a>
                                        <a href="#"><i className="fab fa-gratipay mb-2 rounded-circle text-white" aria-hidden="true" /></a>
                                        <a href="#"><i className="fas fa-wifi mb-2 rounded-circle text-white" aria-hidden="true" /></a>
                                    </div>
                                </div>
                                <div className="product-content pt-3">
                                    <h3 className="fw-bold pb-1">Blouse Jacket</h3>
                                    <span>$120.85</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="products-hover">
                                <div className="product-img">
                                    <img src="image/product_1_8.jpg" alt />
                                    <div className="tag-style3 position-absolute text-white">-45%</div>
                                    <div className="actions position-absolute text-center">
                                        <a href="#"><i className="fas fa-cart-arrow-down mb-2 rounded-circle text-white" aria-hidden="true" /></a>
                                        <a href="#"><i className="fab fa-gratipay mb-2 rounded-circle text-white" aria-hidden="true" /></a>
                                        <a href="#"><i className="fas fa-wifi mb-2 rounded-circle text-white" aria-hidden="true" /></a>
                                    </div>
                                </div>
                                <div className="product-content pt-3">
                                    <h3 className="fw-bold pb-1">Pink Neck Frog</h3>
                                    <span>$100.85</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className="row pt-5">
                        <div className="col-lg-3">
                            <div className="products-hover">
                                <div className="product-img">
                                    <img src="image/product_1_9.jpg" alt />
                                    <div className="tag-style3 position-absolute text-white">-45%</div>
                                    <div className="actions position-absolute text-center">
                                        <a href="#"><i className="fas fa-cart-arrow-down mb-2 rounded-circle text-white" aria-hidden="true" /></a>
                                        <a href="#"><i className="fab fa-gratipay mb-2 rounded-circle text-white" aria-hidden="true" /></a>
                                        <a href="#"><i className="fas fa-wifi mb-2 rounded-circle text-white" aria-hidden="true" /></a>
                                    </div>
                                </div>
                                <div className="product-content pt-3">
                                    <h3 className="fw-bold pb-1">Hoodie Outerwear</h3>
                                    <span>$120.85</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="products-hover">
                                <div className="product-img">
                                    <img src="image/product_1_10.jpg" alt />
                                    <div className="tag-style3 position-absolute text-white">-45%</div>
                                    <div className="actions position-absolute text-center">
                                        <a href="#"><i className="fas fa-cart-arrow-down mb-2 rounded-circle text-white" aria-hidden="true" /></a>
                                        <a href="#"><i className="fab fa-gratipay mb-2 rounded-circle text-white" aria-hidden="true" /></a>
                                        <a href="#"><i className="fas fa-wifi mb-2 rounded-circle text-white" aria-hidden="true" /></a>
                                    </div>
                                </div>
                                <div className="product-content pt-3">
                                    <h3 className="fw-bold pb-1">Flight jacket</h3>
                                    <span>$100.85 </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="products-hover">
                                <div className="product-img">
                                    <img src="image/product_1_11.jpg" alt />
                                    <div className="tag-style3 position-absolute text-white">-45%</div>
                                    <div className="actions position-absolute text-center">
                                        <a href="#"><i className="fas fa-cart-arrow-down mb-2 rounded-circle text-white" aria-hidden="true" /></a>
                                        <a href="#"><i className="fab fa-gratipay mb-2 rounded-circle text-white" aria-hidden="true" /></a>
                                        <a href="#"><i className="fas fa-wifi mb-2 rounded-circle text-white" aria-hidden="true" /></a>
                                    </div>
                                </div>
                                <div className="product-content pt-3">
                                    <h3 className="fw-bold pb-1">Plus-size Dress</h3>
                                    <span>$120.85</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="products-hover">
                                <div className="product-img">
                                    <img src="image/product_1_12.jpg" alt />
                                    <div className="tag-style3 position-absolute text-white">-45%</div>
                                    <div className="actions position-absolute text-center">
                                        <a href="#"><i className="fas fa-cart-arrow-down mb-2 rounded-circle text-white" aria-hidden="true" /></a>
                                        <a href="#"><i className="fab fa-gratipay mb-2 rounded-circle text-white" aria-hidden="true" /></a>
                                        <a href="#"><i className="fas fa-wifi mb-2 rounded-circle text-white" aria-hidden="true" /></a>
                                    </div>
                                </div>
                                <div className="product-content pt-3">
                                    <h3 className="fw-bold pb-1">Pajamas Nightwear</h3>
                                    <span>$100.85</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Shope;
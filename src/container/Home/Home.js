import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'reactstrap';
import { Categorydata } from '../redux/action/category.action';
import { Productdata } from '../redux/action/product.action';

function Home(props) {
    const dispatch = useDispatch();
    const [product, setproduct] = useState([]);
    const [category, setcategory] = useState([]);
    const history = useHistory();

    const products = useSelector(state => state.product);

    const categorys = useSelector(state => state.category);
    console.log(categorys);

    const uniqueList = [
        "ALL",
        ...new Set(
            products.product.map((curElem) => {
                return curElem.categoryname
            })
        )
    ]

    const filterItem = (categoryname) => {
        // console.log("categoryname", categoryname);
        if (categoryname === "ALL") {
            setproduct(products);
            return;
        }
    }

    // const updateList = products.product.filter((curElem1, i) => {
    //     return (
    //         curElem1.categoryname === categoryname
    //     )
    //     setproduct(updateList);
    //     console.log("updateList", updateList);
    // })

    const handleProductDetails = (values) => {
        // console.log(values);
        history.push("/ProductDetails", values);
    }


    useEffect(() => {
        dispatch(Productdata(),Categorydata());  
        setproduct(products.product);
        setcategory(categorys.category)
    },
        [])

    let  finalData = product.length > 0 ? product : products.product;

    console.log(finalData);

    let categorydata = category.length > 0 ? category : categorys.category;
    console.log(categorydata);

    return (
        // < !------------------banner-------------->
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                        <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to={1} aria-label="Slide 2" />
                        <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to={2} aria-label="Slide 3" />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-7">
                                        <div className="banner-image position-relative">
                                            <img src="image/hero_1_bg_2.png" alt="xyz" className="img-fluid vh-100" />
                                            <div className="banner-text position-absolute">
                                                <h1 className="fw-normal">New Winter1</h1>
                                                <h1 className="fw-bold">Shoes Collection</h1>
                                                <p className="mt-3 mb-3">Competently expedite alternative benefits whereas
                                                    leading-edge catalysts for
                                                    change. Globally leverage existing an expanded array of leadership.</p>
                                                <NavLink exact to={"/Shope"} className="btns text-white">Shop now <i className="fa fa-angle-double-right" aria-hidden="true" /></NavLink>
                                            </div>
                                            <div className="overlay" />
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="banner-image-2">
                                            <img src="image/hero_1_2.png" className="d-block w-100" alt="..." />
                                            <div className="overlays" style={{ backgroundColor: 'rgb(145, 120, 190)' }} />
                                            {/* <div class="banner-hero position-absolute">
                                      <img src="image/hero_1_shape_2.png" alt="" class="img-fluid w-100">
                                  </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-7">
                                        <div className="banner-image position-relative">
                                            <img src="image/hero_1_bg_1.png" alt className="img-fluid vh-100" />
                                            <div className="banner-text position-absolute">
                                                <h1 className="fw-normal">New Winter</h1>
                                                <h1 className="fw-bold">Shoes Collection</h1>
                                                <p className="mt-3 mb-3">Competently expedite alternative benefits whereas
                                                    leading-edge catalysts for
                                                    change. Globally leverage existing an expanded array of leadership.</p>
                                                <button className="btns text-white">Shop now</button>
                                            </div>
                                            <div className="overlay" />
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="banner-image-2">
                                            <img src="image/hero_1_1.png" className="d-block w-100" alt="..." />
                                            <div className="overlays" style={{ backgroundColor: 'rgb(19, 93, 132)' }} />
                                            {/* <div class="banner-hero position-absolute">
                                  <img src="image/hero_1_shape_2.png" alt="" class="img-fluid w-100">
                              </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-7">
                                        <div className="banner-image position-relative">
                                            <img src="image/hero_1_bg_3.png" alt className="img-fluid vh-100" />
                                            <div className="banner-text position-absolute">
                                                <h1 className="fw-normal">New Winter</h1>
                                                <h1 className="fw-bold">Shoes Collection</h1>
                                                <p className="mt-3 mb-3">Competently expedite alternative benefits whereas
                                                    leading-edge catalysts for
                                                    change. Globally leverage existing an expanded array of leadership.</p>
                                                <button className="btns text-white">Shop now <i className="fa fa-angle-double-right" aria-hidden="true" /></button>
                                            </div>
                                            <div className="overlay" />
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="banner-image-2">
                                            <img src="image/hero_1_3.png" className="d-block w-100" alt="..." />
                                            <div className="overlays" style={{ backgroundColor: 'rgb(255, 123, 213)' }} />
                                            {/* <div class="banner-hero position-absolute">
                                  <img src="image/hero_1_shape_2.png" alt="" class="img-fluid w-100">
                              </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*----------------collection------------*/}
                {/* Category_admin */}
                
                <div className="collection">
                    <div className="container">
                        <div className="row">
                            {
                                categorydata.map((v, i) => {
                                    console.log(v);
                                    return (
                                        <>

                                            <div className="col-lg-4">
                                                <div className="mega-hover collection-relative position-relative">
                                                    <div className="collection-new position-relative">
                                                        <img src={v.url} className="img-fluid" />
                                                        <div className="collection-text ">
                                                            <h3 className="text-uppercase fs-4 me-5">{v.categoryname}</h3>
                                                        </div>
                                                        {/* <div className="collections-btn position-absolute">
                                                            <button className="btn">Explore All</button>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>

                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                {/* <section className="collection">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="mega-hover collection-relative position-relative">
                                    <div className="collection-new position-relative">
                                        <img src="image/cat-bg-1.jpg" alt className="img-fluid" />
                                        <div className="collection-text position-absolute">
                                            <h3 className="text-uppercase fs-4">Men Collections</h3>
                                        </div>
                                        <div className="collections-btn position-absolute">
                                            <button className="btn">Explore All</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="mega-hover collection-relative position-relative">
                                    <div className="collection-new position-relative">
                                        <img src="image/cat-bg-2.jpg" alt className="img-fluid" />
                                        <div className="collection-text position-absolute">
                                            <h3 className="text-uppercase fs-4">Women Collections</h3>
                                        </div>
                                        <div className="collections-btn position-absolute">
                                            <button className="btn">Explore All</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="mega-hover collection-relative position-relative">
                                    <div className="collection-new position-relative">
                                        <img src="image/cat-bg-1.jpg" alt className="img-fluid" />
                                        <div className="collection-text position-absolute">
                                            <h3 className="text-uppercase fs-4">Sports Collections</h3>
                                        </div>
                                        <div className="collections-btn position-absolute">
                                            <button className="btn">Explore All</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/*----------------Top Products----------------*/}
                <section className="product">
                    <div className="container">
                        <div className="product-text text-center">
                            <h2 className="fw-bold">Top Products1</h2>
                        </div>
                        <div className="product-btn text-center pt-4">
                            <button className="btn text-white rounded-pill ms-2" id="New Arrival" data-bs-toggle="tab" data-bs-target="#New Arrival" type="button" role="tab" aria-controls="New Arrival" aria-selected="true">New Arrival</button>
                            {/* <button className="btn rounded-pill border ms-2" id="Featured" data-bs-toggle="tab" data-bs-target="#Featured" type="button" role="tab" aria-controls="Featured" aria-selected="true">Featured</button>
                            <button className="btn rounded-pill border" id="Top Rated" data-bs-toggle="tab" data-bs-target="#Top Rated" type="button" role="tab" aria-controls="Top Rated" aria-selected="true">Top Rated</button> */}
                        </div>
                        {/* react js */}
                        {
                            <Navbar filterItem={filterItem} uniqueList={uniqueList} />
                        }
                        <div className='container'>
                            <div className='row Products'>
                                {
                                    finalData.map((values, index) => {
                                        console.log(values);
                                        return (
                                            <>
                                                <div className="col-lg-3">
                                                    <div className="product-main text-center fade show active">
                                                        <div className="product-box">
                                                            <img src={values.url} className="img-fluid1" onClick={() => handleProductDetails(values)} />
                                                        </div>
                                                        <div className="product-meta pt-4">
                                                            {/* <p className="mb-2">Men / Women</p> */}
                                                            <h3 className="text-dark fs-4 fw-bold pb-1">{values.name}</h3>
                                                            <span className="fw-bold">price : {values.price}</span>{<br/>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        {/* <div className="row pt-5 Products">
                            <div className="col-lg-3">
                                <div className="product-main text-center fade show active">
                                    <div className="product-box">
                                        <img src="image/featured-1-8.jpg" alt className="img-fluid" />
                                    </div>
                                    <div className="product-meta pt-4">
                                        <p className="mb-2">Men / Women</p>
                                        <h3 className="text-dark fs-4 fw-bold pb-1">Simple Fabric Shoes</h3>
                                        <span className="fw-bold">$100.85</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-main text-center fade show">
                                    <div className="product-box">
                                        <img src="image/featured-1-4.jpg" alt className="img-fluid" />
                                    </div>
                                    <div className="product-meta pt-4">
                                        <p className="mb-2">Men / Women</p>
                                        <h3 className="text-dark fs-4 fw-bold pb-1">Air Jordan 7 Retro</h3>
                                        <span className="fw-bold">$180.85</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-main text-center fade show">
                                    <div className="product-box">
                                        <img src="image/featured-1-5.jpg" alt className="img-fluid" />
                                    </div>
                                    <div className="product-meta pt-4">
                                        <p className="mb-2">Men / Women</p>
                                        <h3 className="text-dark fs-4 fw-bold pb-1">Nike Air Max 270 SE</h3>
                                        <span className="fw-bold">$120.85</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-main text-center">
                                    <div className="product-box">
                                        <img src="image/featured-1-6.jpg" alt className="img-fluid" />
                                    </div>
                                    <div className="product-meta pt-4">
                                        <p className="mb-2">Men / Women</p>
                                        <h3 className="text-dark fs-4 fw-bold pb-1">Adidas Sneaker Shoes</h3>
                                        <span className="fw-bold">$190.85</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-main text-center fade show active">
                                    <div className="product-box">
                                        <img src="image/featured-1-8.jpg" alt className="img-fluid" />
                                    </div>
                                    <div className="product-meta pt-4">
                                        <p className="mb-2">Men / Women</p>
                                        <h3 className="text-dark fs-4 fw-bold pb-1">Simple Fabric Shoes</h3>
                                        <span className="fw-bold">$100.85</span>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </section>
                {/*--------------video-----------*/}
                <section className="container-xl video">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 pt-5 pb-5">
                                <span className="fw-bold fs-4">Up to 50% Off</span>
                                <h4 className="fw-bold text-white">Men’s Flexible Running
                                    Sports Shoes</h4>
                                <p className="text-white">Credibly conceptualize virtual infrastructures without fully tested
                                    interface. Appropriately engineer backend internal or "organic" sources via goal-orien
                                    technology. Authoritatively provide.</p>
                                {/* <button className="btns text-white">Shop now</button> */}
                                <NavLink exact to={"/Shope"} className="btns text-white">Shop now</NavLink>
                            </div>
                            <div className="col-lg-6 video-btn mega-hover">
                                <a href="javascript.void();"><img src="image/shoe-video.jpg" alt className="img-fluid" /></a>
                                <div className="play-btn">
                                    <a href="https://www.youtube.com/watch?v=_sI_Ps7JSEk&ab_channel=JazzandBluesExperience"><i className="fa fa-play" aria-hidden="true" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*----------------Bestsellers-Products----------------*/}
                <section className="product">
                    <div className="container">
                        <div className="product-text text-center">
                            <h2 className="fw-bold">Top Products</h2>
                        </div>
                        <div className="product-btn text-center pt-4">
                            <button className="btn text-white rounded-pill ms-2" id="New Arrival" data-bs-toggle="tab" data-bs-target="#New Arrival" type="button" role="tab" aria-controls="New Arrival" aria-selected="true">All</button>
                            <button className="btn rounded-pill border ms-2" id="Featured" data-bs-toggle="tab" data-bs-target="#Featured" type="button" role="tab" aria-controls="Featured" aria-selected="true">Nike</button>
                            <button className="btn rounded-pill border ms-2" id="Top Rated" data-bs-toggle="tab" data-bs-target="#Top Rated" type="button" role="tab" aria-controls="Top Rated" aria-selected="true">Adidas</button>
                            <button className="btn rounded-pill border ms-2" id="Top Rated" data-bs-toggle="tab" data-bs-target="#Top Rated" type="button" role="tab" aria-controls="Top Rated" aria-selected="true">Puma</button>
                            <button className="btn rounded-pill border ms-2" id="Top Rated" data-bs-toggle="tab" data-bs-target="#Top Rated" type="button" role="tab" aria-controls="Top Rated" aria-selected="true">Bata</button>
                            <button className="btn rounded-pill border ms-2" id="Top Rated" data-bs-toggle="tab" data-bs-target="#Top Rated" type="button" role="tab" aria-controls="Top Rated" aria-selected="true">Apex</button>
                        </div>
                        <div className="row pt-5">
                            <div className="col-lg-3">
                                <div className="product-main text-center fade show active">
                                    <div className="product-box">
                                        <img src="image/featured-1-8.jpg" alt className="img-fluid" />
                                    </div>
                                    <div className="product-meta pt-4">
                                        <p className="mb-2">Men / Women</p>
                                        <h3 className="text-dark fs-4 fw-bold pb-1">Simple Fabric Shoes</h3>
                                        <span className="fw-bold">$100.85</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-main text-center fade show">
                                    <div className="product-box">
                                        <img src="image/featured-1-4.jpg" alt className="img-fluid" />
                                    </div>
                                    <div className="product-meta pt-4">
                                        <p className="mb-2">Men / Women</p>
                                        <h3 className="text-dark fs-4 fw-bold pb-1">Air Jordan 7 Retro</h3>
                                        <span className="fw-bold">$180.85</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-main text-center fade show">
                                    <div className="product-box">
                                        <img src="image/featured-1-5.jpg" alt className="img-fluid" />
                                    </div>
                                    <div className="product-meta pt-4">
                                        <p className="mb-2">Men / Women</p>
                                        <h3 className="text-dark fs-4 fw-bold pb-1">Nike Air Max 270 SE</h3>
                                        <span className="fw-bold">$120.85</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-main text-center">
                                    <div className="product-box">
                                        <img src="image/featured-1-6.jpg" alt className="img-fluid" />
                                    </div>
                                    <div className="product-meta pt-4">
                                        <p className="mb-2">Men / Women</p>
                                        <h3 className="text-dark fs-4 fw-bold pb-1">Adidas Sneaker Shoes</h3>
                                        <span className="fw-bold">$190.85</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-5">
                            <div className="col-lg-3">
                                <div className="product-main text-center fade show active">
                                    <div className="product-box">
                                        <img src="image/featured-1-1.jpg" alt className="img-fluid" />
                                    </div>
                                    <div className="product-meta pt-4">
                                        <p className="mb-2">Men / Women</p>
                                        <h3 className="text-dark fs-4 fw-bold pb-1">Running Sneaker Shoes</h3>
                                        <span className="fw-bold">$180.85</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-main text-center fade show">
                                    <div className="product-box">
                                        <img src="image/featured-1-7.jpg" alt className="img-fluid" />
                                    </div>
                                    <div className="product-meta pt-4">
                                        <p className="mb-2">Men / Sports</p>
                                        <h3 className="text-dark fs-4 fw-bold pb-1">Nike Basketball shoes</h3>
                                        <span className="fw-bold">$120.85</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-main text-center fade show">
                                    <div className="product-box">
                                        <img src="image/featured-1-3.jpg" alt className="img-fluid" />
                                    </div>
                                    <div className="product-meta pt-4">
                                        <p className="mb-2">Men / Women</p>
                                        <h3 className="text-dark fs-4 fw-bold pb-1">Simple Fabric Shoe</h3>
                                        <span className="fw-bold">$160.85</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-main text-center">
                                    <div className="product-box">
                                        <img src="image/featured-1-2.jpg" alt className="img-fluid" />
                                    </div>
                                    <div className="product-meta pt-4">
                                        <p className="mb-2">Men / Sports</p>
                                        <h3 className="text-dark fs-4 fw-bold pb-1">Leather Mens Slipper</h3>
                                        <span className="fw-bold">$190.85</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*----------------Shoes-Sale----------------*/}
                <section className="Shoes">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="banner-style1 mega-hover" style={{ backgroundImage: 'url(image/banner_2.jpg)' }}>
                                    <div className="banner-content">
                                        <span className="text-white mb-3 d-inline-block fs-5">Adidas Shoes</span>
                                        <h2 className="fs-2 text-white">The Summer Sale <br />Off 50%</h2>
                                        <button className="btn text-white">Shop Now <i className="fa fa-arrow-right mx-1" aria-hidden="true" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="banner-style1 mega-hover" style={{ backgroundImage: 'url(image/banner_3.jpg)' }}>
                                    <div className="banner-content">
                                        <span className="text-white mb-3 d-inline-block fs-5">Nike Shoes</span>
                                        <h2 className="fs-2 text-white">Makes Yourself <br /> Keep Sporty</h2>
                                        <button className="btn text-white">Shop Now <i className="fa fa-arrow-right mx-1" aria-hidden="true" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section></div>
            {/*----------------Nike-Shoes----------------*/}
            <section className="product">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3">
                            <div className="banner-style2 position-relative text-center">
                                <img src="image/banner_4.jpg" alt className="img-fluid" />
                                <div className="banner-contents">
                                    <span className="text-white fs-4">New Trend Edition</span>
                                    <div className="text-center">
                                        <button className="btn text-white">Explore All </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9">
                            <div className="row align-items-center mb-4">
                                <div className="col-auto">
                                    <h2 className="fw-bold">Nike Special</h2>
                                </div>
                                <div className="col">
                                    <div className="title-line position-relative" />
                                </div>
                            </div>
                            <div className="row Products">
                                <div className="col-xl-3">
                                    <div className="product-main text-center fade show active">
                                        <div className="product-box">
                                            <img src="image/featured-1-1.jpg" alt className="img-fluid" />
                                        </div>
                                        <div className="product-meta pt-4">
                                            <p className="mb-2">Men / Women</p>
                                            <h3 className="text-dark fs-4 fw-bold pb-1">Running Sneaker Shoes</h3>
                                            <span className="fw-bold">$180.85</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3">
                                    <div className="product-main text-center fade show">
                                        <div className="product-box">
                                            <img src="image/featured-1-7.jpg" alt className="img-fluid" />
                                        </div>
                                        <div className="product-meta pt-4">
                                            <p className="mb-2">Men / Sports</p>
                                            <h3 className="text-dark fs-4 fw-bold pb-1">Nike Basketball shoes</h3>
                                            <span className="fw-bold">$120.85</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3">
                                    <div className="product-main text-center fade show">
                                        <div className="product-box">
                                            <img src="image/featured-1-3.jpg" alt className="img-fluid" />
                                        </div>
                                        <div className="product-meta pt-4">
                                            <p className="mb-2">Men / Women</p>
                                            <h3 className="text-dark fs-4 fw-bold pb-1">Simple Fabric Shoe</h3>
                                            <span className="fw-bold">$160.85</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3">
                                    <div className="product-main text-center fade show active">
                                        <div className="product-box">
                                            <img src="image/featured-1-1.jpg" alt className="img-fluid" />
                                        </div>
                                        <div className="product-meta pt-4">
                                            <p className="mb-2">Men / Women</p>
                                            <h3 className="text-dark fs-4 fw-bold pb-1">Running Sneaker Shoes</h3>
                                            <span className="fw-bold">$180.85</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3">
                                    <div className="product-main text-center fade show active">
                                        <div className="product-box">
                                            <img src="image/featured-1-1.jpg" alt className="img-fluid" />
                                        </div>
                                        <div className="product-meta pt-4">
                                            <p className="mb-2">Men / Women</p>
                                            <h3 className="text-dark fs-4 fw-bold pb-1">Running Sneaker Shoes</h3>
                                            <span className="fw-bold">$180.85</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*------------------What Our Customer Say?-----------------*/}
            <section className="product">
                <div className="container">
                    <div className="customer-text text-center">
                        <h2 className="fw-bold">What Our Customer Say?</h2>
                    </div>
                    <div className="row customer">
                        <div className="col-lg-6">
                            <div className="customer-box text-center pt-5">
                                <div className="customer-texts">
                                    <i className="fa fa-quote-left fs-1" aria-hidden="true" />
                                    <p>Intrinsicly unleash interoperable data whereas pandemic eservices. Energistically
                                        plagiarize-free bandwidth after focused mindshare. Phosfluorescently pontificate
                                        cross-media synergy without clicks-and-mortar services.</p>
                                </div>
                                <div className="customer-img text-center">
                                    <img src="image/avater_2.jpg" alt className="rounded-circle d-inline-block" />
                                    <div className="box-name mt-3">
                                        <h3 className="fw-bold">Imon Hussain</h3>
                                        <p>Customer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="customer-box text-center pt-5">
                                <div className="customer-texts">
                                    <i className="fa fa-quote-left fs-1" aria-hidden="true" />
                                    <p>Intrinsicly unleash interoperable data whereas pandemic eservices. Energistically
                                        plagiarize-free bandwidth after focused mindshare. Phosfluorescently pontificate
                                        cross-media synergy without clicks-and-mortar services.</p>
                                </div>
                                <div className="customer-img">
                                    <img src="image/avater_3.jpg" alt className="rounded-circle d-inline-block" />
                                    <div className="box-name mt-3">
                                        <h3 className="fw-bold">Showat Ahsan</h3>
                                        <p>Customer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="customer-box text-center pt-5">
                                <div className="customer-texts">
                                    <i className="fa fa-quote-left fs-1" aria-hidden="true" />
                                    <p>Intrinsicly unleash interoperable data whereas pandemic eservices. Energistically
                                        plagiarize-free bandwidth after focused mindshare. Phosfluorescently pontificate
                                        cross-media synergy without clicks-and-mortar services.</p>
                                </div>
                                <div className="customer-img">
                                    <img src="image/avater_3.jpg" alt className="rounded-circle d-inline-block" />
                                    <div className="box-name mt-3">
                                        <h3 className="fw-bold">Showat Ahsan</h3>
                                        <p>Customer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*------------------------logo------------------------*/}
            <div className="logo" style={{ paddingTop: 50 }}>
                <div className="container">
                    <div className="row logos brand-logo d-flex justify-content-center align-items-center">
                        <div className="brand-logos ms-5">
                            <img src="image/logo_3.png" alt />
                        </div>
                        <div className="brand-logos ms-5">
                            <img src="image/logo_4.png" alt />
                        </div>
                        <div className="brand-logos ms-5">
                            <img src="image/logo_5.png" alt />
                        </div>
                        <div className="brand-logos ms-5">
                            <img src="image/logo_1.png" alt />
                        </div>
                        <div className="brand-logos">
                            <img src="image/logo_2.png" alt />
                        </div>
                        <div className="brand-logos ms-5">
                            <img src="image/logo_3.png" alt />
                        </div>
                    </div>
                </div>
            </div>
            {/*------------------------lcons------------------------*/}
            <section className="product">
                <div className="row m-0 icons-img lmages">
                    <img src="image/insta_2.jpg" alt className="img-fluid" />
                    <img src="image/insta_3.jpg" alt className="img-fluid" />
                    <img src="image/insta_4.jpg" alt className="img-fluid" />
                    <img src="image/insta_5.jpg" alt className="img-fluid" />
                    <img src="image/insta_6.jpg" alt className="img-fluid" />
                    <img src="image/insta_1.jpg" alt className="img-fluid" />
                    <img src="image/insta_8.jpg" alt className="img-fluid" />
                    <img src="image/insta_2.jpg" alt className="img-fluid" />
                </div>
            </section>
        </div>


    );
}

export default Home;
import React from 'react'

export default function ProductDetails(props) {
    const productvalue = [props.location.state]
    console.log(productvalue);

    const handleCart = (d) => {
        console.log(d);
    }

    return (
        <>
            <div className="product-text text-center">
                <h2 className="fw-bold">Product Details</h2>
            </div>
            <div className="container">
                <div className='row'>
                    {
                        productvalue.map((d) => {
                            return (
                                <>

                                    <div className="col-lg-12">
                                        <div className="product-main text-center fade show d-flex mt-5">
                                            <div className="product-box mb-5 ">
                                                <img src={d.url} alt className="img-fluid " />
                                            </div>
                                            <div className="product-meta pt-4">
                                                <h3 className="text-dark fs-4 fw-bold pb-1">Name : {d.name}</h3>
                                                <span className="fw-bold">Price : {d.price}</span><br />
                                                <div className='d-flex pt-0 pb-0'>
                                                    <button onClick={() => handleCart(d)} className='cartbtn'>Add to Cart</button>
                                                    <button onClick={() => handleCart(d)} className='cartbtn'>Buy Now &#8961;</button>

                                                </div>
                                                {/* <div> 
                                                    <p>What is Lorem Ipsum?
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                                                        remaining essentially unchanged.It was popularised in the 1960s with the release of 
                                                        Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing 
                                                        software like Aldus PageMaker including
                                                        versions of Lorem Ipsum.</p>
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
        </>
    )
}

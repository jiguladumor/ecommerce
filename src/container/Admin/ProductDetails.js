import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { addCart } from '../redux/action/addtocart.action';


export default function ProductDetails(props) {
    const history = useHistory();
    const productvalue = [props.location.state]
    const [qty, setQty] = useState(1)
    const dispatch = useDispatch();
    console.log(productvalue);
    


    const handleaaddtocat = (d) => {
        const Datacat = {
            ...d,
            qty: qty
        }
        console.log(Datacat);
        dispatch(addCart(d))
        history.push("/Addtocart", Datacat);
    }
    const handleCart = () => {
        
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
                            // console.log("ddd", d);
                            return (
                                <>

                                    <div className="col-lg-12">
                                        <div className="product-main text-center fade show d-flex mt-5">
                                            <div className="product-box mb-5 ">
                                                <img src={d.url} alt className="img-fluid " />
                                            </div>
                                            <div className="product-meta pt-4">
                                                <h3 className="text-dark fs-4 fw-bold pb-1">Name : {d.name}</h3><br/>
                                                <span className="fw-bold">Price : {d.price}</span><br />
                                                <div className='d-flex pt-0 pb-0'>
                                                    <button onClick={() => handleaaddtocat(d)} className='cartbtn'>Add to Cart</button>

                                                    <button onClick={() => handleCart(d)} className='cartbtn'>Buy Now &#8961;</button>
                                                </div>
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

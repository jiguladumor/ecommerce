import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
} from "../redux/action/addtocart.action";

export default function Addtocart(props) {
  const [product, setproduct] = useState([]);
  const Addtocart = [props.location.state];
  console.log(Addtocart);
  const c = useSelector((state) => state.cart);
  console.log(c);

  const products = useSelector((state) => state.product);

  const dispatch = useDispatch();

  const handleincrement = (id) => {
    dispatch(incrementCounter(id));
  };

  const handledecrement = (id) => {
    dispatch(decrementCounter(id));
  };

  const filterdata = [];

  c.cart.map((d) => {
    products.product.map((p) => {
      if (d.id === p.id) {
        const data = {
          ...p,
          qty: d.qty,
        };
        console.log(data);
        filterdata.push(data);
      }
    });
  });

  return (
    <>
      <div className="product-text text-center">
        <h2 className="fw-bold">Add To Cart</h2>
      </div>
      <div className="container">
        <div className="row">
          {Addtocart.map((v) => {
            console.log(v);
            return (
              <>
                <div className="col-lg-12">
                  <div className="product-main text-center fade show d-flex mt-5">
                    <div className="product-box mb-5 ">
                      <img src={v.url} alt className="img-fluid " />
                    </div>
                    <div className="product-meta pt-4">
                      <h3 className="text-dark fs-4 fw-bold pb-1">{v.name}</h3>
                      <br />
                      <span className="fw-bold">{v.price}</span>
                      <br />
                      <div className="d-flex">
                        <button
                          onClick={() => handledecrement(v.id)}
                          className="btn btn btn-outline-light text-dark m-2 px-2"
                        >
                          -
                        </button>
                        <p className="m-3">{v.qty}</p>
                        <button
                          onClick={() => handleincrement(v.id)}
                          class="btn btn btn-outline-light text-dark m-2 px-2"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      {/* {
                Addtocart.map((v) => {
                    return (
                        <>
                        
                            <div className="row pt-5">
                                <div className="col-lg-3">
                                    <div className="product-main text-center fade show active">
                                        <div className="product-box">
                                            <img src={v.url} alt className="img-fluid" />
                                        </div>
                                        <div className="product-meta pt-4">
                                            <p className="mb-2">Men / Women</p>
                                            <h3 className="text-dark fs-4 fw-bold pb-1">{v.name}</h3>
                                            <span className="fw-bold">{v.price}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            } */}
    </>
  );
}

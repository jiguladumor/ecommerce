import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    decrementCounter,
    handledelete,
    incrementCounter,
} from "../redux/action/addtocart.action";

export default function Addtocart(props) {
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

    c.cart.map((c) => {
        products.product.map((p) => {
            if (c.id === p.id) {
                const data = {
                    ...p,
                    qty: c.qty,
                };
                console.log(data);
                filterdata.push(data);
            }
        });
    });

    const handleclickdelete = (id) => {
        dispatch(handledelete(id))
        console.log(id);
    }

    return (
        <>
            <div className="container">
                <h1>Add to cart</h1>
                <table class="table" cellPadding={10}>
                    <thead>
                        <tr>
                            <th>img</th>
                            <th>name</th>
                            <th>price</th>
                            <th>qty</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filterdata.map((d) => {
                                return (
                                    <>
                                        <tr>
                                            <td> <img src={d.url} alt="" width={100} /></td>
                                            <td>{d.name}</td>
                                            <td>{d.price * d.qty}</td>
                                            <td>
                                                <div className="d-flex justify-content-center">
                                                    <button
                                                        onClick={() => handleincrement(d.id)}
                                                        class="btn btn btn-outline-light text-dark m-2 px-2"
                                                    >
                                                        +
                                                    </button>
                                                    <p className="m-3">{d.qty}</p>
                                                    <button
                                                        onClick={() => handledecrement(d.id)}
                                                        disabled={d.qty === 1 && true}
                                                        className="btn btn btn-outline-light text-dark m-2 px-2"
                                                    >
                                                        -
                                                    </button>
                                                </div>
                                            </td>
                                            <button onClick={() => handleclickdelete(d.id)}>Delete</button>
                                        </tr>

                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}

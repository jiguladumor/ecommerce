// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { Productdata } from '../redux/action/product.action';

// export default function Product() {
//   const dispatch = useDispatch();
//   const [product, setproduct] = useState([]);
//   const products = useSelector(state => state.product);
//   console.log(products);


//   useEffect(() => {
//     dispatch(Productdata());
//     setproduct(products.product);
//   },
//     [])

//   let finalData = product.length > 0 ? product : products.product;

//   console.log(finalData);

//   return (
//     <>
//       {
//         finalData && finalData.map((values, index) => {
//           console.log(values);
//           return (
//             <>
//               <div className='main_row'>
//                 <div className='row images'>

//                   <img className='pb-5' src={values.url} />

//                   <div className='row images'>
//                     <h6>Name:{values.name}</h6>
//                     <p>price:{values.price}</p>
//                     <p>Category:{values.categoryname}</p>
//                   </div>
//                 </div>
//               </div>
//             </>
//           )
//         })
//       }
//     </>
//   )
// }

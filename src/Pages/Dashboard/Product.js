import React from 'react';

const Product = ({index,product,setDeletingProduct}) => {
   console.log(product)
    return (
        <tr>
      <th>{index + 1}</th>
      <td>{product.productName}</td>
      
      <td>
      <label onClick={()=> setDeletingProduct(product)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
      </td>
    </tr>
    );
};

export default Product;
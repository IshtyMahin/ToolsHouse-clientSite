import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import Product from './Product';

const ManageProduct = () => {
    const [deletingProduct,setDeletingProduct] = useState(null);
    console.log(deletingProduct)
    const {
        data:products,
        isLoading,
        refetch,
      } = useQuery("products", () =>
        fetch("http://localhost:5000/product")
          .then((res) => res.json())
      );
        if(isLoading){
          return <Loading></Loading>
        }
    return (
        <div className="m-5">
      <h2 className="text-2xl">All products : {products?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th> Delete</th>
              
            </tr>
          </thead>
          <tbody>
            {
               products.map((product,index) => <Product
                  key={index}
                  index={index}
                  product={product}
                  refetch={refetch}
                  setDeletingProduct={setDeletingProduct}
               ></Product>)
            }
          </tbody>
        </table>
      </div>
      {
          deletingProduct&& <DeleteConfirmModal
          deletingProduct={deletingProduct}
            refetch={refetch}
            setDeletingProduct={setDeletingProduct}
          ></DeleteConfirmModal>
      }
    </div>
    );
};

export default ManageProduct;
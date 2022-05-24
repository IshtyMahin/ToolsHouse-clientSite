import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import OneTool from './OneTool';

const Tools = () => {
      
    const [products, setProducts] = useState({});
    useEffect(() => {
      fetch("http://localhost:5000/product")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    console.log(products)
    return (<div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mx-12">
    {
      products.slice(0,3).map(product=> <OneTool 
         product={product}
         key={product._id}
      ></OneTool>)
    }

  </div>
  );
};

export default Tools;
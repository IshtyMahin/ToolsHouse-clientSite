import React from 'react';

const HomeHeader = () => {
    return (
        <div className='grid grid-row-1 order-2 lg:grid-cols-2 gap-3 mx-12'>
            
            <div>
            <img className='rounded-5'  src="https://i.ibb.co/0BHgjXy/getty-494605768-2000133320009280151-316966.jpg" alt="" />
            </div>
            <div className=' text-center my-auto'>
                <h1 className='text-3xl text-red-400'>Buy your favourite Tools</h1>
                <p className='text-xl'>Buy latest tools for your work or your shop at best price in Bangladesh. Get your tools Accessories from our online shopping store  COD. EMI. Easy Return. Shop Now.</p>
            </div>
        </div>
    );
};

export default HomeHeader;
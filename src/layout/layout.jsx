import React from 'react';
import Header from "./header.jsx";

const Layout = (props) => {
    return (
        <div>
            <Header/>
            {props.children}



            <div className='bg-dark text-white text-center mt-5 py-2'>All Right Reserved @2024 </div>
        </div>
    );
};

export default Layout;
import React, { Fragment } from 'react';
import Header from '../components/header/header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/footer';

const Layout = () => {
  return (
    <Fragment>
         <div className='h-screen w-screen bg-primary'>
         <div>
           <Header />
        </div>
        <div>
            <Outlet />
        </div>
        <div>
            <Footer />
        </div>
         </div>
    </Fragment>
  );
}

export default Layout;

import React, { Fragment } from 'react';
import Header from '../components/header/header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/footer';
import Menu from '../components/menu/Menu';
import Search from '../components/search/Search';

const Layout = () => {
  return (
    <Fragment>
         <div className='h-screen w-screen bg-primary'>
            <div>
               <Header />
            </div>
            <div>
                <Menu /> 
            </div>
            <div>
               <Search />
            </div>
            <div className='items-center justify-around pt-6'>
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

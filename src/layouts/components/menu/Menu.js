import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className= 'w-full flex items-center justify-center h-[40px] bg-secondary1 text-white'>
         <div className='w-4/5 flex h-40px items-center justify-center px-0px py-12px text-white no-underline font-bold text-lg'>    
            <Link to={"/"}>
                <button className='h-full w-full mr-14 text-white items-center justify-center bg-secondary2 py-1.5'>Trang chủ</button>
            </Link>
            <Link to={"/"}>
                <button className='h-full w-full mr-14 text-white items-center justify-center hover:bg-secondary2 py-1.5'>Cho thuê phòng trọ</button>
            </Link>
            <Link to={"/"}>
                <button className='h-full w-full mr-14 text-white items-center justify-center hover:bg-secondary2 py-1.5'>Nhà cho thuê</button>
            </Link>
            <Link to={"/"}>
                <button className='h-full w-full mr-14 text-white items-center justify-center hover:bg-secondary2 py-1.5'>Cho thuê căn hộ</button>
            </Link>
            <Link to={"/"}>
                <button className='h-full w-full mr-14 text-white items-center justify-center hover:bg-secondary2 py-1.5'>Cho thuê mặt bằng</button>
            </Link>
            <Link to={"/"}>
                <button className='h-full w-full mr-14 text-white items-center justify-center hover:bg-secondary2 py-1.5'>Tìm người ở ghép</button>
            </Link>
            <Link to={"/"}>
                <button className='h-full w-full mr-14 text-white items-center justify-center hover:bg-secondary2 py-1.5'>Tin tức</button>
            </Link>
            <Link to={"/"}>
                <button className='h-full w-full mr-14 text-white items-center justify-center hover:bg-secondary2 py-1.5'>Bảng dịch vụ</button>
            </Link>
         </div>
      
    </div>
  );
}

export default Menu;

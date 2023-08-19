import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className= 'w-full flex items-center justify-center h-[40px] bg-secondary1 text-white'>
         <div className='w-3/5 flex h-40px  items-center text-sm font-medium justify-between'>    
            <Link to={"/"}>
                <button className='h-10 w-full mr-0 text-white items-center justify-center bg-secondary2 py-2'>Trang chủ</button>
            </Link>
            <Link to={"/"}>
                <button className='h-10 w-full text-white items-center justify-center hover:bg-secondary2'>Cho thuê phòng trọ</button>
            </Link>
            <Link to={"/"}>
                <button className='h-10 w-full text-white items-center justify-center hover:bg-secondary2'>Nhà cho thuê</button>
            </Link>
            <Link to={"/"}>
                <button className='h-10 w-full text-white items-center justify-center hover:bg-secondary2'>Cho thuê căn hộ</button>
            </Link>
            <Link to={"/"}>
                <button className='h-10 w-full text-white items-center justify-center hover:bg-secondary2'>Cho thuê mặt bằng</button>
            </Link>
            <Link to={"/"}>
                <button className='h-10 w-full text-white items-center justify-center hover:bg-secondary2'>Tìm người ở ghép</button>
            </Link>
            <Link to={"/"}>
                <button className='h-10 w-full text-white items-center justify-center hover:bg-secondary2'>Tin tức</button>
            </Link>
            <Link to={"/"}>
                <button className='h-10 w-full text-white items-center justify-center hover:bg-secondary2'>Bảng dịch vụ</button>
            </Link>
         </div>
      
    </div>
  );
}

export default Menu;

import React from 'react';
import Logo from "../../../assets/image/logo.png";
import Button from '../../../components/Button';
import icons from "../../../utils/icons";
import { Link } from 'react-router-dom';

const { AiFillHeart, BsFillPersonPlusFill, BiLogIn, AiOutlinePlusCircle } = icons

const Header = () => {
  return (
   <div className=''>
      <div className='w-full h-[100px] flex items-center justify-around'>
         <Link to={"/"}><img src={Logo} alt='logo' className='w-[240px] h-[50px] object-contain'/></Link>
           <div className='flex items-center gap-1'>
             <div className='flex items-center h-40 gap-3 '>
               <Link to={"/favorite"}>
                    <Button  
                            Icbefore={AiFillHeart}
                            text={'Yêu thích'}
                            textColor='#333'
                            bgColor='transparent'
                      />
               </Link>
               <Link to={"/login"}>
                   <Button  
                        Icbefore={BsFillPersonPlusFill}
                        text={'Đăng nhập'}
                        textColor='#333'
                        bgColor='transparent'
                      
                   />
               </Link>
               <Link to={"/register"}>
                   <Button  
                        Icbefore={BiLogIn}
                        text={'Đăng ký'}
                        textColor='#333'
                        bgColor='transparent'
                    />
               </Link>
               <Link to={"/login"}>
                    <Button  
                            text={'Đăng tin mới'}
                            textColor='text-white'
                            bgColor='bg-secondary2'
                            IcAfter={AiOutlinePlusCircle}
                      />
               </Link>
             </div>
           </div>
      </div>
   </div>
  );
}

export default Header;

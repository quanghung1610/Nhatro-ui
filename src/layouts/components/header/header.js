import React from 'react';
import Logo from "../../../assets/image/logo.png";
import Button from '../../../components/Button';
import icons from "../../../utils/icons";
import { Link } from 'react-router-dom';

const { AiFillHeart, BsFillPersonPlusFill, BiLogIn, AiOutlinePlusCircle } = icons

const Header = () => {
  return (
   <div className=''>
      <div className='w-full flex items-center justify-around'>
         <img src={Logo} alt='logo' className='w-[240px] h-[70px] object-contain'/>
           <div className='flex items-center gap-1'>
             <div className='flex items-center gap-1'>
                <Button  
                      Icbefore={AiFillHeart}
                      text={'Yêu thích'}
                      textColor='#333'
                      bgColor='transparent'
                />
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
                <Button  
                      text={'Đăng tin mới'}
                      textColor='text-white'
                      bgColor='bg-secondary2'
                      IcAfter={AiOutlinePlusCircle}
                />
             </div>
           </div>
      </div>
   </div>
  );
}

export default Header;

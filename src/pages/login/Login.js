import React, { useState } from 'react';
import Button from '../../components/Button';
import InputForm from '../../components/InputForm';
import { Link } from 'react-router-dom';



const Login = () => {
  const [invalidFields, setInvalidFields] = useState([])
  const [payload, setPayload] = useState({
      phone: '',
      password: '',
      name: ''
  })

  return (
    <div className='w-full flex items-center justify-center '>
        <div className='bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-md'>
           <h2 className='font-semibold text-2xl mb-2'>Đăng nhập</h2>
            <div className='w-full flex flex-col gap-5'>
            <InputForm
                        setInvalidFields={setInvalidFields}
                        invalidFields={invalidFields}
                        label={'SỐ ĐIỆN THOẠI'}
                        value={payload.phone}
                        setValue={setPayload}
                        keyPayload={'phone'}
                    />
                    <InputForm
                        setInvalidFields={setInvalidFields}
                        invalidFields={invalidFields}
                        label={'MẬT KHÂU'}
                        value={payload.password}
                        setValue={setPayload}
                        keyPayload={'password'}
                        type='password'
                    />
               <Button 
                  text={'Đăng nhập ngay'}
                  bgColor='bg-secondary1'
                  textColor='text-white'
                  fullWidth
                />
                 <div className='w-full flex justify-between text-2xl'>
                    <small className='text-[blue] hover:text-[red] cursor-pointer' >
                          <Link to={"/forgot"}>
                              Bạn quên mật khẩu
                          </Link>
                      </small>
                            <small
                                onClick={() => {
                                   
                                    setPayload({
                                        phone: '',
                                        password: '',
                                        name: ''
                                    })
                                }}
                                className='text-[blue] hover:text-[red] cursor-pointer'
                            >
                               <Link to={"/register"}>
                                    Tạo tài khoản mới
                               </Link>
                            </small>
                 </div>
            </div>
        </div>
    </div>
  );
}

export default Login;

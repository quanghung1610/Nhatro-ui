import React, { useState } from 'react';
import InputForm from '../../components/InputForm';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const Register = () => {
  const [invalidFields, setInvalidFields] = useState([])
  const [payload, setPayload] = useState({

      phone: '',
      password: '',
      name: ''
  })

  return (
    <div className='w-full flex items-center justify-center '>
        <div className='bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-md'>
           <h3 className='font-semibold text-2xl mb-2 '>Đăng ký</h3>
            <div className='w-full flex flex-col gap-5 text-sm font-bold'>
                    <InputForm
                                setInvalidFields={setInvalidFields}
                                invalidFields={invalidFields}
                                label={'TÊN ĐĂNG KÝ'}
                                value={payload.name}
                                setValue={setPayload}
                                keyPayload={'name'}
                            />
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
                       <InputForm
                        setInvalidFields={setInvalidFields}
                        invalidFields={invalidFields}
                        label={'NHẬP LẠI MẬT KHÂU'}
                        value={payload.password}
                        setValue={setPayload}
                        keyPayload={'password'}
                        type='password'
                    />
                    <div>
                      <span className='text-lg'>Loại tài khoản</span>
                      <div className='w-full h-20 flex items-center justify-around border-dashed border-2'>
                          <div className='flex items-center'>
                                <input type='radio' className=' mr-2'/>
                                <label>Tìm kiếm</label>
                            </div>
                            <div className='flex items-center'>
                                <input type='radio' className=' mr-2'/>
                                <label>Chính chủ</label>
                            </div>
                            <div className='flex items-center'>
                                <input type='radio' className=' mr-2'/>
                                <label>Môi giới</label>
                            </div>
                      </div>
                    </div>
                    <Button 
                        text={'Đăng ký ngay'}
                        bgColor='bg-secondary1'
                        textColor='text-white'
                        fullWidth
                      />
                 <div className='w-full'>
                    <small className='text-sm bottom-1' >
                          Bấm vào nút đăng ký tức là bạn đã đồng ý với <Link className='text-[blue]'>quy định sử dụng</Link> của chúng tôi.
                    </small>
                      <br />
                      <br />
                            <small
                                className='text-sm'
                                onClick={() => {
                                   
                                    setPayload({
                                        phone: '',
                                        password: '',
                                        name: ''
                                    })
                                }}
                                
                            >
                              Bạn đã có tài khoản?
                               <Link to={"/login"} className='text-[blue] hover:text-[red] cursor-pointer mr-10'>
                                 Đăng nhập ngay.
                               </Link>
                            </small>
                 </div>
            </div>
        </div>
    </div>
  );
}

export default Register;

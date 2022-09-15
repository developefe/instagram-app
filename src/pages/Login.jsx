import React, { useEffect, useRef, useState } from 'react';
import Input from '../components/Input.jsx';
import {AiFillFacebook} from 'react-icons/ai'
import {useNavigate, useLocation} from 'react-router-dom';
import {login} from '../firebase.jsx';
import {Formik, Form} from "formik";
import {LoginSchema} from "../validation";

export default function Login() {
    const ref = useRef();
    
    const navigate = useNavigate();
    const location = useLocation();


    useEffect(() => {
        let images = ref.current.querySelectorAll('img'),
        total = images.length,
        current = 1;

       var interval = setInterval(() => {
            images[current].classList.remove('opacity-0');
            if (current > 0) {
                images[current-1].classList.add('opacity-0');
            }else{
                images[total-1].classList.add('opacity-0');
            }

            if (current == total-1) {
                current = 0
            }else{
                current++;
            }
        }, 3000);

        return () => {
            clearInterval(interval)
        }
    }, [ref])

    
    const handleSubmit = async (values, actions) => {
        await login(... values)
        navigate(location.state?.return || '/', {
            replace: true,
        })
    }
    
    return (
        <div className='h-full w-full flex flex-wrap overflow-auto items-center justify-center bg-zinc-50 gap-x-8'>
            <div className='hidden md:block w-[380px] h-[581px] relative bg-logo-pattern bg-[length: 468.32px_634.15px] bg-[top_left_-46px]'>
                <div className='w-[250px] h-[538px] absolute top-[27px] right-[20px]' ref={ref}>
                    <img className='w-full h-full duration-1000 ease-linear absolute top-0 left-0 transition-opacity' src="https://instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png" alt="" />
                    <img className='w-full h-full duration-1000 ease-linear absolute top-0 left-0 opacity-0 transition-opacity' src="https://instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png" alt="" />
                    <img className='w-full h-full duration-1000 ease-linear absolute top-0 left-0 opacity-0 transition-opacity' src="https://instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png" alt="" />
                    <img className='w-full h-full duration-1000 ease-linear absolute top-0 left-0 opacity-0 transition-opacity' src="https://instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png" alt="" />
                </div>
            </div>
            <div className='w-[350px] flex flex-col grid gap-y-3'>
                <div className='w-full bg-white border px-[40px] pt-8 pb-6'>
                    <a href="" className='flex justify-center mb-8'>
                        <img className="h-[51px]" src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" />
                    </a>
                    <Formik
                    validationSchema={LoginSchema}
                        initialValues={{
                            username: '',
                            password: '',
                        }}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting, values}) => (
                            <Form className='grid gap-y-1.5'>
                                <pre>{JSON.stringify(values, null, 2)}</pre>
                                <Input name="username" label={'Phone number, username or email'}/>
                                <Input name="password" type="password" label={'Password'}/>
                                <button type="submit" className='h-[30px] mt-21rounded bg-brand font-medium text-white text-sm disabled:opacity-50'>Log In</button>
                                <div className='flex justify-center my-3 mb-3.5 relative before:z-0 before:h-[1px] before:bg-gray-300 before:absolute before:left-0 before:right-0 before:top-1/2'>
                                    <div className='block bg-white font-semibold text-gray-500 text-[13px] px-5 relative z-1'>OR</div>
                                </div>
                                <a href="javascript:;" className='flex mb-2.5 text-facebook justify-center items-center text-sm gap-x-2 font-semibold'>
                                    <AiFillFacebook size={20} />
                                    Log in with Facebook
                                </a>
                                <a href="javascript:;" className='text-xs flex items-center justify-center text-link'>
                                    Forgot Password?
                                </a>
                            </Form>
                        )}

                    </Formik>
                </div>

                <div className='bg-white border p-4 text-sm text-center '>
                    Don't have a account? <a className='text-brand font-semibold'>Sign Up</a>
                </div>

            </div>
            
        </div>
    );
}
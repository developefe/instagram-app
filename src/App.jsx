import React, { useEffect, useRef } from 'react';


function App() {
    const ref = useRef();
    
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
    
    return (
        <div className='h-full w-full flex items-center justify-center bg-zinc-50 gap-x-8'>
            <div className='w-[380px] h-[581px] relative bg-logo-pattern bg-[length: 468.32px_634.15px] bg-[top_left_-46px]'>
                <div className='w-[250px] h-[538px] absolute top-[27px] right-[20px]' ref={ref}>
                    <img className='w-full h-full duration-1000 ease-linear absolute top-0 left-0 transition-opacity' src="https://instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png" alt="" />
                    <img className='w-full h-full duration-1000 ease-linear absolute top-0 left-0 opacity-0 transition-opacity' src="https://instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png" alt="" />
                    <img className='w-full h-full duration-1000 ease-linear absolute top-0 left-0 opacity-0 transition-opacity' src="https://instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png" alt="" />
                    <img className='w-full h-full duration-1000 ease-linear absolute top-0 left-0 opacity-0 transition-opacity' src="https://instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png" alt="" />
                </div>
            </div>
            <div className='w-[350px] bg-white border px-[50px] pt-8 pb-2'>
                <a href="" className='flex justify-center'>
                    <img className="h-[51px]" src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" />
                </a>
                <form className='grid gap-y-1.5'>
                    <label className='block relative' htmlFor="">
                        <input required={true} className='bg-zinc-50 border w-full h-[38px] px-2 outline-none focus:border-gray-400 font-light text-xs rounded-sm peer valid:pt-[12px]' type="text" name="" id="" />
                        <small className='absolute top-1/2 left-[9px] text-xs cursor-text pointer-events-none text-gray-400 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5'>Phone number, username or email</small>
                    </label>
                    <label className='block relative' htmlFor="">
                        <input required={true} className='bg-zinc-50 border w-full h-[38px] px-2 outline-none focus:border-gray-400 font-light text-xs rounded-sm peer valid:pt-[12px]' type="text" name="" id="" />
                        <small className='absolute top-1/2 left-[9px] text-xs cursor-text pointer-events-none text-gray-400 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5'>Password</small>
                    </label>
                    <button type="submit" className='h-[30px] rounded bg-brand text-white text-sm'>Log In</button>
                </form>
            </div>
        </div>
    );
}

export default App;
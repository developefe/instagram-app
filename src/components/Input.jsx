import { useField } from "formik";
import { useState, useEffect, useRef } from "react"

export default function Input({label, type="text", ...props}){

    const [field, meta, helpers] = useField(props);
    const [show, setShow] = useState(false);
    const [inputType, setType] = useState(type);

    useEffect(()=> {
        if (show) {
            setType('text')
        } else if (type == 'password'){
            setType('password')
        }
    }, [show]);

    return(
        <label className='block relative' htmlFor="">
            <input type={inputType} required={true} className={type=='password' ? 'bg-zinc-50 border w-full h-[38px] px-2 outline-none focus:border-gray-400 font-light text-xs rounded-sm peer valid:pt-[12px] pr-14' : 'bg-zinc-50 border w-full h-[38px] px-2 outline-none focus:border-gray-400 font-light text-xs rounded-sm peer valid:pt-[12px]'}{...field}{...props} />
            <small className='absolute top-1/2 left-[9px] text-xs cursor-text pointer-events-none text-gray-400 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5'>{label}</small>
            {type == 'password' && props?.value && (
                <div type="button" onClick={() => setShow(show =>!show)} className="cursor-pointer outline-0 absolute top-0 right-0 h-full flex items-center text-sm font-semibold pr-2">
                    {show ? 'Hide' : 'Show'}
                </div>
            )}
        </label>
    )
}
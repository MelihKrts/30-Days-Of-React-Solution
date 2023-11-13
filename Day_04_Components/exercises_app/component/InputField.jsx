import React from 'react'

const InputField = (props) => {
    const { label, type, value, onChange, placeholder, className } = props
    return (
        <>
            {/* <label>{label} : </label> */}
            <input className={`rounded-sm border mx-4 my-2 w-52 px-2 ${className}`} type={type} value={value} onChange={onChange} placeholder={placeholder} />

        </>
    )
}

export default InputField
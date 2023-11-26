import React from 'react'
import { Input } from './form-component/Input'
import { Submit } from './form-component/submit'


export const InputField = () => {
    return (
        <div className="w-full bg-input-field">


            <h1 className='font-semibold text-center text-3xl py-4'>Subscribe</h1>
            <p className='text-center my-2'>Sign Up with your email address to receive news and updates</p>

            <div className='flex flex-col items-center'>

                <div className="flex flex-wrap justify-center items-center my-2">

                    <Input type="text" placeholder="First Name" className={`rounded-md border mx-4 my-4 w-52 px-2`} />
                    <Input type="text" placeholder="Last Name" className={`rounded-md border mx-4 my-4 w-52 px-2`} />
                    <Input type="text" placeholder="Email" className={`rounded-md border mx-4 my-4 w-52 px-2`} />
                </div>
                <Submit className="bg-btn-color text-white text-center rounded-md px-4 py-2 my-4 mx-2">Subscribe</Submit>
            </div>

            
        </div>
    )
}

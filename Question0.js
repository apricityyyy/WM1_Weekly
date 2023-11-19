// UserNameEmail.js
import React from 'react'

const Question0 = (props) => {
    const { data, handleChange } = props

    return (
        <div className="max-w-[1200px] mx-auto">
        <form className="bg-white rounded mb-4">
            <div className="max-w-[1200px] mx-auto">
                    <label className="block text-gray-700 font-bold pb-24 text-5xl text-center 0" htmlFor="name">
                        What is the name you would like us to call you by?
                    </label>
                    <div className="mb-10 max-w-5xl md:max-w-2xl mx-auto">
                        <fieldset>
                            <div className='mb-4 bg-[#F7F6F4]'>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border
                                 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white
                                 focus:border-[#0094C9]" name="name" type="text" placeholder="Enter your name..." 
                                 value={data.name} onChange={handleChange} />
                            </div>
                        </fieldset>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Question0
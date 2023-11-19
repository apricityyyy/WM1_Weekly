import React from 'react'

const Question1 = (props) => {
    const { data, handleChange } = props
    return (
        <div className="max-w-[1200px] mx-auto">
            <form className="bg-white rounded mb-4">
                <div className="max-w-[1200px] mx-auto">
                    <label className="block text-gray-700 font-bold pb-24 text-5xl text-center" htmlFor="age">
                        To better tailor our services, could you select your age group category?
                    </label>
                </div>
                <div className="mb-10 max-w-5xl md:max-w-2xl mx-auto">
                    <fieldset>
                        <label className='mb-4 bg-[#F7F6F4] p-4 block cursor-pointer'>
                            <input name="age" type="radio" value="0-49" onChange={handleChange} className="mr-2" required />
                            0-49
                        </label>
                        <label className='mb-4 bg-[#F7F6F4] p-4 block cursor-pointer'>
                            <input name="age" type="radio" value="50-65" onChange={handleChange} className="mr-2" />
                            50-65
                        </label>
                    </fieldset>
                </div>
            </form>
        </div>
    )
}

export default Question1
import React from 'react'

const Question2 = (props) => {
    const { data, handleChange } = props

    return (
        <div className="max-w-[1200px] mx-auto">
            <form className="bg-white rounded mb-4">
                <div className="max-w-[1200px] mx-auto">
                    <label className="block text-gray-700 font-bold pb-24 text-5xl text-center" htmlFor="planType">
                        Are you interested in individual coverage or a family plan?
                    </label>
                </div>
                <div className="mb-10 max-w-5xl md:max-w-2xl mx-auto">
                    <fieldset>
                        <label className='mb-4 bg-[#F7F6F4] p-4 block cursor-pointer'>
                            <input name="planType" type="radio" value="family" onChange={handleChange} className="mr-2" />
                            Family
                        </label>
                        <label className='mb-4 bg-[#F7F6F4] p-4 block cursor-pointer'>
                            <input name="planType" type="radio" value="individual" onChange={handleChange} className="mr-2" />
                            Individual
                        </label>
                    </fieldset>
                </div>
            </form>
        </div>
    )
}

export default Question2
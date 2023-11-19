import React from 'react'

const Question3 = (props) => {
    const { data, handleChange } = props

    // Determine if the selected plan is 'family'
    let budgetRangeCheck = data.planType === 'family';

    return (
        <div className="max-w-[1000px] mx-auto">
            <form className="bg-white rounded mb-4">
                <div className="max-w-[1200px] mx-auto">
                    <label className="block text-gray-700 font-bold pb-24 text-5xl text-center" htmlFor="planType">
                        What is your comfortable price range for an annual health insurance premium?
                    </label>
                </div>
                <div className="mb-10 max-w-5xl md:max-w-2xl mx-auto">

                    <fieldset>
                        {!budgetRangeCheck && (
                            <label className='mb-4 bg-[#F7F6F4] p-4 block cursor-pointer'>
                                <input name="budget" type="radio" value="0-300" onChange={handleChange} className="mr-2" />
                                0-300 AZN
                            </label>
                        )}
                        <label className='mb-4 bg-[#F7F6F4] p-4 block cursor-pointer'>
                            <input name="budget" type="radio" value="301-600" onChange={handleChange} className="mr-2" />
                            301-600 AZN
                        </label>
                        <label className='mb-4 bg-[#F7F6F4] p-4 block cursor-pointer'>
                            <input name="budget" type="radio" value="601-800" onChange={handleChange} className="mr-2" />
                            601-800 AZN
                        </label>
                        <label className='mb-4 bg-[#F7F6F4] p-4 block cursor-pointer'>
                            <input name="budget" type="radio" value="801-1000" onChange={handleChange} className="mr-2" />
                            801-1000 AZN
                        </label>
                    </fieldset>
                </div>
            </form>
        </div>
    )
}

export default Question3
import React from 'react'

const Question4 = (props) => {
    const { data, handleChange } = props

    return (
        <div className="max-w-[1000px] mx-auto">
            <form className="bg-white rounded mb-4">
                <div className="max-w-[1200px] mx-auto">
                    <label className="block text-gray-700 font-bold pb-14 text-5xl text-center" htmlFor="planType">
                        What is the primary reason you are seeking health insurance?
                    </label>
                </div>
                <div className="mb-10 max-w-5xl md:max-w-2xl mx-auto">

                    <fieldset>
                        <label className='mb-4 bg-[#F7F6F4] p-4 block cursor-pointer'>
                            <input name="reason" type="radio" value="basicCover" onChange={handleChange} className="mr-2" />
                            I want to be prepared for life's unexpected moments; therefore, I am seeking <b>basic coverage for emergencies.</b>
                        </label>
                        <label className='mb-4 bg-[#F7F6F4] p-4 block cursor-pointer'>
                            <input name="reason" type="radio" value="comprehensive" onChange={handleChange} className="mr-2" />
                            Every aspect of health matters to me; I need <b>comprehensive</b> health services that cover a wide range of medical needs.
                        </label>
                        <label className='mb-4 bg-[#F7F6F4] p-4 block cursor-pointer'>
                            <input name="reason" type="radio" value="preventive" onChange={handleChange} className="mr-2" />
                            Staying ahead of health issues is my priority; I am looking for a plan that focuses on <b>preventive care</b> to maintain my wellbeing.
                        </label>
                        <label className='mb-4 bg-[#F7F6F4] p-4 block cursor-pointer'>
                            <input name="reason" type="radio" value="wellness" onChange={handleChange} className="mr-2" />
                            For my health, both overall <b>wellness care</b> and attention to <b>specific concerns</b> are key – this includes services like physiotherapy, therapeutic massage, and vision care.
                        </label>
                    </fieldset>
                </div>
            </form>
        </div>
    )
}

export default Question4
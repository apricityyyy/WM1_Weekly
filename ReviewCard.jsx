"use client"
import React from 'react'

const ReviewCard = ({userImg, userName, userComment}) => {
  return (
    <div className='h-[225px] border  bg-white rounded-xl p-5'>
        <div className='flex w-[100%] justify-center items-center mb-5'>
            <img className='w-[54px] h-[54px] rounded-full mr-3' src={userImg} alt="" />
            <span className='w-[70%] text-[#636363]'>{userName}</span>
        </div>
        <div className=''>
            <p className='text-[#0094C9]'>{userComment}</p>
        </div>
    </div>
  )
}

export default ReviewCard
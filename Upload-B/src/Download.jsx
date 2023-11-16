import React from 'react'
import {BsCloudUpload} from 'react-icons/bs'

const Download = () => {
  return (
    <div className='flex items-center justify-center w-96'>
        <label className='flex flex-col items-center justify-center w-full h-64 border-2 border-violet-700 border-dashed rounded-lg cursor-pointer bg-violet-600 dark:bg-violet-700 hover:bg-violet-900 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-violet-600 '>
            <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                <BsCloudUpload className='text-white text-5xl pb-5'/>
                <p className='mb-2 text-sm text-white dark:text-white '><span className='font-semibold'>Click to upload</span>or drag and drop</p>
                <p className='text-xs text-white dark:text-white'>SVG, PNG, JPG or GIF (MAX. 8x400px) </p>

            </div>
            <input id='dropzone-file' type='file' className='hidden' />
        </label>
    </div>
  )
}

export default Download
import React from 'react'
import PlayStoreImg from '../../assets/Play_store.png';

const AppStore = () => {
  return (
    <>
      <div className='bg-gray-100 dark:bg-gray-800 py-14'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-4'>
                <div>
                    <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold dark:text-gray-400 text-gray-700'>Foodly available for Android and IOS</h1>
                </div>
                <div>
                    <a href="#">
                        <img src={PlayStoreImg} alt="playstore" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default AppStore

import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className="px-6 lg:px-28 bg-teal-100 flex items-center">
        <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
            <div className="md:w-1/2 space-y-8 h-full">
                <h2 className="text-5xl font-bold leading-snug text-black">Buy and Sell Your Books <span className="text-blue-700">
                for the Best Prices
                </span></h2>
                <p className="md:w-4/5">Discover a wide range of books available for buying and selling. Whether you're looking to 
                add to your collection or find new owners for your cherished books, we've got you covered.</p>
                <div className="flex items-center">
                    <input 
                        type="search" 
                        name="search" 
                        id="search" 
                        placeholder='Search a book' 
                        className="py-2 px-4 rounded-l-sm outline-none border border-gray-300"
                    />
                    <button 
                        className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded-r-sm"
                    >
                        Search
                    </button>
                </div>
            </div>
            <div>
                <BannerCard />
            </div>
        </div>
    </div>
  )
}

export default Banner
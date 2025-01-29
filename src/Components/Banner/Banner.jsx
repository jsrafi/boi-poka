import React from 'react';
import BannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen mt-5 rounded-xl max-w-[1200px] mx-auto body">
            <div className="hero-content flex-col lg:flex-row-reverse gap-16">
                <img className='rounded-xl'
                    src={BannerImg} />
                <div className='' >
                    <h1 className="text-5xl font-bold flex flex-col gap-4">Books to freshen up <br /> <span >your bookshelf</span></h1>
                    <button className="btn bg-[#23BE0A] text-white rounded-xl mt-10 py-6">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
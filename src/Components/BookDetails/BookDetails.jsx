import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './BookDetails.css'


const BookDetails = () => {

    const { bookId } = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();
    const book = data.find(book => book.bookId === id);

    const { author, bookName, image, publisher, review, totalPages, yearOfPublishing, tags, category, rating } = book;
    return (
        <div className="hero bg-slate-50 min-h-screen max-w-[1200px] mx-auto my-10 rounded-2xl">
            <div className="hero-content flex-col lg:flex-row gap-20">
                <div className='w-[100%]'>

                    <img
                        src={image}
                        class="max-w-lg rounded-lg shadow-2xl p-16" />
                </div>
                <div className='flex flex-col gap-5 '>
                    <h1 className="text-5xl font-bold  font-playball body">{bookName}</h1>
                    <h3 className='text-2xl font-semibold mt-2 body'>By : {author}</h3>
                    <hr className='my-2  border-gray-400 body' />
                    <h3 className='text-2xl font-semibold body'>{category}</h3>
                    <hr className='my-2 border-gray-400 body' />
                    <p className=" text-justify body">
                        <span className='font-bold '>Reviews:</span> {review}
                    </p>
                    <div className='flex gap-4 items-center'>
                        <h3 className='text-xl font-bold body'>Tags: </h3>
                        <p className='border border-red-200 bg-white font-semibold text-green-500 px-2 rounded-xl body'>{tags[0]}</p>
                        <p className='border border-red-200 bg-white font-semibold text-green-500 px-2 rounded-xl body'>{tags[1]}</p>
                    </div>
                    <hr className='my-2  border-gray-400' />
                    <div className='flex flex-col gap-4'>
                        <h4>Number of Pages : <span className='font-bold ml-4'>{totalPages}</span></h4>
                        <h4>Publisher : <span className='font-bold ml-[75px]'>{publisher}</span></h4>
                        <h4>Year of Publishing: : <span className='font-bold ml-2'>{yearOfPublishing}</span></h4>
                        <h4>Rating : <span className='font-bold ml-[95px]'>{rating}</span></h4>
                    </div>
                    <div className='flex gap-6'>
                        <button className="w-fit btn px-6 py-6 border-gray-400">Read</button>
                        <button className="w-fit btn btn-primary px-6 py-6">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
import React from 'react';
import Icon from '../../assets/Vector.png'
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const {bookId, bookName, author, image, rating, category, tags } = book;
    return (
        <Link to={`/book/${bookId}`}>
            <div className="card bg-gray-200 border border-gray-400 w-96 shadow-sm p-6 mx-auto max-w-[90%] md:max-w-full ">
                <figure className='bg-red-50 py-6 rounded-lg border border-red-200'>
                    <img className='h-[166px]'
                        src={image}
                        alt={bookName} />
                </figure>
                <div className=" md:card-body mt-5 flex flex-col gap-3 ml-2">
                    <div className="card-actions  ">
                        <div className="border border-red-200 bg-red-50 font-semibold text-green-500 px-2 rounded-xl">{tags[0]}</div>
                        <div className=" border border-red-200 bg-red-50 font-semibold text-green-500 px-2 rounded-xl">{tags[1]}</div>
                    </div>
                    <h2 className="card-title text-2xl font-semibold">
                        {bookName}

                    </h2>
                    <p className='font-semibold'> By: {author}</p>

                    <hr className='text-gray-400 border border-dashed' />

                    <div className='flex justify-between mt-2'>
                        <p className='font-semibold '>{category}</p>
                        <p className='flex gap-1 items-center justify-end'>{rating} <img src={Icon} alt="" /></p>
                    </div>

                </div>

            </div>
        </Link>
    );
};

export default Book;
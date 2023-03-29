import React from 'react';

const SingleData = (props) => {

    const { name, image, features, published_in } = props.singleData;




    return (
        <div>
            <div className="card w-full h-[600px] bg-base-100 shadow-2xl">
                <figure><img className='h-56 w-full' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">Features</h2>

                    {
                        features.map((feature, index) => <p>{index + 1}. {feature}</p>)
                    }

                    <hr className='border-gray-700' />

                    <h1 className="card-title font-bold">{name}</h1>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto commodi, ratione iste libero aut?</p>

                    <div className='flex justify-between items-center'>
                        <div className='flex'>
                            <span className='mr-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                </svg>


                            </span>
                            <p>{published_in}</p>
                        </div>
                        <div className='bg-sky-200 p-2 rounded-md'>
                            <span className='cursor-pointer '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                </svg>

                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleData;
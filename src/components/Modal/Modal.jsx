import React from 'react';

const Modal = (props) => {


    console.log(props);
    const { image_link, description, integrations, features } = props.singleData;
    console.log(props.singleData);

    return (
        <>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">


                    <div className="card lg:card-side bg-base-100">

                        <div className="card-body w-1/4">
                            <h2 className="card-title">{description ? description : 'Data Not Found'}</h2>

                            <div className='flex justify-between pe-40'>
                                <div>
                                    <h1 className='text-xl font-bold'>Features</h1>
                                    {
                                        Object.values(features || {}).map(value => <p>{value.feature_name ? value.feature_name : "Data Not Found"}</p>)
                                    }

                                </div>
                                <div>
                                    <h1 className='text-xl font-bold'>Intigrations</h1>

                                    {
                                        // integrations ? integrations.map(int => <p>{int ? int : "Data Not Found"}</p>) : "Data Not Found"

                                        integrations && integrations.map(int => <p>{int ? int : "Data Not Found"}</p>)
                                    }
                                </div>
                            </div>

                            <div className="card-actions justify-end">


                                <button className="btn btn-primary">Listen</button>
                            </div>
                        </div>

                        <figure><img className='w-96 h-64 rounded-xl' src={image_link ? image_link[0] : null} alt="Album" /></figure>
                    </div>


                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
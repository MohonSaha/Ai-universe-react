import React from 'react';

const Button = (props) => {

    const {children} = props;

    return (
        <div className='text-center mt-10'>
            <button className="btn btn-error">{children}</button>
        </div>
    );
};

export default Button;
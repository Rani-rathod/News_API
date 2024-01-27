import React from 'react';

const Header = () => {
    return (
        <div className=''>
            <div className='row justify-content-center align-items-center my-5'>
                <div className='col-auto border'>
                    <div className='headertext'>NewsAPI</div>
                </div>
                <div className='col-auto border'>
                    <img src='Ellipse 1.png' alt='logo' />
                </div>
                <div className='col-auto border'>
                    <div className='header'>Org</div>
                </div>
            </div>
            <hr class="border border-dark border-1 opacity-50"></hr>
            <hr class="border border-dark border-1 opacity-50"></hr>
        </div>
    );
};

export default Header;

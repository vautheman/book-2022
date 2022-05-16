import React from 'react';
import Realisations from './Realisations';

const Header = () => {
    return (
        <div className='grid lg:grid-cols-2' id='realisation'>
            <div className='flex flex-col justify-center h-screen py-32 sticky top-0'>
                <div className='inline-flex flex-col gap-4'>
                    <p className='text-[#f2f2f2] text-2xl'><span className='opacity-50'>Je suis</span> Victor Autheman</p>
                    <h1 className='text-[#f2f2f2] font-bold text-7xl leading-[5.5rem]'>Designer & développeur<br/><span className='text-green-fluo'>front-end</span></h1>
                    <p className='w-12 h-12 bg-green-fluo rounded-full flex'><i className="ri-download-cloud-2-line m-auto ri-xl"></i></p>
                </div>


                <svg className='absolute bottom-10' width="16" height="88" viewBox="0 0 16 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.2929 87.7071C7.68342 88.0976 8.31659 88.0976 8.70711 87.7071L15.0711 81.3431C15.4616 80.9526 15.4616 80.3195 15.0711 79.9289C14.6805 79.5384 14.0474 79.5384 13.6569 79.9289L8 85.5858L2.34315 79.9289C1.95262 79.5384 1.31946 79.5384 0.928936 79.9289C0.538411 80.3195 0.538411 80.9526 0.928936 81.3431L7.2929 87.7071ZM7 4.37114e-08L7 87L9 87L9 -4.37114e-08L7 4.37114e-08Z" fill="#49DF93"/>
                </svg>
            </div>
            
            <Realisations/>


            
        </div>
    );
};

export default Header;
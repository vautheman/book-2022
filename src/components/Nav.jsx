import React from 'react';

const Nav = () => {
    return (
        <div className='flex justify-between fixed w-100 container mx-auto py-8 z-50'>
            <p className='font-bold text-[#f2f2f27f] text-4xl my-auto'>victor.</p>
            <div className="w-max inline-block mr-5 my-auto">
                <div className="flex items-center gap-2">
                    <span className="icon-darkmode font-primary text-sm text-[#f2f2f2]">Dark</span>
                    <input className="inline-block w-0 h-0 invisible peer" type="checkbox" id="darkmode"/><label htmlFor="darkmode" className="shadow-inner inline-block bg-[#f2f2f225] w-16 h-8 rounded-full relative after:absolute after:top-0.5 after:left-0.5 after:w-7 after:h-7 after:bg-green-fluo after:shadow-md after:rounded-full after:transition-all after:duration-300 peer-checked:after:left-[calc(100%_-_2px)] peer-checked:after:translate-x-[-100%] active:after:w-9"></label>
                </div>
            </div>
        </div>
    );
};

export default Nav;
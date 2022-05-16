import React from 'react';

const Cursor = () => {

    const cursor = React.useRef(null);
    const cursorMiddle = React.useRef(null);
    
    React.useEffect(() => {
        document.addEventListener("mousemove", (event)=>{
            const {clientX, clientY} = event;

            cursor.current.style.top = clientY - cursor.current.clientWidth / 2 +"px";
            cursor.current.style.left = clientX - cursor.current.clientHeight / 2 +"px";

            cursorMiddle.current.style.top = clientY - cursorMiddle.current.clientWidth / 2 +1 +"px";
            cursorMiddle.current.style.left = clientX - cursorMiddle.current.clientHeight / 2 +1 +"px";
            
        })
    }, [])

    return (
        <>
            <div ref={cursor} className="w-8 h-8 border border-solid border-[#f2f2f2] rounded-full fixed z-50 pointer-events-none transition-all duration-150 ease-out"></div>
            <div ref={cursorMiddle} className="w-1 h-1 bg-[#f2f2f2] rounded-full fixed z-50 pointer-events-none"></div>
        </>
    );
};

export default Cursor;
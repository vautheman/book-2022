import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

function RessourcesList() {
    const [postsPerPage] = useState(6);
    const [offset, setOffset] = useState(0);
    const [posts, setAllPosts] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    const getPostData = (data) => {
        console.log(data)
        return (
            data.map(ressource =>
                <article key={ressource.cardId} className='p-8 rounded-xl bg-[#22244D] flex flex-col gap-3 min-w-[25rem] max-w-[25rem] min-h-[25rem] w-auto justify-between'>
                    <header className="flex flex-row justify-between items-center">
                        <img className='h-12 w-auto' src={`./img/logo/${ressource.catImage}`} alt={ressource.catImage} />
                        <p className='text-[#f2f2f27f]'>{ressource.cardDate}</p>
                    </header>
                    <div>
                        <h4 className='text-white text-xl font-bold mb-5'>{ressource.cardNom}</h4>
                        <p className='text-[#f2f2f27f]'>{ressource.cardDesc}</p>
                    </div> 
                    <footer className='flex flex-row flex-nowrap items-center gap-5'>
                        <p className='text-white font-bold text-lg'>Consulter</p>
                        <svg width="100%" height="16" viewBox="0 0 231 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M230.436 8.70711C230.826 8.31658 230.826 7.68342 230.436 7.29289L224.072 0.928932C223.681 0.538408 223.048 0.538408 222.657 0.928932C222.267 1.31946 222.267 1.95262 222.657 2.34315L228.314 8L222.657 13.6569C222.267 14.0474 222.267 14.6805 222.657 15.0711C223.048 15.4616 223.681 15.4616 224.072 15.0711L230.436 8.70711ZM0.927795 9L229.728 9V7L0.927795 7L0.927795 9Z" fill="#49DF93"/>
                        </svg>
                    </footer>
                </article>
            )
        )
    }

    const getAllPost = async () =>{
        const res = await axios.get(`https://www.autheman-victor.fr/API_BOOK/API/ressource`);
        const data = res.data;
        const slice = data.slice(offset, offset + postsPerPage);
        
        const postData = getPostData(slice);

        setAllPosts(postData);
        setPageCount(Math.ceil(data.length / postsPerPage));
    };

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage * postsPerPage);
    };


    useEffect(() => {
        getAllPost()
    }, [offset]);


    return (
        <>
            <div className="flex gap-10 flex-wrap justify-center">
                {posts}
            </div>

            <ReactPaginate className='text-white flex flex-row gap-6 m-auto mt-10 text-lg'
                previousLabel={null}
                nextLabel={null}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"text-green-fluo font-bold"} />
        </>
        
        
    )
}

export default RessourcesList;
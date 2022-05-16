import React from 'react';
import RessourcesList from './RessourcesList';

const Ressources = () => {
    return (
        <section id='ressources' className='flex flex-col'>
            <h2 className='text-[#f2f2f2]/50 font-bold text-4xl pt-32 mb-10 text-center'><span className='font-extralight'>04.</span> ressources</h2>
            
                <RessourcesList/>
                {/* <article className='p-8 rounded-xl bg-[#22244D] flex flex-col gap-3 min-w-[25rem] max-w-[25rem] min-h-[25rem] w-auto justify-between'>
                    <header className="flex flex-row justify-between">
                        <p>image</p>
                        <p className='text-[#f2f2f27f]'>21/02/2021</p>
                    </header>
                    <div>
                        <h4 className='text-white text-xl font-bold mb-5'>Coder une page en HTML</h4>
                        <p className='text-[#f2f2f27f]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mauris ut lorem ultricies sed felis nunc. Vel neque egestas vitae egestas.</p>
                    </div> 
                    <footer className='flex flex-row flex-nowrap items-center gap-5'>
                        <p className='text-white font-bold text-lg'>Consulter</p>
                        <svg width="100%" height="16" viewBox="0 0 231 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M230.436 8.70711C230.826 8.31658 230.826 7.68342 230.436 7.29289L224.072 0.928932C223.681 0.538408 223.048 0.538408 222.657 0.928932C222.267 1.31946 222.267 1.95262 222.657 2.34315L228.314 8L222.657 13.6569C222.267 14.0474 222.267 14.6805 222.657 15.0711C223.048 15.4616 223.681 15.4616 224.072 15.0711L230.436 8.70711ZM0.927795 9L229.728 9V7L0.927795 7L0.927795 9Z" fill="#49DF93"/>
                        </svg>
                    </footer>
                </article>

                <article className='p-8 rounded-xl bg-[#22244D] flex flex-col gap-3 min-w-[25rem] max-w-[25rem] min-h-[25rem] w-auto justify-between'>
                    <header className="flex flex-row justify-between">
                        <p>image</p>
                        <p className='text-[#f2f2f27f]'>21/02/2021</p>
                    </header>
                    <div>
                        <h4 className='text-white text-xl font-bold mb-5'>Coder une page en HTML</h4>
                        <p className='text-[#f2f2f27f]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mauris ut lorem ultricies sed felis nunc. Vel neque egestas vitae egestas.</p>
                    </div> 
                    <footer className='flex flex-row flex-nowrap items-center gap-5'>
                        <p className='text-white font-bold text-lg'>Consulter</p>
                        <svg width="100%" height="16" viewBox="0 0 231 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M230.436 8.70711C230.826 8.31658 230.826 7.68342 230.436 7.29289L224.072 0.928932C223.681 0.538408 223.048 0.538408 222.657 0.928932C222.267 1.31946 222.267 1.95262 222.657 2.34315L228.314 8L222.657 13.6569C222.267 14.0474 222.267 14.6805 222.657 15.0711C223.048 15.4616 223.681 15.4616 224.072 15.0711L230.436 8.70711ZM0.927795 9L229.728 9V7L0.927795 7L0.927795 9Z" fill="#49DF93"/>
                        </svg>
                    </footer>
                </article>

                <article className='p-8 rounded-xl bg-[#22244D] flex flex-col gap-3 min-w-[25rem] max-w-[25rem] min-h-[25rem] w-auto justify-between'>
                    <header className="flex flex-row justify-between">
                        <p>image</p>
                        <p className='text-[#f2f2f27f]'>21/02/2021</p>
                    </header>
                    <div>
                        <h4 className='text-white text-xl font-bold mb-5'>Coder une page en HTML</h4>
                        <p className='text-[#f2f2f27f]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mauris ut lorem ultricies sed felis nunc. Vel neque egestas vitae egestas.</p>
                    </div> 
                    <footer className='flex flex-row flex-nowrap items-center gap-5'>
                        <p className='text-white font-bold text-lg'>Consulter</p>
                        <svg width="100%" height="16" viewBox="0 0 231 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M230.436 8.70711C230.826 8.31658 230.826 7.68342 230.436 7.29289L224.072 0.928932C223.681 0.538408 223.048 0.538408 222.657 0.928932C222.267 1.31946 222.267 1.95262 222.657 2.34315L228.314 8L222.657 13.6569C222.267 14.0474 222.267 14.6805 222.657 15.0711C223.048 15.4616 223.681 15.4616 224.072 15.0711L230.436 8.70711ZM0.927795 9L229.728 9V7L0.927795 7L0.927795 9Z" fill="#49DF93"/>
                        </svg>
                    </footer>
                </article>

                <article className='p-8 rounded-xl bg-[#22244D] flex flex-col gap-3 min-w-[25rem] max-w-[25rem] min-h-[25rem] w-auto justify-between'>
                    <header className="flex flex-row justify-between">
                        <p>image</p>
                        <p className='text-[#f2f2f27f]'>21/02/2021</p>
                    </header>
                    <div>
                        <h4 className='text-white text-xl font-bold mb-5'>Coder une page en HTML</h4>
                        <p className='text-[#f2f2f27f]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mauris ut lorem ultricies sed felis nunc. Vel neque egestas vitae egestas.</p>
                    </div> 
                    <footer className='flex flex-row flex-nowrap items-center gap-5'>
                        <p className='text-white font-bold text-lg'>Consulter</p>
                        <svg width="100%" height="16" viewBox="0 0 231 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M230.436 8.70711C230.826 8.31658 230.826 7.68342 230.436 7.29289L224.072 0.928932C223.681 0.538408 223.048 0.538408 222.657 0.928932C222.267 1.31946 222.267 1.95262 222.657 2.34315L228.314 8L222.657 13.6569C222.267 14.0474 222.267 14.6805 222.657 15.0711C223.048 15.4616 223.681 15.4616 224.072 15.0711L230.436 8.70711ZM0.927795 9L229.728 9V7L0.927795 7L0.927795 9Z" fill="#49DF93"/>
                        </svg>
                    </footer>
                </article>

                <article className='p-8 rounded-xl bg-[#22244D] flex flex-col gap-3 min-w-[25rem] max-w-[25rem] min-h-[25rem] w-auto justify-between'>
                    <header className="flex flex-row justify-between">
                        <p>image</p>
                        <p className='text-[#f2f2f27f]'>21/02/2021</p>
                    </header>
                    <div>
                        <h4 className='text-white text-xl font-bold mb-5'>Coder une page en HTML</h4>
                        <p className='text-[#f2f2f27f]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mauris ut lorem ultricies sed felis nunc. Vel neque egestas vitae egestas.</p>
                    </div> 
                    <footer className='flex flex-row flex-nowrap items-center gap-5'>
                        <p className='text-white font-bold text-lg'>Consulter</p>
                        <svg width="100%" height="16" viewBox="0 0 231 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M230.436 8.70711C230.826 8.31658 230.826 7.68342 230.436 7.29289L224.072 0.928932C223.681 0.538408 223.048 0.538408 222.657 0.928932C222.267 1.31946 222.267 1.95262 222.657 2.34315L228.314 8L222.657 13.6569C222.267 14.0474 222.267 14.6805 222.657 15.0711C223.048 15.4616 223.681 15.4616 224.072 15.0711L230.436 8.70711ZM0.927795 9L229.728 9V7L0.927795 7L0.927795 9Z" fill="#49DF93"/>
                        </svg>
                    </footer>
                </article>

                <article className='p-8 rounded-xl bg-[#22244D] flex flex-col gap-3 min-w-[25rem] max-w-[25rem] min-h-[25rem] w-auto justify-between'>
                    <header className="flex flex-row justify-between">
                        <p>image</p>
                        <p className='text-[#f2f2f27f]'>21/02/2021</p>
                    </header>
                    <div>
                        <h4 className='text-white text-xl font-bold mb-5'>Coder une page en HTML</h4>
                        <p className='text-[#f2f2f27f]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mauris ut lorem ultricies sed felis nunc. Vel neque egestas vitae egestas.</p>
                    </div> 
                    <footer className='flex flex-row flex-nowrap items-center gap-5'>
                        <p className='text-white font-bold text-lg'>Consulter</p>
                        <svg width="100%" height="16" viewBox="0 0 231 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M230.436 8.70711C230.826 8.31658 230.826 7.68342 230.436 7.29289L224.072 0.928932C223.681 0.538408 223.048 0.538408 222.657 0.928932C222.267 1.31946 222.267 1.95262 222.657 2.34315L228.314 8L222.657 13.6569C222.267 14.0474 222.267 14.6805 222.657 15.0711C223.048 15.4616 223.681 15.4616 224.072 15.0711L230.436 8.70711ZM0.927795 9L229.728 9V7L0.927795 7L0.927795 9Z" fill="#49DF93"/>
                        </svg>
                    </footer>
                </article> */}
        </section>
    );
};

export default Ressources;
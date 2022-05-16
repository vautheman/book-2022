import React from 'react';

const About = () => {
    return (
        <section id='about' className='mt-10'>
        <h2 className='text-[#f2f2f27f] font-bold text-4xl mb-10'><span className='font-extralight'>02.</span> à propos</h2>
        <div className='flex gap-56 justify-between'>
            <div className='flex flex-col gap-10'>
                    <div className='flex flex-row justify-between'>
                        <div className='w-64 h-64 flex text-center rounded-xl bg-[#22244D]'>
                            <div className='m-auto'>
                                <i className="ri-medal-line text-green-fluo ri-3x"></i>
                                <h4 className='text-[#f2f2f2] text-2xl font-bold mt-4'>Expérience</h4>
                                <p className='text-[#f2f2f270] text-lg mt-1'>Équi. Bac +4</p>
                            </div>
                        </div>

                        <div className='w-64 h-64 flex text-center rounded-xl bg-[#22244D]'>
                            <div className='m-auto'>
                                <i className="ri-folder-zip-line text-green-fluo ri-3x"></i>
                                <h4 className='text-[#f2f2f2] text-2xl font-bold mt-4'>Réalisations</h4>
                                <p className='text-[#f2f2f270] text-lg mt-1'>+11 terminées</p>
                            </div>
                        </div>

                        <div className='w-64 h-64 flex text-center rounded-xl bg-[#22244D]'>
                            <div className='m-auto'>
                                <i className="ri-money-euro-circle-line text-green-fluo ri-3x"></i>
                                <h4 className='text-[#f2f2f2] text-2xl font-bold mt-4'>Contrat actuel</h4>
                                <p className='text-[#f2f2f270] text-lg mt-1'>Drim France</p>
                            </div>
                        </div>
                    </div>

                    <p className='text-white text-justify text-lg leading-7'>Salut! Je m'appelle victor autheman-thirard et j'aime m'amuser à designer et créer des sites internets. Je m'intéresse au développement front-end depuis 2008 et aujourd'hui je suis étudiant en école de graphisme et du webdesign. Je suis passionné à tout ce qui touche aux nouvelles technologies; intéligence artificielle, fabrication et pilotage de drône FPV ou encore la domotique.</p>

                    <div className='flex flex-row gap-5 text-[#f2f2f27f] items-center'>
                        <i className="ri-behance-fill ri-2x hover:text-green-fluo cursor-pointer transition-all"></i>
                        <i className="ri-dribbble-fill ri-2x hover:text-green-fluo cursor-pointer transition-all"></i>
                        <i className="ri-instagram-line ri-2x hover:text-green-fluo cursor-pointer transition-all"></i>
                        <i className="ri-facebook-circle-line ri-2x hover:text-green-fluo cursor-pointer transition-all"></i>
                        <i className="ri-linkedin-fill ri-2x hover:text-green-fluo cursor-pointer transition-all"></i>
                        <i className="ri-github-fill ri-2x hover:text-green-fluo cursor-pointer transition-all"></i>
                        <i className="ri-codepen-line ri-2x hover:text-green-fluo cursor-pointer transition-all"></i>
                        <svg width="20" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1_453)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.0188 0H0.0062561V4.9875C0.0062561 7.7625 2.25626 10.0125 4.99376 10.0125H7.69376H8.06876C9.11876 10.0125 9.98126 10.875 10.0188 11.925V19.9875V25.0125C10.0188 27.75 12.2688 30 15.0063 30H19.9938V19.9875V10.0125V4.9875C19.9938 2.25 17.7438 0 15.0063 0H10.0188Z" fill="#F2F2F2" fillOpacity="0.5"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.0062561 13.05H5.18126C6.26876 13.05 7.13126 13.9125 7.13126 15V16.9501H1.95626C0.868756 16.9501 0.0062561 16.0876 0.0062561 15V13.05Z" fill="#F2F2F2" fillOpacity="0.5"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1_453">
                            <rect width="2rem" height="2rem" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>

                    </div>
                </div>
                <div className='flex w-full'>
                    <img className='w-80 m-auto' src="./img/photo-profil.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default About;
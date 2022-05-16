import React from 'react';

const Contact = () => {
    return (
        <section id='contact'>
            <h2 className='text-[#f2f2f2]/50 font-bold text-4xl pt-32 mb-10 text-center'><span className='font-extralight'>05.</span> et ensuite ?</h2>
            <p className='text-white text-lg leading-7 text-center'>Je suis toujours partant pour vos projets et les opportunités de créer.<br/>N'hésitez pas à me dire bonjour 👋</p>


            <div className='flex flex-row flex-wrap mt-20 justify-center gap-20'>
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col bg-[#22244D] rounded-xl p-5 justify-between items-center gap-5 min-w-[26rem] w-auto'>
                        <i className="ri-mail-open-line ri-3x text-green-fluo"></i>
                        <div className='text-center'>
                            <h4 className='text-[#f2f2f2] text-2xl font-bold'>Email</h4>
                            <p className='text-[#f2f2f270] text-lg mt-1'><a href="mailto:contact@autheman-victor.fr">contact@autheman-victor.fr</a></p>
                        </div>
                        <footer>
                            <p className='text-green-fluo text-lg'><a href="">Écrire un message</a></p>
                        </footer>
                    </div>

                    <div className='flex flex-col bg-[#22244D] rounded-xl p-5 justify-between items-center gap-5 min-w-[26rem] w-auto'>
                        <i className="ri-mail-open-line ri-3x text-green-fluo"></i>
                        <div className='text-center'>
                            <h4 className='text-[#f2f2f2] text-2xl font-bold'>Email</h4>
                            <p className='text-[#f2f2f270] text-lg mt-1'><a href="mailto:contact@autheman-victor.fr">contact@autheman-victor.fr</a></p>
                        </div>
                        <footer>
                            <p className='text-green-fluo text-lg'><a href="">Écrire un message</a></p>
                        </footer>
                    </div>
                </div>

                <form name="contact" className='w-2/5' method='post' data-netlify="true" onSubmit="submit">
                    <input type="hidden" name='form-name' value="contact" />
                    <div className='w-full flex flex-col gap-5 mx-auto'>
                        <input type="text" name='name' className='mx-auto w-full text-lg border border-[#ffffff7f] rounded-xl p-5 bg-transparent text-[#f2f2f2]' placeholder='Nom, prénom'/>
                        <input type="email" name='email' className='mx-auto w-full text-lg border border-[#ffffff7f] rounded-xl p-5 bg-transparent text-[#f2f2f2]' placeholder='Adresse email'/>

                        <textarea name="message" className='mx-auto w-full  text-lg border border-[#ffffff7f] rounded-xl p-5 bg-transparent min-h-[300px] h-auto text-[#f2f2f2]' placeholder='Message...'></textarea>

                        <button type="submit" className='w-12 h-12 bg-green-fluo rounded-full flex'><i className="ri-send-plane-fill m-auto ri-xl"></i></button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
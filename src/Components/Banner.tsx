import bannerPic from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <section className='inter banner w-[1216px] mx-auto flex justify-between items-center mt-[96px]'>
            <div className="banner-content w-[696px] h-[420px]">
                <h1 className='font-extrabold text-[3.8rem]'>Build Your Ideal <br /> <span className='bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</span></h1>
                <p className='text-[1.1rem] font-normal text-[#475569]'>Explore frontend, backend, database, and tooling options, <br />
                   compare them side by side, and put together the stack that fits your <br />
                    next project.</p>
                   <div className='flex items-center gap-2  mt-[40px]'>
                    <button className="btn bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] text-white px-6 py-3 rounded-lg">Explore Technologies</button>
                   <button className="btn w-[170px] border border-[#E5E7EB] text-[#374151]">Learn More</button>
                   </div>
            </div>
            <div>
               <img className='mx-auto w-[488px] h-[420px]' src={bannerPic} alt="" />
            </div>
        </section>
    );
};

export default Banner;
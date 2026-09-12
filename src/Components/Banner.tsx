import bannerPic from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <section className='inter banner w-304 mx-auto flex justify-between items-center mt-24'>
            <div className="banner-content w-174 h-105">
                <h1 className='font-extrabold text-[3.8rem]'>Build Your Ideal <br /> <span className='bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</span></h1>
                <p className='text-[1.1rem] font-normal text-[#475569]'>Explore frontend, backend, database, and tooling options, <br />
                   compare them side by side, and put together the stack that fits your <br />
                    next project.</p>
                   <div className='flex items-center gap-2 mt-10'>
                    <button className="btn bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] text-white px-6 py-3 rounded-lg">Explore Technologies</button>
                   <button className="btn w-42.5 border border-[#E5E7EB] text-[#374151]">Learn More</button>
                   </div>
            </div>
            <div>
               <img className='mx-auto w-122 h-105' src={bannerPic} alt="" />
            </div>
        </section>
    );
};

export default Banner;
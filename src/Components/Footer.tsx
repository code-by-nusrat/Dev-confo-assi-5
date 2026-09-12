// import Footerlogo from '../assets/logo-text.png';

// const Footer = () => {
//     return (
//         <section className='footer border-2 w-356.25 h-[337px] mx-auto mt-11'>
//             <hr className='text-[#94A3B8] text-3xl' />

//             <div className='footer0 border inter w-7xl mx-auto flex h-47.5 gap-10 justify-between mt-10'>
//                 <div>
//                     <img src={Footerlogo} alt="" />
//                     <p className='text-[#64748B] font-[400px] mt-3'>Curated tools, technologies, and resources for developers building <br />
//                         modern software.</p>
//                     <div className='flex gap-16 text-[14px] font-semibold mt-6'>
//                         <p>GitHub</p>
//                         <p>Twitter</p>
//                         <p>LinkedIn</p>
//                     </div>
//                 </div>
//                 <div className='footer1'>
//                     <h3 className='text-[1rem]'>PRODUCT</h3>
//                     <p className='text-[14px] text-[#64748B] mt-2.5'>Home</p>
//                     <p className='text-[14px] text-[#64748B] mt-2.5'>Technologies</p>
//                     <p className='text-[14px] text-[#64748B] mt-2.5'>Projects</p>
//                 </div>
//                 <div className='footer2'>
//                     <h3 className='text-[1rem] '>COMPANY</h3>
//                     <p className='text-[14px] text-[#64748B] mt-2.5'>About</p>
//                     <p className='text-[14px] text-[#64748B] mt-2.5'>Contact</p>
//                     <p className='text-[14px] text-[#64748B] mt-2.5'>Careers</p>
//                 </div>
//                 <div className='footer3'>
//                     <h3 className='text-[1rem]'>LEGAL</h3>
//                     <p className='text-[14px] text-[#64748B] mt-2.5'>Privacy Policy</p>
//                     <p className='text-[14px] text-[#64748B] mt-2.5'>Terms of Service</p>
//                 </div>
//             </div>
//             <hr className='text-[#94A3B8] text-3xl' />
//             <div className='border footer4 flex justify-between w-7xl mx-auto  text-[#94A3B8] text-[14px]'>
//                 <div>
//                     <p>© 2026 Dev Stack. All rights reserved.</p>
//                 </div>
//                 <div className='flex gap-5 items-center'>
//                     <p>Privacy</p>
//                     <p>Terms</p>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Footer;

import Footerlogo from '../assets/logo-text.png';

const Footer = () => {
    return (
        <footer className="w-full mt-11 border-t-2 border-[#94A3B8]">

            {/* Main Footer */}
            <div className="footer0 inter w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-0 py-10
                            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20">

                {/* Logo & Description */}
                <div className="sm:col-span-2 lg:col-span-1">
                    <img src={Footerlogo} alt="Dev Stack" />

                    <p className="text-[#64748B] font-normal mt-3 text-sm leading-6">
                        Curated tools, technologies, and resources for developers building
                        modern software.
                    </p>

                    <div className="flex gap-8 sm:gap-16 text-[14px] font-semibold mt-6">
                        <p>GitHub</p>
                        <p>Twitter</p>
                        <p>LinkedIn</p>
                    </div>
                </div>
                <div className="footer1 hidden lg:block">
                    <h3 className="text-base font-semibold">PRODUCT</h3>

                    <p className="text-sm text-[#64748B] mt-2.5">Home</p>
                    <p className="text-sm text-[#64748B] mt-2.5">Technologies</p>
                    <p className="text-sm text-[#64748B] mt-2.5">Projects</p>
                </div>
                <div className="footer2 hidden lg:block">
                    <h3 className="text-base font-semibold">COMPANY</h3>

                    <p className="text-sm text-[#64748B] mt-2.5">About</p>
                    <p className="text-sm text-[#64748B] mt-2.5">Contact</p>
                    <p className="text-sm text-[#64748B] mt-2.5">Careers</p>
                </div>
                <div className="footer3 hidden lg:block">
                    <h3 className="text-base font-semibold">LEGAL</h3>

                    <p className="text-sm text-[#64748B] mt-2.5">Privacy Policy</p>
                    <p className="text-sm text-[#64748B] mt-2.5">Terms of Service</p>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-[#94A3B8]">
                <div className="footer4 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-0
                                py-5 flex flex-col sm:flex-row
                                justify-between items-center gap-4
                                text-[#94A3B8] text-sm">

                    <p className="text-center sm:text-left">
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    <div className="flex gap-5">
                        <p>Privacy</p>
                        <p>Terms</p>
                    </div>

                </div>
            </div>

        </footer>
    );
};

export default Footer;
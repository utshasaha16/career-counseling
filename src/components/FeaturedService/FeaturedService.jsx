import counselorImg from '../../assets/career-counselor.png'

const FeaturedService = () => {
    return (
        <div className="bg-[#E3E2E2] py-36">
            <section className='md:flex lg:w-[80%] md:w-[90%] mx-auto'>
                <div className='bg-[#3C4483] text-white rounded-r-badge rounded-l-2xl md:pl-5 md:pt-8 md:pb-8 md:pr-24 pt-5 pl-5 pb-24'>
                    <p className='text-xl font-semibold'>Featured Services</p>
                    <h1 className='text-5xl font-semibold pt-4'>Find Your Strengths <br /> Shape Your Path</h1>
                    {/* text container */}
                    <div className='mt-10 space-y-6'>
                        {/* first container */}
                        <div className='flex items-center gap-4'>
                            <div className='w-14 h-10 flex items-center justify-center rounded-full bg-[#E09D15] font-bold text-gray-600'>01</div>
                            <div>
                                <h2 className='text-xl font-semibold'>Student Counseling Services</h2>
                                <p className='text-sm'>Stand out in the competitive job market with a professional resume and interview skills that impress.</p>
                            </div>
                        </div>
                        {/* second container */}
                        <div className='flex items-center gap-4'>
                            <div className='w-14 h-10 flex items-center justify-center rounded-full bg-[#E09D15] font-bold text-gray-600'>02</div>
                            <div>
                                <h2 className='text-xl font-semibold'>Career Transition Support</h2>
                                <p className='text-sm'>Navigate the job market with clarity and purpose. We provide tailored job search strategies.</p>
                            </div>
                        </div>
                        {/* third container */}
                        <div className='flex items-center gap-4'>
                            <div className='w-14 h-10 flex items-center justify-center rounded-full bg-[#E09D15] font-bold text-gray-600'>03</div>
                            <div>
                                <h2 className='text-xl font-semibold'>Job Search Strategies</h2>
                                <p className='text-sm'>Change can be challenging, but you don’t have to face it alone. Whether you're switching industries</p>
                            </div>
                        </div>
                        {/* fourth container */}
                        <div className='flex items-center gap-4'>
                            <div className='w-14 h-10 flex items-center justify-center rounded-full bg-[#E09D15] font-bold text-gray-600'>04</div>
                            <div>
                                <h2 className='text-xl font-semibold'>Interview & Resume Preparation</h2>
                                <p className='text-sm'>Empower students to make informed career choices with our comprehensive counseling services.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='items-center flex md:relative md:right-10 md:-top-0 relative -top-12 md:pb-10 md:pt-10'>
                    <img className='rounded-3xl w-full h-full' src={counselorImg} alt="" />
                </div>
            </section>
        </div>
    );
};

export default FeaturedService;
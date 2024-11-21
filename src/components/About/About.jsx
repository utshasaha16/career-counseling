import banner from '../../assets/about-us.jpg'
import ceo from '../../assets/ceo-image.png'
import { FaPodcast } from "react-icons/fa6";

const About = () => {
    return (
        <div>
            <header>
                <div
                    className="hero min-h-96"
                    style={{
                        backgroundImage: `url(${banner})`,
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className=" text-3xl font-medium">About Us</h1>
                            <div className="divider divider-neutral"></div>
                            <p className="mb-5">
                                Our platform is designed to empower individuals with the knowledge, tools, and support needed to explore career options, develop skills, and achieve their professional goals.
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <main className='md:w-[80%] w-[90%] mx-auto'>
                <section className='md:flex gap-6 md:space-y-0 space-y-6 md:py-24 py-12'>
                    <div>
                        <h3 className='text-sm'>About Us</h3>
                        <h2 className='text-2xl'>Career Transition Support</h2>
                        <div className='flex border rounded-lg mt-14'>
                            <img className='w-48 md:h-48 rounded-xl' src={ceo} alt="" />
                            <div className='p-4'>
                                <h2 className='font-medium mb-4'>Welcome Message from Our CEO</h2>
                                <p className='text-xs mb-4'>Your journey toward a brighter and more fulfilling future <br /> begins here! At Career Counseling, we are dedicated to helping <br /> you discover your potential, set meaningful goals, and achieve success in your academic and professional life.</p>
                                <h3 className='text-sm mb-1'>Jennifer Herrity</h3>
                                <p className='text-xs text-[#79AB26]'>CEO,Career Counseling</p>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-5'>
                        <h2 className='bg-[#F0FFD9] text-lg p-2 rounded-xl'>Our Mission</h2>
                        <div className='ml-6'>
                            <div className='flex items-center gap-3'>
                                <FaPodcast className='text-[#79AB26]'></FaPodcast>
                            <h3 className='font-medium'>Experienced Advisors</h3>
                            </div>
                            <p className='text-xs mt-2'> Work with professionals who understand your goals and challenges</p>
                        </div>
                        <div className='ml-6'>
                            <div className='flex gap-3 items-center'>
                                <FaPodcast className='text-[#79AB26]'></FaPodcast>
                            <h3  className='font-medium'>Tailored Solutions</h3>
                            </div>
                            <p className='text-xs mt-2'> Receive advice and resources customized to your unique career journey.</p>
                        </div>
                        <div className='ml-6'>
                            <div className='flex gap-3 items-center'>
                                <FaPodcast className='text-[#79AB26]'></FaPodcast>
                            <h3 className='font-medium'>Holistic Approach</h3>
                            </div>
                            <p className='text-xs mt-2'> We consider your interests, skills, and aspirations to create a comprehensive plan.</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>

    );
};

export default About;
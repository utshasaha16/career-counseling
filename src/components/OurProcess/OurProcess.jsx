

const OurProcess = () => {
    return (
        <div className="lg:w-[80%] mx-auto py-12">
            <h2 className="font-medium pb-5">Our Process</h2>
            <h1 className="md:text-4xl font-semibold pb-5 text-[#3C4483]">Step-by-Step Guidance to Your Success</h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
                <div className="bg-[#EBEBEB] p-8 rounded-xl">
                    <p className="flex justify-end text-6xl text-[#E09D15] pb-3 font-semibold">01</p>
                    <h2 className="font-semibold text-xl">Discovery & Assessment</h2>
                    <p className="text-sm pt-3">Through comprehensive discovery and assessment, we help you uncover your true potential. Identify your skills, passions, to align your career.</p>
                </div>
                <div className="bg-[#EBEBEB] p-8 rounded-xl">
                    <p className="flex justify-end text-6xl text-[#E09D15] pb-3 font-semibold">02</p>
                    <h2 className="font-semibold text-xl">Goal Setting and Planning</h2>
                    <p className="text-sm pt-3">we guide you through goal setting and planning to align your career journey with your passion and potential.</p>
                </div>
                <div className="bg-[#EBEBEB] p-8 rounded-xl">
                    <p className="flex justify-end text-6xl text-[#E09D15] pb-3 font-semibold">03</p>
                    <h2 className="font-semibold text-xl">Support & Evaluation</h2>
                    <p className="text-sm pt-3">We provide continuous guidance, track your progress, and refine your strategies to ensure you stay on course toward your career goals.</p>
                </div>
            </div>
        </div>
    );
};

export default OurProcess;
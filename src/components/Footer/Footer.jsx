import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto ">
      <footer className="footer text-base-content pb-10">
        <aside>
          <h1 className="text-4xl font-extrabold">
            <span className="text-[#E09D15]">Career</span>{" "}
            <span className="text-[#3C4483]">Counseling</span>
          </h1>
          <p>
            Empowering individuals to make informed <br /> career decisions. Discover
            your potential <br /> and find the path to your success.
          </p>
          <div className="flex gap-3 mt-4">
            <FaFacebook className="text-xl text-[#3C4483]"></FaFacebook>
            <FaInstagram className="text-xl text-[#3C4483]"></FaInstagram>
            <FaTwitter className="text-xl text-[#3C4483]"></FaTwitter>
            <FaYoutube className="text-xl text-[#3C4483]"></FaYoutube>
          </div>
        </aside>
        <nav>
          <h6 className="text-lg font-medium text-[#3C4483]">Services</h6>
          <a className="link link-hover">Personal Branding Strategy</a>
          <a className="link link-hover">Networking Strategies</a>
          <a className="link link-hover">Personal Branding Strategy</a>
          <a className="link link-hover">Mock Interview Practice</a>
        </nav>
        <nav>
          <h6 className="text-lg font-medium text-[#3C4483]">Company</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="text-lg font-medium text-[#3C4483]">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

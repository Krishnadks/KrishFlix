
import BlurCircle from './BlurCircle';


const Footer = () => {
  return (
    <div className="bg-[#09090b] relative px-6 lg:px-24 xl:px-24 text-gray-300 overflow-hidden">
      <BlurCircle top='0' right='-50px'/>
      <div className="w-full flex-wrap gap-2 py-20 flex justify-between ">
        <div className="md:max-w-100 z-5 flex flex-col gap-2">
          <img src="/logo.jpeg" alt="logo" className="w-36 h-auto" />
          <p className="text-sm">
            KrishFlix is your go-to platform for easy movie ticket booking.
            Explore latest movies, check showtimes, and book seats instantly
            with a fast, secure, and user-friendly experience. 🎬
          </p>
          <div className="flex gap-2 mt-4">
            <img src="/appStore.svg" alt="appStore" className="h-9 w-auto" />
            <img
              src="/googlePlay.svg"
              alt="googlePlay"
              className="h-9 w-auto"
            />
          </div>
        </div>

        <div className="flex z-5 gap-20 md:gap-40 mt-3">
          <div>
            <h1 className="font-bold text-white">Company</h1>
            <ul className="flex-col flex text-sm gap-2 mt-5">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div className="flex-col flex">
            <h1 className="font-bold text-white">Get in touch</h1>
            <ul className="flex flex-col text-sm gap-2 mt-5">
              <li>+91-9570687680</li>
              <li>krishna2024mu@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-gray-300"></div>
      <div className="py-3 text-sm font-light flex justify-center items-center">
        <p>Copyright {new Date().getFullYear()} © , KrishFlix. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

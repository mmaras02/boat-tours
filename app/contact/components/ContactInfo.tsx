import {
  FaPhoneAlt,
  FaRegClock,
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa';
import { IoMdMailOpen } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';

export const ContactInfo = () => {
  return (
    <div className="pl-8 md:p-8 w-full max-w-md">
      <div className="hidden md:block">
        <h3 className="text-2xl font-bold mb-2">Contact us!</h3>
        <p className="mb-10 ">
          Book your boat from Split to most popular islands and caves with the
          best value for money and price guarantee.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex gap-3 items-start">
          <IoLocationOutline className="text-2xl text-accent shrink-0 mt-1" />
          <div>
            <p className="font-semibold">Our Address</p>
            <p className="text-primary">Uvala Zenta (lučica), Split, Croatia</p>
          </div>
        </div>

        <div className="flex gap-3 items-start">
          <FaPhoneAlt className="text-xl text-accent shrink-0 mt-1" />
          <div>
            <p className="font-semibold">Call Us</p>
            <p className="text-primary">+385 99 306 1719</p>
            <p className="text-primary">+385 91 365 5852</p>
          </div>
        </div>

        <div className="flex gap-3 items-start">
          <IoMdMailOpen className="text-xl text-accent shrink-0 mt-1" />
          <div>
            <p className="font-semibold">Email Us</p>
            <p className="text-primary">ventiboat@gmail.com</p>
          </div>
        </div>

        <div className="flex gap-3 items-start">
          <FaRegClock className="text-xl text-accent shrink-0 mt-1" />
          <div>
            <p className="font-semibold">Working Hours</p>
            <p className="text-primary">Mon–Sat: 08:00–20:00</p>
            <p className="text-primary">Sun: 09:00–18:00</p>
          </div>
        </div>

        <div className="flex gap-3 items-start">
          <div>
            <h2 className="font-semibold text-2xl mt-5">
              Follow us on social media!
            </h2>
            <div className="h-0.5 w-14 bg-[#c79432] mb-6"></div>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/VentiBoat/61590072562984/?rdid=4mrmxCOrfQGrn9qH&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ETsm4s9Z1%2F"
                className="bg-[#0d3043] hover:bg-white/20 p-2 rounded-full"
              >
                <FaFacebookF size={24} color="white" />
              </a>
              <a
                href="https://www.instagram.com/ventiboat/"
                className="bg-[#0d3043] hover:bg-white/20 p-2 rounded-full"
              >
                <FaInstagram size={24} color="white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

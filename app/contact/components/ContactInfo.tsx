import { FaPhoneAlt, FaRegClock } from 'react-icons/fa';
import { IoMdMailOpen } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';

export const ContactInfo = () => {
  return (
    <div className="p-8 w-full max-w-md">
      <h3 className="text-2xl font-bold mb-2">Contact us!</h3>
      <p className="mb-10">
        Book your boat trip or private boat tour from Split to most popular
        islands and caves with the best value for money and price guarantee.
      </p>

      <div className="flex flex-col gap-6">
        <div className="flex gap-3 items-start">
          <IoLocationOutline className="text-2xl text-accent shrink-0 mt-1" />
          <div>
            <p className="font-semibold">Our Address</p>
            <p className="text-primary">Radovanova 10, Split, Croatia</p>
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
            <p className="text-primary">rosaVentorum@gmail.com</p>
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
      </div>
    </div>
  );
};

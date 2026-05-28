import { contact } from '../../constants/contact';
import { ContactMethods } from '../../components/ContactMethods';
import { SocialLinks } from '../../components/SocialLinks';

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
        <ContactMethods items={contact.methods} variant="panel" />

        <div className="flex gap-3 items-start">
          <div>
            <h2 className="font-semibold text-2xl mt-5">
              Follow us on social media!
            </h2>
            <div className="h-0.5 w-14 bg-accent mb-6"></div>
            <SocialLinks items={contact.socialLinks} variant="panel" />
          </div>
        </div>
      </div>
    </div>
  );
};

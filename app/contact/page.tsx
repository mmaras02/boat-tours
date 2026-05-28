import { ContactInfo } from './components/ContactInfo';
import { LocationMap } from './components/LocationMap';
import { MessageForm } from './components/MessageForm';

export default function ContactPage() {
  return (
    <main className="relative pt-20 md:pt-35 min-h-screen bg-slate-100">
      <div className="flex flex-col items-center">
        <div className="inline-block">
          <h1 className="text-3xl pt-10 md:text-4xl font-bold text-dark-slate mb-1">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-accent mb-6" />
        </div>
        <p className="text-center text-gray-600 mb-16 px-4">
          Have questions or want to book our boat? Get in touch with us! We are
          here to help you 7 days a week and respond within 24 hours.{' '}
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-evenly md:items-start gap-8 md:gap-0">
        <div className="flex justify-center w-full md:w-auto">
          <ContactInfo />
        </div>
        <div className="flex justify-center w-full md:w-auto">
          <MessageForm />
        </div>
      </div>

      <div className="flex justify-center px-2 md:px-8 my-6">
        <div className="w-full h-140 my-15">
          <h1 className="text-4xl font-bold text-dark-slate mb-6 text-center">
            Where to find us?
          </h1>
          <LocationMap />
        </div>
      </div>
    </main>
  );
}

import { ContactInfo } from "./components/ContactInfo";
import { LocationMap } from "./components/LocationMap";
import { MessageForm } from "./components/MessageForm";

export default function ContactPage() {
    return (
        <main className="relative pt-40 min-h-screen bg-slate-100">

            <div className="flex flex-col items-center">
                <div className="inline-block">
                    <h1 className="text-3xl pt-10 md:text-4xl font-bold text-dark-slate mb-1">Contact Us</h1>
                    <div className="w-24 h-1 bg-[#c79432] mb-6" />
                </div>
                <p className="text-center text-gray-600 mb-16">Have questions or want to book a tour? Get in touch with us! We are here to help you 7 days a week and respond within 24 hours. </p>
            </div>

            <div className="flex justify-evenly">
                <div className="flex justify-center">
                    <ContactInfo />
                </div>
                <div className="flex justify-center">
                    <MessageForm />
                </div>
            </div>
            <div className="flex justify-center px-8 my-6">
                <div className="w-full h-140 my-15">
                    <h1 className="text-4xl font-bold text-dark-slate mb-6 self-center">Where to find us?</h1>
                    <LocationMap />
                </div>
            </div>
        </main>
    );
}
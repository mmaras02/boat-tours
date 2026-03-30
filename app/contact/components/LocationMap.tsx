"use client";

export const LocationMap = () => {
    const openInGoogleMaps = () => {
        window.open('https://www.google.com/maps/place/Split+Ferry+Terminal/@43.5078,16.4462,15z', '_blank');
    };

    return (
        <div className="relative h-125 bg-white rounded-lg shadow-xl overflow-hidden border-2 border-gray-200">            {/* Header */}

            {/* Google Maps Embed - Gat Svetog Duje 1, Split */}
            <iframe
                title="Gat Svetog Duje 1, Split Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.917!2d16.443!3d43.5075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355de0a1b1b1b1%3A0x1b1b1b1b1b1b1b1b!2sGat%20Svetog%20Duje%201%2C%2021000%2C%20Split%2C%20Croatia!5e0!3m2!1sen!2shr!4v1709991234567!5m2!1sen!2shr"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Bottom Info */}
            <div className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2 bg-linear-to-t from-black/60 to-transparent p-4 text-center">
                <div className="text-white">
                    <p className="font-medium">Split Trajektna Luka</p>
                    <p className="text-sm text-white/80">Ferry Terminal, Split, Croatia</p>
                </div>
            </div>
        </div>
    );
};

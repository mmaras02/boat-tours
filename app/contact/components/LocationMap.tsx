'use client';

export const LocationMap = () => {
  const openInGoogleMaps = () => {
    window.open(
      'https://www.google.com/maps/search/?api=1&query=43.500806,16.460790',
      '_blank',
    );
  };

  return (
    <div
      onClick={openInGoogleMaps}
      className="relative h-125 bg-white rounded-lg shadow-xl overflow-hidden border-2 border-gray-200"
    >
      <iframe
        title="Uvala Zenta (lučica), Split Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.5!2d16.45875!3d43.500806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355e5e5e5e5e5e%3A0x13355e5e5e5e5e5e!2s43.500806%2C%2016.460750!5e0!3m2!1sen!2shr!4v1!5m2!1sen!2shr"
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      />

      <div className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2 bg-linear-to-t from-black/60 to-transparent p-4 text-center">
        <div className="text-white">
          <p className="font-medium">Uvala Zenta (lučica)</p>
          <p className="text-sm text-white/80">43°30'02.9"N 16°27'38.7"E</p>
        </div>
      </div>
    </div>
  );
};

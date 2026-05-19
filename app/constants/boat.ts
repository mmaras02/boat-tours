export const boat = {
  name: 'Quicksilver Active 605 Open',
  description:
    'Comfort, family-friendly motorboat with ideal balance of sporty performance, practicality and sefety for a whole day leisure on the sea. The Boat of the Year 2017 by Moteur Boat Magazine makes best in the category of storage capacities and intelligent use of space, best access from water to cockpit and outstandingly low fuel consumption with the new Mercury EFI 115 CT engine.',
  aboutDescription: `The Venti Boat is a fast and comfortable motorboat designed for
    exploring the beautiful Dalmatian coastline and nearby islands.
    Perfect for private tours and small groups, it offers a smooth ride,
    modern design, and everything needed for a relaxing day at sea.`,
  features: [
    'Spacious deck with sun loungers',
    'Modern kitchen and dining area',
    'Comfortable sleeping quarters for 6 guests',
    'Fully equipped bathroom with shower',
    'State-of-the-art navigation and safety equipment',
    'Onboard entertainment system',
    'Snorkeling and fishing gear available',
    'Air conditioning and heating',
    'Professional licensed skipper available',
  ],
  specifications: {
    length: '6.46 m',
    width: '2.4 m',
    engine: 'Mercury EFI 115 Command Thrust',
    enginePower: '115 HP',
    maxSpeed: '27.8 knots',
    cruisingSpeed: '20 knots',
    fuelCapacity: '160 l',
    waterCapacity: '45 l',
    capacity: '6 people',
  },
  pricing: {
    withSkipper: {
      price: 320,
      description:
        'Sit back and relax while our experienced skipper navigates the best spots.',
      features: [
        'Professional licensed skipper',
        'Fuel included',
        'Local knowledge of hidden gems',
        'No license required',
        'Security deposit: €300',
      ],
    },
    withoutSkipper: {
      price: 200,
      description:
        'Perfect for experienced captains. You will have full control of the vessel.',
      features: [
        'License required (Category B)',
        'Boat has to be retuned with full fuel tank',
        'Free cancellation 48h prior',
        'Security deposit: €800',
      ],
    },
  },
  images: [
    '/images/boat/1.png',
    '/images/boat/2.png',
    '/images/boat/3.png',
    '/images/boat/4.jpg',
    '/images/boat/5.jpg',
    '/images/boat/6.jpg',
    '/images/boat/7.jpg',
    '/images/boat/8.jpg',
    '/images/boat/9.jpg',
    '/images/boat/10.jpeg',
  ],
  reviews: [
    {
      name: 'John D.',
      rating: 5,
      comment:
        'Amazing experience! The boat was beautiful and the skipper was fantastic. Highly recommend!',
    },

    {
      name: 'Emily R.',
      rating: 4,
      comment:
        'Great boat and service, but the weather was a bit rough. Still had a wonderful time exploring the coast.',
    },
    {
      name: 'Michael S.',
      rating: 5,
      comment:
        'Perfect for our family trip! The kids loved the snorkeling gear and we enjoyed the spacious deck.',
    },
  ],

  stats: [
    { label: 'Guests', valueKey: 'capacity' },
    { label: 'Top Speed', valueKey: 'maxSpeed' },
    { label: 'Length', valueKey: 'length' },
    { label: 'Engine Power', valueKey: 'enginePower' },
  ],

  // constants/boat.ts - dodaj ovo

  seasonalPricing: [
    {
      season: 'Low Season',
      months: 'Jan, Feb, Mar, April, May, Oct, Nov, Dec',
      priceWithoutSkipper: '€200',
      priceWithSkipper: '€270',
    },
    {
      season: 'High Season',
      months: 'Jun, Sep',
      priceWithoutSkipper: '€250',
      priceWithSkipper: '€400',
    },
    {
      season: 'Peak Season',
      months: 'Jul, Aug',
      priceWithoutSkipper: '€280',
      priceWithSkipper: '€470',
    },
  ],
};

export const boat = {
  name: 'Quicksilver Active 605 Open',
  description:
    'Comfort, family-friendly motorboat with ideal balance of sporty performance, practicality and sefety for a whole day leisure on the sea. The Boat of the Year 2017 by Moteur Boat Magazine makes best in the category of storage capacities and intelligent use of space, best access from water to cockpit and outstanding low fuel consumption with the new Mercury EFI 115 CT engine.',
  aboutDescription: `The Venti Boat is a fast and comfortable motorboat designed for
    exploring the beautiful Dalmatian coastline and nearby islands.
    Perfect for small groups, it offers a smooth ride,
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
    engine: 'Mercury EFI 115 CT',
    enginePower: '115 HP',
    maxSpeed: '32 knots',
    cruisingSpeed: '20 knots',
    fuelCapacity: '160 l',
    waterCapacity: '45 l',
    capacity: '6 people',
  },
  pricing: [
    {
      id: 'withSkipper',
      title: 'With Skipper',
      price: 320,
      description:
        'Sit back and relax while our experienced skipper navigates spots according to your preferences.',
      features: [
        'Licensed skipper',
        'No license required',
        'Security deposit: €300',
        'Local knowledge of hidden gems',
      ],
    },
    {
      id: 'withoutSkipper',
      title: 'Without Skipper',
      price: 200,
      description:
        'Perfect for experienced captains. Take full control of the vessel and explore at your own pace.',
      features: [
        'License required (Category B)',
        'Free cancellation 7 days prior',
        'Security deposit: €800',
        'Available recommended routes and tips',
      ],
    },
  ],
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

  stats: [
    { label: 'Guests', valueKey: 'capacity' },
    { label: 'Top Speed', valueKey: 'maxSpeed' },
    { label: 'Length', valueKey: 'length' },
    { label: 'Engine Power', valueKey: 'enginePower' },
  ],

  included: [
    'Full insurance',
    'Safety equipment',
    'Snorkeling gear',
    'Cooler box',
    'First aid kit',
  ],
};

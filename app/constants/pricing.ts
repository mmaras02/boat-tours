export const pricingData = {
  seasonalPricing: [
    {
      season: 'Low Season',
      months: 'Jan, Feb, Mar, April, May, Oct, Nov, Dec',
      priceWithoutSkipper: 200,
      priceWithSkipper: 320,
    },
    {
      season: 'Mid Season',
      months: 'Jun, Sep',
      priceWithoutSkipper: 250,
      priceWithSkipper: 370,
    },
    {
      season: 'High Season',
      months: 'Jul, Aug',
      priceWithoutSkipper: 280,
      priceWithSkipper: 400,
    },
  ],
  discounts: [
    {
      name: 'Direct Booking Discount',
      description:
        'When booking directly through our website (no commission fees)',
      amount: '-10%',
    },
    // {
    //   name: 'Early Booking',
    //   description: 'For reservations made at least 30 days before departure',
    //   amount: '-15%',
    // },
    {
      name: 'Weekly Special',
      description:
        'For one week rentals, we offer one day free (7 days for the price of 6)',
      amount: '-15%',
    },
  ],

  cancellationPolicy: {
    freeCancellation: '7 days before rental date',
    partialRefund:
      'Cancellation 7 days or less before rental date - deposit is retained',
  },

  rentalTerms: {
    requirements: [
      'Valid boating license and identification document required for rentals without skipper',
      'Late return: +€20 for each additional hour (charged at the start of the hour)',
      'For rentals without skipper, the boat is provided with a full tank and must be returned full; otherwise, guests will be charged for the fuel consumed plus a €20 refueling service fee',
      'Rental must be paid in advance',
    ],
    prohibitedActions: [
      'Speeding less than 300 meters from the shore',
      'Operating the boat under the influence of alcohol or drugs',
    ],
    weatherPolicy:
      'In case of extremely bad weather, we reserve the right not to allow the rental of the boat, in order to protect passengers and property.',
    responsibility:
      'The boat is always rented to the renter at their own responsibility, which is established by signing a rental agreement.',
    miscellaneous: [
      'Upon request, reservations can be transferred to the next available date',
      'Renter is advised to have a mobile phone during the rental period and be contactable if needed',
      'In case of any problem, the renter must immediately notify the owner via the phone number provided during contract signing',
    ],
  },
};

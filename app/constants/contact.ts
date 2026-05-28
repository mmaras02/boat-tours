import { type IconType } from 'react-icons';
import { CiLocationOn } from 'react-icons/ci';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { IoMdMailOpen } from 'react-icons/io';

export type ContactMethodValue = {
  label: string;
  href?: string;
  ariaLabel?: string;
};

export type ContactMethod = {
  icon: IconType;
  label: string;
  values: ContactMethodValue[];
};

export type SocialLink = {
  icon: IconType;
  label: string;
  link: string;
};

export const contact = {
  methods: [
    {
      icon: CiLocationOn,
      label: 'Our Address',
      values: [
        {
          label: 'Uvala Zenta (lučica), Split, Croatia',
          href: 'https://www.google.com/maps/search/?api=1&query=Uvala+Zenta+(lu%C4%8Dica),+Split,+Croatia',
          ariaLabel: 'Open Venti Boat address in Google Maps',
        },
      ],
    },
    {
      icon: FaPhoneAlt,
      label: 'Call Us',
      values: [
        {
          label: '+385 91 365 5852',
          href: 'tel:+385913655852',
          ariaLabel: 'Call +385 91 365 5852',
        },
        {
          label: '+385 91 365 5951',
          href: 'tel:+385913655951',
          ariaLabel: 'Call +385 91 365 5951',
        },
      ],
    },
    {
      icon: IoMdMailOpen,
      label: 'Email Us',
      values: [
        {
          label: 'ventiboat@gmail.com',
          href: 'mailto:ventiboat@gmail.com',
          ariaLabel: 'Email ventiboat@gmail.com',
        },
      ],
    },
  ] as ContactMethod[],

  socialLinks: [
    {
      icon: FaFacebookF,
      label: 'Facebook',
      link: 'https://www.facebook.com/people/VentiBoat/61590072562984/?rdid=4mrmxCOrfQGrn9qH&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ETsm4s9Z1%2F',
    },
    {
      icon: FaInstagram,
      label: 'Instagram',
      link: 'https://www.instagram.com/ventiboat/',
    },
  ] as SocialLink[],
} as const;

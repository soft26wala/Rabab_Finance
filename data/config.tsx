import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
// import { NextSeoProps } from 'next-seo'
// import type { NextSeoProps } from 'next-seo';
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'RABAB FINANCE',
    description: 'Rabab Finance Car/Bike Finance ',
  },
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'loan-status',
        label: 'Loan Status', // "Lone" ko "Loan" kar diya
        href: '/loan-status',

      },
      {
        id: 'About Us',
        label: 'About Us',
        href: '/About',

      },
      {
        id: 'contact',
        label: 'Contact Us', // "Content" ko "Contact" kar diya
        href: '/contact',
      },
      {
        label: 'Login',
        href: '/login',
      },
      {
        label: 'Sign Up',
        href: '/signup',
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Built by{' '}
        <Link href="https://cortestack.com/">Cortex Web Solutions</Link>
      </>
    ),
    links: [
      {
        href: 'mailto:hello@saas-ui.dev',
        label: 'Contact',
      },
      {
        href: 'https://twitter.com/saas_js',
        label: <FaTwitter size="14" />,
      },
      {
        href: 'https://github.com/saas-js/saas-ui',
        label: <FaGithub size="14" />,
      },
    ],
  },
  signup: {
    title: 'Start building with Saas UI',
    features: [
      {
        icon: FiCheck,
        title: 'Accessible',
        description: 'All components strictly follow WAI-ARIA standards.',
      },
      {
        icon: FiCheck,
        title: 'Themable',
        description:
          'Fully customize all components to your brand with theme support and style props.',
      },
      {
        icon: FiCheck,
        title: 'Composable',
        description:
          'Compose components to fit your needs and mix them together to create new ones.',
      },
      {
        icon: FiCheck,
        title: 'Productive',
        description:
          'Designed to reduce boilerplate and fully typed, build your product at speed.',
      },
    ],
  },
}

export default siteConfig

import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const product = [
        {
            product: "Template"
        }, 
        {
            product: "Explore"
        },
        {
            product: "Features",
        },
        {
            product: "Website Builder",
        },
        {
            product: "Web Accessibility",
        },
        {
            product: "Velo",
        },
        {
            product: "Wix Playground",
        },
        {
            product: "My Sites",
        },
        {
            product: "Premium Plans",
        },
        {
            product: "Wix SEO",
        },
        {
            product: "Logo Maker",
        },
        {
            product: "Create a Blog",
        },
        {
            product: "Online Store",
        },
        {
            product: "Wix Bookings",
        },
        {
            product: "Restaurants",
        },
        {
            product: "App Market",
        },
        {
            product: "Domains"
        },
        {
            product: "Business Email",
        },
        {
            product: "Web Hoisting",
        },
        {
            product: "Developers",
        },
        {
            product: "Enterprise",
        },
        {
            product: "Email Marketing"
        },
        {
            product: "Website Design"
        },
        {
            product: "Professional Tools"
        }
    ];
    const company = [
        {
            company: "About Wix"
        },
        {
            company: "Press Room"
        },
        {
            company: "Investor Relations"
        },
        {
            company: "Wix Jobs"
        },
        {
            company: "Design Assets"
        },
        {
            company: "Terms of Use"
        },
        {
            company: "App Market Terms"
        },
        {
            company: "Privacy Policy"
        },
        {
            company: "Privacy and Security Hub"
        },
        {
            company: "Accessibility Statement"
        },
        {
            company: "Abuse"
        },
        {
            company: "Affiliates"
        },
        {
            company: "Wix Capital"
        },
        {
            company: "Updates & Releases"
        },
        {
            company: "Contact Us"
        },
        {
            company: "Patent Notice"
        },
        {
            company: "Sitemap"
        },
    ];
    const community = [
        {
            community: "Wix Blog"
        },
        {
            community: "Wix Marketplace"
        },
        {
            community: "Student Website"
        },
        {
            community: "Wix Encyclopedia"
        },
        {
            community: "Partner Community"
        },
    ];
    const support = [
        {
            support: "Support Center"
        },
        {
            support: "Getting Started Guide"
        },
        {
            support: "Wix Learn"
        },
        {
            support: "Status Page"
        },
    ];

  return (
    <div className='w-full py-24'>
        <div className='w-10/12 flex flex-row flex-wrap lg:flex-nowrap mx-auto justify-between gap-y-12 lg:gap-y-0'>
            <div className='flex flex-col gap-y-4'>
                <div className='text-base lg:text-lg'>PRODUCT</div>

                <div className='flex flex-col gap-y-2'>
                    {
                        product.map((p) => (<div className=' text-xs lg:text-base'>{p.product}</div>))
                    }
                </div>
            </div>

            <div className='flex flex-col gap-y-4'>
                <div className='text-base lg:text-lg'>COMPANY</div>

                <div className='flex flex-col gap-y-2'>
                    {
                        company.map((p) => (<div className=' text-xs lg:text-base'>{p.company}</div>))
                    }
                </div>
            </div>

            <div className='flex flex-col gap-y-4'>
                <div className='text-base lg:text-lg'>COMMUNITY</div>

                <div className='flex flex-col gap-y-2'>
                    {
                        community.map((p) => (<div className=' text-xs lg:text-base'>{p.community}</div>))
                    }
                </div>
            </div>

            <div className='flex flex-col gap-y-4'>
                <div className='text-base lg:text-lg'>SUPPORT</div>

                <div className='flex flex-col gap-y-2'>
                    {
                        support.map((p) => (<div className=' text-xs lg:text-base'>{p.support}</div>))
                    }
                </div>
            </div>

            <div className='flex flex-col w-full lg:w-1/5 gap-y-5'>
                <div className='text-3xl font-bold'>WiX</div>

                <div className='flex flex-col gap-y-3 w-full text-sm'>
                    <div>The Wix website builder offers a complete solution from enterprise grade infrastructure and buisness feature to advanced SEO and marketing tools enabling anyone to create and grow online.</div>
                    <div>&copy; 2006-2022 Wix.com, Inc</div>
                </div>

                <div className='flex flex-row gap-x-2'>
                    <FaFacebookF/>
                    <FaTwitter/>
                    <FaYoutube/>
                    <FaPinterestP/>
                    <FaInstagram/>
                    <FaLinkedinIn/>
                    <FaTiktok/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
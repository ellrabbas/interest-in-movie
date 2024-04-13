import React from 'react'
import Layout from '../Layout/Layout';
import Head from '../Components/Head';
import { IoMdMail } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";
import { FiMapPin } from "react-icons/fi";

function Contact() {
    const ContactData = [
        {
            id: 1,
            title: "Email",
            info: "Please, email us when you face any problem.",
            icon: IoMdMail,
            contact: "example@example.com"
        },
        {
            id: 2,
            title: "Phone",
            info: "Call us to solve your problems. Our operators are always ready for your call.",
            icon: PiPhoneCallFill,
            contact: "+1234567890"
        },
        {
            id: 3,
            title: "Address",
            info: "123 Street Name, City, Country",
            icon: FiMapPin,
            contact: "123 Street Name, City, Country"
        }
    ];
    return (
        <Layout>
            <div className="min-height-screen mx-auto mb-6">
                <Head title="Contact Us" />
                <div className="mx-5 grid md:grid-cols-2 gap-6 lg:my-20 my-10 lg:grid-cols-3 xl:gap-8 text-white">
                    {
                        ContactData.map(item => (
                            <div key={item.id} className='border border-dry flex-column p-10 bg-dry rounded-lg text-center'>
                                <span className='flex-column mb-4 w-20 h-20 rounded-full bg-main text-dry text-2xl'>
                                    <item.icon size={25} />
                                </span>
                                <h5 className='text-xl font-medium mb-2'>{item.title}</h5>
                                <p className='mb-0 text-sm leading-4'>
                                    <a href={`mailto:${item.contact}`}>{item.contact}</a>
                                </p>
                                <span className='mt-1'>{item.info}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Layout>
    );
}


export default Contact
import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
          <h1 className='text-3xl text-blue-600 font-bold mb-5'>About Us</h1>
          <p className='text-justify leading-7'>
          Welcome to CareerCraft, an innovative platform created by Akshat Tiwari, a passionate student at the prestigious Indian Institute of Technology Kanpur. As the driving force behind the frontend development, utilizing a robust combination of <b>HTML, CSS, JavaScript, React , headlessUI and Tailwind CSS </b>, I has crafted an intuitive space that seamlessly connects job seekers with exciting opportunities and empowers companies to showcase their offerings.
          </p>
        </div>
        <img src={JobImg} alt='About' className='w-auto h-[300px]' />
      </div>

      <div className='leading-8 px-5 text-justify'>
        <p>
        At CarrerCraft, we recognize the significance of bridging the gap between talent and organizations, fostering a dynamic ecosystem where career aspirations and business needs converge. Our user-friendly interface provides a streamlined experience for job seekers to explore diverse employment and internship opportunities across industries. Simultaneously, companies can effortlessly upload and showcase their offerings, creating a vibrant marketplace for talent acquisition.

My dedication to creating a visually appealing and functionally robust frontend ensures that users navigate effortlessly through the website, accessing a wealth of information with ease. The fusion of cutting-edge technologies and an eye for design manifests in an engaging platform that facilitates meaningful connections between talented individuals and forward-thinking companies.Join us at CareerCraft as we redefine the way individuals discover opportunities and companies connect with the next generation of talent. Empower your journey, whether you're a job seeker or a company seeking talent — we're here to catalyze your success.
        </p>
      </div>
    </div>
  );
};

export default About;

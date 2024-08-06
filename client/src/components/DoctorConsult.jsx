import React from "react";
import { FiUser } from "react-icons/fi";
import ServicesSection from "./ServiceSection";

const DoctorConsult = () => {
  return (
    <div className="container mx-auto px-4">
      <HeroSection />
      <FindDoctorSection />
      <ResultsSection />
      <TestimonialSection />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-12 px-2 md:px-[100px] mt-4">
      <div className="md:w-1/2">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Providing Quality Healthcare For A Brighter And Healthy Future
        </h1>
        <p className="text-gray-600 mb-6">
          At Our Hospital, We Are Dedicated To Providing Exceptional Medical
          Care To Our Patients And Their Families. Our Experienced Team Of
          Medical Professionals, Cutting-Edge Technology, And Compassionate
          Approach Make Us A Leader In The Healthcare Industry.
        </p>
        <div className="flex space-x-4">
          <button className="bg-custom-pink text-white px-6 py-2 rounded">
            Appointments
          </button>
          <button className="bg-custom-pink text-white px-6 py-2 rounded">
            Watch Video
          </button>
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center relative">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-custom-pink rounded-full w-64 h-64 md:w-96 md:h-96"></div>
        </div>
        <img
          src="/images/doctor.png"
          alt="Doctor"
          className="relative z-10  h-96 rounded-lg object-cover"
        />
        <div className="absolute bottom-0 right-0 bg-white p-2 rounded-lg shadow-md">
          <p className="text-sm font-semibold">24/7 Service</p>
        </div>
      </div>
    </section>
  );
};

const FindDoctorSection = () => {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6">Find A Doctor</h2>
      <form className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <input
          type="text"
          placeholder="Name"
          className="border p-2 rounded flex-grow"
        />
        <input
          type="text"
          placeholder="Specialty"
          className="border p-2 rounded flex-grow"
        />
        <div className="flex items-center">
          <label className="mr-2">Available</label>
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-teal-500"
          />
        </div>
        <button className="bg-custom-pink text-white px-6 py-2 rounded">
          Search
        </button>
      </form>
    </section>
  );
};

const ResultsSection = () => {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6">Our results in numbers</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <ResultCard number="99%" text="Customer satisfaction" />
        <ResultCard number="15k" text="Online Patients" />
        <ResultCard number="12k" text="Patients Recovered" />
        <ResultCard number="240%" text="Company growth" />
      </div>
    </section>
  );
};

const ResultCard = ({ number, text }) => {
  return (
    <div className="text-center">
      <p className="text-3xl font-bold text-custom-pink">{number}</p>
      <p className="text-gray-600">{text}</p>
    </div>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "Peace of Mind in Every Click",
      content: "My wife has a high-risk pregnancy, and we were constantly worried about her health and the well being of the unborn child. Bulamu Bridge Ai's emphasis on maternal health and their online consultation service saved us countles trips to the hospital. The convenience of accessing expert advice from the comfort of our home gave us peace of mind during an otherwise stressful period.",
      name: "Josephine Mulungi",
      position: "",
      image: null,
    },
    {
      quote: "Essential for every expecting mother",
      content: "This app provides practical advice and emotional support that every expecting mother in Uganda needs. It’s a true companion throughout the journey.",
      name: "Josephine Namutebi",
      position: "Midwife, Kampala Health Clinic",
      image: null,
    },
    {
      quote: "Highly recommended for maternal care",
      content: "The app's resources and community support have made a significant difference in my well-being during pregnancy. It's an amazing tool for maternal wellness.",
      name: "Emmanuel Kibanja",
      position: "Health Educator, Uganda Ministry of Health",
      image: null,
    },
  ];


  const companies = [
    "Google",
    "Facebook",
    "YouTube",
    "Pinterest",
    "Twitch",
    "Webflow",
  ];

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-custom-pink mb-2">
          Testimonial
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Hear from the mothers and healthcare professionals who have experienced the transformative impact of our maternal wellness app. Their stories highlight the support, guidance, and community that make our app an essential resource for a healthy pregnancy and postpartum journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        <TrustedCompanies companies={companies} />

        <NewsletterSubscription />
      </div>
    </section>
  );
};

const TestimonialCard = ({ quote, content, name, position, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-gray-300">
        {image ? (
          <img src={image} alt={name} className="w-full h-full rounded-full" />
        ) : (
          <FiUser className="text-gray-600 w-8 h-8" />
        )}
      </div>
      <h3 className="text-xl font-semibold text-center mb-2">"{quote}"</h3>
      <p className="text-gray-600 text-center mb-4">{content}</p>
      <p className="text-custom-pink font-medium text-center">{name}</p>
      <p className="text-gray-500 text-sm text-center">{position}</p>
    </div>
  );
};

const TrustedCompanies = ({ companies }) => {
  return (
    <div className="mb-16">
      <h3 className="text-xl font-semibold text-center text-custom-pink mb-8">
        Trusted by 10,000+ companies around the world
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {companies.map((company, index) => (
          <img
            key={index}
            src={`/images/${company.toLowerCase()}-logo.png`}
            alt={company}
            className="h-8"
          />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <span className="bg-teal-600 w-2 h-2 rounded-full mx-1"></span>
        <span className="bg-gray-300 w-2 h-2 rounded-full mx-1"></span>
        <span className="bg-gray-300 w-2 h-2 rounded-full mx-1"></span>
      </div>
    </div>
  );
};

const NewsletterSubscription = () => {
  return (
    <div className="text-center">
      <h3 className="text-2xl font-semibold mb-4">
        Subscribe to our newsletter
      </h3>
      <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600 w-full sm:w-auto"
        />
        <button
          type="submit"
          className="bg-custom-pink text-white px-6 py-2 rounded-full hover:bg-teal-700 transition duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default DoctorConsult;

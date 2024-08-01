import React from "react";
import doctors from "../assets/doctors.jpeg";

const ServicesSection = () => {
  const services = [
    {
      title: "Prenatal Care",
      image: doctors,
      description:
        "We provide comprehensive healthcare for expectant mothers from conception to childbirth. Including regular check-ups, monitoring fetal development, nutrition advice, and education on childbirth preparation.",
    },
    {
      title: "Postnatal Care",
      image: doctors,
      description:
        "To ensure the well-being of mother and child after birth, we offer services from postpartum check-ups, breastfeeding support, family planning counseling, and newborn care guidance.",
    },
    {
      title: "Child Wellness Clinic",
      image: doctors,
      description:
        "We extend care beyond maternity by providing routine check-ups, vaccinations, and preventive health measures for infants and children. We also offer growth monitoring, developmental assessments, and nutritional guidance.",
    },
  ];

  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-teal-600 mb-8">
          Services we provide
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, image, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-teal-600 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href="#" className="text-teal-600 font-medium flex items-center">
          Learn more
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ServicesSection;

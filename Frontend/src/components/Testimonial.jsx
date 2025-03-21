import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; 
import user1 from "../../public/assets/p1.png";
import user2 from "../../public/assets/p2.png";
import user3 from "../../public/assets/p3.png";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      review:
        "Our coaching institute has greatly benefited from this facial recognition attendance system. No more manual roll calls—saves time and improves accuracy!",
      image: user1,
      role: "Coaching Center Owner",
      rating: 5,
    },
    {
      name: "Neha Sharma",
      review:
        "As a teacher, I used to struggle with attendance management. This system has made it seamless, ensuring that no proxy attendance happens.",
      image: user2,
      role: "Maths Tutor",
      rating: 4.5,
    },
    {
      name: "Amit Verma",
      review:
        "Our training institute implemented this system recently. It has significantly reduced administrative work, and students appreciate the hassle-free check-in.",
      image: user3,
      role: "Training Institute Manager",
      rating: 4.5,
    },
  ];

  const renderStars = (rating) => {
    const filledStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <div className="flex items-center">
        {[...Array(filledStars)].map((_, index) => (
          <FaStar key={index} className="text-yellow-400 w-6 h-6" />
        ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-400 w-6 h-6" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={index} className="text-gray-300 w-6 h-6" />
        ))}
      </div>
    );
  };

  return (
    <section className="text-gray-600 body-font bg-gradient-to-b from-gray-50 to-gray-200 py-12">
      <div className="container px-5 mx-auto">
        <h1 className="text-center text-4xl font-bold text-gray-900 mb-4">
          Testimonials
        </h1>
        <p className="text-center text-xl font-medium text-gray-700 mb-12">
          What our <span className="text-[#0843A3] font-bold">users</span> are saying
        </p>
        <div className="flex flex-wrap -m-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="lg:w-1/3 md:w-1/2 p-4 w-full transform transition duration-500 hover:scale-105">
              <div className="h-full bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
                <img
                  alt={testimonial.name}
                  className="w-24 h-24 mb-6 object-cover object-center rounded-full border-4 border-[#0843A3] shadow-md"
                  src={testimonial.image}
                />
                <p className="leading-relaxed text-gray-700 italic">
                  "{testimonial.review}"
                </p>
                <span className="inline-block h-1 w-12 rounded bg-[#0843A3] mt-6 mb-4" />
                <h2 className="text-gray-900 font-semibold text-lg">
                  {testimonial.name}
                </h2>
                <p className="text-gray-500 text-sm uppercase">
                  {testimonial.role}
                </p>
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

"use client";

import React, { useState, useEffect } from "react";

const GoogleRatings = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // This is a placeholder for a real API call.
  // In a production app, you would fetch data from your own secure backend endpoint,
  // which in turn would call the Google My Business API.
  const fetchReviews = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Dummy data to simulate a successful API call
      const dummyData = [
        {
          name: "Aunishi Singh",
          time: "a month ago",
          rating: 5,
          text: "As a student of UK International London Beauty School, I can confidently say it changed my career. The training is practical, and the environment is super motivating. I loved how they teach both Indian and international trends. The trainers are always ready to help and guide. We also got chances for portfolio shoots, internships, and personality grooming which helped me get client work easily. If you're looking to build a career in makeup or beauty, this academy is a great choice.",
        },
        {
          name: "Taniya",
          time: "a month ago",
          rating: 5,
          text: "had an amazing experience at this makeup school. The trainers are very supportive and teach every technique with patience. Highly recommended for anyone starting their makeup journey. 💄",
        },
        {
          name: "Kanishka Rajput",
          time: "a month ago",
          rating: 5,
          text: "My name is kanishka and i am a student of uk international london beauty school noida branch , in the starting i was very much confused to choose ukibs or not but when i joined here , I knew it why uk international london beauty school is the best . The environment is very much friendly , everyone here is very helpful . This is the best makeup academy and the teach the best makeup course, hair course, nail course , cosmetology course",
        },
        {
          name: "Tarun Kashyap",
          time: "a year ago",
          rating: 5,
          text: "Uk international London Beauty School is the best academy to learn Hair chemical course , makeup course, nail course, skin course and many more courses. The faculties are highly experienced. Their teaching skills are very unique which is the best thing. Highly recommended uk international London Beauty School 👍",
        },
        {
          name: "Khushi Sahu",
          time: "a month ago",
          rating: 5,
          text: "I am khushi and i am. Student of uk international london beauty school and they not only teach makeup, hair, beauty , nail but they also give free portfolio, masterclass , salon management session and many more things , they build professionals , thank you so much ukibs , they are the best beauty school",
        },
        {
          name: "anushree walia",
          time: "a month ago",
          rating: 5,
          text: "Joining UK International London Beauty School was one of the best decisions I've made for my career as a makeup artist. 💅 From the very first day, I felt like I was part of a family. The trainers are not only super talented but also very helpful and supportive.",
        },
        {
          name: "DIVYANSHI GUPTA",
          time: "4 months ago",
          rating: 5,
          text: "Attending the uk international makeup academy was an incredible journey that helped me grow both personally and professionally. I learned a wide range of techniques—from basic skincare prep to advanced bridal and editorial looks. The hands-on training and expert guidance gave me the confidence to explore my creativity and refine my skills. Working with different face shapes, skin tones, and styles taught me adaptability and attention to detail. The supportive environment and real-world practice sessions made the experience truly enriching. It was more than just a course—it was the foundation of my passion turning into a career.",
        },
        {
          name: "Yavnika",
          time: "a month ago",
          rating: 5,
          text: "When I first came here, I was just 18—nervous and unsure, having never lived away from my parents. But everything has changed since then. Today, I feel confident, supported, and truly myself, all thanks to the incredible teachers and the wonderful friends I've made along the way. This academy has become so much more than a place of learning; it holds a special place in my heart like a second family. I feel truly blessed to be a part of it.",
        },
        {
          name: "Ritika Raj",
          time: "5 months ago",
          rating: 5,
          text: "\"I recently had the opportunity to attend the prestigious Makeup Academy, and I must say, it exceeded all my expectations! From the moment I stepped into the sleek and modern facility, I knew I was in for a treat. The interior was beautifully designed, with spacious classrooms, state-of-the-art equipment, and an impressive makeup station. But what truly impressed me was the faculty - a team of experienced and talented makeup artists who were passionate about sharing their knowledge and skills. Throughout the course, I learned a wide range of technique, from basic makeup application to advanced special effects. The academy's hands-on approach and personalized attention ensured that I received the best possible training. With its expert faculty, cutting-edge facilities, and comprehensive curriculum, I highly recommend the Makeup Academy to anyone looking to launch a successful career in the beauty industry. Whether you're a beginner or an experienced makeup artist, this academy has something to offer everyone!\"",
        },
      ];

      // In a real app, you would use fetch() to call your backend API endpoint
      // const response = await fetch('/api/google-reviews');
      // const data = await response.json();
      setTestimonials(dummyData);
    } catch (err) {
      console.error("Failed to fetch reviews:", err);
      setError("Failed to load reviews. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-xl ${
          i < rating ? "text-yellow-400" : "text-black"
        }`}
      >
        &#9733;
      </span>
    ));
  };

  return (
    <section
      id="google-ratings"
      className="py-16 md:py-24 bg-gradient-to-br from-[#FDDCEE] to-white text-black"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mb-4 tracking-wide text-center">
  <span className="block uppercase">FROM LEARNERS TO LEADERS</span>
  <span className="relative inline-block uppercase text-[#F8069D]">
    HEAR THEIR JOURNEY
    <span className="absolute left-0 bottom-[-4px] h-1 w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
  </span>
</h2>

        </div>

        {isLoading && (
          <div className="text-center text-lg text-black/60">
            Loading reviews...
          </div>
        )}

        {error && (
          <div className="text-center text-lg text-red-500">{error}</div>
        )}

        {!isLoading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-xl p-6 flex flex-col justify-between border border-black"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <h4 className="font-bold text-lg text-black">
                        {testimonial.name}
                      </h4>
                    </div>
                    <div className="flex items-center text-blue-500">
                      <svg
                        className="w-5 h-5 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-sm">Verified</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="flex -mt-1">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="ml-2 text-black text-sm">
                      {testimonial.time}
                    </p>
                  </div>
                  <p
                    className={`text-black text-sm ${
                      expandedIndex === index ? "" : "line-clamp-3"
                    }`}
                  >
                    {testimonial.text}
                  </p>
                  <button
                    onClick={() => toggleExpand(index)}
                    className="mt-2 text-[#F8069D] hover:underline flex items-center"
                  >
                    {expandedIndex === index ? "Read less" : "Read more"}
                    <svg
                      className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${
                        expandedIndex === index ? "rotate-180" : ""
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GoogleRatings;

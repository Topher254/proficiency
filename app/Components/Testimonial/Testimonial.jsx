"use client";

import { useState, useEffect, useRef } from 'react';
import { useRouter } from "next/navigation";
import Head from 'next/head';
import { Sparkles, Star, ChevronLeft, ChevronRight, MessageSquare, Users, CheckCircle2, ArrowRight, Pause, Play, ChevronDown } from 'lucide-react';

export default function Testimonials() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);
  const router = useRouter();

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleOrderClick = () => {
    router.push("/gethelp");
  };

  const faqs = [
    {
      question: "Who are the academic writers in your team?",
      answer: "Our team consists of PhD holders, master's degree graduates, and subject matter experts from top universities worldwide. Each writer undergoes rigorous screening and testing before joining our platform."
    },
    {
      question: "Is there a discount code I can use?",
      answer: "Yes! New customers receive 15% off their first order with code WELCOME15. We also offer seasonal promotions and loyalty discounts for returning customers."
    },
    {
      question: "If I hire you to write an assignment for me, will I be updated once it's complete?",
      answer: "Absolutely! You'll receive instant notifications via email and SMS when your assignment is completed. You can also track progress in real-time through your dashboard."
    },
    {
      question: "Can I modify the requirements after the writer begins to work on my assignment?",
      answer: "Yes, minor modifications are welcome within the first 24 hours at no extra cost. Major changes may require additional time and fees, which we'll discuss beforehand."
    },
    {
      question: "How do I hire someone to write my research paper?",
      answer: "Simply fill out our order form with your requirements, choose your preferred writer, make payment, and we'll get started immediately. The entire process takes less than 5 minutes."
    },
    {
      question: "If I hire you to write my assignments for me, will anyone discover?",
      answer: "Your privacy is our top priority. We maintain strict confidentiality, use secure payment methods, and never share your personal information with third parties."
    },
    {
      question: "Do fees include editing if I hire someone to write a research assignment?",
      answer: "Yes! All our packages include unlimited free revisions within 14 days, basic proofreading, and formatting according to your specified academic style."
    },
    {
      question: "What level of expertise will my writer possess?",
      answer: "Writers are matched based on your assignment's complexity. Bachelor's level work goes to graduates, while PhD-level assignments are handled by doctoral degree holders in relevant fields."
    }
  ];

  const allReviews = [
    {
      id: 1,
      rating: 5,
      text: "Exceptional service! The quality exceeded my expectations and the writer understood exactly what I needed. Will definitely use again for future projects.",
      studentId: "#892456",
      writer: "Prof. Darwin Victor",
      date: "03/15/2024",
      initials: "SM",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      id: 2,
      rating: 5,
      text: "Amazing turnaround time without compromising quality. The research was thorough and the writing style perfectly matched my requirements. Highly recommend!",
      studentId: "#745123",
      writer: "Cole Raphael",
      date: "03/12/2024",
      initials: "JD",
      gradient: "from-indigo-400 to-green-400"
    },
    {
      id: 3,
      rating: 5,
      text: "The writer was professional and delivered exactly what I asked for. Great communication throughout the process and finished ahead of deadline.",
      studentId: "#634789",
      writer: "Dr. Sarah Martinez",
      date: "03/10/2024",
      initials: "AL",
      gradient: "from-red-400 to-orange-400"
    },
    {
      id: 4,
      rating: 4,
      text: "Very satisfied with the quality of work. The paper was well-researched and properly formatted. Minor revisions were handled quickly.",
      studentId: "#556123",
      writer: "Prof. Michael Chen",
      date: "03/08/2024",
      initials: "RT",
      gradient: "from-green-400 to-teal-400"
    },
    {
      id: 5,
      rating: 5,
      text: "Outstanding work! The analysis was deep and insightful. I received an A+ on my assignment thanks to their expertise.",
      studentId: "#789234",
      writer: "Dr. Emma Wilson",
      date: "03/05/2024",
      initials: "KM",
      gradient: "from-indigo-400 to-purple-400"
    },
    {
      id: 6,
      rating: 5,
      text: "Perfect citations and references. The writer clearly understood the academic standards required for my field of study.",
      studentId: "#445678",
      writer: "Prof. James Rodriguez",
      date: "03/03/2024",
      initials: "NP",
      gradient: "from-pink-400 to-rose-400"
    }
  ];

  // Autoplay logic
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % allReviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + allReviews.length) % allReviews.length);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(nextSlide, 5000);
    } else {
      clearInterval(autoPlayRef.current);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying, currentSlide]);

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const renderStars = (rating) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`} />
        ))}
      </div>
    );
  };

  // Background blobs
  const BackgroundBlobs = () => (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/3 -right-20 w-[30rem] h-[30rem] bg-purple-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
      <div className="absolute top-2/3 left-1/3 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }} />
    </div>
  );

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 px-6 lg:px-8">
      <Head>
        <meta name="keywords" content="reviews, testimonials, student feedback, essay writers, assignment writing service" />
      </Head>
      <BackgroundBlobs />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-1.5 border border-indigo-200 shadow-sm mb-6">
            <Users className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Student Voices</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">What students say about us</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real experiences from students who transformed their academic journey with our help.
          </p>
        </div>

        {/* Autoscroll Carousel Section */}
        <div className="mb-24">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Latest Testimonials</h2>
            <div className="flex gap-2">
              <button
                onClick={toggleAutoPlay}
                className="p-2 rounded-full bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-colors"
                aria-label={isAutoPlaying ? "Pause autoplay" : "Play autoplay"}
              >
                {isAutoPlaying ? <Pause className="w-5 h-5 text-gray-600" /> : <Play className="w-5 h-5 text-gray-600" />}
              </button>
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Carousel */}
          <div className="relative overflow-hidden rounded-3xl bg-white/40 backdrop-blur-sm border border-white/50 shadow-xl">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {allReviews.map((review) => (
                <div
                  key={review.id}
                  className="w-full flex-shrink-0 p-8 md:p-10"
                >
                  <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                    <div className="mb-4">
                      {renderStars(review.rating)}
                    </div>
                    <blockquote className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
                      “{review.text}”
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${review.gradient} flex items-center justify-center shadow-md`}>
                        <span className="text-white text-sm font-bold">{review.initials}</span>
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-gray-800">Student ID: {review.studentId}</p>
                        <p className="text-gray-500 text-sm">Writer: {review.writer}</p>
                        <p className="text-gray-400 text-xs">{review.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 pb-6">
              {allReviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentSlide(idx);
                    setIsAutoPlaying(false);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? 'w-6 bg-indigo-600' : 'w-2 bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-3xl p-8 mb-24 text-center border border-white/50 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Ready to experience the difference?</h2>
          <p className="text-gray-600 mb-6">Join thousands of successful students who achieved academic excellence with our help.</p>
          <button
            onClick={handleOrderClick}
            className="group relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden inline-flex items-center gap-2"
          >
            <span className="relative z-10">Get your assignment now</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </div>

        {/* FAQ Section */}
        <div className="relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-1.5 border border-indigo-200 shadow-sm mb-6">
              <CheckCircle2 className="w-4 h-4 text-indigo-500" />
              <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Got Questions?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Find clear answers to the most common questions students ask — everything you need to know in one place.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 focus:outline-none flex justify-between items-center hover:bg-white/40 transition-colors"
                >
                  <h3 className="font-semibold text-gray-800 pr-4">{faq.question}</h3>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${openFAQ === index ? 'rotate-180' : ''}`} />
                </button>
                {openFAQ === index && (
                  <div className="px-5 pb-5">
                    <p className="text-gray-600 leading-relaxed text-sm">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
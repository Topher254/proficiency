"use client";

import { useState } from 'react';
import { useRouter } from "next/navigation";
import Head from 'next/head';
import { Sparkles, Star, ChevronLeft, ChevronRight, ChevronDown, MessageSquare, Users, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Testimonials() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [currentView, setCurrentView] = useState('testimonials');
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 4;
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
    },
    {
      id: 7,
      rating: 4,
      text: "Good quality work delivered on time. The writer was responsive to feedback and made necessary adjustments promptly.",
      studentId: "#321456",
      writer: "Dr. Lisa Thompson",
      date: "03/01/2024",
      initials: "BH",
      gradient: "from-cyan-400 to-indigo-400"
    },
    {
      id: 8,
      rating: 5,
      text: "Exceeded expectations! The research paper was comprehensive and well-structured. Excellent use of sources and proper methodology.",
      studentId: "#654321",
      writer: "Prof. David Park",
      date: "02/28/2024",
      initials: "GS",
      gradient: "from-yellow-400 to-orange-400"
    },
    {
      id: 9,
      rating: 5,
      text: "Brilliant work on my thesis chapter. The writer understood complex concepts and presented them clearly and coherently.",
      studentId: "#987654",
      writer: "Dr. Rachel Green",
      date: "02/25/2024",
      initials: "MK",
      gradient: "from-emerald-400 to-green-400"
    },
    {
      id: 10,
      rating: 4,
      text: "Professional service with good customer support. The final paper was well-written and met all the requirements specified.",
      studentId: "#135792",
      writer: "Prof. Andrew Miller",
      date: "02/22/2024",
      initials: "TP",
      gradient: "from-violet-400 to-indigo-400"
    },
    {
      id: 11,
      rating: 5,
      text: "Fantastic attention to detail and excellent writing quality. The writer went above and beyond to ensure perfection.",
      studentId: "#246813",
      writer: "Dr. Jennifer Lee",
      date: "02/20/2024",
      initials: "CL",
      gradient: "from-fuchsia-400 to-pink-400"
    },
    {
      id: 12,
      rating: 5,
      text: "Incredible research skills and perfect formatting. The assignment was delivered earlier than expected with top-notch quality.",
      studentId: "#369258",
      writer: "Prof. Robert Adams",
      date: "02/18/2024",
      initials: "DW",
      gradient: "from-lime-400 to-green-400"
    }
  ];

  const totalPages = Math.ceil(allReviews.length / reviewsPerPage);
  const currentReviews = allReviews.slice(currentPage * reviewsPerPage, (currentPage + 1) * reviewsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToReviews = () => {
    setCurrentView('reviews');
    setCurrentPage(0);
  };

  const goToTestimonials = () => {
    setCurrentView('testimonials');
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

  // Shared background blobs component
  const BackgroundBlobs = () => (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/3 -right-20 w-[30rem] h-[30rem] bg-purple-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
      <div className="absolute top-2/3 left-1/3 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }} />
    </div>
  );

  if (currentView === 'reviews') {
    return (
      <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 px-6 lg:px-8">
        <BackgroundBlobs />
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <button onClick={goToTestimonials} className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 mb-6 transition-colors group">
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Testimonials</span>
            </button>
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-1.5 border border-indigo-200 shadow-sm mb-6">
              <MessageSquare className="w-4 h-4 text-indigo-500" />
              <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Real Feedback</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">All Student Reviews</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Read what our students have to say about their experience with our academic writing services.
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {currentReviews.map((review) => (
              <div key={review.id} className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-white/50">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-indigo-100/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    {renderStars(review.rating)}
                    <span className="text-xs text-gray-400">{review.date}</span>
                  </div>
                  <blockquote className="text-gray-700 mb-4 text-sm leading-relaxed">
                    “{review.text}”
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${review.gradient} flex items-center justify-center shadow-md`}>
                      <span className="text-white text-xs font-bold">{review.initials}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">Student ID: {review.studentId}</p>
                      <p className="text-gray-500 text-xs">Writer: {review.writer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className={`px-5 py-2 rounded-xl font-medium transition-all duration-200 ${
                currentPage === 0 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:-translate-y-0.5'
              }`}
            >
              Previous
            </button>
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`w-9 h-9 rounded-full font-medium transition-all duration-200 ${
                    currentPage === idx 
                      ? 'bg-indigo-600 text-white shadow-md' 
                      : 'bg-white/60 text-gray-600 hover:bg-indigo-100'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className={`px-5 py-2 rounded-xl font-medium transition-all duration-200 ${
                currentPage === totalPages - 1 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:-translate-y-0.5'
              }`}
            >
              Next
            </button>
          </div>
          <div className="text-center mt-6 text-gray-500 text-sm">
            Showing {currentPage * reviewsPerPage + 1} - {Math.min((currentPage + 1) * reviewsPerPage, allReviews.length)} of {allReviews.length} reviews
          </div>
        </div>
      </section>
    );
  }
 
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 px-6 lg:px-8">
      <Head>
        <meta name="keywords" content="reviews, testimonials, student feedback, essay writers, assignment writing service" />
      </Head>
      <BackgroundBlobs />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Testimonials Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-1.5 border border-indigo-200 shadow-sm mb-6">
            <Users className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Student Voices</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">What students say about us</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See real testimonials and frequently asked questions about our essay writing and academic support services.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mb-24">
          {/* Left Column */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              What our students say<br />
              about our expertise
            </h2>
            <p className="text-gray-600 text-lg">
              Discover the experiences from those who have trusted us to enhance 
              their academic journey. Browse through the Essayproficiency reviews and 
              select your expert!
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button onClick={handleOrderClick} className="group relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <span className="relative z-10">Get my assignment</span>
                <ArrowRight className="inline ml-2 w-4 h-4 relative z-10" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
              <button 
                onClick={goToReviews}
                className="border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-50 font-semibold px-8 py-3 rounded-full transition-all duration-200"
              >
                View all testimonials
              </button>
            </div>
          </div>

          {/* Right Column - Testimonial Cards */}
          <div className="lg:w-1/2 relative">
            <div className="space-y-6">
              {allReviews.slice(0, 2).map((review, idx) => (
                <div key={review.id} className={`bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 ${idx === 0 ? 'rotate-1' : '-rotate-1 ml-8'}`}>
                  <div className="flex items-center justify-between mb-4">
                    {renderStars(review.rating)}
                    <span className="text-xs text-gray-400">{review.date}</span>
                  </div>
                  <blockquote className="text-gray-700 mb-4 text-sm leading-relaxed">
                    “{review.text}”
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${review.gradient} flex items-center justify-center shadow-md`}>
                      <span className="text-white text-xs font-bold">{review.initials}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">Student ID: {review.studentId}</p>
                      <p className="text-gray-500 text-xs">Writer: {review.writer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute top-0 right-0 bg-white/70 backdrop-blur-sm rounded-full px-3 py-1 border border-white/50 shadow-sm">
              <span className="text-indigo-600 font-bold text-sm">4.9/5</span>
            </div>
          </div>
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
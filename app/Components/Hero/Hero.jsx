"use client";

// SEO Keywords: urgent homework, essay writers, do my assignment, pay for research paper, college essay writing, assignment support

import React from "react";
import { FaStar, FaSearch, FaRegFileAlt, FaClock, FaArrowRight } from "react-icons/fa";
import { PiRobotLight } from "react-icons/pi";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Hero = () => {
  const router = useRouter();

  const handleOrderClick = () => {
    router.push("/gethelp");
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 px-6 lg:px-8">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/3 -right-20 w-[30rem] h-[30rem] bg-purple-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
        <div className="absolute top-2/3 left-1/3 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }} />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-1.5 border border-indigo-200 shadow-sm">
            <PiRobotLight className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">100% Human • Expert Writers</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Essayproficiency: <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">get help from real pros</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
            Get your paper written for any subject, on any topic, with guaranteed quality. Work with verified experts who deliver excellence.
          </p>

          {/* CTA Button */}
          <button
            onClick={handleOrderClick}
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <span>Order now</span>
            <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
            <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm rounded-xl p-3 border border-white/50 shadow-sm">
              <PiRobotLight className="text-xl text-indigo-600" aria-hidden="true" />
              <div>
                <span className="text-indigo-600 font-medium">NO AI</span>
                <span className="text-red-600 font-semibold ml-1">100% human content</span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm rounded-xl p-3 border border-white/50 shadow-sm">
              <FaRegFileAlt className="text-xl text-indigo-600" aria-hidden="true" />
              <span className="text-indigo-600 font-medium">Plagiarism report upon request</span>
            </div>
            <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm rounded-xl p-3 border border-white/50 shadow-sm">
              <FaSearch className="text-xl text-indigo-600" aria-hidden="true" />
              <span className="text-indigo-600 font-medium">Expert-driven quality</span>
            </div>
            <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm rounded-xl p-3 border border-white/50 shadow-sm">
              <FaClock className="text-xl text-indigo-600" aria-hidden="true" />
              <span className="text-indigo-600 font-medium">3-hour minimum deadline</span>
            </div>
          </div>
        </div>

        {/* Right Section with Online Image */}
        <div className="lg:w-1/2 relative flex justify-center">
          <div className="relative w-full max-w-md lg:max-w-lg">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Student studying with laptop and books, representing academic help"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 via-transparent to-transparent" />
            </div>

            {/* Floating Rating Card */}
            <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-white/50 animate-float">
              <div className="bg-yellow-100 rounded-full p-2">
                <FaStar className="text-yellow-500 w-5 h-5" />
              </div>
              <div>
                <p className="text-lg font-bold text-indigo-600">4.8/5</p>
                <p className="text-xs text-gray-500">Essayproficiency rated</p>
              </div>
            </div>

            {/* Floating Subjects Card */}
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-white/50 animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="bg-purple-100 rounded-full p-2">
                <FaSearch className="text-purple-500 w-5 h-5" />
              </div>
              <div>
                <p className="text-lg font-bold text-purple-600">115+</p>
                <p className="text-xs text-gray-500">Subjects covered</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
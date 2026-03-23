"use client";

import Head from "next/head";
import { Sparkles, Shield, BookOpen, Users, CheckCircle, AlertTriangle } from 'lucide-react';

const EthicsCodePage = () => {
  return (
    <>
      <Head>
        <title>Academic Ethics Code | Essayproficiency</title>
        <meta name="description" content="Read the Essayproficiency Ethics Code. We uphold academic integrity and ethical standards in all our essay writing and academic support services." />
        <meta name="keywords" content="academic integrity, ethics, plagiarism checker, writing policy" />
        <meta property="og:title" content="Academic Ethics Code | Essayproficiency" />
        <meta property="og:description" content="Read the Essayproficiency Ethics Code. We uphold academic integrity and ethical standards in all our essay writing and academic support services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://Essayproficiency.com/ethics" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              'name': 'Academic Ethics Code',
              'url': 'https://Essayproficiency.com/ethics',
              'description': 'Read the Essayproficiency Ethics Code. We uphold academic integrity and ethical standards in all our essay writing and academic support services.'
            }),
          }}
        />
      </Head>
      <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 px-6 lg:px-8">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-1/3 -right-20 w-[30rem] h-[30rem] bg-purple-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
          <div className="absolute top-2/3 left-1/3 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }} />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-1.5 border border-indigo-200 shadow-sm mb-6">
              <Shield className="w-4 h-4 text-indigo-500" />
              <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Integrity First
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
              Ethics{' '}
              <span className="relative inline-block">
                Code
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 6" fill="none">
                  <path d="M2 4C50 2 150 2 198 4" stroke="url(#gradientStroke)" strokeWidth="2.5" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="gradientStroke" x1="0" y1="0" x2="1" y2="0">
                      <stop stopColor="#6366F1" />
                      <stop offset="1" stopColor="#A855F7" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
            <p className="text-gray-600 text-lg">
              Upholding academic integrity and ethical standards in all our services.
            </p>
          </div>

          {/* Main Content Card */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-8 md:p-10 transition-all duration-300 hover:shadow-2xl">
            {/* Commitment Card */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 mb-8 border border-indigo-100 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-md">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-2">Our Commitment</h2>
                  <p className="text-gray-600 leading-relaxed">
                    At Essayproficiency, we uphold the highest ethical standards in academic support. 
                    We are committed to promoting learning while maintaining academic integrity.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></span>
                  1. Academic Integrity
                </h2>
                <p className="text-gray-600 mb-2">We strictly prohibit:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Submitting our work as one's own</li>
                  <li>Plagiarism in any form</li>
                  <li>Assistance with high-stakes exams</li>
                  <li>Violation of institutional honor codes</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></span>
                  2. Appropriate Use of Services
                </h2>
                <p className="text-gray-600 mb-2">Our services are intended for:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Learning and research purposes</li>
                  <li>Reference and sample materials</li>
                  <li>Improving writing skills</li>
                  <li>Understanding complex topics</li>
                  <li>Developing proper citation practices</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></span>
                  3. Writer Ethics
                </h2>
                <p className="text-gray-600 mb-2">Our writers must:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Produce 100% original work</li>
                  <li>Properly cite all sources</li>
                  <li>Adhere to academic standards</li>
                  <li>Maintain strict confidentiality</li>
                  <li>Refuse requests violating academic integrity</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></span>
                  4. User Responsibilities
                </h2>
                <p className="text-gray-600 mb-2">Users agree to:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Use materials ethically as learning aids</li>
                  <li>Properly cite our work if referenced</li>
                  <li>Not submit our work as their own</li>
                  <li>Comply with their institution's policies</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></span>
                  5. Anti-Plagiarism Measures
                </h2>
                <p className="text-gray-600 mb-2">We implement:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Mandatory plagiarism checks for all orders</li>
                  <li>Strict consequences for plagiarizing writers</li>
                  <li>Education on proper citation practices</li>
                  <li>Free plagiarism reports upon request</li>
                </ul>
              </section>
              
              {/* Educational Purpose Banner */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 border border-green-100 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800 mb-1">Educational Purpose</h3>
                    <p className="text-green-700 text-sm leading-relaxed">
                      Our ultimate goal is to support students in their educational journey. We encourage 
                      users to engage with our materials as learning tools to enhance their own academic skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EthicsCodePage;
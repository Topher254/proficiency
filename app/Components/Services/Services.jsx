"use client";

// SEO Keywords: essay writing service, case study writing service, research paper writing, dissertation proposal writing service, book report writing service, speech writing services

import React, { useState } from 'react';
import { Sparkles, BookOpen, FileText, PenTool, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('Paperwork');

  const categories = {
    'Paperwork': [
      'Essay', 'Case study', 'Report', 'Research paper', 'Presentation or speech',
      'Annotated bibliography', 'Article review', 'Literature review', 'Business plan',
      'Research proposal', 'Book / Movie review', 'Reflective writing', 'Thesis / Dissertation',
      'Admission essay', 'Creative writing', 'Critical thinking / Review', 'Term paper', 'Other'
    ],
    'Coursework/Homework': [
      'Mathematics Assignment', 'Physics Problem Set', 'Chemistry Lab Report',
      'Biology Research Project', 'History Essay', 'English Literature Analysis',
      'Psychology Case Study', 'Sociology Survey Report', 'Economics Data Analysis',
      'Political Science Paper', 'Philosophy Argument Essay', 'Statistics Homework',
      'Computer Science Programming', 'Engineering Design Project', 'Art History Critique'
    ],
    'Other assignments': [
      'Grant Proposal', 'Business Proposal', 'Marketing Plan', 'Technical Documentation',
      'White Paper', 'Policy Brief', 'Conference Abstract', 'Book Proposal',
      'Scholarship Essay', 'Personal Statement'
    ]
  };

  // Icons for categories
  const categoryIcons = {
    'Paperwork': <FileText className="w-5 h-5" />,
    'Coursework/Homework': <BookOpen className="w-5 h-5" />,
    'Other assignments': <PenTool className="w-5 h-5" />
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 px-6 lg:px-8">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/3 -right-20 w-[30rem] h-[30rem] bg-purple-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
        <div className="absolute top-2/3 left-1/3 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-1.5 border border-indigo-200 shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              What we cover
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            How can you help me in{' '}
            <span className="relative inline-block">
              writing my assignments?
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
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose from a wide range of academic services — we've got every assignment covered.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Categories */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-md">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Order any:</h2>
              </div>
              <div className="space-y-3">
                {Object.keys(categories).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`group w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-200 flex items-center gap-3 ${
                      activeCategory === category
                        ? 'bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-700 border border-indigo-200 shadow-sm'
                        : 'bg-white/50 text-gray-700 hover:bg-white/80 border border-transparent'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                      activeCategory === category
                        ? 'bg-indigo-500 text-white'
                        : 'bg-gray-100 text-gray-500 group-hover:bg-indigo-100 group-hover:text-indigo-600'
                    }`}>
                      {categoryIcons[category]}
                    </div>
                    <span className="flex-1">{category}</span>
                    {activeCategory === category && (
                      <ArrowRight className="w-4 h-4 text-indigo-500" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Service Lists */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[0, 1].map((colIndex) => {
                const items = categories[activeCategory];
                const start = colIndex === 0 ? 0 : Math.ceil(items.length / 2);
                const end = colIndex === 0 ? Math.ceil(items.length / 2) : items.length;
                const columnItems = items.slice(start, end);
                return (
                  <div key={colIndex} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <ul className="space-y-3">
                      {columnItems.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-200">
                          <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 group-hover:text-indigo-600 transition-colors" />
                          <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
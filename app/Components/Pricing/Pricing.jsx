import React from 'react';
import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles, CheckCircle, DollarSign, TrendingUp } from 'lucide-react';

// SEO Keywords: pricing, affordable essay writing, pay for dissertation, pay for thesis, write essays for money, refund, money back

export default function Pricing() {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate("/gethelp");
  };

  // Updated market prices
  const pricingItems = [
    { service: "Writing", price: "$12.50", unit: "/page", original: "$15.00" },
    { service: "Proofreading", price: "$3.50", unit: "/page", original: "$5.00" },
    { service: "Editing", price: "$6.00", unit: "/page", original: "$8.00" },
    { service: "Rewriting", price: "$8.50", unit: "/page", original: "$11.00" },
  ];

  const includedServices = [
    { name: "Unlimited revisions", free: true },
    { name: "Unlimited sources", free: true },
    { name: "Plagiarism & AI report", free: true },
    { name: "Title page and formatting", free: true },
    { name: "24/7 priority support", free: true },
    { name: "Money-back guarantee", free: true },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 px-6 lg:px-8">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/3 -right-20 w-[30rem] h-[30rem] bg-purple-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
        <div className="absolute top-2/3 left-1/3 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-1.5 border border-indigo-200 shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Transparent • Affordable</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            Pocket-friendly{' '}
            <span className="relative inline-block">
              assignment support
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
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Transform your academic stress into success with our affordable, expert-crafted solutions
            that turn impossible deadlines into achievable milestones for every student's journey.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Pricing Card */}
          <div className="group relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-indigo-100/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Friendly pricing</h3>
              </div>
              <div className="space-y-4">
                {pricingItems.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                    <span className="text-gray-700 font-medium">{item.service}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 line-through text-sm">{item.original}</span>
                      <span className="text-2xl font-bold text-gray-900">{item.price}</span>
                      <span className="text-gray-500 text-sm">{item.unit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Included Services Card */}
          <div className="group relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-purple-100/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Included services</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {includedServices.map((service, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{service.name}</span>
                    {service.free && (
                      <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded-full ml-auto">
                        free
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={handleOrderClick}
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-10 py-4 rounded-2xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <span>Order now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
          <p className="text-sm text-gray-500 mt-4">No hidden fees • Cancel anytime</p>
        </div>
      </div>
    </section>
  );
}
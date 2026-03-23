import React from 'react';
import { Shield, Clock, DollarSign, CreditCard, FileText, Award, Sparkles, ArrowRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";

// SEO Keywords: privacy, scholarship essay writing service, urgent homework, assignment support, academic integrity, refund, money back, plagiarism checker

export default function Benefits() {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate("/gethelp");
  };

  // Benefits data for easier mapping
  const benefits = [
    {
      icon: Shield,
      title: "Privacy first approach",
      description: "Your data remains completely confidential with our advanced encryption protocols. We implement military-grade security measures to ensure your information stays protected.",
      color: "from-green-500 to-emerald-500",
      bgLight: "bg-green-50",
    },
    {
      icon: Clock,
      title: "Round-the-clock assistance",
      description: "Our dedicated support team is available around the clock to assist you. Experience instant responses and personalized solutions whenever you need them.",
      color: "from-indigo-500 to-blue-500",
      bgLight: "bg-indigo-50",
    },
    {
      icon: DollarSign,
      title: "Transparent pricing model",
      description: "No hidden fees or surprise charges - our pricing structure is completely transparent. Every feature is included upfront, so you know exactly what you're paying for.",
      color: "from-purple-500 to-fuchsia-500",
      bgLight: "bg-purple-50",
    },
    {
      icon: CreditCard,
      title: "Secure payment gateway",
      description: "Process payments through our PCI-compliant secure gateway with multiple payment options. Your financial information is protected with bank-level security.",
      color: "from-slate-500 to-gray-600",
      bgLight: "bg-gray-50",
    },
    {
      icon: FileText,
      title: "Comprehensive content solutions",
      description: "From technical documentation to creative content, our skilled professionals handle diverse project requirements with attention to detail.",
      color: "from-emerald-500 to-teal-500",
      bgLight: "bg-emerald-50",
    },
    {
      icon: Award,
      title: "Quality assurance guarantee",
      description: "Every deliverable undergoes rigorous quality checks by our expert reviewers. We provide detailed quality reports and authenticity verification.",
      color: "from-amber-500 to-orange-500",
      bgLight: "bg-amber-50",
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 px-6 lg:px-8">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/3 -right-20 w-[30rem] h-[30rem] bg-indigo-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
        <div className="absolute top-2/3 left-1/3 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-1.5 border border-indigo-200 shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Why choose excellence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            Discover our{' '}
            <span className="relative inline-block">
              premium services
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
            Experience unmatched quality, security, and support tailored to your academic needs.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50 hover:border-transparent overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Border Hover Effect */}
                <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-indigo-500/30 group-hover:via-purple-500/30 group-hover:to-pink-500/30 transition-all duration-500" />
                
                {/* Icon Container */}
                <div className={`relative w-16 h-16 rounded-2xl ${benefit.bgLight} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 text-${benefit.color.split('-')[1]}-600`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-700 transition-colors">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Decorative element */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${benefit.color} blur-md`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Button */}
        <div className="text-center">
          <button
            onClick={handleOrderClick}
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-10 py-5 rounded-2xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Start your journey today</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
          <p className="text-sm text-gray-500 mt-4">No obligation, cancel anytime. Secure & confidential.</p>
        </div>
      </div>
    </section>
  );
}
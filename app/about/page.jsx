"use client";

import Image from "next/image";
import { Star, Edit3, FileText, RefreshCw, ArrowRight, Shield, Zap, Award, Users, Clock, Sparkles } from 'lucide-react';
import Head from "next/head";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const handleGetHelp = () => {
    router.push('/gethelp');
  };

  return (
    <>
      <Head>
        <title>Essayproficiency — The Future of Academic Writing | Expert Help</title>
        <meta name="description" content="Experience next-level academic support with AI-enhanced human expertise. Essayproficiency delivers stunning essays, precise editing, and creative rewriting. Join 5000+ successful students." />
        <meta property="og:title" content="Essayproficiency — The Future of Academic Writing" />
        <meta property="og:description" content="Modern, fast, and utterly reliable academic assistance. Your success, reimagined." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://Essayproficiency.com/about" />
        <meta name="keywords" content="essay writing service, AI academic help, modern essay editors, personal statement, scholarship essay, speech writing, literature review, admission essay" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              'name': 'Essayproficiency',
              'url': 'https://Essayproficiency.com/',
              'logo': 'https://Essayproficiency.com/logo.png',
              'description': 'Essayproficiency offers writing, editing, and rewriting help for academic assignments with a futuristic approach.',
              'aggregateRating': {
                '@type': 'AggregateRating',
                'ratingValue': '4.8',
                'reviewCount': '478'
              }
            }),
          }}
        />
      </Head>

      <div className="relative min-h-screen w-full overflow-x-hidden bg-[#fbfdff]">
        {/* Animated background blobs */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-[30%] -right-[10%] w-[80rem] h-[80rem] bg-gradient-to-br from-indigo-200/30 via-purple-200/20 to-pink-200/30 rounded-full blur-3xl animate-slow-spin" style={{ animationDuration: '35s' }}></div>
          <div className="absolute -bottom-[40%] -left-[20%] w-[90rem] h-[90rem] bg-gradient-to-tr from-cyan-200/20 via-indigo-200/20 to-violet-200/30 rounded-full blur-3xl animate-slow-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }}></div>
          <div className="absolute top-1/3 left-1/2 w-[60rem] h-[60rem] bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.08)_0%,_transparent_70%)] -translate-x-1/2"></div>
        </div>

        {/* Hero Section - Modern asymmetric layout */}
        <section className="relative w-full px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column */}
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-indigo-100 shadow-sm mb-8">
                  <Sparkles className="w-4 h-4 text-indigo-500" />
                  <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">AI-enhanced • Human precision</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.2] mb-6">
                  <span className="bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 bg-clip-text text-transparent">Essayproficiency</span>
                  <span className="block text-slate-900">Redefining <span className="relative inline-block">
                    academic
                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                      <path d="M2 5.5C50 2 150 2 198 5.5" stroke="url(#gradientStroke)" strokeWidth="3" strokeLinecap="round"/>
                      <defs><linearGradient id="gradientStroke"><stop stopColor="#6366F1"/><stop offset="1" stopColor="#A855F7"/></linearGradient></defs>
                    </svg>
                  </span> excellence</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-8">
                  Breakthrough writing, editing & rewriting powered by elite experts + cutting-edge intelligence. 
                  Get pristine, plagiarism-free work delivered at lightspeed.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                  <button 
                    onClick={handleGetHelp}
                    className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg shadow-lg shadow-indigo-200 hover:shadow-xl transition-all duration-300 flex items-center gap-3 overflow-hidden"
                  >
                    <span>Get Instant Help</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </button>
                  <div className="flex items-center gap-5 bg-white/70 backdrop-blur-sm px-5 py-2 rounded-full border border-indigo-100">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="font-bold text-xl text-slate-800">4.8</span>
                    <span className="text-slate-500 text-sm">(478 reviews)</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-6 mt-10 pt-4 border-t border-indigo-100/50">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center"><Shield className="w-4 h-4 text-indigo-700"/></div>
                    <span className="text-sm font-medium text-slate-700">100% Confidential</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center"><Zap className="w-4 h-4 text-purple-700"/></div>
                    <span className="text-sm font-medium text-slate-700">24h Turnaround</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center"><Award className="w-4 h-4 text-pink-700"/></div>
                    <span className="text-sm font-medium text-slate-700">Plagiarism-Free</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Hero Image with modern floating elements */}
              <div className="relative flex justify-center">
                <div className="relative w-full max-w-md lg:max-w-lg rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]">
                  <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-indigo-100 to-purple-100">
                    <Image
                      src="/writers-hero.png"
                      alt="Essayproficiency creative team"
                      fill
                      className="object-cover mix-blend-multiply"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 via-transparent to-transparent"></div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-3 shadow-xl backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center"><Users className="w-5 h-5 text-white"/></div>
                      <div><p className="text-xs font-medium text-slate-600">Active now</p><p className="text-sm font-bold text-slate-800">247+ experts</p></div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 glass-card rounded-2xl p-3 shadow-xl backdrop-blur-md">
                    <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-indigo-600"/><span className="text-sm font-bold">Express delivery</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section - Modern glassmorphism with micro-interactions */}
        <section className="w-full px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-indigo-600 font-semibold tracking-wide text-sm uppercase bg-indigo-50 px-4 py-1.5 rounded-full inline-block mb-4">Why students trust us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Built on reliability, speed & absolute integrity</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Image src="/confidential.png" alt="Confidential" width={40} height={40} className="object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">Fort Knox Security</h3>
                  <p className="text-slate-600 leading-relaxed">Bank-grade encryption & anonymous ordering. Your data never leaves our vault.</p>
                </div>
              </div>
              <div className="group relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Image src="/womanbg.png" alt="Speed" width={40} height={40} className="object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">Hypersonic Delivery</h3>
                  <p className="text-slate-600 leading-relaxed">As fast as 3 hours for urgent tasks. Real-time progress tracking & updates.</p>
                </div>
              </div>
              <div className="group relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Image src="/wobg.png" alt="Quality" width={40} height={40} className="object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">AI + Human Polish</h3>
                  <p className="text-slate-600 leading-relaxed">Triple-checked by editors & AI tools. 100% original, formatted perfectly.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Futuristic cards with dynamic gradients */}
        <section className="w-full px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white/70 rounded-full px-4 py-1.5 border border-indigo-200 mb-4">
                <Sparkles className="w-4 h-4 text-indigo-500" />
                <span className="text-sm font-medium text-indigo-700">Core Offerings</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Precision services, <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">exceptional results</span></h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">Tailored academic solutions that evolve with your needs — from scratch to stellar.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Writing Card */}
              <div className="group relative rounded-3xl bg-white/80 backdrop-blur-sm border border-indigo-100/80 p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:border-indigo-300">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-indigo-100/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-indigo-200 group-hover:scale-110 transition-transform">
                    <Edit3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">Intelligent Writing</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">Custom essays, research papers, dissertations — crafted by PhD-level writers with zero plagiarism. Includes outline & citations.</p>
                  <button 
                    onClick={handleGetHelp}
                    className="w-full py-3 rounded-xl font-semibold bg-slate-900 text-white hover:bg-indigo-600 transition-all duration-300 shadow-md flex items-center justify-center gap-2 group-hover:gap-3"
                  >
                    Write For Me <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Editing Card */}
              <div className="group relative rounded-3xl bg-white/80 backdrop-blur-sm border border-purple-100/80 p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:border-purple-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-purple-100/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center mb-6 shadow-lg shadow-purple-200 group-hover:scale-110 transition-transform">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">Precision Editing</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">Line-by-line polish: grammar, flow, clarity, citation style (APA/MLA/Chicago). Transform drafts into academic gems.</p>
                  <button 
                    onClick={handleGetHelp}
                    className="w-full py-3 rounded-xl font-semibold bg-slate-900 text-white hover:bg-purple-600 transition-all duration-300 shadow-md flex items-center justify-center gap-2 group-hover:gap-3"
                  >
                    Edit For Me <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Rewriting Card */}
              <div className="group relative rounded-3xl bg-white/80 backdrop-blur-sm border border-pink-100/80 p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:border-pink-300">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50/0 to-pink-100/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center mb-6 shadow-lg shadow-pink-200 group-hover:scale-110 transition-transform">
                    <RefreshCw className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">Creative Rewriting</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">Revamp existing drafts for originality, stronger arguments, and higher impact. Avoid AI detection & improve grades.</p>
                  <button 
                    onClick={handleGetHelp}
                    className="w-full py-3 rounded-xl font-semibold bg-slate-900 text-white hover:bg-pink-600 transition-all duration-300 shadow-md flex items-center justify-center gap-2 group-hover:gap-3"
                  >
                    Rewrite For Me <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Stats Strip - Modern metric showcase */}
        <div className="w-full px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto bg-gradient-to-r from-indigo-50 via-white to-purple-50 rounded-3xl p-8 border border-indigo-100/60 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div><p className="text-3xl md:text-4xl font-black text-indigo-600">5k+</p><p className="text-slate-500 text-sm">Happy Students</p></div>
              <div><p className="text-3xl md:text-4xl font-black text-purple-600">98%</p><p className="text-slate-500 text-sm">On-Time Delivery</p></div>
              <div><p className="text-3xl md:text-4xl font-black text-pink-600">24/7</p><p className="text-slate-500 text-sm">Live Support</p></div>
              <div><p className="text-3xl md:text-4xl font-black text-indigo-600">50+</p><p className="text-slate-500 text-sm">Subject Experts</p></div>
            </div>
          </div>
        </div>

        {/* Final CTA - immersive modern call to action */}
        <section className="w-full px-6 lg:px-8 py-20 mb-12">
          <div className="max-w-5xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 rounded-3xl blur-2xl opacity-40"></div>
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-12 lg:p-16 text-center border border-white/30 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-300/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 relative z-10">Your breakthrough starts now</h2>
              <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto relative z-10">Join thousands who transformed their academic journey — stress-free, confidential, and brilliantly executed.</p>
              <button 
                onClick={handleGetHelp}
                className="group relative z-10 bg-white text-indigo-700 font-bold px-10 py-5 rounded-full text-xl shadow-2xl hover:shadow-indigo-500/30 transition-all duration-300 flex items-center gap-3 mx-auto hover:scale-105"
              >
                Get Started — It's Free <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-white/70 text-sm mt-8 relative z-10">No credit card required • Cancel anytime</p>
            </div>
          </div>
        </section>

        {/* Subtle footer note */}
        <footer className="w-full text-center py-8 border-t border-indigo-100/40 text-slate-400 text-sm">
          <div className="max-w-7xl mx-auto px-6">© 2025 Essayproficiency — Academic excellence reimagined. All rights reserved.</div>
        </footer>
      </div>
    </>
  );
}
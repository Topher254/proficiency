import React from 'react';
import Head from "next/head";
import { Sparkles, Cookie } from 'lucide-react';

const CookieNoticePage = () => {
  return (
    <>
      <Head>
        <title>Cookie Notice | Essayproficiency</title>
        <meta name="description" content="Read the Essayproficiency Cookie Notice. Learn how we use cookies to enhance your experience on our essay writing and academic support website." />
        <meta name="keywords" content="privacy, cookies, plagiarism checker, cookie policy" />
        <meta property="og:title" content="Cookie Notice | Essayproficiency" />
        <meta property="og:description" content="Read the Essayproficiency Cookie Notice. Learn how we use cookies to enhance your experience on our essay writing and academic support website." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://Essayproficiency.com/cookies" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              'name': 'Cookie Notice',
              'url': 'https://Essayproficiency.com/cookies',
              'description': 'Read the Essayproficiency Cookie Notice. Learn how we use cookies to enhance your experience on our essay writing and academic support website.'
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
              <Cookie className="w-4 h-4 text-indigo-500" />
              <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Transparency First
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
              Cookie{' '}
              <span className="relative inline-block">
                Notice
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
              Learn how we use cookies to enhance your experience.
            </p>
          </div>

          {/* Main Content Card */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-8 md:p-10 transition-all duration-300 hover:shadow-2xl">
            <p className="text-gray-600 mb-6 text-sm border-l-4 border-indigo-400 pl-4">Last updated: June 14, 2025</p>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></span>
                  1. What Are Cookies?
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Cookies are small text files stored on your device when you visit websites. 
                  They help websites remember information about your visit and preferences.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></span>
                  2. How We Use Cookies
                </h2>
                <p className="text-gray-600 mb-2">We use cookies for:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li><strong className="text-indigo-600">Essential Operations:</strong> Necessary for site functionality</li>
                  <li><strong className="text-indigo-600">Preferences:</strong> Remembering your settings</li>
                  <li><strong className="text-indigo-600">Analytics:</strong> Understanding how visitors use our site</li>
                  <li><strong className="text-indigo-600">Marketing:</strong> Showing relevant advertising</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></span>
                  3. Types of Cookies We Use
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 bg-white/50 rounded-xl overflow-hidden">
                    <thead className="bg-indigo-50/80">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider">Cookie Type</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider">Purpose</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="hover:bg-white/30 transition-colors">
                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-700">Session Cookies</td>
                        <td className="px-4 py-3 text-gray-600">Maintain user session</td>
                        <td className="px-4 py-3 text-gray-600">Session</td>
                      </tr>
                      <tr className="hover:bg-white/30 transition-colors">
                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-700">Authentication Cookies</td>
                        <td className="px-4 py-3 text-gray-600">Identify logged-in users</td>
                        <td className="px-4 py-3 text-gray-600">Persistent (1 month)</td>
                      </tr>
                      <tr className="hover:bg-white/30 transition-colors">
                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-700">Preference Cookies</td>
                        <td className="px-4 py-3 text-gray-600">Remember user settings</td>
                        <td className="px-4 py-3 text-gray-600">Persistent (1 year)</td>
                      </tr>
                      <tr className="hover:bg-white/30 transition-colors">
                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-700">Analytics Cookies</td>
                        <td className="px-4 py-3 text-gray-600">Track website usage</td>
                        <td className="px-4 py-3 text-gray-600">Persistent (2 years)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              
              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></span>
                  4. Managing Cookies
                </h2>
                <p className="text-gray-600 mb-2">
                  You can control cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>See what cookies are stored</li>
                  <li>Delete individual cookies</li>
                  <li>Block cookies from specific sites</li>
                  <li>Block all cookies</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  <strong className="text-indigo-600">Note:</strong> Disabling essential cookies may impact website functionality.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></span>
                  5. Third-Party Cookies
                </h2>
                <p className="text-gray-600 mb-2">
                  We use services that may set cookies, including:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Google Analytics for website statistics</li>
                  <li>Advertising platforms for relevant ads</li>
                  <li>Payment processors for transaction security</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  These third parties have their own privacy policies.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieNoticePage;
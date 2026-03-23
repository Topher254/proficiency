"use client";

import { 
  User, Mail, Phone, BookOpen, Calendar, FileText, 
  DollarSign, AlertCircle, CheckCircle, Paperclip, X,
  Sparkles, Clock, Zap, Shield, Upload
} from 'lucide-react';
import { API_BASE } from '../lib/apiConfig';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';

const StudentAssignmentForm = () => {
  // Service pricing configuration
  const servicePricing = {
    'Writing': 8.50,
    'Proofreading': 2.00,
    'Editing': 4.50,
    'Rewriting': 6.60,
    // Map other assignment types to these services
    'Essay': 'Writing',
    'Research Paper': 'Writing',
    'Dissertation': 'Writing',
    'Thesis': 'Writing',
    'Case Study': 'Writing',
    'Lab Report': 'Writing',
    'Term Paper': 'Writing',
    'Book Review': 'Writing',
    'Literature Review': 'Writing',
    'Coursework': 'Writing',
    'Assignment': 'Writing',
    'Other': 'Writing'
  };

  // Complex subjects that add $2 per page
  const complexSubjects = [
    'Engineering', 'Computer Science', 'Mathematics', 'Physics', 
    'Chemistry', 'Biology', 'Medicine', 'Law', 'Finance'
  ];

  const [formData, setFormData] = useState({
    studentName: '',
    email: '',
    phone: '',
    assignmentType: '',
    subject: '',
    deadline: '',
    pages: '',
    description: '',
    urgency: 'Medium',
    budget: '0.00'
  });
  
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const fileInputRef = useRef(null);

  const assignmentTypes = [
    'Writing',
    'Proofreading',
    'Editing',
    'Rewriting',
    'Essay',
    'Research Paper',
    'Dissertation',
    'Thesis',
    'Case Study',
    'Lab Report',
    'Term Paper',
    'Book Review',
    'Literature Review',
    'Coursework',
    'Assignment',
    'Other'
  ];

  const subjects = [
    'English Literature',
    'Psychology',
    'Business Studies',
    'History',
    'Political Science',
    'Sociology',
    'Economics',
    'Law',
    'Medicine',
    'Nursing',
    'Engineering',
    'Computer Science',
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'Philosophy',
    'Education',
    'Marketing',
    'Finance',
    'Other'
  ];

  // Calculate budget whenever relevant fields change
  useEffect(() => {
    calculateBudget();
  }, [
    formData.assignmentType, 
    formData.subject, 
    formData.pages, 
    formData.urgency,
    discountApplied
  ]);

  const calculateBudget = () => {
    if (!formData.assignmentType || !formData.pages) {
      setFormData(prev => ({ ...prev, budget: '0.00' }));
      return;
    }

    // Get base price
    let basePrice = servicePricing[formData.assignmentType];
    
    // Handle mapped assignment types (e.g. Essay -> Writing)
    if (typeof basePrice === 'string') {
      basePrice = servicePricing[basePrice];
    }

    // Apply subject complexity surcharge
    const complexitySurcharge = complexSubjects.includes(formData.subject) ? 2 : 0;
    
    // Apply urgency pricing
    const urgencyPricing = {
      'Low': -1,
      'Medium': 0.5,
      'High': 1.5
    };

    // Calculate per-page price
    const perPagePrice = basePrice + complexitySurcharge + urgencyPricing[formData.urgency];
    
    // Calculate total before discount
    let total = perPagePrice * parseInt(formData.pages || 0);
    
    // Apply discount if applicable
    if (discountApplied) {
      total = total * 0.985; // 1.5% discount
    }

    // Update budget in form data
    setFormData(prev => ({
      ...prev,
      budget: total.toFixed(2)
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    const validFiles = newFiles.filter(file => file.size <= 10 * 1024 * 1024); // 10MB limit
    
    if (validFiles.length !== newFiles.length) {
      setError('Some files exceeded 10MB limit and were not added');
    }
    
    // Combine existing files with new ones, limit to 5 files total
    setFiles(prev => [...prev, ...validFiles].slice(0, 5));
  };

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files.length > 0) {
      handleFileChange({ target: { files: e.dataTransfer.files } });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const formPayload = new FormData();
      
      // Append form data
      Object.entries(formData).forEach(([key, value]) => {
        formPayload.append(key, value);
      });
      
      // Append files
      files.forEach(file => {
        formPayload.append('files', file);
      });

      const response = await fetch(`${API_BASE}/api/assignments`, {
        method: 'POST',
        body: formPayload
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSuccess(true);
        // Reset form
        setFormData({
          studentName: '',
          email: '',
          phone: '',
          assignmentType: '',
          subject: '',
          deadline: '',
          pages: '',
          description: '',
          urgency: 'Medium',
          budget: '0.00'
        });
        setFiles([]);
        setDiscountApplied(false);
      } else {
        setError(result.error || result.message || 'Failed to submit assignment');
      }
    } catch (error) {
      setError('Network error. Please try again.');
      alert("Failed to submit assignment. Please message us direct.")
    } finally {
      setLoading(false);
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'High': return 'border-red-300 bg-red-50 text-red-700';
      case 'Medium': return 'border-yellow-300 bg-yellow-50 text-yellow-700';
      case 'Low': return 'border-green-300 bg-green-50 text-green-700';
      default: return 'border-gray-300 bg-white text-gray-700';
    }
  };

  if (success) {
    return (
      <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-1/3 -right-20 w-[30rem] h-[30rem] bg-purple-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
        </div>
        <div className="max-w-md w-full bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8 text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Assignment Submitted Successfully!</h3>
          <p className="text-sm text-gray-600 mb-6">
            Thank you for your submission. We've sent a confirmation email to your email. 
            A writer will be assigned to your task within the next 1 minute.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="w-full mt-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-xl hover:bg-indigo-200 transition-colors"
          >
            Submit Another Assignment
          </button>
          <Link 
            href="/" 
            className="mt-4 inline-block w-full text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Go to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16 px-6 lg:px-8">
      <Head>
        <meta name="keywords" content="do my assignment, coursework help, urgent homework, essay writers, assignment support, write essays for money" />
      </Head>

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/3 -right-20 w-[30rem] h-[30rem] bg-purple-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
        <div className="absolute top-2/3 left-1/3 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-1.5 border border-indigo-200 shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Instant Support</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Book Assignment Help
          </h1>
          <p className="text-lg text-gray-600">
            Get professional help with your academic assignments
          </p>
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-8 md:p-10">
          {error && (
            <div className="mb-6 bg-red-50/80 backdrop-blur-sm border border-red-200 rounded-xl p-4">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-800">{error}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="border-b border-white/30 pb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <User className="h-5 w-5 text-indigo-600" />
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2.5 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all text-gray-800 placeholder:text-gray-400"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-2.5 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent text-gray-800 placeholder:text-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-2.5 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent text-gray-800 placeholder:text-gray-400"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Assignment Details */}
            <div className="border-b border-white/30 pb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-indigo-600" />
                Assignment Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Assignment Type *</label>
                  <select
                    name="assignmentType"
                    value={formData.assignmentType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2.5 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent text-gray-800"
                  >
                    <option value="">Select assignment type</option>
                    {assignmentTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2.5 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent text-gray-800"
                  >
                    <option value="">Select subject</option>
                    {subjects.map(subject => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Deadline *</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      type="datetime-local"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-2.5 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent text-gray-800"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Pages *</label>
                  <input
                    type="number"
                    name="pages"
                    value={formData.pages}
                    onChange={handleInputChange}
                    required
                    min="1"
                    className="w-full px-4 py-2.5 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent text-gray-800"
                    placeholder="e.g., 5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Urgency Level</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['Low', 'Medium', 'High'].map(level => {
                      const isActive = formData.urgency === level;
                      return (
                        <button
                          key={level}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, urgency: level }))}
                          className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                            isActive
                              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                              : 'bg-white/80 border border-gray-200 text-gray-700 hover:bg-white/90'
                          }`}
                        >
                          {level === 'Low' && <Clock className="w-3.5 h-3.5" />}
                          {level === 'Medium' && <Zap className="w-3.5 h-3.5" />}
                          {level === 'High' && <AlertCircle className="w-3.5 h-3.5" />}
                          {level}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget (USD)</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      name="budget"
                      value={formData.budget}
                      readOnly
                      className="w-full pl-10 pr-24 py-2.5 bg-gray-50/80 border border-gray-200 rounded-xl text-gray-800"
                    />
                    <button
                      type="button"
                      onClick={() => setDiscountApplied(!discountApplied)}
                      className={`absolute right-2 top-2 px-3 py-1 text-xs rounded-lg transition-all ${
                        discountApplied 
                          ? 'bg-green-100 text-green-800 border border-green-200'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {discountApplied ? '✓ 1.5% Off' : 'Apply Discount'}
                    </button>
                  </div>
                  {discountApplied && (
                    <p className="text-xs text-green-600 mt-1">1.5% discount applied!</p>
                  )}
                </div>
              </div>
            </div>

            {/* Assignment Description */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-indigo-600" />
                Assignment Description
              </h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Detailed Instructions *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2.5 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent text-gray-800 placeholder:text-gray-400"
                  placeholder="Please provide detailed instructions for your assignment including any specific requirements, formatting guidelines, sources to be used, etc."
                />
              </div>

              {/* File Upload Section */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Attach Files (Optional)
                </label>
                <div 
                  className="flex items-center justify-center w-full"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  <div 
                    className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed rounded-xl cursor-pointer border-gray-300 hover:border-indigo-400 bg-white/40 hover:bg-white/60 transition-all"
                    onClick={triggerFileInput}
                  >
                    <Upload className="w-8 h-8 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      PDF, DOC, DOCX, PPT, TXT, JPG, PNG (Max: 5 files, 10MB each)
                    </p>
                    <input 
                      type="file" 
                      className="hidden" 
                      ref={fileInputRef}
                      multiple
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx,.ppt,.pptx,.txt,.jpg,.jpeg,.png"
                    />
                  </div>
                </div>
                
                {files.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Selected files:</p>
                    <div className="space-y-2">
                      {files.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-white/50 backdrop-blur-sm rounded-lg px-4 py-2">
                          <div className="flex items-center max-w-[85%]">
                            <Paperclip className="h-4 w-4 text-gray-500 mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-700 truncate">{file.name}</span>
                            <span className="text-xs text-gray-500 ml-2 whitespace-nowrap">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Urgency Indicator */}
            <div className={`mt-6 p-4 rounded-xl border-2 ${getUrgencyColor(formData.urgency)} bg-opacity-50 backdrop-blur-sm`}>
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                <span className="font-medium">Urgency Level: {formData.urgency}</span>
              </div>
              <p className="text-sm mt-1 opacity-90">
                {formData.urgency === 'High' && 'Rush orders may incur additional charges.'}
                {formData.urgency === 'Medium' && 'Standard processing time applies.'}
                {formData.urgency === 'Low' && 'Extended deadline - may qualify for discounts.'}
              </p>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 overflow-hidden"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Submitting...
                  </div>
                ) : (
                  <>
                    <span className="relative z-10">Submit Assignment Request</span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </>
                )}
              </button>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-500">
                By submitting this form, you agree to our{' '}
                <Link href="/serviceagreement" className="text-indigo-600 hover:underline">terms of service</Link>
                {' '}and{' '}
                <Link href="/privacynotice" className="text-indigo-600 hover:underline">privacy policy</Link>.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentAssignmentForm;
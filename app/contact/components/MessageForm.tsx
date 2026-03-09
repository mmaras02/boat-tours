"use client";
import { useState, FormEvent } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const MessageForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !/^[\d\s\-+()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call - replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Success!
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClassName = (fieldName: keyof FormErrors) => `
    w-full px-4 py-3 border-2 rounded-lg transition-all outline-none bg-white
    ${errors[fieldName]
      ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
      : 'border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20'
    }
  `;

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6">
      <div className="rounded-xl bg-slate-100  shadow-xl border border-slate-300 p-6 md:p-12 border-l-4 border-accent">
        <div className="mb-8 text-center md:text-left">
          <h2 className='text-2xl font-semibold'>Form information</h2>
          <p>Fill out the form if you have any questions!</p>
          {/* <h2
            className="text-3xl md:text-4xl font-bold text-dark-slate mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Get In Touch
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            We'd love to hear from you. Send us a message and we'll respond to you within 24 hours.
          </p> */}
        </div>

        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg animate-fadeIn">
            <p className="text-green-700 font-medium">
              ✓ Thank you for your message! We'll get back to you soon.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg animate-fadeIn">
            <p className="text-red-700 font-medium">
              ✗ Something went wrong. Please try again or contact us directly.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold text-dark-slate mb-1">
                First Name <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={inputClassName('firstName')}
                placeholder="John"
                aria-invalid={!!errors.firstName}
                aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                disabled={isSubmitting}
              />
              {errors.firstName && (
                <p id="firstName-error" className="mt-1 text-sm text-red-600 animate-slideDown">
                  {errors.firstName}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold text-dark-slate mb-1">
                Last Name <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={inputClassName('lastName')}
                placeholder="Doe"
                aria-invalid={!!errors.lastName}
                aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                disabled={isSubmitting}
              />
              {errors.lastName && (
                <p id="lastName-error" className="mt-1 text-sm text-red-600 animate-slideDown">
                  {errors.lastName}
                </p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold text-dark-slate mb-1">
              Email Address <span className="text-accent">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClassName('email')}
              placeholder="your@email.com"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              disabled={isSubmitting}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-600 animate-slideDown">
                {errors.email}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-semibold text-dark-slate mb-1">
              Phone Number <span className="text-gray-400 text-xs font-normal">(optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={inputClassName('phone')}
              placeholder="+1 (555) 000-0000"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              disabled={isSubmitting}
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1 text-sm text-red-600 animate-slideDown">
                {errors.phone}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-semibold text-dark-slate mb-1">
              Message <span className="text-accent">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={inputClassName('message')}
              placeholder="Tell us about your inquiry..."
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              disabled={isSubmitting}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-sm text-red-600 animate-slideDown">
                {errors.message}
              </p>
            )}
            <p className="mt-1 text-xs text-gray-500">
              {formData.message.length}/500 characters
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              w-full bg-accent text-white font-semibold py-3 px-6 rounded-lg 
              transition-all duration-300 shadow-md hover:shadow-lg text-lg mt-2
              ${isSubmitting
                ? 'opacity-75 cursor-not-allowed bg-accent/80'
                : 'hover:bg-accent-hover transform hover:-translate-y-0.5'
              }
            `}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
        </form>

        <p className="text-xs text-gray-400 text-center mt-4">
          Fields marked with <span className="text-accent">*</span> are required
        </p>
      </div>
    </div>
  );
};
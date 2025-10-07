'use client';

import React, { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    playerName: '',
    ageGroup: '',
    notes: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.parentName.trim()) newErrors.parentName = 'Parent/Guardian name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.playerName.trim()) newErrors.playerName = 'Player name is required';
    if (!formData.ageGroup) newErrors.ageGroup = 'Age group is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          parentName: '',
          email: '',
          phone: '',
          playerName: '',
          ageGroup: '',
          notes: ''
        });
      } else {
        throw new Error('Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-900">Telluride Hockey Dev</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#schedule" className="text-gray-700 hover:text-blue-600 transition-colors">Schedule</a>
              <a href="#coaches" className="text-gray-700 hover:text-blue-600 transition-colors">Coaches</a>
              <a href="#register" className="text-gray-700 hover:text-blue-600 transition-colors">Register</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
            <a
              href="https://buy.stripe.com/YOUR_PAYMENT_LINK"
              target="_blank"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Register Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Telluride Winter Hockey
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-blue-200">
            Skills Camp
          </h2>
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-semibold mb-4">December 20–21 & December 27–28</p>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">Hanley Rink, Telluride, CO</p>
            <p className="text-2xl font-bold mb-4 text-yellow-300">$190 per player (includes two 75-minute sessions)</p>
            <p className="text-xl mb-8 text-blue-100">Ages: 6U–19U</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://buy.stripe.com/YOUR_PAYMENT_LINK"
                target="_blank"
                className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl"
              >
                Register & Pay Online
              </a>
              <a
                href="#about"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-12 py-4 rounded-xl font-bold text-xl transition-all"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About the Camp</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A fun and productive few days on the ice focused on improving all areas of individual skill.
              Players will work on skating, shooting, passing, stickhandling, and hockey IQ through high-tempo drills.
            </p>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mt-6 leading-relaxed">
              Each player gets two 75-minute sessions led by current college players and experienced youth coaches.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">Schedule</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-500 p-8 rounded-2xl text-white shadow-xl">
              <h3 className="text-3xl font-bold mb-6">December 20–21</h3>
              <div className="space-y-4">
                <div className="bg-white bg-opacity-20 p-4 rounded-xl">
                  <h4 className="font-bold text-lg mb-2">6U & 8U</h4>
                  <p className="text-blue-100">Sat 8:45 am • Sun 9:00 am</p>
                </div>
                <div className="bg-white bg-opacity-20 p-4 rounded-xl">
                  <h4 className="font-bold text-lg mb-2">10U</h4>
                  <p className="text-blue-100">Sat 12:00 pm • Sun 10:30 am</p>
                </div>
                <div className="bg-white bg-opacity-20 p-4 rounded-xl">
                  <h4 className="font-bold text-lg mb-2">19U / High School</h4>
                  <p className="text-blue-100">Sat 1:30 pm • Sun 12:00 pm</p>
                </div>
              </div>
            </div>
            <div className="bg-green-500 p-8 rounded-2xl text-white shadow-xl">
              <h3 className="text-3xl font-bold mb-6">December 27–28</h3>
              <div className="space-y-4">
                <div className="bg-white bg-opacity-20 p-4 rounded-xl">
                  <h4 className="font-bold text-lg mb-2">12U</h4>
                  <p className="text-green-100">Sat 8:45 am • Sun 9:00 am</p>
                </div>
                <div className="bg-white bg-opacity-20 p-4 rounded-xl">
                  <h4 className="font-bold text-lg mb-2">14U</h4>
                  <p className="text-green-100">Sat 12:00 pm • Sun 10:30 am</p>
                </div>
                <div className="bg-white bg-opacity-20 p-4 rounded-xl">
                  <h4 className="font-bold text-lg mb-2">19U / High School</h4>
                  <p className="text-green-100">Sat 1:30 pm • Sun 12:00 pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section id="coaches" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">Meet Your Coaches</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-blue-900">Johno Hoins</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Center born in Telluride, Johno grew up on the ice before moving east to play prep school hockey 
                  and later juniors in Canada and Pennsylvania. He now plays NCAA hockey at Manhattanville University 
                  and serves as an assistant coach for the U16 team in Mamaroneck, NY. Coaches and trains with players 
                  at Paul Vincent Hockey in MA—a camp known for developing NHL and college talent.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-blue-900">Justin Fernet</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Defenseman from Sherbrooke, QC. Born and raised in Sherbrooke, Quebec, Justin played throughout 
                  Quebec until 2020 before moving to Connecticut to play prep school hockey. Now at Manhattanville 
                  University and has spent the past two and a half years coaching with Académie CCM in Sherbrooke 
                  and Euro Hockey / Eric Nates Hockey in the New York area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Registration</h2>
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-2xl font-bold mb-4 text-center">Price: $190 per player</p>
            <p className="text-xl mb-8 text-center text-blue-100">Includes: Two 75-minute sessions</p>
            
            {isSubmitted ? (
              <div className="text-center">
                <div className="bg-green-500 text-white p-6 rounded-xl mb-6">
                  <h3 className="text-2xl font-bold mb-2">Thanks for registering!</h3>
                  <p className="text-lg">Payment instructions have been sent to your email.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="parentName" className="block text-sm font-medium mb-2">
                    Parent/Guardian Name *
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg text-gray-900 ${
                      errors.parentName ? 'border-2 border-red-500' : 'border border-gray-300'
                    }`}
                    placeholder="Enter parent/guardian name"
                  />
                  {errors.parentName && (
                    <p className="text-red-300 text-sm mt-1">{errors.parentName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg text-gray-900 ${
                      errors.email ? 'border-2 border-red-500' : 'border border-gray-300'
                    }`}
                    placeholder="Enter email address"
                  />
                  {errors.email && (
                    <p className="text-red-300 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg text-gray-900 border border-gray-300"
                    placeholder="Enter phone number"
                  />
                </div>

                <div>
                  <label htmlFor="playerName" className="block text-sm font-medium mb-2">
                    Player Name *
                  </label>
                  <input
                    type="text"
                    id="playerName"
                    name="playerName"
                    value={formData.playerName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg text-gray-900 ${
                      errors.playerName ? 'border-2 border-red-500' : 'border border-gray-300'
                    }`}
                    placeholder="Enter player name"
                  />
                  {errors.playerName && (
                    <p className="text-red-300 text-sm mt-1">{errors.playerName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="ageGroup" className="block text-sm font-medium mb-2">
                    Age Group *
                  </label>
                  <select
                    id="ageGroup"
                    name="ageGroup"
                    value={formData.ageGroup}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg text-gray-900 ${
                      errors.ageGroup ? 'border-2 border-red-500' : 'border border-gray-300'
                    }`}
                  >
                    <option value="">Select age group</option>
                    <option value="6U">6U</option>
                    <option value="8U">8U</option>
                    <option value="10U">10U</option>
                    <option value="12U">12U</option>
                    <option value="14U">14U</option>
                    <option value="19U/High School">19U/High School</option>
                  </select>
                  {errors.ageGroup && (
                    <p className="text-red-300 text-sm mt-1">{errors.ageGroup}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-medium mb-2">
                    Any Notes (Optional)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg text-gray-900 border border-gray-300"
                    placeholder="Any additional information or special requests"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Registering...' : 'Register for Camp'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Contact</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📧</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Email</h3>
              <a 
                href="mailto:johnohoins@gmail.com" 
                className="text-xl text-blue-300 hover:text-blue-200 transition-colors"
              >
                johnohoins@gmail.com
              </a>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Call/Text</h3>
              <a 
                href="tel:9707080643" 
                className="text-xl text-blue-300 hover:text-blue-200 transition-colors"
              >
                970-708-0643
              </a>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-lg">
              © {new Date().getFullYear()} Telluride Hockey Development. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
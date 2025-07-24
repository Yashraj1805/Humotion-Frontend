import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock, FaBuilding, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Header from '../components/Header';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    phone: '',
    location: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!validateForm ())return;

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/register",
        {
          fullname: formData.name,
          email: formData.email,
          password: formData.password,
          company: formData.company,
          phone: formData.phone,
          location: formData.location
        },
        {
          withCredentials: true,
        }
      );

      console.log(response.data.message || "Registration successful");
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/profile');
    } catch (error:any) {
      if( error.response?.data?.message){
        alert(error.response.data.message);
      }else{
        alert("An error occurred during registration. Please try again.");
      }
    }
    // if (validateForm()) {
    //   // Create user profile
    //   const userProfile = {
    //     name: formData.name,
    //     email: formData.email,
    //     company: formData.company,
    //     phone: formData.phone,
    //     location: formData.location,
    //     joinDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    //   };

    //   // Save to localStorage
    //   localStorage.setItem('userProfile', JSON.stringify(userProfile));
    //   localStorage.setItem('isLoggedIn', 'true');

    //   // Navigate to profile page
    //   navigate('/profile');
    // }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20"
            >
              <h1 className="text-4xl font-bold text-center text-white mb-8">Create Account</h1>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="h-5 w-5 text-blue-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`pl-10 w-full px-4 py-3 bg-white/5 border ${
                        errors.name ? 'border-red-500' : 'border-white/20'
                      } rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="h-5 w-5 text-blue-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`pl-10 w-full px-4 py-3 bg-white/5 border ${
                        errors.email ? 'border-red-500' : 'border-white/20'
                      } rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50`}
                      placeholder="Enter your email"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="h-5 w-5 text-blue-400" />
                    </div>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`pl-10 w-full px-4 py-3 bg-white/5 border ${
                        errors.password ? 'border-red-500' : 'border-white/20'
                      } rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50`}
                      placeholder="Create a password"
                    />
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-400">{errors.password}</p>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="h-5 w-5 text-blue-400" />
                    </div>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`pl-10 w-full px-4 py-3 bg-white/5 border ${
                        errors.confirmPassword ? 'border-red-500' : 'border-white/20'
                      } rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50`}
                      placeholder="Confirm your password"
                    />
                  </div>
                  {errors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-400">{errors.confirmPassword}</p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    Company
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaBuilding className="h-5 w-5 text-blue-400" />
                    </div>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`pl-10 w-full px-4 py-3 bg-white/5 border ${
                        errors.company ? 'border-red-500' : 'border-white/20'
                      } rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50`}
                      placeholder="Enter your company name"
                    />
                  </div>
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-400">{errors.company}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaPhone className="h-5 w-5 text-blue-400" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`pl-10 w-full px-4 py-3 bg-white/5 border ${
                        errors.phone ? 'border-red-500' : 'border-white/20'
                      } rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50`}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                  )}
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    Location
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaMapMarkerAlt className="h-5 w-5 text-blue-400" />
                    </div>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className={`pl-10 w-full px-4 py-3 bg-white/5 border ${
                        errors.location ? 'border-red-500' : 'border-white/20'
                      } rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50`}
                      placeholder="Enter your location"
                    />
                  </div>
                  {errors.location && (
                    <p className="mt-1 text-sm text-red-400">{errors.location}</p>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  Create Account
                </motion.button>

                <p className="text-center text-white/80">
                  Already have an account?{' '}
                  <Link to="/login" className="text-blue-400 hover:text-blue-300 font-medium">
                    Sign in
                  </Link>
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register; 
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaMapMarkerAlt, FaEdit, FaSave, FaCamera, FaCog, FaLock, FaBell, FaShieldAlt, FaTrash, FaSpinner } from 'react-icons/fa';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const token = localStorage.getItem('token');




interface ProfileData {
  name: string;
  email: string;
  phoneNumber: string;
  company: string;
  location: string;
  bio: string;
  role: string;
  joinDate: string;
}

interface PasswordData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const Profile: React.FC = () => {
  const navigate = useNavigate();
  
  // State management
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  const [passwordData, setPasswordData] = useState<PasswordData>({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  const [profileData, setProfileData] = useState<ProfileData>({
    name: '',
    email: '',
    phoneNumber: '',
    company: '',
    location: '',
    bio: '',
    role: 'User',
    joinDate: new Date().toLocaleDateString()
  });

  // Fetch profile data on component mount
  useEffect(() => {
    fetchProfile();
    loadProfileImage();
  }, []);

  // Clear messages after 3 seconds
  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError(null);
        setSuccess(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error, success]);

  const fetchProfile = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const res = await axios.get('https://backend-server-5mwr.onrender.com/api/getprofile',{
        headers: {
          Authorization: `Bearer ${token}`, // ✅ Send token in header
        },
      });
      
      console.log('API Response:', res.data);
      
      // Handle different possible response structures
      const userData = res.data.data || res.data.user || res.data;
      
      const profileInfo: ProfileData = {
        name: userData.name || userData.name || '',
        email: userData.email || '',
        phoneNumber: userData.phoneNumber || 'Not provided',
        company: userData.company || 'Not provided',
        location: userData.location || 'Not provided',
        bio: userData.bio || 'No bio available yet',
        role: userData.role || 'User',
        joinDate: formatDate(userData.joinDate || userData.createdAt) || new Date().toLocaleDateString()
      };
      
      setProfileData(profileInfo);
      localStorage.setItem('userProfile', JSON.stringify(profileInfo));
    } catch (err: any) {
      console.error('Profile fetch error:', err);
      
      if (err.response?.status === 401) {
        setError('Session expired. Redirecting to login...');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        // Try to load from localStorage as fallback
        const savedProfile = localStorage.getItem('userProfile');
        if (savedProfile) {
          try {
            setProfileData(JSON.parse(savedProfile));
            setError('Unable to fetch latest data. Showing cached profile.');
          } catch {
            setError('Error loading profile data.');
          }
        } else {
          setError('Unable to load profile data. Please try again.');
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  const loadProfileImage = () => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setProfileImage(savedImage);
    }
  };

  const formatDate = (dateString: string | undefined): string => {
    if (!dateString) return new Date().toLocaleDateString();
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setError(null);
    setSuccess(null);
  };

  const handleCancel = () => {
    setIsEditing(false);
    fetchProfile(); // Reset to original data
  };

  const handleSave = async () => {
    setIsSaving(true);
    setError(null);
    
    try {
      const res = await axios.put(
        'http://localhost:3000/api/v1/auth/update-profile',
        profileData,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      
      const updatedData = res.data.user || res.data.data || res.data;
      const updatedProfile: ProfileData = {
        ...profileData,
        ...updatedData
      };
      
      setProfileData(updatedProfile);
      localStorage.setItem('userProfile', JSON.stringify(updatedProfile));
      setIsEditing(false);
      setSuccess('Profile updated successfully!');
    } catch (err: any) {
      console.error('Update error:', err);
      setError(err.response?.data?.message || 'Failed to update profile. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (limit to 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError('Image size should be less than 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result as string;
        setProfileImage(imageData);
        localStorage.setItem('profileImage', imageData);
        setSuccess('Profile image updated!');
      };
      reader.onerror = () => {
        setError('Failed to read image file');
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (passwordData.newPassword.length < 6) {
      setError('New password must be at least 6 characters long');
      return;
    }
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setError('New passwords do not match!');
      return;
    }

    try {
      await axios.post(
        'http://localhost:3000/api/v1/auth/change-password',
        {
          oldPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword
        },
        { withCredentials: true }
      );

      setSuccess('Password changed successfully!');
      setShowPasswordModal(false);
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || 'Failed to change password.');
    }
  };

  const handleDeleteAccount = async () => {
    try {
      await axios.delete('http://localhost:3000/api/v1/auth/delete-account', {
        withCredentials: true
      });
      
      // Clear all local data
      localStorage.clear();
      navigate('/');
    } catch (err: any) {
      console.error(err);
      setError('Failed to delete account. Please try again.');
      setShowDeleteModal(false);
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900">
        <Header />
        <div className="flex items-center justify-center h-screen">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <FaSpinner className="text-white text-4xl" />
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900">
      <Header />
      
      {/* Notification Messages */}
      {(error || success) && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className={`fixed top-20 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg z-50 ${
            error ? 'bg-red-500' : 'bg-green-500'
          } text-white`}
        >
          {error || success}
        </motion.div>
      )}
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Profile Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden mb-8 border border-white/20"
            >
              <div className="h-40 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
              <div className="px-4 sm:px-8 py-6 relative">
                <div className="flex flex-col sm:flex-row items-center sm:items-start">
                  <div className="relative -mt-20 sm:mt-0 sm:absolute sm:-top-20 sm:left-8">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-white/10 backdrop-blur-lg p-2 shadow-lg border border-white/20"
                    >
                      {profileImage ? (
                        <img
                          src={profileImage}
                          alt="Profile"
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl sm:text-5xl font-bold">
                          {profileData.fullname?.charAt(0).toUpperCase() || 'U'}
                        </div>
                      )}
                      <label
                        htmlFor="image-upload"
                        className="absolute bottom-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2 rounded-full cursor-pointer hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
                      >
                        <FaCamera className="w-4 h-4" />
                        <input
                          id="image-upload"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleImageUpload}
                          disabled={isEditing}
                        />
                      </label>
                    </motion.div>
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-40 text-center sm:text-left w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <div>
                        {isEditing ? (
                          <input
                            type="text"
                            name="name"
                            value={profileData.fullname}
                            onChange={handleChange}
                            className="text-2xl sm:text-3xl font-bold bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-white"
                            placeholder="Your Name"
                          />
                        ) : (
                          <h1 className="text-2xl sm:text-3xl font-bold text-white">
                            {profileData.fullname || 'User Name'}
                          </h1>
                        )}
                        <p className="text-white/80 mt-1">{profileData.role}</p>
                      </div>
                      <div className="mt-4 sm:mt-0 flex space-x-3">
                        {isEditing ? (
                          <>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={handleCancel}
                              className="px-6 py-3 text-white/80 hover:bg-white/10 rounded-xl transition-all duration-300"
                              disabled={isSaving}
                            >
                              Cancel
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={handleSave}
                              disabled={isSaving}
                              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
                            >
                              {isSaving ? (
                                <FaSpinner className="w-4 h-4 animate-spin" />
                              ) : (
                                <FaSave className="w-4 h-4" />
                              )}
                              <span>{isSaving ? 'Saving...' : 'Save Changes'}</span>
                            </motion.button>
                          </>
                        ) : (
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleEdit}
                            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
                          >
                            <FaEdit className="w-4 h-4" />
                            <span>Edit Profile</span>
                          </motion.button>
                        )}
                      </div>
                    </div>
                    <p className="text-white/60 mt-2">Member since {profileData.joinDate}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Profile Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
                            {/* Main Info */}
              <div className="md:col-span-2 space-y-4 sm:space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/20"
                >
                  <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">About</h2>
                  {isEditing ? (
                    <textarea
                      name="bio"
                      value={profileData.bio}
                      onChange={handleChange}
                      className="w-full h-32 p-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50 resize-none"
                      placeholder="Tell us about yourself..."
                    />
                  ) : (
                    <p className="text-white/80 whitespace-pre-wrap">
                      {profileData.bio || 'No bio available yet.'}
                    </p>
                  )}
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/20"
                >
                  <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <FaEnvelope className="w-5 h-5 text-blue-400" />
                      </div>
                      {isEditing ? (
                        <input
                          type="email"
                          name="email"
                          value={profileData.email}
                          onChange={handleChange}
                          className="flex-1 p-3 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50"
                          placeholder="your@email.com"
                        />
                      ) : (
                        <span className="text-white/80 break-all">{profileData.email || 'No email provided'}</span>
                      )}
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <FaPhone className="w-5 h-5 text-blue-400" />
                      </div>
                      {isEditing ? (
                        <input
                          type="tel"
                          name="phone"
                          value={profileData.phone}
                          onChange={handleChange}
                          className="flex-1 p-3 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50"
                          placeholder="+1 (555) 000-0000"
                        />
                      ) : (
                        <span className="text-white/80">{profileData.phone || 'No phone provided'}</span>
                      )}
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <FaBuilding className="w-5 h-5 text-blue-400" />
                      </div>
                      {isEditing ? (
                        <input
                          type="text"
                          name="company"
                          value={profileData.company}
                          onChange={handleChange}
                          className="flex-1 p-3 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50"
                          placeholder="Company Name"
                        />
                      ) : (
                        <span className="text-white/80">{profileData.company || 'No company provided'}</span>
                      )}
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <FaMapMarkerAlt className="w-5 h-5 text-blue-400" />
                      </div>
                      {isEditing ? (
                        <input
                          type="text"
                          name="location"
                          value={profileData.location}
                          onChange={handleChange}
                          className="flex-1 p-3 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50"
                          placeholder="City, Country"
                        />
                      ) : (
                        <span className="text-white/80">{profileData.location || 'No location provided'}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-4 sm:space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/20"
                >
                  <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Account Settings</h2>
                  <div className="space-y-2">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => navigate('/settings')}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-left text-white/80 hover:bg-white/10 rounded-xl transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <FaCog className="w-5 h-5 text-blue-400" />
                      </div>
                      <span>Settings</span>
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setShowPasswordModal(true)}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-left text-white/80 hover:bg-white/10 rounded-xl transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <FaLock className="w-5 h-5 text-blue-400" />
                      </div>
                      <span>Change Password</span>
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => navigate('/settings?tab=notifications')}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-left text-white/80 hover:bg-white/10 rounded-xl transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <FaBell className="w-5 h-5 text-blue-400" />
                      </div>
                      <span>Notification Settings</span>
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => navigate('/settings?tab=security')}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-left text-white/80 hover:bg-white/10 rounded-xl transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <FaShieldAlt className="w-5 h-5 text-blue-400" />
                      </div>
                      <span>Privacy Settings</span>
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setShowDeleteModal(true)}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-left text-red-400 hover:bg-red-500/10 rounded-xl transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                        <FaTrash className="w-5 h-5 text-red-400" />
                      </div>
                      <span>Delete Account</span>
                    </motion.button>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/20"
                >
                  <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Connected Accounts</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <img 
                          src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
                          alt="Google"
                          className="w-8 h-8"
                        />
                        <span className="text-white/80">Google</span>
                      </div>
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-sm"
                      >
                        Connect
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Password Change Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-md w-full border border-white/20"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Change Password</h3>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">
                  Current Password
                </label>
                <input
                  type="password"
                  name="currentPassword"
                  value={passwordData.currentPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50"
                  required
                  minLength={6}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50"
                  required
                  minLength={6}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50"
                  required
                  minLength={6}
                />
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={() => {
                    setShowPasswordModal(false);
                    setPasswordData({
                      currentPassword: '',
                      newPassword: '',
                      confirmPassword: ''
                    });
                  }}
                  className="px-6 py-3 text-white/80 hover:bg-white/10 rounded-xl transition-all duration-300"
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Change Password
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Delete Account Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-md w-full border border-white/20"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Delete Account</h3>
            <p className="text-white/80 mb-6">
              Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently removed.
            </p>
            <div className="flex justify-end space-x-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowDeleteModal(false)}
                className="px-6 py-3 text-white/80 hover:bg-white/10 rounded-xl transition-all duration-300"
              >
                Cancel
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDeleteAccount}
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-xl hover:from-red-600 hover:to-pink-700 transition-all duration-300"
              >
                Delete Account
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Profile;

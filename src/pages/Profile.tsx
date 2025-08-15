import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSpinner } from 'react-icons/fa';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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

const Profile: React.FC = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [profileData, setProfileData] = useState<ProfileData>({
    name: '',
    email: '',
    phoneNumber: '',
    company: '',
    location: '',
    bio: '',
    role: 'User',
    joinDate: new Date().toLocaleDateString(),
  });
  const [error, setError] = useState<string | null>(null);

  // Fetch profile data on mount
  useEffect(() => {
    fetchProfile();
  }, []);

  // Clear error after 3 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const fetchProfile = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('token');

      if (!token) {
        setError('Session expired. Redirecting to login...');
        setTimeout(() => navigate('/login'), 2000);
        return;
      }

      const res = await axios.get(
        'https://backend-server-5mwr.onrender.com/api/getprofile',
        {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ Send token
          },
        }
      );

      const userData = res.data.data || res.data.user || res.data;

      const profileInfo: ProfileData = {
        name: userData.name || '',
        email: userData.email || '',
        phoneNumber: userData.phoneNumber || 'Not provided',
        company: userData.company || 'Not provided',
        location: userData.location || 'Not provided',
        bio: userData.bio || 'No bio available yet',
        role: userData.role || 'User',
        joinDate:
          formatDate(userData.joinDate || userData.createdAt) ||
          new Date().toLocaleDateString(),
      };

      setProfileData(profileInfo);
      localStorage.setItem('userProfile', JSON.stringify(profileInfo));
    } catch (err: any) {
      console.error('Profile fetch error:', err);

      if (err.response?.status === 401) {
        setError('Session expired. Redirecting to login...');
        setTimeout(() => navigate('/login'), 2000);
      } else {
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

  const formatDate = (dateString: string | undefined): string => {
    if (!dateString) return new Date().toLocaleDateString();
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900">
        <Header />
        <div className="flex items-center justify-center h-screen">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
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
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 text-white">
          <h1 className="text-3xl font-bold mb-4">Profile</h1>
          {error && <p className="bg-red-500 p-3 rounded mb-4">{error}</p>}
          <div className="bg-white/10 p-6 rounded-lg">
            <p><strong>Name:</strong> {profileData.name}</p>
            <p><strong>Email:</strong> {profileData.email}</p>
            <p><strong>Phone:</strong> {profileData.phoneNumber}</p>
            <p><strong>Company:</strong> {profileData.company}</p>
            <p><strong>Location:</strong> {profileData.location}</p>
            <p><strong>Bio:</strong> {profileData.bio}</p>
            <p><strong>Role:</strong> {profileData.role}</p>
            <p><strong>Joined:</strong> {profileData.joinDate}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;

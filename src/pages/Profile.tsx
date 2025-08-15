import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaMapMarkerAlt,
  FaEdit,
  FaSave,
  FaCamera,
  FaCog,
  FaLock,
  FaBell,
  FaShieldAlt,
  FaTrash,
  FaSpinner,
} from "react-icons/fa";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    company: "",
    location: "",
    bio: "",
    role: "User",
    joinDate: new Date().toLocaleDateString(),
  });

  useEffect(() => {
    fetchProfile();
    loadProfileImage();
  }, []);

  const fetchProfile = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        "https://backend-server-5mwr.onrender.com/api/getprofile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const userData = res.data.data || res.data.user || res.data;

      setProfileData({
        name: userData.name || "",
        email: userData.email || "",
        phoneNumber: userData.phoneNumber || "Not provided",
        company: userData.company || "Not provided",
        location: userData.location || "Not provided",
        bio: userData.bio || "No bio available yet",
        role: userData.role || "User",
        joinDate: formatDate(userData.joinDate || userData.createdAt),
      });
    } catch (err: any) {
      console.error("Profile fetch error:", err);
      if (err.response?.status === 401) {
        setError("Session expired. Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setError("Failed to load profile");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const loadProfileImage = () => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => {
    setIsEditing(false);
    fetchProfile();
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const res = await axios.put(
        "https://backend-server-5mwr.onrender.com/api/updateprofile",
        profileData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setProfileData(res.data.data || res.data.user || res.data);
      setIsEditing(false);
      setSuccess("Profile updated successfully!");
    } catch (err: any) {
      console.error("Update error:", err);
      setError("Failed to update profile");
    } finally {
      setIsSaving(false);
    }
  };

  const handleChange = (e: any) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result as string;
        setProfileImage(imageData);
        localStorage.setItem("profileImage", imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      await axios.delete(
        "https://backend-server-5mwr.onrender.com/api/deleteprofile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.clear();
      navigate("/login");
    } catch (err) {
      console.error(err);
      setError("Failed to delete account");
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <FaSpinner className="text-white text-4xl animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 text-white">
      <Header />
      <div className="max-w-4xl mx-auto p-6">
        {error && <div className="bg-red-500 p-3 rounded">{error}</div>}
        {success && <div className="bg-green-500 p-3 rounded">{success}</div>}

        {/* Profile Image */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <img
              src={
                profileImage ||
                "https://via.placeholder.com/150?text=Profile+Image"
              }
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-white"
            />
            <label className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full cursor-pointer">
              <FaCamera />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>
          <div>
            <h1 className="text-2xl font-bold">{profileData.name}</h1>
            <p>{profileData.role}</p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              icon={<FaUser />}
              name="name"
              label="Full Name"
              value={profileData.name}
              isEditing={isEditing}
              onChange={handleChange}
            />
            <InputField
              icon={<FaEnvelope />}
              name="email"
              label="Email"
              value={profileData.email}
              isEditing={isEditing}
              onChange={handleChange}
            />
            <InputField
              icon={<FaPhone />}
              name="phoneNumber"
              label="Phone Number"
              value={profileData.phoneNumber}
              isEditing={isEditing}
              onChange={handleChange}
            />
            <InputField
              icon={<FaBuilding />}
              name="company"
              label="Company"
              value={profileData.company}
              isEditing={isEditing}
              onChange={handleChange}
            />
            <InputField
              icon={<FaMapMarkerAlt />}
              name="location"
              label="Location"
              value={profileData.location}
              isEditing={isEditing}
              onChange={handleChange}
            />
          </div>

          <div className="flex gap-4 mt-6">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="bg-green-600 px-4 py-2 rounded"
                  disabled={isSaving}
                >
                  {isSaving ? "Saving..." : "Save"}
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-600 px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={handleEdit}
                className="bg-blue-600 px-4 py-2 rounded"
              >
                <FaEdit /> Edit
              </button>
            )}

            <button
              onClick={() => setShowDeleteModal(true)}
              className="bg-red-600 px-4 py-2 rounded ml-auto"
            >
              <FaTrash /> Delete Account
            </button>
          </div>
        </div>

        {/* Delete Confirmation */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white text-black p-6 rounded-lg">
              <h2 className="text-lg font-bold mb-4">
                Are you sure you want to delete your account?
              </h2>
              <div className="flex gap-4">
                <button
                  onClick={handleDeleteAccount}
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  Yes, Delete
                </button>
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="bg-gray-300 px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Small reusable component
const InputField = ({ icon, label, name, value, isEditing, onChange }: any) => (
  <div>
    <label className="block mb-1">{label}</label>
    <div className="flex items-center bg-white bg-opacity-20 p-2 rounded">
      <span className="mr-2">{icon}</span>
      {isEditing ? (
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          className="bg-transparent outline-none flex-1"
        />
      ) : (
        <span>{value}</span>
      )}
    </div>
  </div>
);

export default Profile;

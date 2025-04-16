import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs";

const Profile = () => {
  const [bannerUrl, setbannerUrl] = useState("../public/banner.jpg");
  const [profileUrl, setprofileUrl] = useState("../public/logo.jpg");
  const bannerHandleChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setbannerUrl(URL.createObjectURL(file));
    }
  };
  const handleProfileChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setprofileUrl(URL.createObjectURL(file));
    }
  };
  return (
    <div className="relative w-[94%] ml-[5rem]">
      <div className="relative">
        <img
          src={bannerUrl}
          alt="background image"
          className="w-full h-60 object-cover border-black border-1"
        />
        <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="banner-uploaded" className="cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input
            type="file"
            id="banner-uploaded"
            accept="image/*"
            className="hidden"
            onChange={bannerHandleChange}
          />
        </button>
      </div>
      {/* channel logo */}
      <div className="flex items-center ml-2 ">
        <img
          src={profileUrl}
          alt="profile picture"
          className="w-50 h-50 object-cover rounded-full border-white relative"
        />
        <button className="absolute ml-[4.6rem] mt-[6rem] z-10 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="profile-uploaded">
            <FaCamera size={30} />
          </label>
          <input
            type="file"
            id="profile-uploaded"
            accept="image/*"
            className="hidden"
            onChange={handleProfileChange}
          />
        </button>
        <div className="mt-4">
          <h1 className="ml-0">Anugraha Dev</h1>
          <p className="ml-0">10 views</p>
          <p className="mt-2">
            This is channel where you can easily learn coding....
          </p>
          <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded-2xl hover:bg-red-500">
            Subscribe
          </button>
        </div>
      </div>
      <Tabs />
    </div>
  );
};

export default Profile;

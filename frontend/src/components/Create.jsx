// src/components/CreateFoodItem.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const CreateFoodItem = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("poster", data.poster[0]);
    formData.append("video", data.video[0]);
    formData.append("description", data.description);
    formData.append("price[amount]", data.amount);
    formData.append("price[currency]", data.currency);

    try {
      setIsUploading(true);
      const res = await axios.post("api/food/create", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (progressEvent) => {
          const percent = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percent);
        },
      });
      console.log(res.data);
      alert("✅ Food item created successfully!");
      reset();
      setUploadProgress(0);
      setIsUploading(false);
    } catch (err) {
      console.error(err);
      alert("❌ Failed to upload food item");
      setIsUploading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-red-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-lg">
        <h1 className="text-2xl font-semibold mb-4 text-center text-gray-700">
          Create Food Item
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block font-medium text-gray-700">Title</label>
            <input
              type="text"
              {...register("title", { required: true })}
              className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter food title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">Title is required</p>
            )}
          </div>

          {/* Poster */}
          <div>
            <label className="block font-medium text-gray-700">Poster</label>
            <input
              type="file"
              accept="image/*"
              {...register("poster", { required: true })}
              className="w-full border rounded-lg p-2"
            />
            {errors.poster && (
              <p className="text-red-500 text-sm mt-1">Poster is required</p>
            )}
          </div>

          {/* Video */}
          <div>
            <label className="block font-medium text-gray-700">Video</label>
            <input
              type="file"
              accept="video/*"
              {...register("video", { required: true })}
              className="w-full border rounded-lg p-2"
            />
            {errors.video && (
              <p className="text-red-500 text-sm mt-1">Video is required</p>
            )}
          </div>

          {/* Upload Progress */}
          {isUploading && (
            <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
              <div
                className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          )}

          {/* Description */}
          <div>
            <label className="block font-medium text-gray-700">Description</label>
            <textarea
              {...register("description", { required: true })}
              className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter food description"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                Description is required
              </p>
            )}
          </div>

          {/* Price */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-medium text-gray-700">Amount</label>
              <input
                type="number"
                {...register("amount", { required: true })}
                className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="₹ Price"
              />
              {errors.amount && (
                <p className="text-red-500 text-sm mt-1">Amount required</p>
              )}
            </div>

            <div>
              <label className="block font-medium text-gray-700">Currency</label>
              <select
                {...register("currency", { required: true })}
                className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select</option>
                <option value="INR">INR ₹</option>
                <option value="USD">USD $</option>
                <option value="EUR">EUR €</option>
              </select>
              {errors.currency && (
                <p className="text-red-500 text-sm mt-1">Currency required</p>
              )}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isUploading}
            className={`w-full p-3 rounded-lg text-white font-semibold ${
              isUploading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isUploading ? "Uploading..." : "Create Food Item"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateFoodItem;

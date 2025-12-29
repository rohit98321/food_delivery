import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { asyncGetSingleFood, asyncUpdateFood } from "../../reduxToolKit/Actions/food.action";
import { useForm } from "react-hook-form";

const SingleFood = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetSingleFood(id));
  }, [dispatch, id]);

  const food = useSelector((state) => state.food.singleFood);
  console.log("single food data", food);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: food?.title,
      description: food?.description,
      price: food?.price,
      currency: food?.currency,
    },
  });

  const foodUpdateHandler = (updatedData) => {
      console.log("foodUpdateHandler clicked");
    dispatch(asyncUpdateFood(updatedData,id))
    
  };

  return (
    <div className="flex gap-4 flex-col p-4 ">
      <div className="flex gap-4">
        <div className="w-[500px] h-[500px]">
          <img
            className="w-[500px] h-[500px] object-cover"
            src={food.poster}
            alt="poster"
          />
        </div>

        <div>
          <h2 className="text-4xl">{food.description}</h2>
          <h2 className="text-2xl">
            <span>Title : </span>
            {food.title}
          </h2>
          <h2 className="text-2xl">
            <span>price : </span>
            {food.price}
          </h2>
        </div>
      </div>

      <div className="w-1/2 h-[600px] bg-[#57595B]  border p-3">
        <form
          onSubmit={handleSubmit(foodUpdateHandler)}
          className="space-y-4 w-[50%]"
        >
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

          {/* Description */}
          <div>
            <label className="block font-medium text-gray-700">
              Description
            </label>
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
                type="Number"
                {...register("price", { required: true })}
                className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="₹ Price"
              />
              {errors.price && (
                <p className="text-red-500 text-sm mt-1">Amount required</p>
              )}
            </div>

            <div>
              <label className="block font-medium text-gray-700">
                Currency
              </label>
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
            className="bg-blue-800 m-auto outline-0 border p-2 rounded text-white"
          >
            Update Food
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleFood;

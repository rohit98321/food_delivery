import React from "react";
import { MdClose } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { asyncAddUserAddress } from "../reduxToolKit/Actions/userAddress.action";

const AddAddress = ({ setcheck }) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);

  const addressHandler = (addressdata) => {
    dispatch(asyncAddUserAddress(addressdata));
    dispatch(asyncAddUserAddress(user._id));
    reset();
  };

  return (
    <div>
      <form
        className="border p-3 mb-1.5 flex flex-col w-1/2  bg-[#758A93]"
        onSubmit={handleSubmit(addressHandler)}
      >
        <button
          className="text-4xl w-full flex justify-end cursor-auto text-red-900 w-[20%] "
          onClick={() => setcheck(false)}
        >
          <MdClose size={30} color="#8C1007" />
        </button>

        <input
          {...register("houseNo", { required: "houseNo is required" })}
          placeholder="House No/Flat/Plot Number"
          className="w-[90%] border outline-0 p-2 rounded mb-2"
        />
        {errors.houseNo && (
          <p m-0 className="text-[#8C1007]">
            {errors.houseNo.message}
          </p>
        )}

        <input
          {...register("street", { required: "street is required" })}
          placeholder="Street"
          className="w-[90%] border outline-0 p-2 rounded mb-2"
        />
        {errors.street && (
          <p m-0 className="text-[#8C1007]">
            {errors.street.message}
          </p>
        )}

        <input
          {...register("area", { required: "area is required" })}
          placeholder="Area/Locality"
          className="w-[90%] border outline-0 p-2 rounded mb-2"
        />
        {errors.area && (
          <p m-0 className="text-[#8C1007]">
            {errors.area.message}
          </p>
        )}

        <input
          {...register("city", { required: "city is required" })}
          placeholder="City"
          className="w-[90%] border outline-0 p-2 rounded mb-2"
        />
        {errors.city && (
          <p m-0 className="text-[#8C1007]">
            {errors.city.message}
          </p>
        )}

        <input
          {...register("state", { required: "state is required" })}
          placeholder="State"
          className="w-[90%] border outline-0 p-2 rounded mb-2"
        />
        {errors.state && (
          <p m-0 className="text-[#8C1007]">
            {errors.state.message}
          </p>
        )}

        <input
          {...register("pincode", {
            required: "Pincode required",
            pattern: {
              value: /^[0-9]{6}$/,
              message: "Only numbers allowed",
            },
          })}
          placeholder="Pincode"
          className="w-[90%] border outline-0 p-2 rounded mb-2"
        />

        {errors.pincode && (
          <p m-0 className="text-[#8C1007]">
            {errors.pincode.message}
          </p>
        )}
        <input
          {...register("phone", {
            required: "Phone number required",

            pattern: {
              value: /^[6-9][0-9]{9}$/,
              message: "Only numbers allowed",
            },
            maxLength: {
              value: 10,
              message: "Must be 10 digits",
            },
            
          })}
          placeholder="phone"
          className="w-[90%] border outline-0 p-2 rounded mb-2"
        />

        {errors.phone && (
          <p m-0 className="text-[#8C1007]">
            {errors.phone.message}
          </p>
        )}

        <button
          type="submit"
          className="w-[50%] bg-blue-600 m-auto text-black py-2 rounded hover:bg-blue-300"
        >
          Add Address
        </button>
      </form>
    </div>
  );
};

export default AddAddress;

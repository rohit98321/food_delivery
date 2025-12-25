import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { asyncDeleteUserAddress, asyncUpdateUserAddress } from "../reduxToolKit/Actions/userAddress.action";

const UpdateUserAddress = ({ address }) => {
  console.log(address);
  const { reset, handleSubmit, register } = useForm({
    defaultValues: {
      houseNo: address?.houseNo,
      street: address?.street,
      area: address?.area,
      city: address?.city,
      state: address?.state,
      pincode: address?.pincode,
      phone: address?.phone,
    },
  });

  const dispatch = useDispatch();

  const updateAddressHandler = (addressdata) => {
    dispatch(asyncUpdateUserAddress(address._id, addressdata));
    reset()
  };

  const deleteHandler = () => {
    dispatch(asyncDeleteUserAddress(address._id))
  };

  return (
    <div>
      <form
        className="border p-3 flex flex-col w-1/2  bg-[#5A7863]"
        onSubmit={handleSubmit(updateAddressHandler)}
      >
        <input
          {...register("houseNo")}
          placeholder="House No/Flat/Plot Number"
          className="w-[90%] border p-2 rounded mb-2"
        />
        <input
          {...register("street")}
          placeholder="Street"
          className="w-[90%] border p-2 rounded mb-2"
        />
        <input
          {...register("area")}
          placeholder="Area/Locality"
          className="w-[90%] border p-2 rounded mb-2"
        />
        <input
          {...register("city")}
          placeholder="City"
          className="w-[90%] border p-2 rounded mb-2"
        />
        <input
          {...register("state")}
          placeholder="State"
          className="w-[90%] border p-2 rounded mb-2"
        />

        <input
          {...register("pincode")}
          placeholder="Pincode"
          className="w-[90%] border p-2 rounded mb-2"
        />
        <input
          {...register("phone")}
          placeholder="phone"
          className="w-[90%] border p-2 rounded mb-2"
        />

        <div className="m-auto w-1/4 flex gap-2.5">
          <button
            type="submit"
            className="w-[50%] bg-blue-600 m-auto text-black py-2 rounded hover:bg-blue-300"
          >
            Update
          </button>

          <button
            type="button"
            onClick={deleteHandler}
            className="w-[50%] bg-red-600 m-auto text-black py-2 rounded hover:bg-red-300"
          >
            delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUserAddress;

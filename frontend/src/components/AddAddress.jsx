import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import  asyncAddUserAddress  from '../reduxToolKit/Actions/userAddress.action'

const AddAddress = () => {


    const {register,handleSubmit}=useForm()
    const dispatch=useDispatch();

    const addressHandler=(addressdata)=>{
        dispatch(asyncAddUserAddress(addressdata))
    }

  return (
    <div>

        <form className='border p-3 flex flex-col w-1/2  bg-emerald-700' onSubmit={handleSubmit(addressHandler)}>

        <input {...register("houseNo")} placeholder="House No/Flat/Plot Number" className="w-[90%] border p-2 rounded mb-2" />
        <input {...register("street")} placeholder="Street" className="w-[90%] border p-2 rounded mb-2" />
        <input {...register("area")} placeholder="Area/Locality" className="w-[90%] border p-2 rounded mb-2" />
        <input {...register("city")} placeholder="City" className="w-[90%] border p-2 rounded mb-2" />
        <input {...register("state")} placeholder="State" className="w-[90%] border p-2 rounded mb-2" />

        <input {...register("pincode")} placeholder="Pincode" className="w-[90%] border p-2 rounded mb-2" />
        <input {...register("phone")} placeholder="phone" className="w-[90%] border p-2 rounded mb-2" />

        <button type="submit" className="w-[50%] bg-blue-600 m-auto text-black py-2 rounded hover:bg-blue-300">
          Add Address
        </button>
        

        
        </form>




    </div>



  )
}

export default AddAddress
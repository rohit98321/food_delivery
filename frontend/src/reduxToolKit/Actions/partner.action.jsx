import { toast } from "react-toastify";
import axios from "../../Api/config";
import { loadfoodPartner, clearfoodPartner } from "../Slices/foodPartner.slice";
import { useNavigate } from "react-router-dom";

export const asyncGetfoodPartner = () => async (dispatch, getstate) => {
  try {
    const res = await axios.get("/auth/foodpartner/get", {
      withCredentials: true,
    });
    console.log(res.data.foodPartner);
    dispatch(loadfoodPartner(res.data.foodPartner));
  } catch (error) {
    toast.error(error.response?.data?.message);
  }
};

export const asyncPartnerRegister = (details) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/auth/foodpartner/register", details, {
      withCredentials: true,
    });
    console.log(data);
    dispatch(loadfoodPartner(data.user));
    console.log(data.user);
    toast.success(data.message);
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
};

export const asyncPartnerLogin = (details) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/auth/foodpartner/login", details, {
      withCredentials: true,
    });
    console.log(data);
    toast.success(data.message);
    console.log("partenr login",data.foodPartner);
    dispatch(loadfoodPartner(data.foodPartner))
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};

export const asyncPartnerLogout = () => async (dispatch, getState) => {
  try {
    axios.post("/auth/foodpartner/logout", {}, { withCredentials: true });
    toast.success("logged out successfully");
    dispatch(clearfoodPartner());
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
};

import axios, { AxiosResponse } from "axios"
import {config} from "../utils/config"

export const getProducts=async()=>{
   const response:AxiosResponse=await axios.get(`${config.apiURL}/products`)
   return response.data;
}
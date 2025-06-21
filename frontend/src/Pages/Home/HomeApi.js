import axios from "axios";
import { BASE_BACKEND_URL } from "../../settings";

export const ProductsListApi = axios.create({
  baseURL: BASE_BACKEND_URL + "api/products/product/",
});


export const CategoriesHomeApi = axios.create({
  baseURL: BASE_BACKEND_URL + "api/products/categories-home/",
});
export const LandingPageImageApi = axios.create({
  baseURL: BASE_BACKEND_URL + "api/dashboard/landing-image/",
});

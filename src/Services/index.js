import Products from './products';
import moviesServices from './movie.js';
import userServices from './user.js';
import shoppingServices from './shopingcart'
export const ProductsService = new Products();
export const MoviesServices = new moviesServices();
export const UserServices = new userServices();
export const ShopingServices =new shoppingServices();
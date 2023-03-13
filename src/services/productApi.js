import axiosClient from './axiosClient';

const productApi = {
	getAllProducts(params) {
		let url = 'products';
		return axiosClient.get(url, { params });
	},
	getProductItems(params) {
		let url = 'items';
		return axiosClient.get(url, { params });
	},
};
export default productApi;

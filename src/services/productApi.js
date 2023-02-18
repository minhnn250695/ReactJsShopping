import axiosClient from './axiosClient';

const productApi = {
	getAll(params) {
		let url = 'products';
		return axiosClient.get(url, { params });
	},
};
export default productApi;

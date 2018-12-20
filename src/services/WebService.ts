import axios from 'axios';

function searchById(id: string): Promise<any> {
	return axios
		.get('APIのURL')
		.then(results => {
			return results.data;
		})
		.then(data => ({ data }), error => ({ error: error.message || 'error' }))
		.catch(e => {
			return Promise.reject(e);
		});
}

export const search = (id: string) => searchById(id);

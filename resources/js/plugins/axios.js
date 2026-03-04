import axios from 'axios';
import { toast } from 'vue3-toastify'; // Or your chosen library
import 'vue3-toastify/dist/index.css';

// 1. Configure Request Defaults
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
if (window.wpApiSettings?.nonce) {
    axios.defaults.headers.common['X-WP-Nonce'] = window.wpApiSettings.nonce;
}

// 2. Add Response Interceptor
axios.interceptors.response.use(
    (response) => {
        // Success: Only proceed if it's a standard 200/201 success
        // Some APIs return 200 but include an { error: true } body
        if (response.data?.error) {
            toast.error(response.data.message || 'An internal error occurred.', {
                position: "top-right",
                autoClose: false,
            });
        }
        return response;
    },
    (error) => {
        // Failure: Status codes like 400, 401, 422, 500 fall here
        const status = error.response ? error.response.status : null;
        const message = error.response?.data?.message || error.message || 'Server Error';

        if (status !== 200) {
            toast.error(`Error ${status || ''}: ${message}`, {
                position: "top-right",
                autoClose: false,
            });
        }

        return Promise.reject(error);
    }
);

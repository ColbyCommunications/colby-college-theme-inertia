import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

// Create a custom instance
const api = axios.create();

api.interceptors.response.use(
    (response) => {
        if (response.data?.error) {
            toast.error(response.data.message || 'An internal error occurred.');
        }
        return response;
    },
    (error) => {
        console.log(error.response); // This should now fire
        const status = error.response ? error.response.status : null;
        const message = error.response?.data?.message || error.message || 'Server Error';

        toast.error(`Error: ${message}`, {
            position: "top-right",
            autoClose: false,
        });

        return Promise.reject(error);
    }
);

export default api; // Export THIS specific instance
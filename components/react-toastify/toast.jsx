import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Inside your component
const notify = () => toast.success('Task added successfully!');

// Call notify after successful form submission
notify();

// Render ToastContainer at the root level of your app
<ToastContainer />

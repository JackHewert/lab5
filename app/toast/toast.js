import { cn } from '../../lib/utils/mergeCss';
import { toast } from 'react-toastify';

const AddTask = () => {
    const handleAddTask = () => {
        // Add task logic...
        // For demo purposes, let's just show a success notification
        toast.success('Task added successfully!');
    };

    return (
        <div>
            { }
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default AddTask;

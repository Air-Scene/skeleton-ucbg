export interface StatusBadgeProps {
  status: 'completed' | 'processing' | 'pending' | 'error'; 
  className?: string;
}

const StatusBadge = ({ status, className = '' }: StatusBadgeProps) => {
  const statusClasses = {
    completed: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    processing: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    pending: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
    error: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
  };

  return (
    <span className={`px-2 py-1 rounded-full text-sm ${statusClasses[status]} ${className}`}>
      {status}
    </span>
  );
};

export default StatusBadge; 
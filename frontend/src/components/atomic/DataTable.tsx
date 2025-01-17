import { DataTable as PrimeDataTable } from 'primereact/datatable';

export interface DataTableProps {
  className?: string;
  children?: React.ReactNode;
}

const DataTable = ({ className = '', ...props }: DataTableProps) => {
  const baseConfig = {
    paginator: true,
    rows: 10,
    className: `p-datatable-sm ${className}`,
    pt: {
      root: { className: 'dark:bg-gray-800' },
      header: { className: 'dark:bg-gray-800 dark:text-white' },
      thead: { className: 'dark:bg-gray-700' },
      th: { className: 'dark:text-gray-200' },
      tbody: { className: 'dark:bg-gray-800' },
      tr: { className: 'dark:text-gray-300 dark:hover:bg-gray-700' },
      td: { className: 'dark:border-gray-700' },
      pagination: { className: 'dark:bg-gray-800 dark:text-gray-300' }
    }
  };

  return <PrimeDataTable {...baseConfig} {...props} />;
};

export default DataTable; 
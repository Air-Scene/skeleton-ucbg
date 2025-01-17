export interface PageHeaderProps {
  title: string;
  children?: React.ReactNode;
}

const PageHeader = ({ title, children }: PageHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        {title}
      </h1>
      <div className="flex gap-2">
        {children}
      </div>
    </div>
  );
};

export default PageHeader; 
import { Outlet } from 'react-router-dom';
import TopBar from './components/TopBar';

const PublicLayout = () => {

  return (
    <>
      <TopBar />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 mt-16">
        <Outlet />
      </div>
    </>
  );
};

export default PublicLayout; 
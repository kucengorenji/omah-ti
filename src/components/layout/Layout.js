import Navbar from '../Navbar';
import Footer from '../Footer';
import OutfitBar from '../OutfitBar';

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout min-h-100vh">
        <Navbar />
        <OutfitBar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;

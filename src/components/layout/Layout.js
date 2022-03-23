import Navbar from '../Navbar';
import Footer from '../Footer';
import OutfitBar from '../OutfitBar';

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout">
        <Navbar />
        <OutfitBar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;

import Jumbotron from '../components/homepage-component/Jumbotron';
import NewHighlight from '../components/homepage-component/NewHighligt';
import Popular from '../components/homepage-component/Popular';

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <Jumbotron />
        <NewHighlight />
        <Popular />
      </div>
    </>
  );
};

export default HomePage;

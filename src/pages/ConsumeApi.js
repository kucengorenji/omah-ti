import Jumbotron from '../components/homepage-component/Jumbotron';
import NewHighlight from '../components/homepage-component/NewHighligt';
import Popular from '../components/homepage-component/Popular';

const ConsumeApi = () => {
  return (
    <>
      <div className="container mx-auto px-4 min-h-screen">
        <Jumbotron />
        <NewHighlight />
        <Popular />
      </div>
    </>
  );
};

export default ConsumeApi;

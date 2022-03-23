import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ConsumeApi from './pages/ConsumeApi';

function App() {
  return (
    <>
      <Layout>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/api" element={<ConsumeApi />} />
          </Routes>
        </div>
      </Layout>
    </>
  );
}

export default App;

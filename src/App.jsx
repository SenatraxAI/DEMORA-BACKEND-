import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Teams from './pages/Teams';
import Roster from './pages/Roster';
import Schedule from './pages/Schedule';
import Practice from './pages/Practice';
import Registration from './pages/Registration';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="teams" element={<Teams />} />
          <Route path="roster" element={<Roster />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="practice" element={<Practice />} />
          <Route path="register" element={<Registration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

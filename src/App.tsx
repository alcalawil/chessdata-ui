import { Route, Routes, useNavigate } from 'react-router-dom';
import {NextUIProvider} from '@nextui-org/react';
import PlayersPage from './pages/PlayersPage';
import GamesPage from './pages/GamesPage';
import HomePage from './pages/HomePage';
import TournamentsPage from './pages/TournamentsPage';

export default function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/Players" element={<PlayersPage />} />
			<Route path="/Games" element={<GamesPage />} />
			<Route path="/Tournaments" element={<TournamentsPage />} />
		</Routes>
	</NextUIProvider>
  );
}

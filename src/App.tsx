import { Routes, useNavigate } from 'react-router-dom';
import {NextUIProvider} from '@nextui-org/react';
import NavBarr from './components/NavBar/NavBar';

export default function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
		<NavBarr />

		<Routes>
			{/* <Route path="/" element={<HomePage />} /> */}
		</Routes>
	</NextUIProvider>
  );
}

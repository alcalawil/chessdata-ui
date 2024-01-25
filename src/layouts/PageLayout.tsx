import NavBar from '../components/NavBar/NavBar';
// import Footer from './Footer';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
   		<NavBar />
		{children}
		{/* <Footer /> */}
    </>
  );
};

export default PageLayout;
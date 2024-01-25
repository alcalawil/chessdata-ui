import Search from "../components/Search/Search";
import PageLayout from "../layouts/PageLayout";

export default function HomePage() {
  return (
    <PageLayout>
		<div style={{
			height: '100vh', // Use 100% of the viewport height
			display: 'flex',
			justifyContent: 'center', // Center horizontally
			alignItems: 'center' // Center vertically
		}}>
			<Search />
		</div>
    </PageLayout>
  );
}

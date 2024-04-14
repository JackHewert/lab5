import { NavBar } from '@/components/navbar/NavBar'
import '@/css/globals.css'

export const metadata = {
	title: 'To Do List App',
	description: 'Best to do list of the year in DMIT',
}
import mergeCss from '@/lib/utils/mergeCss';

const App = () => {
	const className = mergeCss(['class1', 'class2', { 'class3': true }]);

	return (
		<div className={className}>
			<html lang="en">
				<link rel="icon" href="/svg/favicon.svg" type="image/svg+xml" />
				<body className="bg-gray-200">
					<NavBar />
					{children}
				</body>
			</html>
		</div>
	);
};

export default App;


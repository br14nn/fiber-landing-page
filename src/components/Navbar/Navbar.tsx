import List from "./List";

export default function () {
	return (
		<nav className="flex flex-row justify-between items-center font-inter leading-none">
			<p className="font-bold w-2/12">Fiber</p>

			<ul className="flex flex-row justify-end items-center gap-6 w-6/12">
				<List>Community</List>
				<List>Pricing</List>
				<List>Features</List>
			</ul>

			<ul className="flex flex-row justify-end items-center gap-6 font-bold w-4/12">
				<List>Sign In</List>
				<List className="bg-violet-blue text-white px-6 py-4 rounded">Sign Up</List>
			</ul>
		</nav>
	);
}

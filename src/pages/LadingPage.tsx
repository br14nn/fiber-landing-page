import Navbar from "../components/Navbar/Navbar";

export default function () {
	return (
		<main className="overflow-y-auto aria-hidden:">
			<section className="bg-vista-white h-screen min-h-[720px] py-10 px-28 screen-1024px:px-10">
				<Navbar />
			</section>
			<section className="bg-white h-screen min-h-[720px]"></section>
		</main>
	);
}

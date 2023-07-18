import Navbar from "../components/Navbar/Navbar";

export default function () {
  return (
    <main className="overflow-y-auto">
      <Navbar />
      <section className="h-screen min-h-[720px] bg-vista-white px-28 py-10"></section>
      <section className="h-screen min-h-[720px] bg-white"></section>
    </main>
  );
}

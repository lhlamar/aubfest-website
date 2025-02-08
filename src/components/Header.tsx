import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-blue-800 p-4 z-50">
      <MobileNav />
      <h1 className="text-2xl font-bold text-white text-center">AUBFEST 2025</h1>
    </header>
  );
}

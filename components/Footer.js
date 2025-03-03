import Link from "next/link";

export default function Footer() {
    return (
      <footer className="bg-blue-500 text-white p-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">Nakolo.pokus</h3>
            <p className="text-sm">© {new Date().getFullYear()} Všechna práva vyhrazena
                                                                <br/>(Tato stránka není oficiální)</p>
          </div>
          <nav className="flex space-x-4">
            <a href="#" className="hover:underline">O nás</a>
            <a href="#" className="hover:underline">Podmínky</a>
            <Link href="/kontakty" className="hover:underline">Kontakt</Link>
          </nav>
        </div>
      </footer>
    );
  }
  
import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-blue-500 text-white p-4 w-full"> 
        <h1 className="text-4xl font-bold text-left m-2">Nakolo.pokus</h1>
        <ul className="menu menu-horizontal bg-blue-900 w-full sm:flex-row justify-between items-stretch">
          <li className="flex-1"><Link href="/" className="flex justify-center items-center h-full w-full">Domů</Link></li>
          <li className="flex-1"><Link href="/trebonsko" className="flex justify-center items-center h-full w-full">Třeboňsko</Link></li>
          <li className="flex-1"><Link href="/trasy" className="flex justify-center items-center h-full w-full">Trasy</Link></li>
          <li className="flex-1"><Link href="/kola" className="flex justify-center items-center h-full w-full">Půjčovna kol</Link></li>
          <li className="flex-1"><Link href="/ubyt" className="flex justify-center items-center h-full w-full">Ubytování</Link></li>
          <li className="flex-1"><Link href="/kontakty" className="flex justify-center items-center h-full w-full">Kontakty</Link></li>
          </ul>
      </header>
    );
  }
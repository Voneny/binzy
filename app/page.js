'use client';

import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gray-100 text-gray-900 flex flex-col">
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
      <div className='flex-grow p-4 bg-white shadow-lg rounded-lg flex flex-col items-start gap-4 sm:flex-row'>
        <main className="flex-grow p-4 bg-white shadow-lg rounded-lg flex flex-col md:flex-row items-start gap-4 sm:flex-row-reverse">
          <div className='md:w-2/3'>
              <h2 className='text-2xl font-bold flex-1'>Vše o cykloturistice na Třeboňsku</h2>
              <p className='text-gray-600 '>
              Tyto stránky jsou věnovány všem příznivcům cyklistiky, zvláště pak cykloturistům 
              a milovníkům krásné přírody v krajině třeboňských rybníků. Najdete zde informace 
              o možnostech ubytování, oblíbené cyklistické trasy a mnoho dalších rad a doporučení.
              </p>
          </div>
            <div className='md:w-1/3'>
            <img src='https://www.itrebon.cz/images/preview/1613562853.jpg' alt='Cykloturistika' className='w-full mt-4 rounded-lg shadow-lg'/>
          </div>
        </main>
        <aside className='sm:w-1/4'>
          <div className="card bg-blue-800 text-primary-content w-96 mt-2">
            <div className="card-body">
                <h2 className="card-title">Doporučujeme</h2>
                <p>Na kole okolo Třeboně: z Chlumu u Třeboně přes obec Kosky, po hrázi rybníků Nový a Starý Kanclíř do Lutové, okolo Mokřin přes Stříbřec a Stříbřecký most po hrázích rybníků Stolec, Vyšehrad, Nový a Starý Vdovec do Staré Hliny, ze Staré do Nové a okolo Obecního mlýna do Třeboně, v Třeboni z hráze rybníka Svět k Opatovickému rybníku, dále ke Zlaté stoce a přes Barboru a Majdalenu zpět do Chlumu.</p>
              <div className="card-actions justify-end">
                <button className="btn">Více...</button>
              </div>
            </div>
          </div>
          <div className="card bg-blue-800 text-primary-content w-96 mt-2">
            <div className="card-body">
                <h2 className="card-title">Půjčovna kol</h2>
                <p>•   Dětská kola od 12" do 20"
                <br/> •   Treková a horská kola 24" až 29"
                <br/> •   Elektrokola Standard
                <br/> •   Elektrokola Vyšší třída
                <br/> •   Elektrokola Top
                <br/> •   Koloběžky
                <br/> •   Dětské vozíky
                <br/> •   Dětské sedačky (pouze se zapůjčeným kolem)</p>
              <div className="card-actions justify-end">
                <button className="btn">Více...</button>
              </div>
            </div>
          </div>
      </aside>
      </div>
    </div>
  );
}
'use client';

import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gray-100 text-gray-900 flex flex-col">
      <header className="bg-blue-500 text-white p-4 w-full"> 
        <h1 className="text-3xl font-bold text-left m-2">Půjčovna kol</h1>
      </header>
      <div className='flex-grow p-4 bg-white shadow-lg rounded-lg flex flex-col items-start gap-4 sm:flex-row'>
        <main className="flex-grow p-4 bg-white shadow-lg rounded-lg flex flex-col md:flex-row items-start gap-4 sm:flex-row-reverse">
          <div className='md:w-2/3 '>
            <h2 className='text-2xl font-bold'>Vše o cykloturistice na Třeboňsku</h2>
              <p className='text-gray-600'>
              Tyto stránky jsou věnovány všem příznivcům cyklistiky, zvláště pak cykloturistům 
              a milovníkům krásné přírody v krajině třeboňských rybníků. Najdete zde informace 
              o možnostech ubytování, oblíbené cyklistické trasy a mnoho dalších rad a doporučení.
              </p>
          </div>
          <div className='md:w-1/3 '>
            <img src='https://www.itrebon.cz/images/preview/1613562853.jpg' alt='Cykloturistika' className='w-full mt-4 rounded-lg shadow-lg'/>
          </div>
        </main>
        <aside className='md:w-1/3'>
          <div className="card bg-primary text-primary-content w-96">
            <div className="card-body">
              <h2 className="card-title">Doporučujeme</h2>
              <p>Na kole okolo Třeboně: z Chlumu u Třeboně přes obec Kosky, po hrázi rybníků Nový a Starý Kanclíř do Lutové, okolo Mokřin přes Stříbřec a Stříbřecký most po hrázích rybníků Stolec, Vyšehrad, Nový a Starý Vdovec do Staré Hliny, ze Staré do Nové a okolo Obecního mlýna do Třeboně, v Třeboni z hráze rybníka Svět k Opatovickému rybníku, dále ke Zlaté stoce a přes Barboru a Majdalenu zpět do Chlumu.</p>
              <div className="card-actions justify-end">
                <button className="btn">Více...</button>
              </div>
            </div>
          </div>
          <div className="card bg-primary text-primary-content w-96">
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
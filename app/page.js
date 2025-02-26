'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Card from '@/components/Card';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gray-100 text-gray-900 flex flex-col">
        <Header/>
      <div className='flex-grow p-4 bg-blue-950 flex flex-col items-start gap-2 sm:flex-row'>
        <main className="flex-grow p-4 bg-white shadow-lg rounded-lg flex flex-col sm:flex-row items-center justify-between gap-2 sm:w-full h-full">
          <div className='sm:w-1/2'>
              <h2 className='text-2xl font-bold flex-1'>Vše o cykloturistice na Třeboňsku</h2>
              <p className='text-black '>
              Tyto stránky jsou věnovány všem příznivcům cyklistiky, zvláště pak cykloturistům 
              a milovníkům krásné přírody v krajině třeboňských rybníků. Najdete zde informace 
              o možnostech ubytování, oblíbené cyklistické trasy a mnoho dalších rad a doporučení.
              </p>
          </div>
            <div className='sm:w-1/3'>
            <img src='https://www.itrebon.cz/images/preview/1613562853.jpg' alt='Cykloturistika' className='w-full mt-4 rounded-lg shadow-lg'/>
          </div>
        </main>
        <aside className='sm:w-1/3'>
        <Card/>
      </aside>
      </div>
      <Footer/>
    </div>
  );
}
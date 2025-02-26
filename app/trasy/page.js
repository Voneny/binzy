'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Card from '@/components/Card';

export default function trasy() {
 return(
    <div className="min-h-screen w-full bg-gray-100 text-gray-900 flex flex-col">
        <Header/>
      <div className='flex-grow p-4 bg-blue-950 flex flex-col items-start gap-4 sm:flex-row'>
        <main className="flex-grow p-4 bg-white shadow-lg rounded-lg flex items-start gap-4 sm:flex-row sm:w-full h-full">
          
        </main>
        <aside className='sm:w-1/3'>
        <Card/>
      </aside>
      </div>
       <Footer/>
    </div>
    );
}
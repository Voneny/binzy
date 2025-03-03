'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Card from '@/components/Card';
import Image from 'next/image';
import Cenik from '@/components/Cenik';

export default function kola() {
 return(
    <div className="min-h-screen w-full text-gray-900 flex flex-col">
        <Header/>
    <div className='flex-grow bg-blue-950 flex flex-col items-start gap-4 sm:flex-row p-4'>
      <main className="flex-grow bg-white shadow-lg rounded-lg flex flex-col sm:w-full h-full">
<div className="overflow-x-auto rounded-t-lg shadow-lg border border-black text-black">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th className='text-primary-content text-xl'>leden - únor</th>
        <th className='text-primary-content text-xl'>březen, listopad</th>
        <th className='text-primary-content text-xl'>duben - červen, září</th>
        <th className='text-primary-content text-xl'>červenec - srpen</th>
        <th className='text-primary-content text-xl'>říjen</th>
        <th className='text-primary-content text-xl'>prosinec</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th className='text-xl'>pondělí - pátek</th>
        <td>zavřeno</td>
        <td>9 - 17 hodin</td>
        <td>8 - 18 hodin</td>
        <td>8 - 18 hodin</td>
        <td>9 - 17 hodin</td>
        <td>9 - 17 hodin</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th className='text-xl'>sobota</th>
        <td>zavřeno</td>
        <td>8 - 11 hodin</td>
        <td>8 - 14 hodin</td>
        <td>8 - 16 hodin</td>
        <td>8 - 12 hodin</td>
        <td>9 - 12 hodin</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th className='text-xl'>neděle</th>
        <td>zavřeno</td>
        <td>9 - 11 hodin</td>
        <td>8 - 12 hodin</td>
        <td>9 - 14 hodin</td>
        <td>9 - 11 hodin</td>
        <td>9 - 11 hodin</td>
      </tr>
    </tbody>
  </table>
</div>
<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <Image
    height={150} width={800} alt='arimo'
      src="/leaderfox_arimo.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between ">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <Image
    height={150} width={800} alt='voyager'
      src="/lectron_voyager.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <Image
    height={150} width={800} alt='altar gent'
      src="/leaderfox_altar_gent.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <Image
    height={150} width={800} alt='vivalo'
      src="/leader_fox_vivalo.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
      <Cenik/>
      </main>
      <aside className='sm:w-1/3'>
      <Card/>
      </aside>
    </div>
   <Footer/>
      </div>
  );
}
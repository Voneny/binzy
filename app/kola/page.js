'use client';

import Link from 'next/link';

export default function kola() {
 return(
    <div className="min-h-screen w-full text-gray-900 flex flex-col">
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
    <div className='flex-grow bg-white shadow-lg rounded-lg flex flex-col items-start gap-4 sm:flex-row'>
      <main className="flex-grow bg-white shadow-lg rounded-lg flex flex-col sm:w-3/4">
<div className="carousel w-full ">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between ">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
<div className="overflow-x-auto m-1 rounded-sm">
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
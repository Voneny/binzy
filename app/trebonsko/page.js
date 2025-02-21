'use client';

import Link from 'next/link';

export default function trebonsko() {
 return(
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
        <main className="flex-grow p-4 bg-white shadow-lg rounded-lg flex flex-col sm:flex-row items-center justify-between gap-2 sm:w 2/3 h-full">
          <div className='sm:w-1/2'>
          <h1 className='font-bold text-4xl'>Třeboňsko</h1>
          <p>Pod názvem Třeboňsko si každý Čech vybaví kraj rybníků, kapra a piva Regent. A opravdu, jako páteř prochází Třeboňskem řeka Lužnice, na jejímž toku a přítocích již od 14. století vyrůstaly rybníky a vodní stavby.

          <br/><br/>Dnes je Rybářství Třeboň a.s. největším chovatelem ryb v zemi, třeboňský kapr je znám nejen u nás, ale i v zahraničí. Pivo se v Třeboni vaří také již od konce 14. století, proto ho vaří tak dobře.

          <br/><br/>Rybníky a jejich hráze za staletí vytvořily jedinečnou krajinu s florou a faunou. Nyní jejich malebná zákoutí zvou k vyjížďkám, kdy i po desítkách ujetých kilometrů neustále objevujete nová krásná místa.
          <br/><br/>Ale nejsou to jen rybníky, co místní krajina nabízí.
          <br/><br/>Pískovny v okolí Suchdola nad Lužnící jsou v letních měsících ideální zastávkou ke koupání.

          <br/><br/>V letoviscích Chlum u Třeboně (rybník Hejtman) a Staňkov (rybník Staňkovský) najdete vše potřebné:

          <br/><br/>- ubytování všech kategorií,
          <br/>- stravování zařízení,
          <br/>- prodejny cyklistiky a cykloservisy,
          <br/>- koupání i večerní vyžití.
          <br/><br/>Zalesněné hraniční vrchy protkané sítí kvalitních cest poskytují jedinečný turistický zážitek. V hlubokých lesích přijdou na své houbaři i sběrači borůvek.

          <br/>V oblasti Třeboňska leží významné historické památky, např. historické jádro Třeboně, Chlumecký zámek a kostel.

          <br/><br/>Pro návštěvy sousedního Rakouska s podobným rekreačním charakterem a historickými centry městeček je možno využít několik hraničních přechodů.

          <br/><br/>Všechny cyklistické trasy jsou výborně značeny, a to jak na mapách, tak i v terénu. Na tyto trasy plynule navazují i další směr Novohradsko nebo Slavonicko.</p>
          </div>
          <div className='sm:w-1/2'>

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
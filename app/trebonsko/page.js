'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Card from '@/components/Card';

export default function trebonsko() {
 return(
    <div className="min-h-screen w-full bg-gray-100 text-gray-900 flex flex-col">
        <Header/>   
      <div className='flex-grow p-4 bg-blue-950  flex flex-col items-start gap-2 sm:flex-row'>
        <main className="flex-grow p-4 bg-white shadow-lg rounded-lg flex flex-col sm:flex-row items-stretch justify-between gap-2 sm:w-full h-full">
          <div className='sm:w-1/2'>
          <h1 className='font-bold text-4xl text-black'>Třeboňsko</h1>
          <p className='text-black'>Pod názvem Třeboňsko si každý Čech vybaví kraj rybníků, kapra a piva Regent. A opravdu, jako páteř prochází Třeboňskem řeka Lužnice, na jejímž toku a přítocích již od 14. století vyrůstaly rybníky a vodní stavby.

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
          <div className='sm:w-1/2 flex-1 justify-start items-stretch'>
            <img src='https://www.nebeske.cz/wp-content/uploads/2024/04/1710JJ_Trebonsko_Luznice_0152.jpg' alt='chlumská rybniční soustava' className='w-full mt-4 rounded-lg shadow-lg'/>
            <img src='https://www.ceska-krajina.cz/wp-content/uploads/2023/01/ceska-krajina-orel-morsky-ptak-dravec-operenec-zobak-peri-modra-obloha.jpg' alt='orel mořský' className='w-full mt-4 rounded-lg shadow-lg'/>
            <img src='https://majdalena.cz/wp-content/uploads/2019/11/Stara-reka-slepe-rameno.jpg' alt='Stará řeka' className='w-full mt-4 rounded-lg shadow-lg'/>

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
import Link from 'next/link';

export default function Card() {
    return (
      <div>
        <div className="card bg-blue-500 text-white w-96">
          <div className="card-body">
            <h2 className="card-title">Doporučujeme</h2>
            <p>Na kole okolo Třeboně: z Chlumu u Třeboně přes obec Kosky, po hrázi rybníků Nový a Starý Kanclíř do Lutové, okolo Mokřin přes Stříbřec a Stříbřecký most po hrázích rybníků Stolec, Vyšehrad, Nový a Starý Vdovec do Staré Hliny, ze Staré do Nové a okolo Obecního mlýna do Třeboně, v Třeboni z hráze rybníka Svět k Opatovickému rybníku, dále ke Zlaté stoce a přes Barboru a Majdalenu zpět do Chlumu.</p>
            <div className="card-actions justify-end">
              <Link href="/trasy"><button className="btn text-white">Více...</button></Link>
            </div>
          </div>
        </div>
        <div className="card bg-blue-500 text-white w-96 mt-2">
          <div className="card-body">
            <h2 className="card-title">Půjčovna kol</h2>
            <p>•   Dětská kola od 12" do 20"
              <br /> •   Treková a horská kola 24" až 29"
              <br /> •   Elektrokola Standard
              <br /> •   Elektrokola Vyšší třída
              <br /> •   Elektrokola Top
              <br /> •   Koloběžky
              <br /> •   Dětské vozíky
              <br /> •   Dětské sedačky (pouze se zapůjčeným kolem)</p>
            <div className="card-actions justify-end">
              <Link href="/kola"><button className="btn text-white">Více...</button></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
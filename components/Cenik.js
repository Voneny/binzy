
export default function Cenik() {
            return (
              <div className="max-w-4xl mx-auto p-4 space-y-8">
                {/* Obyčejná kola */}
                <section>
                  <h2 className="text-xl font-bold mb-2">Obyčejná kola, koloběžky, dětské sedačky</h2>
                  <table className="w-full border-collapse border border-gray-300">
                    <thead className="bg-blue-900 text-white">
                      <tr>
                        <th className="p-2">Typ</th>
                        <th className="p-2">1. hodina</th>
                        <th className="p-2">další započatá</th>
                        <th className="p-2">celý den</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Horské kolo (od 24\")", "100,-", "70,-", "350,-"],
                        ["Trekové kolo", "100,-", "70,-", "350,-"],
                        ["Dětské kolo (do 20\")", "60,-", "40,-", "200,-"],
                        ["Koloběžka", "60,-", "40,-", "200,-"],
                        ["Dětská sedačka", "40,-", "30,-", "150,-"],
                      ].map((row, index) => (
                        <tr key={index} className="even:bg-gray-100">
                          {row.map((cell, i) => (
                            <td key={i} className="border border-gray-300 p-2">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>
          
                {/* Elektrokola */}
                <section>
                  <h2 className="text-xl font-bold mb-2">Elektrokola, dětské vozíky</h2>
                  <table className="w-full border-collapse border border-gray-300">
                    <thead className="bg-blue-900 text-white">
                      <tr>
                        <th className="p-2">Typ</th>
                        <th className="p-2">1/2 den (max 6 hod)</th>
                        <th className="p-2">celý den</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Elektrokolo Standard", "400,-", "500,-"],
                        ["Elektrokolo Vyšší třída", "500,-", "600,-"],
                        ["Elektrokolo Top", "---", "700,-"],
                        ["Dětský vozík", "200,-", "350,-"],
                        ["Miminkovník", "---", "100,-"],
                      ].map((row, index) => (
                        <tr key={index} className="even:bg-gray-100">
                          {row.map((cell, i) => (
                            <td key={i} className="border border-gray-300 p-2">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>
          
                {/* Ostatní */}
                <section>
                  <h2 className="text-xl font-bold mb-2">Ostatní</h2>
                  <table className="w-full border-collapse border border-gray-300">
                    <tbody>
                      {[
                        ["Přilba (k našim kolům)", "zdarma"],
                        ["Zámek (k našim kolům)", "zdarma"],
                        ["4 a více dní", "sleva 25% (ne pro dětská kola)"],
                      ].map((row, index) => (
                        <tr key={index} className="even:bg-gray-100">
                          <td className="border border-gray-300 p-2">{row[0]}</td>
                          <td className="border border-gray-300 p-2">{row[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>
          
                {/* Poznámka */}
                <p className="mt-4 text-sm italic">
                  Nutno předložit alespoň jeden z dokladů: občanský průkaz, řidičský průkaz, cestovní pas.
                </p>
                <p className="text-sm italic">
                  Jízdní kola a elektrokola od značek, od nichž jsou kola v půjčovně, můžete také zakoupit v naší prodejně.
                </p>
              </div>
            );
          }

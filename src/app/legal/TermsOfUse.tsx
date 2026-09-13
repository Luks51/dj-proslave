import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { getSeoMeta } from '../utils/seo';

export function meta() {
  return getSeoMeta(
    "uvjeti-koristenja",
    "Uvjeti Korištenja | DJ Proslave",
    "Pročitajte naše uvjete korištenja. Vaša prava i obveze pri korištenju usluga DJ Proslave.",
    "uvjeti korištenja, pravila, dj proslave"
  );
}

function TermsOfUse() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Card = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#0a0b10] border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg mb-8">
      {children}
    </div>
  );

  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl font-semibold text-[color:var(--color-accent-gold)] mb-6 flex items-center gap-4">
      {children}
      <div className="flex-grow h-px bg-white/10"></div>
    </h2>
  );

  const CustomList = ({ children }: { children: React.ReactNode }) => (
    <ul className="list-none space-y-3 mt-4 text-gray-400">
      {children}
    </ul>
  );

  const ListItem = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3">
      <span className="text-[color:var(--color-accent-gold)] mt-1.5 text-xs">●</span>
      <span>{children}</span>
    </li>
  );

  const Paragraph = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <p className={`text-gray-400 leading-relaxed mb-4 ${className}`}>
      {children}
    </p>
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-[100px] md:pt-[150px] pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-20 flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-6 text-white/90 drop-shadow-md">
              Uvjeti Korištenja
            </h1>
            <p className="text-lg md:text-xl text-[color:var(--color-accent-gold)] tracking-[0.2em] uppercase mb-8 opacity-90">
              Premium DJ Usluge
            </p>
            <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[color:var(--color-accent-gold)] to-transparent opacity-70 mb-12"></div>
            <div className="inline-block px-6 py-3 rounded-full border border-[color:var(--color-accent-gold)]/40 bg-black/40 shadow-[0_0_15px_rgba(212,175,55,0.05)]">
              <p className="text-sm md:text-base text-[color:var(--color-accent-gold)] font-medium tracking-wide">
                Posljednje ažurirano: 25. kolovoza 2026.
              </p>
            </div>
          </div>

          <Card>
            <SectionTitle>1. Uvod</SectionTitle>
            <Paragraph>
              Dobrodošli na web stranicu DJ Proslave (u daljnjem tekstu: “Stranica”). Korištenjem Stranice potvrđujete da ste pročitali, razumjeli i prihvaćate ove Uvjete korištenja.
            </Paragraph>
            <Paragraph>
              Ako se ne slažete s ovim Uvjetima korištenja, molimo vas da ne koristite Stranicu i ne šaljete upite putem kontakt forme.
            </Paragraph>
          </Card>

          <Card>
            <SectionTitle>2. Informativna svrha stranice</SectionTitle>
            <Paragraph>
              Stranica je prezentacijskog (informativnog) karaktera i služi isključivo za prikaz DJ usluge, dostupnosti te omogućavanje slanja upita/rezervacije termina putem kontakt forme.
            </Paragraph>
            <Paragraph>
              Naručivanje i plaćanje usluge ne odvija se putem Stranice. Svaki eventualni dogovor o pružanju usluge (uključujući cijenu, uvjete i obveze) provodi se naknadno putem e-mail komunikacije.
            </Paragraph>
          </Card>

          <Card>
            <SectionTitle>3. Pružatelj usluge i kontakt</SectionTitle>
            <Paragraph>
              DJ uslugu pruža Ivan Vraneša (slobodni umjetnik) kao fizička osoba ispred tima DJ Proslave.
            </Paragraph>
            <Paragraph>
              <strong className="text-gray-300">Kontakt e-mail:</strong> <a href="mailto:proslave.dj@gmail.com" className="text-[color:var(--color-accent-gold)] hover:underline">proslave.dj@gmail.com</a>
            </Paragraph>
          </Card>

          <Card>
            <SectionTitle>4. Rezervacije i upiti (neobvezujuće)</SectionTitle>
            <Paragraph>
              Slanje upita ili rezervacije putem kontakt forme ne predstavlja obvezu korisnika da mora ugovoriti uslugu, niti predstavlja automatsko prihvaćanje usluge s naše strane.
            </Paragraph>
            <Paragraph>
              Ponuda se, ako je primjenjivo, dostavlja putem e-maila te može sadržavati rok važenja, cijenu, uvjete te dodatne informacije. Usluga se smatra dogovorenom tek nakon izričite potvrde dogovora između strana putem e-maila (ili drugog dogovorenog kanala).
            </Paragraph>
          </Card>

          <Card>
            <SectionTitle>5. Točnost podataka koje unosite</SectionTitle>
            <Paragraph>
              Korisnik je odgovoran za točnost i potpunost podataka koje unese u kontakt formu (npr. ime i prezime, e-mail, datum događaja, broj telefona, poruka).
            </Paragraph>
            <Paragraph>
              Ne odgovaramo za štetu ili propuštenu komunikaciju nastalu zbog netočno unesenih podataka (npr. pogrešna e-mail adresa).
            </Paragraph>
          </Card>

          <Card>
            <SectionTitle>6. Pravila ponašanja korisnika</SectionTitle>
            <Paragraph>Zabranjeno je:</Paragraph>
            <CustomList>
              <ListItem>Slati nezakonit, uvredljiv, prijeteći ili obmanjujući sadržaj putem kontakt forme.</ListItem>
              <ListItem>Pokušavati ometati rad Stranice, servera ili sigurnosnih mehanizama (npr. skripte, spam, pokušaji neovlaštenog pristupa).</ListItem>
              <ListItem>Koristiti Stranicu na način koji može štetiti ugledu pružatelja usluge ili trećih osoba.</ListItem>
            </CustomList>
            <Paragraph className="mt-6">
              U slučaju zlouporabe, zadržavamo pravo ignorirati upite, blokirati komunikaciju te poduzeti odgovarajuće korake radi zaštite.
            </Paragraph>
          </Card>

          <Card>
            <SectionTitle>7. Intelektualno vlasništvo</SectionTitle>
            <Paragraph>
              Sav sadržaj na Stranici (tekstovi, fotografije, logo, dizajn, video materijali, glazbeni isječci ako postoje) zaštićen je autorskim pravima i/ili drugim pravima intelektualnog vlasništva, osim ako je izričito naznačeno drugačije.
            </Paragraph>
            <Paragraph>
              Bez prethodnog pisanog odobrenja nije dopušteno kopiranje, distribucija, javno prikazivanje ili prerada sadržaja Stranice u komercijalne svrhe.
            </Paragraph>
          </Card>

          <Card>
            <SectionTitle>8. Vanjske poveznice i usluge trećih strana</SectionTitle>
            <Paragraph>
              Stranica može sadržavati poveznice na web stranice trećih strana (npr. društvene mreže) ili koristiti usluge trećih strana (npr. analitičke alate uz privolu).
            </Paragraph>
            <Paragraph>
              Ne odgovaramo za sadržaj, pravila privatnosti ili postupanje trećih strana. Korištenje takvih poveznica/usluga radite na vlastitu odgovornost.
            </Paragraph>
          </Card>

          <Card>
            <SectionTitle>9. Dostupnost stranice i promjene</SectionTitle>
            <Paragraph>
              Trudimo se osigurati kontinuiranu dostupnost Stranice, ali ne jamčimo da će Stranica uvijek raditi bez prekida ili pogrešaka (npr. zbog održavanja, kvara, nadogradnji, hosting problema).
            </Paragraph>
            <Paragraph>
              Zadržavamo pravo u bilo kojem trenutku izmijeniti, privremeno onemogućiti ili trajno ukloniti dio ili cijelu Stranicu bez prethodne najave.
            </Paragraph>
          </Card>

          <Card>
            <SectionTitle>10. Ograničenje odgovornosti</SectionTitle>
            <Paragraph>
              Informacije na Stranici pružaju se “kakve jesu” i služe općem informiranju. Ne jamčimo da su sve informacije u svakom trenutku potpune ili ažurne (npr. dostupnost termina).
            </Paragraph>
            <Paragraph>U najvećoj mjeri dopuštenoj zakonom, ne odgovaramo za:</Paragraph>
            <CustomList>
              <ListItem>Izravnu ili neizravnu štetu nastalu korištenjem Stranice ili nemogućnošću korištenja Stranice.</ListItem>
              <ListItem>Gubitak podataka ili poslovne štete.</ListItem>
              <ListItem>Postupanje trećih strana (npr. vanjske poveznice).</ListItem>
            </CustomList>
          </Card>

          <Card>
            <SectionTitle>11. Privatnost i kolačići</SectionTitle>
            <Paragraph>
              Obrada osobnih podataka (npr. podaci iz kontakt forme) te uporaba kolačića i analitike (npr. Google Analytics uz privolu) uređeni su zasebnim dokumentom: Politikom privatnosti.
            </Paragraph>
            <Paragraph>
              Preporučujemo da prije korištenja kontakt forme pročitate <Link to="/politika-privatnosti/" className="text-[color:var(--color-accent-gold)] hover:underline">Politiku privatnosti</Link>.
            </Paragraph>
          </Card>

          <Card>
            <SectionTitle>12. Mjerodavno pravo i rješavanje sporova</SectionTitle>
            <Paragraph>
              Na ove Uvjete korištenja primjenjuje se pravo Republike Hrvatske.
            </Paragraph>
            <Paragraph>
              U slučaju spora, strane će nastojati spor riješiti mirnim putem. Ako mirno rješenje nije moguće, nadležan je stvarno nadležni sud prema mjestu pružatelja usluge, osim ako obvezni propisi ne određuju drugačije.
            </Paragraph>
          </Card>

          <Card>
            <SectionTitle>13. Promjene uvjeta korištenja</SectionTitle>
            <Paragraph>
              Zadržavamo pravo izmijeniti ove Uvjete korištenja kako bismo ih uskladili s promjenama u poslovanju, funkcionalnostima Stranice ili zakonskim propisima.
            </Paragraph>
            <Paragraph>
              Ažurirana verzija bit će objavljena na Stranici te stupa na snagu danom objave.
            </Paragraph>
          </Card>

          <div className="mt-12 p-8 md:p-12 bg-gradient-to-b from-[#0a0b10] to-[#050505] border border-white/10 rounded-2xl text-center shadow-[0_0_40px_rgba(212,175,55,0.05)] relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[color:var(--color-accent-gold)] opacity-[0.05] blur-[80px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Kontaktirajte Nas</h2>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                Ako imate pitanja vezana uz ove Uvjete korištenja, slobodno nas kontaktirajte:
              </p>
              <a 
                href="mailto:proslave.dj@gmail.com" 
                className="inline-flex items-center justify-center px-10 h-14 bg-[color:var(--color-accent-gold)] text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-[#ffdf73] transition-colors shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] leading-none pt-1"
              >
                Pošaljite nam E-mail
              </a>
              <p className="mt-6 text-[color:var(--color-accent-gold)] font-medium tracking-wide">
                proslave.dj@gmail.com
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}

export default TermsOfUse;

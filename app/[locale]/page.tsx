import { CalCom } from "./__landiing/CalCom";
import { Footer } from "./__landiing/Footer";
import { Hero } from "./__landiing/Hero";
import { Work } from "./__landiing/Work";
import { LocaleSelect } from "./LocaleSelect";

export default async function Home() {

  return (
    <main className="h-full">
      <LocaleSelect />
      {await Hero()}
      <Work />
      <CalCom />
      <Footer />
    </main>
  );
}

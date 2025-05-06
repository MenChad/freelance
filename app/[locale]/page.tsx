import { getI18n } from "@/locales/server";
import { CalCom } from "./__landiing/CalCom";
import { Footer } from "./__landiing/Footer";
import { Hero } from "./__landiing/Hero";
import { Work } from "./__landiing/Work";
import { LocaleSelect } from "./LocaleSelect";



export default async function Home() {
  const t = await getI18n();
  return (
<main className="h-full  ">
  <LocaleSelect/>
    {t("new")}
  <Hero />

  <Work />

<CalCom />

<Footer />




</main>
  );
}

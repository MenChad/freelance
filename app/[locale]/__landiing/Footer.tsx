import { Section } from "./Section";
import { getI18n } from "@/locales/server";

export const Footer = async () => {
  const t = await getI18n();

  return (
    <Section className="w-full border-t mt-32 flex flex-col items-center justify-center py-8 md:py-14 lg:py-24">
      <p className="text-sm">{t("Footer.copyright")}</p>
      <p className="text-sm">{t("Footer.legal")}</p>
    </Section>
  );
};

import { Section } from "./Section";
import { YouTubeEmbed } from "@next/third-parties/google";
import { getI18n } from "@/locales/server";

export const Work = async () => {
  const t = await getI18n();

  return (
    <Section>
      <h2 className="text-2xl lg:text-4xl font-bold">{t("Work.title")}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 lg:mt-6 gap-3">
        <div className="md overflow-hidden rounded-md shadow-md aspect-video">
          <YouTubeEmbed videoid="R8lUVd1OpIk" />
        </div>
        <div className="md overflow-hidden rounded-md shadow-md aspect-video">
          <YouTubeEmbed videoid="f4wsNGXKFSQ" />
        </div>
        <div className="md overflow-hidden rounded-md shadow-md aspect-video">
          <YouTubeEmbed videoid="SNedR2Mfuys" />
        </div>
        <div className="md overflow-hidden rounded-md shadow-md aspect-video">
          <YouTubeEmbed videoid="1IIbq83Rueo" />
        </div>
      </div>
    </Section>
  );
};

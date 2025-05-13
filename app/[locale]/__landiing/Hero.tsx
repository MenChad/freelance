import { getI18n } from '@/locales/server';
import { Button } from '@/components/ui/button';
import { Section } from './Section';
import { PropsWithChildren } from 'react';

const Code = (props: PropsWithChildren) => {
  return (
    <span className="px-0.5 rounded-md -mx-0.5 py-0.5 text-foreground bg-card/50 border">
      {props.children}
    </span>
  );
};

export const Hero = async () => {
  const t = await getI18n();

  return (
    <Section className="flex flex-col gap-2 lg:gap-4">
      <h1 className="text-4xl lg:text-5xl text-foreground font-bold">
        {t('Hero.heading')}
      </h1>
      <p>
        {t('Hero.help')} <Code>{t('Hero.clients')}</Code> {t('Hero.grow')}
      </p>
      <div className="mt-4 lg:mt-6 flex items-center flex-wrap gap-2">
        <Button size="lg" className="w-fit">
          {t('Hero.cta')}
        </Button>

        <Button size="lg" variant="ghost" className="w-fit">
          @John
        </Button>
      </div>
    </Section>
  );
};

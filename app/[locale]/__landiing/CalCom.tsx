"use client";

import { Section } from "./Section";
import { CalComEmbed } from "./CalComEmbed";

export const CalCom = () => {
  return (
    <Section>
      <h2 className="text-3xl lg:text-4xl font-bold">
      </h2>
      <p className="text-lg text-muted-foreground mt-2 lg:mt-4">
      </p>
      <div className="mt-2">
        <CalComEmbed />
      </div>
    </Section>
  );
};

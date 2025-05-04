"use client";

import { Section } from "./Section";
import { CalComEmbed } from "./CalComeEmbed";

export const CalCom = () => {
    return (
        <Section>
            <h2 className="text-3xl lg:text-4xl font-bold">
                Book a Call with me
            </h2>
            <p className="text-lg text-muted-foreground mt-2 lg:mt-4">
                10-15 minute chat to see if we are a good fit for each other.
            </p>
            <div className="mt-2">
               <CalComEmbed /> 
            </div>
            
        </Section>
    );

}
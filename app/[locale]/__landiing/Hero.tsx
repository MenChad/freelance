import { PropsWithChildren } from "react";
import {Section } from "./Section";
import {Button} from "@/components/ui/button";

export const Hero = () => {
  return (
    <Section className="flex flex-col gap-2 lg:gap-4  ">
        <h1 className="text-4xl lg:text-5xl text-foreground font-bold">Hey, I am John  😁!</h1>
        <p>I help <Code>Clients</Code> grow on visibility with captivating e-commerce website </p>
        <div className="mt-4 lg:mt-6 flex items-center flex-wrap gap-2">
        <Button size={"lg"} className="w-fit">
        Get a Call
        </Button>

        <Button size={"lg"} variant={"ghost"} className="w-fit">
        @John
        </Button>
        </div>

    </Section>
  );
}


const Code = (props: PropsWithChildren) => {
  return (
    <span className="px-1 rounded-md -mx-1 py-1 text-foreground bg-card/50 border ">
      {props.children}
    </span>
  )

}
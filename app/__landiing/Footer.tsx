import { Section } from "./Section";

export const Footer = () => {
    return (
        <Section className="max-w-none w-full border-t mt-32 flex flex-col items-center justify-center py-8 md:py-14 lg:py-24   bg-amber-900 ">
            <div className="max-w-2xl">
                <p className="text-sm">© 2025 John. All rights reserved.</p>
                <p className="text-sm">Privacy Policy | Terms of Service</p>
            </div>

        </Section>
    )
} 
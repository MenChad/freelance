
import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { 
  locale: string 
};
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
        <Providers locale={params.locale}>
        </Providers>
      <body
        className={cn(inter.className , "h-full")} > {children}
      </body>
    </html>
  );
}


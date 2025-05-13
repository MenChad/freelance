import "./globals.css";
import { Providers } from "./providers";




export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;

  return (
    <html lang={resolvedParams.locale} suppressHydrationWarning className="h-full">
      <Providers locale={resolvedParams.locale} />
      <body className="h-full">{children}</body>
    </html>
  );
}




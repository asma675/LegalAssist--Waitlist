import "./globals.css";

export const metadata = {
  title: "LegalAssist — AI Legal Platform",
  description: "AI-powered legal intake, case workflow, and document tools for modern law firms."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

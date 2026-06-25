import type { Metadata } from "next";
import { Nunito, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppStoreProvider } from "@/lib/AppStore";
import { SettingsProvider } from "@/lib/settings/SettingsStore";
import { AuthProvider } from "@/lib/firebase/AuthProvider";
import { Navbar } from "@/components/layout/Navbar";
import { BottomNav } from "@/components/layout/BottomNav";
import { ChatbotGate } from "@/components/layout/ChatbotGate";
import { ToastProvider } from "@/components/ui/Toast";
import { AppMotionProvider } from "@/components/motion/AppMotionProvider";

// Nunito = warm, rounded, app-like — used everywhere the existing code
// references --font-geist-sans. The variable name is kept for
// backwards-compat with the rest of the codebase; only the underlying
// face changes.
const nunito = Nunito({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// Inter for very small UI bits + tabular numerics where Nunito's
// rounder shapes get noisy.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Waivy — Eat well, spend less",
  description:
    "Waivy is an AI cooking assistant for students. Pantry-aware recipes, real cost per serving, macros, and a grocery list built in.",
  applicationName: "Waivy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${inter.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Set the color theme before first paint to avoid a light→dark flash.
            Reads the saved appearance.theme from srf:settings; honors "system". */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t="light";var r=localStorage.getItem("srf:settings");if(r){var p=(JSON.parse(r)||{}).appearance;if(p&&p.theme)t=p.theme;}var d=t==="dark"||(t==="system"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.dataset.theme=d?"dark":"light";}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-ink antialiased">
        <AuthProvider>
          <SettingsProvider>
            <AppStoreProvider>
              <ToastProvider>
                <AppMotionProvider>
                  <Navbar />
                  <main className="app-main mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-10">
                    {children}
                  </main>
                  <BottomNav />
                  <ChatbotGate />
                </AppMotionProvider>
              </ToastProvider>
            </AppStoreProvider>
          </SettingsProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

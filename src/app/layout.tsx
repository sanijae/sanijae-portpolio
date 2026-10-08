import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sani Muhammad Sani | Software Engineer | AI/ML Engineer | Cloud & DevOps",
  description:
    "Software Engineer and AI/ML Engineer with experience building scalable full-stack applications, backend systems, AI-powered products, REST APIs, and cloud-native solutions. Skilled across Python, PHP, JavaScript, Node.js, FastAPI, Django, Laravel, React, Next.js, and SQL, with hands-on experience integrating LLMs and machine learning capabilities into real-world applications. Experienced in designing secure, high-performance systems, developing web and mobile applications, automating business processes, and deploying reliable software using Docker, CI/CD, and cloud platforms. Passionate about building practical, scalable technology that solves complex problems and delivers measurable business value.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        {children}
      </body>
    </html>
  );
}

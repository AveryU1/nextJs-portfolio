import { roboto } from "@/fonts";
import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
    title: "Cris Portfolio",
    description: "Portfolio made with NextJS",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
                    rel="stylesheet"
                ></link>
                <meta property="og:image" content="/favicon.io" />
            </head>

            <body className={roboto.className}>{children}</body>
        </html>
    );
}

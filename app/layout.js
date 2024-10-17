import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Freelace Full Stack Web App Developer | Patryk Swiderski ",
	description:
		"Patryk Swiderski website portfolio - Freelance Full Stack Web App Developer",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<Head>
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
				<link rel="icon" href="./favicon.ico" />
			</Head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}

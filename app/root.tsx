import {
	Links,
	type LinksFunction,
	Meta,
	type MetaFunction,
	Outlet,
	Scripts,
	ScrollRestoration,
} from 'react-router'
import stylesheet from '~/tailwind.css?url'

export const links: LinksFunction = () => [
	{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
	{
		rel: 'preconnect',
		href: 'https://fonts.gstatic.com',
		crossOrigin: 'anonymous',
	},
	{
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
	},
	{
		rel: 'icon',
		href: 'https://fav.farm/🔐',
	},
	{ rel: 'stylesheet', href: stylesheet },
]

export const meta: MetaFunction = () => {
	return [
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		{ title: 'something' },
	]
}

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="w-screen overflow-x-hidden">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="font-sans antialiased">
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}

export default function App() {
	return <Outlet />
}

export function HydrateFallback() {
	return <div>Loading...</div>
}

export function ErrorBoundary() {
	return <h1>Something went wrong</h1>
}
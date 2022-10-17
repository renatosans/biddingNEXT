import { Navbar } from "./Navbar";


export const Layout = ({ children }) => {
	return (
		<>
			<style jsx>{`
				.layout {
					margin-left: 1.25rem;
					margin-right: 1.25rem;
					width: 90%;
					height: 70%;
				}
			`}</style>

			<Navbar />

			<div className="layout">{children}</div>
		</>
	)
}

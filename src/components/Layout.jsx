import { Navbar } from "./Navbar";


export const Layout = ({ children }) => {
	return (
		<>
			<style jsx>{`
				.layout {
					margin-top: 6.25rem; 
					margin-left: 1.25rem;
					margin-right: 1.25rem;
					width: 90%;
					height: 30rem;
				}
			`}</style>

			<Navbar />
			<div id="panel"></div>

			<div className="layout">{children}</div>
		</>
	)
}

import Link from "next/link";


export const Navbar = () => {

	return (
	<>
		<style jsx>{`
			.navbar {
				overflow: hidden;
				background-color: #333;
				position: fixed;
				top: 0;
				width: 100%;
				z-index: 9999;
			}

			.menu {
				list-style: none;
				display: flex;
				flex-direction: row;
			}

			.navitem {
				color: #f2f2f2;
				text-align: center;
				padding: 14px 16px;
				text-decoration: none;
				font-size: 17px;
			}

			.navitem:hover {
				background: #ddd;
				color: black;
			}
		`}</style>

		<nav className="navbar">
			<ul className="menu">
				<li className="navitem" ><Link href="/">Home</Link></li>
				<li className="navitem" ><Link href="/">Items</Link></li>
				<li className="navitem" ><Link href="/contractors">Contractors</Link></li>
			</ul>
		</nav>
	</>
	)
}

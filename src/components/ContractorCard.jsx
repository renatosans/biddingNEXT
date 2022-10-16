import React from 'react';


export const ContractorCard = ({ contractor }) => {
return (
	<>
		<style jsx>{`
			.card {
				border-width: 2px;
				border-style: solid;
				border-radius: 0.5rem;
				width: 300px;
				height: 300px;
				background-color: #CCCCCC;
			}

			.title {
				font-size: 22px;
				color: #FFFFFF;
				text-shadow: black 0.2em 0.2em 0.2em;
			}

			.logo {
				height: 60%;
			}
		`}</style>

		<div className="card">
			<h2 className="title">{contractor.companyName}</h2>
			<p>email: {contractor.email}</p>
			<img className="logo" src={"data:" + contractor.imgFormat + ", " + contractor.logoImage} alt={contractor.companyName}></img>
		</div>
	</>
)
}

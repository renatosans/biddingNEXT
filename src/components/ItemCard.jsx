import React from 'react'


export const ItemCard = ({ item, index, parentRef }) => {
	const onClick = (e) => {
		parentRef.handleClick(index)
	}

	return (
		<>
			<style jsx>{`
				.card {
					position: inline;
					width: 300px;
					height: 200px;
				}

				.itemImage {
					position: absolute;
					border-radius: 7px;
					width: 100%;
					height: 100%;
					z-index: 1;
				}

				.itemText{
					color: white;
					text-shadow: black 0.1em 0.1em 0.1em;
					width: 300px;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}

				.vertical-container {
					position: absolute;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
					z-index: 999;
				}
			`}</style>

			<div className='card' onClick={onClick} >
				<img className='itemImage' src={item.image} ></img>
				<fieldset className='vertical-container' style={{'border': '0'}}>
					<h2 className='itemText'>{item.name}</h2>
					<p className='itemText'>Preço Médio: R$ {item.avgPrice}</p>
					<p className='itemText'>{item.description}</p>
				</fieldset>
			</div>
		</>
	)
}

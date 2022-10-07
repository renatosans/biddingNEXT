import Link from 'next'


export const ItemCard = ({ item }) => {
	return (
		<>
			<style jsx>{`
				.cartItem {
					display: flex;
					flex-direction: row;
					background-color: white;
				}

				.itemImage {
					border-radius: 7px;
					width: 95px;
					height: 95px;
				}
			
				.itemText{
					width: 250px;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
			
				.vertical-container {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
				}
			`}</style>

			<div className='cartItem'>
				<fieldset className='vertical-container' style={{'border': '0'}}>
					<h2 className='itemText'>{item.name}</h2>
					<img className='itemImage' src={item.image} ></img>
					<p>Preço Médio: R$ {item.avgPrice}</p>
				</fieldset>
			</div>
		</>
	)
}

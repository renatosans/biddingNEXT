import React from 'react'


export const ItemDetails = ({item}) => {
  const GetText = (nullableText) => {
    let text = (nullableText) ? nullableText : ''
    return text;
  }

  return (
    <>
        <style jsx>{`
            .container {
                position: inline;
                width: 100%;
                height: 100%;
                color: white;
            }

            .itemBackground {
                position: absolute;
                width: 100%;
                height: 100%;
                z-index: 1;
            }

            .itemDetails {
                position: absolute;
                display: flex;
                flex-direction: row;
                top: 25%;
                left: 5%;
                width: 80%;
                z-index: 999;
            }

            .title {
                font-size: 50px;
                color: #ffc2ad;
                text-shadow: red 0.1em 0.1em 0.1em;
            }
  
            .description {
                font-size: 22px;
                color: #ffffff;
                text-shadow: 0 0 0.2em rgb(108, 161, 197), 0 0 0.2em rgb(108, 161, 197),0 0 0.2em rgb(108, 161, 197);
            }
        `}</style>

        <div className='container'>
            <img className="itemBackground" src={GetText(item.banner)} />

            <div className="itemDetails">
                <img src={GetText(item.image)} />
                <fieldset style={{'border': '0'}}>
                    <h1 className="title">{item.name}</h1>
                    <h2 className="description">{GetText(item.description)}</h2>
                    <p>Preço Médio: {item.avgPrice}</p>
                </fieldset>
            </div>
        </div>
    </>
  )
}

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
                margin: 100px;
                z-index: 999;
            }

            .title {
                font-size: 50px;
                color: #FFCCCC;
                text-shadow: red 0.2em 0.2em 0.2em;
            }
  
            .description {
                font-size: 22px;
                color: #FFFFFF;
                text-shadow: blue 0.2em 0.2em 0.2em;
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

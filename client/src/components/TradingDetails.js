
// export const Greet = () => <h1>Hello Bhargavi!!!!</h1>
import React from 'react'
import './trade.css'
export function TradingDetails({data}) {
    return (
      <div className="container">
        <transition-group className="grid" tag="div" name="shuffle">
          { data && data.map((data)=>(<div className="grid__item" key={data.lastId}>
            <h1>{data.symbol}</h1>
            <strong>{data.priceChangePercent}</strong>
            <p>
              <strong>Last Qty:</strong> {data.lastQty}
            </p>
            <p>
              <strong>Bid Qty:</strong> {data.bidQty}
            </p>
            <div className="statistics">
              <p>
                <strong>Quote Volume:</strong> {data.quoteVolume}
              </p>
              <p>
                <strong>Volume:</strong>
                {data.volume}
              </p>
            </div>
          </div>))}
        </transition-group>
      </div>
    );
}




import React, { useState } from "react";
import CoinItem from "./CoinItem";
import Coin from "../routes/Coin";
import { Link } from "react-router-dom";

import "./Coins.css";

function Coins(props) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchTermChange(event) {
    setSearchTerm(event.target.value);
  }

  const filteredCoins = props.coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </div>
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Mkt Cap</p>
        </div>

        {filteredCoins.map((coin) => (
          <Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
            <CoinItem coins={coin} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Coins;

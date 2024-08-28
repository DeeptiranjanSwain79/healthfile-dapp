import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import Blockies from "react-blockies";
import { HealthFileContext } from "../../contexts/HealthFileContext";

const Navbar = () => {
  const { currentUser, connectWallet, balance } = useContext(HealthFileContext);
  const [connectLoading, setConnectLoading] = useState(false);

  const connectHandler = async () => {
    try {
      setConnectLoading(true);
      await connectWallet();
      setConnectLoading(false);
    } catch (error) {
      setConnectLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="Navbar">
      <div className="nav__name">
        <img src={logo} alt="logo" width="40" height="40" />
        <h2>HealthFile</h2>
      </div>
      {/* <div className="nav__networkSelector">
        <select
          name="network"
          id="network"
          onChange={networkHandler}
          value={config[chainId] ? `0x${chainId.toString(16)}` : `0`}
        >
          <option value="0" disabled>
            Select Network
          </option>
          <option value="31337">Localhost</option>
          <option value="11155111">Sepolia</option>
          <option value="0x5">Goerli</option>
          <option value="0x13881">Mumbai</option>
        </select>
      </div> */}

      <div className="nav__balance">
        {balance ? (
          <p className="nav__myBalance">
            <small>My Balance : </small>
            {Number(balance).toFixed(4)} ETH
          </p>
        ) : (
          <p className="nav__myBalance">
            <small>My Balance : </small>0 ETH
          </p>
        )}

        {currentUser ? (
          <p className="nav__myAccount" onClick={connectWallet}>
            <Blockies
              seed={currentUser}
              size={10}
              scale={3}
              color="#2187D0"
              bgColor="#F1F2F9"
              spotColor="#767F92"
              className="identicon"
            />
            {currentUser.slice(0, 5) + "...." + currentUser.slice(38, 42)}
          </p>
        ) : (
          <button className="nav__balance-box" onClick={connectHandler}>
            {connectLoading ? "Loading..." : "Connect"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;

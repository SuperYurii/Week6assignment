import { upgradesData } from "../lib/data";

export default function Upgrades({ setCookies }) {
  const handleBuyUpgrade = (increase) => {
    setCookies((prevCookies) => prevCookies + increase);
  };
  return upgradesData.map((upgrades) => (
    <div className="upgrades" key={upgrades.id}>
      <div className="name-container">
        <p>{upgrades.name}</p>
      </div>
      <div className="cost-container">
        <p>Upgrade price:{upgrades.cost}</p>
      </div>
      <div className="increase-container">
        <p>Amount of extra cps{upgrades.increase}</p>
      </div>
      <button onClick={() => handleBuyUpgrade(upgrades.increase)}>
        Buy Upgrade
      </button>
    </div>
  ));
}

///

import { h } from 'preact';
import habitat from "preact-habitat";

import { useState, useEffect } from 'preact/hooks';

const MashEfficiency = (props) => {
  const [theoricEfficiency, setTheoricEfficiency] = useState({
    "pilsner": 80,
    "base":	76,
    "pale": 81,
    "biscuit": 75,
    "vienna": 75,
    "munich":	75,
    "brown": 	70,
    "cara":	70,
    "light-crystal": 	75, // (20 – 30 ebc)
    "pale-crystal": 74, // (50 – 80 ebc)
    "medium-crystal": 	74, //(120 – 150 ebc)
    "dark-crystal":	72, // (240 ebc)
    "special-b":	68,
    "chocolate":	60,
    "roasted-barley":	55,
    "black-malt":	55,
    "wheat-malt":	79,
    "rye-malt":	63,
    "oatmeal":	70, // (flaked)
    "corn":	84,  // (flaked)
    "barley":	70, // (flaked)
    "wheat": 	77, // (flaked)
    "rice":	82, // (flaked)
    "sucre": 100
  });

  const [density, setDentisty] = useState(props.density || 1.060 );
  const [volume, setVolume] = useState(props.volume || 20 );
  const [quantity, setQuantity] = useState(props.quantity || 20 );

  const calculateMashEfficiency = () => {
    return (
      (259 - 259 / density) / density * volume / quantity
    )
    // Rendement = rendement brassage / rendement maximal
    // (259-259/densité mesurée) * densité mesurée * volume de moût / Masse totale de Malt = rendement du brassage
  }

  // If user authenticated then
  return (
    // Wrap user context passed down to children
    <div class="mash-efficiency jumbotron container p-5">
      <h1>Calcul de rendements</h1>
      <hr />
      {density}
    </div>
  );
}


let mashEfficiencyWidget = habitat(MashEfficiency);

mashEfficiencyWidget.render({
  inline: true
});
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
    "sugar": 100
  });

  const [visible, setVisible] = useState(false);
  const [density, setDentisty] = useState(props.density || 1.060 );
  const [volume, setVolume] = useState(props.volume || 20 );
  const [quantity, setQuantity] = useState(props.quantity || Object.keys(props.malts).reduce((sum,key)=>sum+parseFloat(props.malts[key]||0),0) || 5 );
  const [malts, setMalts] = useState(props.malts || {} );

  const calculateMashEfficiency = (density) => {
    // (259-259/densité mesurée) * densité mesurée * volume de moût / Masse totale de Malt = rendement du brassage
    console.log(`Calculate mash dentisity with density = ${density} and volume = ${volume}`);
    return (
      (259 - 259 / density) * density * volume / (quantity / 1000)
    )
  }

  const calculateTheoricMashEfficiency = () => {
    console.log("Malts " + JSON.stringify(malts));
    let bestTheoricMash = null;
    let totalMashQuantity = 0;

    // Calculate total qty
    for (const [malt, qty] of Object.entries(malts)) {
      totalMashQuantity += qty
      console.log(malt + " -> "+ qty);
    }

    for (const [malt, qty] of Object.entries(malts)) {
      bestTheoricMash += qty / totalMashQuantity * (theoricEfficiency[malt] || 75)
      console.log(malt + " -> "+ qty);
    }

    console.log(`Total mash quantity: ${totalMashQuantity}g - Best theoric ${bestTheoricMash}`)
    return bestTheoricMash
  }

  // useEffect(() => {}, [visible]);

  return (
    <div class="mash-efficiency container p-3">
      <h1>
        <span class="tf-ion-ios-pint" onClick={() => setVisible(!visible)}/> Calcul de rendements
      </h1>
      <p>
        <blockquote>
          <span class="tf-ion-calculator" /> Formule >>
          <code>
            (259 - 259 / densité mesurée) * densité mesurée * volume de moût / masse totale de malt
          </code>
        </blockquote>
      </p>
      <hr />
      {
        visible ? (
          <div>
            <ul class="d-flex flex-row justify-content-around">
              <ul class="d-flex flex-column justify-content-around">
                <li class="display-4 p-5"><span class="tf-ion-ios-flask-outline"/> Densité {density}</li>
                <li class="display-4 p-5"><span class="tf-ion-beaker"/> Volume {volume} L</li>
              </ul>
              <ul class="d-flex flex-column justify-content-around">
                <li class="display-4 p-5"><span class="tf-ion-funnel"/> Quantité de Malt {(quantity / 1000).toFixed(2)} kg</li>
                <li>{JSON.stringify(malts)}</li>
              </ul>
            </ul>
            <hr />
            <ul class="d-flex flex-row justify-content-center">
              <li class="display-3 p-5"><span class="tf-ion-stats-bars" /> Rendement: {calculateMashEfficiency(density).toFixed(2)}%</li>
              <li class="display-4 p-5">
                <small class="text-muted">
                  <span class="tf-ion-information-circled"/>  Theorique: {(calculateTheoricMashEfficiency() - 10 ).toFixed(2)} <span class=" tf-ion-android-arrow-forward"/> {calculateTheoricMashEfficiency().toFixed(2)}
                </small>
              </li>
            </ul>
          </div>
        )
        : <p></p>
      }
    </div>
  );
}

let mashEfficiencyWidget = habitat(MashEfficiency);

mashEfficiencyWidget.render({
  inline: true,
});
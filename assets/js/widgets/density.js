import { h } from 'preact';
import habitat from "preact-habitat";

import { useState, useEffect } from 'preact/hooks';

const Density = (props) => {
  const [density, setDensity] = useState(props.density || 1050 );
  const [realDensity, setRealDentisty] = useState(0.0);
  const [temperature, setTemperature] = useState(props.temperature || 65 );

  const correctDensity = () => {
    var dens = ((0.1963596 * temperature) + (0.002661056 * temperature * temperature)) -5.431719;
    const dens_float = parseFloat(density);
    dens = dens + dens_float;

    console.log(`Density at ${temperature}°C corrected at ${dens} (20°C)`);
    setRealDentisty(Math.round(dens));
  }

  useEffect(() => {
    correctDensity()
  }, [density, temperature]);

  return (
    <div class="density container p-3">
      <h1>
        <span class="tf-ion-ios-pint"/> Calcul de densité
      </h1>
      <form class="form-inline">
        <label class="sr-only" for="inputDensity">Densité</label>
        <div class="input-group mb-2 mr-sm-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Densité</div>
          </div>
          <input type="text" class="form-control" id="inputDensity" placeholder="1050" onInput={(e) => {setDensity(e.target.value)}}/>
        </div>

        <label class="sr-only" for="inputTemperature">Température</label>
        <div class="input-group mb-2 mr-sm-2">
          <div class="input-group-prepend">
            <div class="input-group-text">meusurée à </div>
          </div>
          <input type="text" class="form-control" id="inputTemperature" placeholder="65" onInput={(e) => {setTemperature(e.target.value)}} />
          <div class="input-group-append">
            <div class="input-group-text">°C</div>
          </div>
        </div>

        <label class="sr-only" for="inputRealDensity">Densité Réelle</label>
        <div class="input-group mb-2 mr-sm-2">
          <div class="input-group-prepend">
            <div class="input-group-text"><span class="tf-ion-beaker"/></div>
          </div>
          <input type="text" class="form-control" id="inputRealDensity" value={realDensity} disabled="true" />
        </div>
      </form>
    </div>
  );
}

let densityWidget = habitat(Density);

densityWidget.render({
  inline: true,
});
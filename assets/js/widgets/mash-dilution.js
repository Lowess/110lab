import { h } from 'preact';
import habitat from "preact-habitat";

import { useState, useEffect } from 'preact/hooks';

const MashDilution = (props) => {
  const [originalDensity, setOriginalDensity] = useState(props.originalDensity || 1060 );
  const [targetDensity, setTargetDensity] = useState(props.targetDensity || 1050 );
  const [volume, setVolume] = useState(props.volume || 20 );
  const [boiledWaterAdded, setBoiledWaterAdded] = useState(props.volume || 4 );

  const correctDensity = () => {
	  var waterToAdd = ((( (originalDensity - 1000) / (targetDensity - 1000)) * volume) - volume);
    setBoiledWaterAdded(waterToAdd.toFixed(2))
    console.log(`Water to add is  ${waterToAdd}L with original density of ${originalDensity} and target ${targetDensity}}`);
  }

  useEffect(() => {
    correctDensity()
  }, [originalDensity, targetDensity, volume]);

  return (
    <div class="mashDilution container p-3">
      <h1>
        <span class="tf-ion-waterdrop"/> Dilution de moût
      </h1>
      <form class="form-inline">
        <label class="sr-only" for="inputOriginalDensity">Densité actuelle</label>
        <div class="input-group mb-2 mr-sm-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Densité actuelle</div>
          </div>
          <input type="text" class="form-control" id="inputOriginalDensity" placeholder="1060" value={originalDensity} onInput={(e) => {setOriginalDensity(e.target.value)}}/>
        </div>

        <label class="sr-only" for="inputTargetDensity">Densité cible</label>
        <div class="input-group mb-2 mr-sm-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Densité cible</div>
          </div>
          <input type="text" class="form-control" id="inputTargetDensity" placeholder="1050" value={targetDensity} onInput={(e) => {setTargetDensity(e.target.value)}}/>
        </div>

        <label class="sr-only" for="inputVolume">Volume de moût</label>
        <div class="input-group mb-2 mr-sm-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Volume de moût</div>
          </div>
          <input type="text" class="form-control" id="inputVolume" placeholder="20" value={volume} onInput={(e) => {setVolume(e.target.value)}} />
          <div class="input-group-append">
            <div class="input-group-text">L</div>
          </div>
        </div>

        <label class="sr-only" for="inputBoiledWaterAdd">La quantité d'eau bouillie à ajouter est de</label>
        <div class="input-group mb-2 mr-sm-2">
          <div class="input-group-prepend">
            <div class="input-group-text"><span class="tf-ion-beaker"/></div>
          </div>
          <input type="text" class="form-control" id="inputBoiledWaterAdd" value={boiledWaterAdded > 0 ? boiledWaterAdded : "NaN"} disabled="true" />
        </div>
      </form>
    </div>
  );
}

let mashDilutionWidget = habitat(MashDilution);

mashDilutionWidget.render({
  inline: true,
});


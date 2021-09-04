import habitat from 'preact-habitat';
import CentDixLab from './screens/CentDixLab';

let centDixHabitat = habitat(CentDixLab);

centDixHabitat.render({
  inline: true,
  clean: true
});

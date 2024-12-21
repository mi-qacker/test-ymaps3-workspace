import { YMapLocationRequest } from "@yandex/ymaps3-types";
import "./App.css";
import {
  YMap,
  YMapDefaultFeaturesLayer,
  YMapDefaultSchemeLayer,
  reactify,
} from "./lib";
// TODO: import your reactified package here

const LOCATION: YMapLocationRequest = {
  center: [37.617627, 55.755829],
  zoom: 10,
};

function App() {
  // TODO: add your package example here
  return (
    <YMap location={reactify.useDefault(LOCATION)}>
      <YMapDefaultFeaturesLayer />
      <YMapDefaultSchemeLayer />
    </YMap>
  );
}

export default App;

import "./style.css";
// TODO: import your package here

main();

async function main() {
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = ymaps3;

  const map = new YMap(document.querySelector("#root")!, {
    location: { center: [37.617627, 55.755829], zoom: 10 },
  });
  map
    .addChild(new YMapDefaultSchemeLayer({}))
    .addChild(new YMapDefaultFeaturesLayer({}));

  // TODO: add your package example here
}

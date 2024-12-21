import React from "react";
import ReactDOM from "react-dom";
// TODO: import your package here

const [ymaps3React] = await Promise.all([
  ymaps3.import("@yandex/ymaps3-reactify"),
  ymaps3.ready,
]);
const reactify = ymaps3React.reactify.bindTo(React, ReactDOM);
const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } =
  reactify.module(ymaps3);

// TODO: reactify and export your package here

export { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, reactify };

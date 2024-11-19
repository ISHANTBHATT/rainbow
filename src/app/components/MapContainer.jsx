// "use client";
// import * as React from "react";
// import { useEffect } from "react";
// import { createRoot } from "react-dom/client";

// import Map from "./Map";

// const MapContainer = () => {
//   useEffect(() => {
//     const container = document.getElementById("sample");
//     if (container) {
//       const root = createRoot(container);
//       root.render(<Map />);
//     }
//   }, []);

//   return <div id="sample"></div>;
// };

// export default MapContainer;

//working
// "use client";
// import React, { useEffect } from "react";
// import Highcharts from "highcharts/highmaps";
// import Script from "next/script";

// const MapChart = () => {
//   useEffect(() => {
//     (async () => {
//       const topology = await fetch(
//         "https://code.highcharts.com/mapdata/custom/world-highres.topo.json"
//       ).then((response) => response.json());

//       const data = [
//         {
//           "hc-key": "ye",
//           color: "#ffa500",
//           info: "Yemen is where coffee took off.",
//         },
//         {
//           "hc-key": "br",
//           color: "#c0ffd5",
//           info: "Coffee came from La Reunion.",
//         },
//         { "hc-key": "fr", color: "#c0ffd5", info: "Coffee came from Java." },
//         { "hc-key": "gb", color: "#c0ffd5", info: "Coffee came from Java." },
//         { "hc-key": "id", color: "#c0ffd5", info: "Coffee came from Yemen." },
//         { "hc-key": "nl", color: "#c0ffd5", info: "Coffee came from Java." },
//         { "hc-key": "gu", color: "#c0ffd5", info: "Coffee came from France." },
//         { "hc-key": "re", color: "#c0ffd5", info: "Coffee came from Yemen." },
//         { "hc-key": "in", color: "#c0ffd5", info: "Coffee came from Yemen." },
//       ];

//       // Initialize the map chart
//       Highcharts.mapChart("container", {
//         chart: { map: topology },
//         title: { text: "" },
//         legend: { enabled: false },
//         tooltip: {
//           useHTML: true,
//           headerFormat: "<b>{point.key}</b>:<br/>",
//           pointFormat: "{point.info}",
//         },
//         mapView: {
//           fitToGeometry: {
//             type: "MultiPoint",
//             coordinates: [
//               [-164, 54], // Alaska west
//               [-35, 84], // Greenland north
//               [179, -38], // New Zealand east
//               [-68, -55], // Chile south
//             ],
//           },
//         },
//         series: [
//           {
//             data,
//             keys: ["hc-key", "color", "info"],
//             name: "Coffee",
//           },
//           {
//             type: "mapline",
//             data: [
//               {
//                 geometry: {
//                   type: "LineString",
//                   coordinates: [
//                     [48.516388, 15.552727],
//                     [110.004444, -7.491667],
//                   ], // Yemen to Java
//                 },
//                 className: "animated-line",
//                 color: "#666",
//               },
//             ],
//             lineWidth: 2,
//             enableMouseTracking: false,
//           },
//         ],
//       });
//     })();
//   }, []);

//   return (
//     <>
//       <Script
//         src="https://code.highcharts.com/maps/highmaps.js"
//         strategy="beforeInteractive"
//       />
//       <Script
//         src="https://code.highcharts.com/maps/modules/exporting.js"
//         strategy="beforeInteractive"
//       />
//       <Script
//         src="https://code.highcharts.com/maps/modules/offline-exporting.js"
//         strategy="beforeInteractive"
//       />
//       <Script
//         src="https://code.highcharts.com/modules/accessibility.js"
//         strategy="beforeInteractive"
//       />
//       <div
//         id="container"
//         style={{
//           minWidth: "320px",
//           maxWidth: "800px",
//           height: "500px",
//           margin: "1em auto",
//         }}
//       />
//     </>
//   );
// };

// export default MapChart;

//working
// "use client";
// import React, { useEffect } from "react";
// import Highcharts from "highcharts/highmaps";
// import Script from "next/script";

// const MapChart = () => {
//   useEffect(() => {
//     (async () => {
//       const topology = await fetch(
//         "https://code.highcharts.com/mapdata/custom/world-highres.topo.json"
//       ).then((response) => response.json());

//       const data = [
//         { "hc-key": "ye", color: "#ffa500", info: "Yemen (1414)" },
//         { "hc-key": "br", color: "#c0ffd5", info: "Brazil (1770)" },
//         { "hc-key": "fr", color: "#c0ffd5", info: "La Reunion (1708)" },
//         { "hc-key": "nl", color: "#c0ffd5", info: "Amsterdam (1696)" },
//         { "hc-key": "in", color: "#c0ffd5", info: "India (1670)" },
//         { "hc-key": "id", color: "#c0ffd5", info: "Java (1696)" },
//         { "hc-key": "gf", color: "#c0ffd5", info: "Guyane (1714)" },
//         { "hc-key": "gp", color: "#c0ffd5", info: "Antilles (1714)" },
//       ];

//       const routes = [
//         [
//           [48.516388, 15.552727],
//           [110.004444, -7.491667],
//         ], // Yemen to Java
//         [
//           [110.004444, -7.491667],
//           [21.114217, -55.536384],
//         ], // Java to La Reunion
//         [
//           [21.114217, -55.536384],
//           [-53.125782, 3.933889],
//         ], // La Reunion to Guyane
//         [
//           [-53.125782, 3.933889],
//           [-61.92411, -13.533778],
//         ], // Guyane to Brazil
//         [
//           [-53.125782, 3.933889],
//           [-61.551, 16.265],
//         ], // Guyane to Antilles
//         [
//           [48.516388, 15.552727],
//           [4.9041, 52.3676],
//         ], // Yemen to Amsterdam
//         [
//           [4.9041, 52.3676],
//           [21.114217, -55.536384],
//         ], // Amsterdam to La Reunion
//       ];

//       Highcharts.mapChart("container", {
//         chart: {
//           map: topology,
//           backgroundColor: "transparent",
//         },
//         title: { text: "" },
//         legend: { enabled: false },
//         tooltip: {
//           useHTML: true,
//           headerFormat: "<b>{point.key}</b><br/>",
//           pointFormat: "{point.info}",
//         },
//         mapView: {
//           fitToGeometry: {
//             type: "MultiPoint",
//             coordinates: [
//               [-164, 54], // Alaska west
//               [-35, 84], // Greenland north
//               [179, -38], // New Zealand east
//               [-68, -55], // Chile south
//             ],
//           },
//         },
//         series: [
//           {
//             data,
//             keys: ["hc-key", "color", "info"],
//             name: "Coffee Origins",
//             joinBy: "hc-key",
//             borderColor: "#333",
//             borderWidth: 1,
//             states: {
//               hover: { color: "#a4edba" },
//             },
//           },
//           {
//             type: "mappoint",
//             data: data.map((point) => ({
//               name: point.info,
//               lat: point["hc-key"] === "ye" ? 15.552727 : null, // Specific lat for Yemen example
//               lon: point["hc-key"] === "ye" ? 48.516388 : null, // Specific lon for Yemen example
//               color: "#000",
//               dataLabels: {
//                 enabled: true,
//                 format: `<b>{point.name}</b><br/><span style="font-size: 10px;">{point.subtext}</span>`,
//                 style: {
//                   color: "#333",
//                 },
//               },
//             })),
//             marker: {
//               radius: 5,
//               lineWidth: 2,
//               lineColor: "#333",
//             },
//           },
//           {
//             type: "mapline",
//             data: routes.map((coordinates) => ({
//               geometry: { type: "LineString", coordinates },
//               className: "route-line",
//               color: "#000",
//             })),
//             dashStyle: "Dash",
//             lineWidth: 1.5,
//             enableMouseTracking: false,
//           },
//         ],
//       });
//     })();
//   }, []);

//   return (
//     <>
//       <Script
//         src="https://code.highcharts.com/maps/highmaps.js"
//         strategy="beforeInteractive"
//       />
//       <Script
//         src="https://code.highcharts.com/maps/modules/exporting.js"
//         strategy="beforeInteractive"
//       />
//       <Script
//         src="https://code.highcharts.com/maps/modules/offline-exporting.js"
//         strategy="beforeInteractive"
//       />
//       <Script
//         src="https://code.highcharts.com/modules/accessibility.js"
//         strategy="beforeInteractive"
//       />
//       <div
//         id="container"
//         style={{
//           //   minWidth: "320px",
//           //   maxWidth: "800px",
//           //   height: "500px",
//           minWidth: "100vw",
//           maxWidth: "800px",
//           height: "100vh",
//           margin: "1em auto",
//         }}
//       />
//     </>
//   );
// };

// export default MapChart;

"use client";
import React, { useEffect } from "react";
import Highcharts from "highcharts/highmaps";
import Script from "next/script";

const MapChart = () => {
  useEffect(() => {
    (async () => {
      const topology = await fetch(
        "https://code.highcharts.com/mapdata/custom/world-highres.topo.json"
      ).then((response) => response.json());

      // Data for map points with lat/lon coordinates
      const data = [
        {
          "hc-key": "ye",
          color: "#ffa500",
          info: "Yemen",
          subtext: "1414",
          lat: 15.552727,
          lon: 48.516388,
        },
        {
          "hc-key": "br",
          color: "#c0ffd5",
          info: "Brazil",
          subtext: "1770",
          lat: -14.235004,
          lon: -51.92528,
        },
        {
          "hc-key": "fr",
          color: "#c0ffd5",
          info: "La Reunion",
          subtext: "1708",
          lat: -21.115141,
          lon: 55.536384,
        },
        {
          "hc-key": "nl",
          color: "#c0ffd5",
          info: "Amsterdam",
          subtext: "1696",
          lat: 52.3676,
          lon: 4.9041,
        },
        {
          "hc-key": "in",
          color: "#c0ffd5",
          info: "India",
          subtext: "1670",
          lat: 20.593684,
          lon: 78.96288,
        },
        {
          "hc-key": "id",
          color: "#c0ffd5",
          info: "Java",
          subtext: "1696",
          lat: -7.491667,
          lon: 110.004444,
        },
        {
          "hc-key": "gf",
          color: "#c0ffd5",
          info: "Guyane",
          subtext: "1714",
          lat: 3.933889,
          lon: -53.125782,
        },
        {
          "hc-key": "gp",
          color: "#c0ffd5",
          info: "Antilles",
          subtext: "1714",
          lat: 16.265,
          lon: -61.551,
        },
      ];

      // Routes with black solid lines
      const routes = [
        [
          [48.516388, 15.552727],
          [110.004444, -7.491667],
        ], // Yemen to Java
        [
          [110.004444, -7.491667],
          [55.536384, -21.115141],
        ], // Java to La Reunion
        [
          [55.536384, -21.115141],
          [-53.125782, 3.933889],
        ], // La Reunion to Guyane
        [
          [-53.125782, 3.933889],
          [-51.92528, -14.235004],
        ], // Guyane to Brazil
        [
          [-53.125782, 3.933889],
          [-61.551, 16.265],
        ], // Guyane to Antilles
        [
          [48.516388, 15.552727],
          [4.9041, 52.3676],
        ], // Yemen to Amsterdam
        [
          [4.9041, 52.3676],
          [55.536384, -21.115141],
        ], // Amsterdam to La Reunion
      ];

      Highcharts.mapChart("container", {
        chart: {
          map: topology,
          backgroundColor: "transparent",
        },
        title: { text: "" },
        legend: { enabled: false },
        tooltip: {
          useHTML: true,
          headerFormat: "<b>{point.key}</b><br/>",
          pointFormat: "{point.subtext}",
        },
        mapView: {
          fitToGeometry: {
            type: "MultiPoint",
            coordinates: [
              [-164, 54], // Alaska west
              [-35, 84], // Greenland north
              [179, -38], // New Zealand east
              [-68, -55], // Chile south
            ],
          },
        },
        series: [
          {
            data,
            keys: ["hc-key", "color", "info", "subtext", "lat", "lon"],
            name: "Coffee Origins",
            joinBy: "hc-key",
            borderColor: "#333",
            borderWidth: 1,
            states: {
              hover: { color: "#a4edba" },
            },
          },
          {
            type: "mappoint",
            name: "Locations",
            // color: "#333",
            data: data.map((point) => ({
              name: point.info,
              lat: point.lat,
              lon: point.lon,
              color: "#000",
              dataLabels: {
                enabled: true,
                format: `<b>{point.name}</b><br/><span style="font-size: 10px;">{point.subtext}</span>`,
                style: {
                  color: "#333",
                },
              },
            })),
            marker: {
              radius: 5,
              lineWidth: 2,
              lineColor: "#333",
            },
          },
          {
            type: "mapline",
            data: routes.map((coordinates) => ({
              geometry: { type: "LineString", coordinates },
              className: "route-line",
              color: "#000",
            })),
            lineWidth: 2,
            enableMouseTracking: false,
          },
        ],
      });
    })();
  }, []);

  return (
    <>
      <Script
        src="https://code.highcharts.com/maps/highmaps.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://code.highcharts.com/maps/modules/exporting.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://code.highcharts.com/maps/modules/offline-exporting.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://code.highcharts.com/modules/accessibility.js"
        strategy="beforeInteractive"
      />
      <div
        id="container"
        style={{
          //   minWidth: "320px",
          //   maxWidth: "800px",
          //   height: "500px",
          minWidth: "100vw",
          maxWidth: "800px",
          height: "100vh",
          margin: "1em auto",
        }}
      />
    </>
  );
};

export default MapChart;

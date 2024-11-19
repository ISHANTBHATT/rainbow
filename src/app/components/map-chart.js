// "use client";

// import { useEffect, useRef } from "react";
// import dynamic from "next/dynamic";

// export default function MapChart() {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     let root;

//     const loadChart = async () => {
//       const am5 = await import("@amcharts/amcharts5");
//       const am5map = await import("@amcharts/amcharts5/map");
//       const am5themes_Animated = await import(
//         "@amcharts/amcharts5/themes/Animated"
//       );
//       const am5geodata_worldLow = await import(
//         "@amcharts/amcharts4-geodata/worldLow"
//       );

//       // Dispose of the previous chart instance if it exists
//       if (root) {
//         root.dispose();
//       }

//       // Create root element
//       root = am5.Root.new(chartRef.current);

//       // Set themes
//       root.setThemes([am5themes_Animated.default.new(root)]);

//       // Create the map chart
//       const chart = root.container.children.push(
//         am5map.MapChart.new(root, {
//           panX: "translateX",
//           panY: "translateY",
//           projection: am5map.geoMercator(),
//         })
//       );

//       // Add labels and controls
//       const cont = chart.children.push(
//         am5.Container.new(root, {
//           layout: root.horizontalLayout,
//           x: 20,
//           y: 40,
//         })
//       );

//       cont.children.push(
//         am5.Label.new(root, {
//           centerY: am5.p50,
//           text: "Map",
//         })
//       );

//       const switchButton = cont.children.push(
//         am5.Button.new(root, {
//           themeTags: ["switch"],
//           centerY: am5.p50,
//           icon: am5.Circle.new(root, {
//             themeTags: ["icon"],
//           }),
//         })
//       );

//       switchButton.on("active", function () {
//         if (!switchButton.get("active")) {
//           chart.set("projection", am5map.geoMercator());
//           chart.set("panX", "translateX");
//           chart.set("panY", "translateY");
//         } else {
//           chart.set("projection", am5map.geoOrthographic());
//           chart.set("panX", "rotateX");
//           chart.set("panY", "rotateY");
//         }
//       });

//       cont.children.push(
//         am5.Label.new(root, {
//           centerY: am5.p50,
//           text: "Globe",
//         })
//       );

//       // Create main polygon series for countries
//       const polygonSeries = chart.series.push(
//         am5map.MapPolygonSeries.new(root, {
//           geoJSON: am5geodata_worldLow.default,
//         })
//       );

//       const graticuleSeries = chart.series.push(
//         am5map.GraticuleSeries.new(root, {})
//       );
//       graticuleSeries.mapLines.template.setAll({
//         stroke: root.interfaceColors.get("alternativeBackground"),
//         strokeOpacity: 0.08,
//       });

//       // Create line series for trajectory lines
//       const lineSeries = chart.series.push(am5map.MapLineSeries.new(root, {}));
//       lineSeries.mapLines.template.setAll({
//         stroke: root.interfaceColors.get("alternativeBackground"),
//         strokeOpacity: 0,
//       });

//       const animatedLineSeries = chart.series.push(
//         am5map.MapLineSeries.new(root, {})
//       );
//       animatedLineSeries.mapLines.template.setAll({
//         stroke: root.interfaceColors.get("alternativeBackground"),
//         strokeOpacity: 0.6,
//       });

//       // Destination series
//       const citySeries = chart.series.push(am5map.MapPointSeries.new(root, {}));

//       citySeries.bullets.push(function () {
//         const circle = am5.Circle.new(root, {
//           radius: 5,
//           tooltipText: "{title}",
//           tooltipY: 0,
//           fill: am5.color(0xffba00),
//           stroke: root.interfaceColors.get("background"),
//           strokeWidth: 2,
//         });

//         return am5.Bullet.new(root, {
//           sprite: circle,
//         });
//       });

//       // Invisible series which will animate along invisible lines
//       const animatedBulletSeries = chart.series.push(
//         am5map.MapPointSeries.new(root, {})
//       );

//       animatedBulletSeries.bullets.push(function () {
//         const circle = am5.Circle.new(root, {
//           radius: 0,
//         });

//         return am5.Bullet.new(root, {
//           sprite: circle,
//         });
//       });

//       const cities = [
//         {
//           id: "london",
//           title: "London",
//           geometry: { type: "Point", coordinates: [-0.1262, 51.5002] },
//         },
//         {
//           id: "brussels",
//           title: "Brussels",
//           geometry: { type: "Point", coordinates: [4.3676, 50.8371] },
//         },
//         // ... (add all other cities here)
//       ];

//       citySeries.data.setAll(cities);

//       // Prepare line series data
//       const destinations = [
//         "reykjavik",
//         "lisbon",
//         "moscow",
//         "belgrade",
//         "ljublana",
//         "madrid",
//         "stockholm",
//         "bern",
//         "kiev",
//         "new york",
//       ];

//       const londonDataItem = citySeries.getDataItemById("london");

//       // This will do all the animations
//       destinations.forEach((did) => {
//         const destinationDataItem = citySeries.getDataItemById(did);
//         const lineDataItem = lineSeries.pushDataItem({});
//         lineDataItem.set("pointsToConnect", [
//           londonDataItem,
//           destinationDataItem,
//         ]);

//         const startDataItem = animatedBulletSeries.pushDataItem({});
//         startDataItem.setAll({
//           lineDataItem: lineDataItem,
//           positionOnLine: 0,
//         });

//         const endDataItem = animatedBulletSeries.pushDataItem({});
//         endDataItem.setAll({
//           lineDataItem: lineDataItem,
//           positionOnLine: 1,
//         });

//         const animatedLineDataItem = animatedLineSeries.pushDataItem({});
//         animatedLineDataItem.set("pointsToConnect", [
//           startDataItem,
//           endDataItem,
//         ]);

//         const lon0 = londonDataItem.get("longitude");
//         const lat0 = londonDataItem.get("latitude");
//         const lon1 = destinationDataItem.get("longitude");
//         const lat1 = destinationDataItem.get("latitude");

//         const distance = Math.hypot(lon1 - lon0, lat1 - lat0);
//         const duration = distance * 100;

//         animateStart(startDataItem, endDataItem, duration);
//       });

//       function animateStart(startDataItem, endDataItem, duration) {
//         const startAnimation = startDataItem.animate({
//           key: "positionOnLine",
//           from: 0,
//           to: 1,
//           duration: duration,
//         });

//         startAnimation.events.on("stopped", function () {
//           animateEnd(startDataItem, endDataItem, duration);
//         });
//       }

//       function animateEnd(startDataItem, endDataItem, duration) {
//         startDataItem.set("positionOnLine", 0);
//         const endAnimation = endDataItem.animate({
//           key: "positionOnLine",
//           from: 0,
//           to: 1,
//           duration: duration,
//         });

//         endAnimation.events.on("stopped", function () {
//           animateStart(startDataItem, endDataItem, duration);
//         });
//       }

//       polygonSeries.events.on("datavalidated", function () {
//         chart.zoomToGeoPoint(
//           {
//             longitude: -0.1262,
//             latitude: 51.5002,
//           },
//           3
//         );
//       });

//       // Make stuff animate on load
//       chart.appear(1000, 100);
//     };

//     loadChart();

//     return () => {
//       if (root) {
//         root.dispose();
//       }
//     };
//   }, []);

//   return (
//     <div
//       id="chartdiv"
//       ref={chartRef}
//       style={{ width: "100%", height: "500px" }}
//     ></div>
//   );
// }

//working
// "use client";

// import { useEffect, useRef } from "react";
// import * as am5 from "@amcharts/amcharts5";
// import * as am5map from "@amcharts/amcharts5/map";
// import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
// import am5geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

// export default function MapChart() {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     let root = am5.Root.new(chartRef.current);

//     root.setThemes([am5themes_Animated.new(root)]);

//     let chart = root.container.children.push(
//       am5map.MapChart.new(root, {
//         panX: "translateX",
//         panY: "translateY",
//         projection: am5map.geoMercator(),
//       })
//     );

//     let cont = chart.children.push(
//       am5.Container.new(root, {
//         layout: root.horizontalLayout,
//         x: 20,
//         y: 40,
//       })
//     );

//     cont.children.push(
//       am5.Label.new(root, {
//         centerY: am5.p50,
//         text: "Map",
//       })
//     );

//     let switchButton = cont.children.push(
//       am5.Button.new(root, {
//         themeTags: ["switch"],
//         centerY: am5.p50,
//         icon: am5.Circle.new(root, {
//           themeTags: ["icon"],
//         }),
//       })
//     );

//     switchButton.on("active", function () {
//       if (!switchButton.get("active")) {
//         chart.set("projection", am5map.geoMercator());
//         chart.set("panX", "translateX");
//         chart.set("panY", "translateY");
//       } else {
//         chart.set("projection", am5map.geoOrthographic());
//         chart.set("panX", "rotateX");
//         chart.set("panY", "rotateY");
//       }
//     });

//     cont.children.push(
//       am5.Label.new(root, {
//         centerY: am5.p50,
//         text: "Globe",
//       })
//     );

//     let polygonSeries = chart.series.push(
//       am5map.MapPolygonSeries.new(root, {
//         geoJSON: am5geodata_worldLow,
//       })
//     );

//     polygonSeries.mapPolygons.template.setAll({
//       fill: am5.color("#7f4377"), // Set the desired color
//       stroke: am5.color("#ffffff"), // Optionally set the border color
//       strokeWidth: 0.5,
//     });

//     let graticuleSeries = chart.series.push(
//       am5map.GraticuleSeries.new(root, {})
//     );
//     graticuleSeries.mapLines.template.setAll({
//       stroke: root.interfaceColors.get("alternativeBackground"),
//       strokeOpacity: 0.08,
//     });

//     let lineSeries = chart.series.push(am5map.MapLineSeries.new(root, {}));
//     lineSeries.mapLines.template.setAll({
//       stroke: root.interfaceColors.get("alternativeBackground"),
//       strokeOpacity: 0,
//     });

//     let animatedLineSeries = chart.series.push(
//       am5map.MapLineSeries.new(root, {})
//     );
//     animatedLineSeries.mapLines.template.setAll({
//       stroke: root.interfaceColors.get("alternativeBackground"),
//       strokeOpacity: 0.6,
//     });

//     let citySeries = chart.series.push(am5map.MapPointSeries.new(root, {}));

//     citySeries.bullets.push(function () {
//       let circle = am5.Circle.new(root, {
//         radius: 5,
//         tooltipText: "{title}",
//         tooltipY: 0,
//         fill: am5.color(0xffba00),
//         stroke: root.interfaceColors.get("background"),
//         strokeWidth: 2,
//       });

//       return am5.Bullet.new(root, {
//         sprite: circle,
//       });
//     });

//     let animatedBulletSeries = chart.series.push(
//       am5map.MapPointSeries.new(root, {})
//     );

//     animatedBulletSeries.bullets.push(function () {
//       let circle = am5.Circle.new(root, {
//         radius: 0,
//         fill: am5.color(0xff0000),
//       });

//       return am5.Bullet.new(root, {
//         sprite: circle,
//       });
//     });

//     let cities = [
//       {
//         id: "london",
//         title: "London",
//         geometry: { type: "Point", coordinates: [-0.1262, 51.5002] },
//       },
//       {
//         id: "brussels",
//         title: "Brussels",
//         geometry: { type: "Point", coordinates: [4.3676, 50.8371] },
//       },
//       {
//         id: "prague",
//         title: "Prague",
//         geometry: { type: "Point", coordinates: [14.4205, 50.0878] },
//       },
//       {
//         id: "athens",
//         title: "Athens",
//         geometry: { type: "Point", coordinates: [23.7166, 37.9792] },
//       },
//       {
//         id: "reykjavik",
//         title: "Reykjavik",
//         geometry: { type: "Point", coordinates: [-21.8952, 64.1353] },
//       },
//       {
//         id: "dublin",
//         title: "Dublin",
//         geometry: { type: "Point", coordinates: [-6.2675, 53.3441] },
//       },
//       {
//         id: "oslo",
//         title: "Oslo",
//         geometry: { type: "Point", coordinates: [10.7387, 59.9138] },
//       },
//       {
//         id: "lisbon",
//         title: "Lisbon",
//         geometry: { type: "Point", coordinates: [-9.1355, 38.7072] },
//       },
//       {
//         id: "moscow",
//         title: "Moscow",
//         geometry: { type: "Point", coordinates: [37.6176, 55.7558] },
//       },
//       {
//         id: "belgrade",
//         title: "Belgrade",
//         geometry: { type: "Point", coordinates: [20.4781, 44.8048] },
//       },
//       {
//         id: "bratislava",
//         title: "Bratislava",
//         geometry: { type: "Point", coordinates: [17.1547, 48.2116] },
//       },
//       {
//         id: "ljublana",
//         title: "Ljubljana",
//         geometry: { type: "Point", coordinates: [14.506, 46.0514] },
//       },
//       {
//         id: "madrid",
//         title: "Madrid",
//         geometry: { type: "Point", coordinates: [-3.7033, 40.4167] },
//       },
//       {
//         id: "stockholm",
//         title: "Stockholm",
//         geometry: { type: "Point", coordinates: [18.0645, 59.3328] },
//       },
//       {
//         id: "bern",
//         title: "Bern",
//         geometry: { type: "Point", coordinates: [7.4481, 46.948] },
//       },
//       {
//         id: "kiev",
//         title: "Kiev",
//         geometry: { type: "Point", coordinates: [30.5367, 50.4422] },
//       },
//       {
//         id: "paris",
//         title: "Paris",
//         geometry: { type: "Point", coordinates: [2.351, 48.8567] },
//       },
//       {
//         id: "new york",
//         title: "New York",
//         geometry: { type: "Point", coordinates: [-74, 40.43] },
//       },
//     ];

//     citySeries.data.setAll(cities);

//     let destinations = [
//       "reykjavik",
//       "lisbon",
//       "moscow",
//       "belgrade",
//       "ljublana",
//       "madrid",
//       "stockholm",
//       "bern",
//       "kiev",
//       "new york",
//     ];

//     let originLongitude = -0.1262;
//     let originLatitude = 51.5002;

//     let londonDataItem = citySeries.getDataItemById("london");

//     am5.array.each(destinations, function (did) {
//       let destinationDataItem = citySeries.getDataItemById(did);
//       let lineDataItem = lineSeries.pushDataItem({});
//       lineDataItem.set("pointsToConnect", [
//         londonDataItem,
//         destinationDataItem,
//       ]);

//       let startDataItem = animatedBulletSeries.pushDataItem({});
//       startDataItem.setAll({
//         lineDataItem: lineDataItem,
//         positionOnLine: 0,
//       });

//       let endDataItem = animatedBulletSeries.pushDataItem({});
//       endDataItem.setAll({
//         lineDataItem: lineDataItem,
//         positionOnLine: 1,
//       });

//       let animatedLineDataItem = animatedLineSeries.pushDataItem({});
//       animatedLineDataItem.set("pointsToConnect", [startDataItem, endDataItem]);

//       let lon0 = londonDataItem.get("longitude");
//       let lat0 = londonDataItem.get("latitude");

//       let lon1 = destinationDataItem.get("longitude");
//       let lat1 = destinationDataItem.get("latitude");

//       let distance = Math.hypot(lon1 - lon0, lat1 - lat0);
//       let duration = distance * 120;

//       animateStart(startDataItem, endDataItem, duration);
//     });

//     function animateStart(startDataItem, endDataItem, duration) {
//       let startAnimation = startDataItem.animate({
//         key: "positionOnLine",
//         from: 0,
//         to: 1,
//         duration: duration,
//       });

//       startAnimation.events.on("stopped", function () {
//         animateEnd(startDataItem, endDataItem, duration);
//       });
//     }

//     function animateEnd(startDataItem, endDataItem, duration) {
//       startDataItem.set("positionOnLine", 0);
//       let endAnimation = endDataItem.animate({
//         key: "positionOnLine",
//         from: 0,
//         to: 1,
//         duration: duration,
//       });

//       endAnimation.events.on("stopped", function () {
//         animateStart(startDataItem, endDataItem, duration);
//       });
//     }

//     polygonSeries.events.on("datavalidated", function () {
//       chart.zoomToGeoPoint(
//         {
//           longitude: -0.1262,
//           latitude: 51.5002,
//         },
//         3
//       );
//     });

//     chart.appear(1000, 100);

//     return () => {
//       root.dispose();
//     };
//   }, []);

//   return (
//     <div
//       id="chartdiv"
//       ref={chartRef}
//       style={{ width: "100%", height: "100vh" }}
//     ></div>
//   );
// }

//working
// "use client";

// import { useEffect, useRef } from "react";
// import * as am5 from "@amcharts/amcharts5";
// import * as am5map from "@amcharts/amcharts5/map";
// import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
// import am5geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

// export default function MapChart() {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     let root = am5.Root.new(chartRef.current);

//     root.setThemes([am5themes_Animated.new(root)]);

//     let chart = root.container.children.push(
//       am5map.MapChart.new(root, {
//         panX: "translateX",
//         panY: "translateY",
//         projection: am5map.geoMercator(),
//       })
//     );

//     let cont = chart.children.push(
//       am5.Container.new(root, {
//         layout: root.horizontalLayout,
//         x: 20,
//         y: 40,
//       })
//     );

//     cont.children.push(
//       am5.Label.new(root, {
//         centerY: am5.p50,
//         text: "Map",
//       })
//     );

//     let switchButton = cont.children.push(
//       am5.Button.new(root, {
//         themeTags: ["switch"],
//         centerY: am5.p50,
//         icon: am5.Circle.new(root, {
//           themeTags: ["icon"],
//         }),
//       })
//     );

//     switchButton.on("active", function () {
//       if (!switchButton.get("active")) {
//         chart.set("projection", am5map.geoMercator());
//         chart.set("panX", "translateX");
//         chart.set("panY", "translateY");
//       } else {
//         chart.set("projection", am5map.geoOrthographic());
//         chart.set("panX", "rotateX");
//         chart.set("panY", "rotateY");
//       }
//     });

//     cont.children.push(
//       am5.Label.new(root, {
//         centerY: am5.p50,
//         text: "Globe",
//       })
//     );

//     let polygonSeries = chart.series.push(
//       am5map.MapPolygonSeries.new(root, {
//         geoJSON: am5geodata_worldLow,
//       })
//     );

//     polygonSeries.mapPolygons.template.setAll({
//       fill: am5.color("#f6912e"), // Set the desired color
//       stroke: am5.color("#ffffff"), // Optionally set the border color
//       strokeWidth: 0.5,
//     });

//     let graticuleSeries = chart.series.push(
//       am5map.GraticuleSeries.new(root, {})
//     );
//     graticuleSeries.mapLines.template.setAll({
//       stroke: root.interfaceColors.get("alternativeBackground"),
//       strokeOpacity: 0.08,
//     });

//     let lineSeries = chart.series.push(am5map.MapLineSeries.new(root, {}));
//     lineSeries.mapLines.template.setAll({
//       stroke: root.interfaceColors.get("alternativeBackground"),
//       strokeOpacity: 0,
//     });

//     let animatedLineSeries = chart.series.push(
//       am5map.MapLineSeries.new(root, {})
//     );
//     animatedLineSeries.mapLines.template.setAll({
//       stroke: root.interfaceColors.get("alternativeBackground"),
//       strokeOpacity: 0.6,
//     });

//     let citySeries = chart.series.push(am5map.MapPointSeries.new(root, {}));

//     citySeries.bullets.push(function () {
//       let circle = am5.Circle.new(root, {
//         radius: 5,
//         tooltipText: "{title}",
//         tooltipY: 0,
//         fill: am5.color(0x7f4377),
//         stroke: root.interfaceColors.get("background"),
//         strokeWidth: 2,
//       });

//       return am5.Bullet.new(root, {
//         sprite: circle,
//       });
//     });

//     let animatedBulletSeries = chart.series.push(
//       am5map.MapPointSeries.new(root, {})
//     );

//     animatedBulletSeries.bullets.push(function () {
//       let circle = am5.Circle.new(root, {
//         radius: 0,
//         fill: am5.color(0xff0000),
//       });

//       return am5.Bullet.new(root, {
//         sprite: circle,
//       });
//     });

//     let cities = [
//       {
//         id: "goa",
//         title: "Goa",
//         geometry: { type: "Point", coordinates: [74.8567, 15.2993] },
//       },
//       {
//         id: "kazakhstan",
//         title: "Kazakhstan",
//         geometry: { type: "Point", coordinates: [71.4278, 51.1694] },
//       },
//       {
//         id: "belarus",
//         title: "Belarus",
//         geometry: { type: "Point", coordinates: [27.9534, 53.7098] },
//       },
//       {
//         id: "kyrgyzstan",
//         title: "Kyrgyzstan",
//         geometry: { type: "Point", coordinates: [74.7661, 41.2044] },
//       },
//       {
//         id: "russia",
//         title: "Russia",
//         geometry: { type: "Point", coordinates: [37.6173, 55.7558] }, // Coordinates for Moscow
//       },
//       {
//         id: "azerbaijan",
//         title: "Azerbaijan",
//         geometry: { type: "Point", coordinates: [49.8671, 40.4093] },
//       },
//       {
//         id: "tajikistan",
//         title: "Tajikistan",
//         geometry: { type: "Point", coordinates: [71.2761, 38.861] },
//       },
//       {
//         id: "georgia",
//         title: "Georgia",
//         geometry: { type: "Point", coordinates: [44.793, 41.7151] },
//       },
//     ];

//     citySeries.data.setAll(cities);

//     let destinations = [
//       "kazakhstan",
//       "belarus",
//       "kyrgyzstan",
//       "russia",
//       "azerbaijan",
//       "tajikistan",
//       "georgia",
//     ];

//     let originLongitude = 73.8567;
//     let originLatitude = 15.2993;

//     // Update the origin data item
//     let goaDataItem = citySeries.getDataItemById("goa");

//     am5.array.each(destinations, function (did) {
//       let destinationDataItem = citySeries.getDataItemById(did);
//       let lineDataItem = lineSeries.pushDataItem({});
//       lineDataItem.set("pointsToConnect", [goaDataItem, destinationDataItem]);

//       let startDataItem = animatedBulletSeries.pushDataItem({});
//       startDataItem.setAll({
//         lineDataItem: lineDataItem,
//         positionOnLine: 0,
//       });

//       let endDataItem = animatedBulletSeries.pushDataItem({});
//       endDataItem.setAll({
//         lineDataItem: lineDataItem,
//         positionOnLine: 1,
//       });

//       let animatedLineDataItem = animatedLineSeries.pushDataItem({});
//       animatedLineDataItem.set("pointsToConnect", [startDataItem, endDataItem]);

//       let lon0 = goaDataItem.get("longitude");
//       let lat0 = goaDataItem.get("latitude");

//       let lon1 = destinationDataItem.get("longitude");
//       let lat1 = destinationDataItem.get("latitude");

//       let distance = Math.hypot(lon1 - lon0, lat1 - lat0);
//       let duration = distance * 120;

//       animateStart(startDataItem, endDataItem, duration);
//     });

//     function animateStart(startDataItem, endDataItem, duration) {
//       let startAnimation = startDataItem.animate({
//         key: "positionOnLine",
//         from: 0,
//         to: 1,
//         duration: duration,
//       });

//       startAnimation.events.on("stopped", function () {
//         animateEnd(startDataItem, endDataItem, duration);
//       });
//     }

//     function animateEnd(startDataItem, endDataItem, duration) {
//       startDataItem.set("positionOnLine", 0);
//       let endAnimation = endDataItem.animate({
//         key: "positionOnLine",
//         from: 0,
//         to: 1,
//         duration: duration,
//       });

//       endAnimation.events.on("stopped", function () {
//         animateStart(startDataItem, endDataItem, duration);
//       });
//     }

//     polygonSeries.events.on("datavalidated", function () {
//       chart.zoomToGeoPoint(
//         {
//           longitude: -0.1262,
//           latitude: 51.5002,
//         },
//         3
//       );
//     });

//     chart.appear(1000, 100);

//     return () => {
//       root.dispose();
//     };
//   }, []);

//   return (
//     <div
//       id="chartdiv"
//       ref={chartRef}
//       style={{ width: "100%", height: "100vh" }}
//     ></div>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

export default function MapChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    let root = am5.Root.new(chartRef.current);

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "translateX",
        panY: "translateY",
        projection: am5map.geoMercator(),
      })
    );

    let cont = chart.children.push(
      am5.Container.new(root, {
        layout: root.horizontalLayout,
        x: 20,
        y: 40,
      })
    );

    cont.children.push(
      am5.Label.new(root, {
        centerY: am5.p50,
        text: "Map",
      })
    );

    let switchButton = cont.children.push(
      am5.Button.new(root, {
        themeTags: ["switch"],
        centerY: am5.p50,
        icon: am5.Circle.new(root, {
          themeTags: ["icon"],
        }),
      })
    );

    switchButton.on("active", function () {
      if (!switchButton.get("active")) {
        chart.set("projection", am5map.geoMercator());
        chart.set("panX", "translateX");
        chart.set("panY", "translateY");
      } else {
        chart.set("projection", am5map.geoOrthographic());
        chart.set("panX", "rotateX");
        chart.set("panY", "rotateY");
      }
    });

    cont.children.push(
      am5.Label.new(root, {
        centerY: am5.p50,
        text: "Globe",
      })
    );

    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      fill: am5.color("#f6912e"), // Set the desired color
      stroke: am5.color("#ffffff"), // Optionally set the border color
      strokeWidth: 0.5,
    });

    let graticuleSeries = chart.series.push(
      am5map.GraticuleSeries.new(root, {})
    );
    graticuleSeries.mapLines.template.setAll({
      stroke: root.interfaceColors.get("alternativeBackground"),
      strokeOpacity: 0.08,
    });

    let lineSeries = chart.series.push(am5map.MapLineSeries.new(root, {}));
    lineSeries.mapLines.template.setAll({
      stroke: root.interfaceColors.get("alternativeBackground"),
      strokeOpacity: 0,
    });

    let animatedLineSeries = chart.series.push(
      am5map.MapLineSeries.new(root, {})
    );
    animatedLineSeries.mapLines.template.setAll({
      stroke: root.interfaceColors.get("alternativeBackground"),
      strokeOpacity: 0.6,
    });

    let citySeries = chart.series.push(am5map.MapPointSeries.new(root, {}));

    citySeries.bullets.push(function () {
      let circle = am5.Circle.new(root, {
        radius: 5,
        tooltipText: "{title}",
        tooltipY: 0,
        fill: am5.color(0x7f4377),
        stroke: root.interfaceColors.get("background"),
        strokeWidth: 2,
      });

      return am5.Bullet.new(root, {
        sprite: circle,
      });
    });

    let animatedBulletSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {})
    );

    animatedBulletSeries.bullets.push(function () {
      let circle = am5.Circle.new(root, {
        radius: 0,
        fill: am5.color(0xff0000),
      });

      return am5.Bullet.new(root, {
        sprite: circle,
      });
    });

    let cities = [
      {
        id: "goa",
        title: "Goa",
        geometry: { type: "Point", coordinates: [74.8567, 15.2993] },
      },
      {
        id: "kazakhstan",
        title: "Kazakhstan",
        geometry: { type: "Point", coordinates: [71.4278, 51.1694] },
      },
      {
        id: "belarus",
        title: "Belarus",
        geometry: { type: "Point", coordinates: [27.9534, 53.7098] },
      },
      {
        id: "kyrgyzstan",
        title: "Kyrgyzstan",
        geometry: { type: "Point", coordinates: [74.7661, 41.2044] },
      },
      {
        id: "russia",
        title: "Russia",
        geometry: { type: "Point", coordinates: [37.6173, 55.7558] }, // Coordinates for Moscow
      },
      {
        id: "azerbaijan",
        title: "Azerbaijan",
        geometry: { type: "Point", coordinates: [49.8671, 40.4093] },
      },
      {
        id: "tajikistan",
        title: "Tajikistan",
        geometry: { type: "Point", coordinates: [71.2761, 38.861] },
      },
      {
        id: "georgia",
        title: "Georgia",
        geometry: { type: "Point", coordinates: [44.793, 41.7151] },
      },
    ];

    citySeries.data.setAll(cities);

    let firstDestination = "tajikistan";
    let otherDestinations = [
      "kazakhstan",
      "belarus",
      "kyrgyzstan",
      "russia",
      "azerbaijan",
      "georgia",
    ];

    let originLongitude = 73.8567;
    let originLatitude = 15.2993;

    // Update the origin data item
    // Get the origin data item for Goa
    let goaDataItem = citySeries.getDataItemById("goa");
    let tajikistanDataItem = citySeries.getDataItemById(firstDestination);

    // Create the line from Goa to Tajikistan
    let initialLineDataItem = lineSeries.pushDataItem({});
    initialLineDataItem.set("pointsToConnect", [
      goaDataItem,
      tajikistanDataItem,
    ]);

    // Animate from Goa to Tajikistan
    let startDataItem = animatedBulletSeries.pushDataItem({});
    startDataItem.setAll({
      lineDataItem: initialLineDataItem,
      positionOnLine: 0,
    });

    let endDataItem = animatedBulletSeries.pushDataItem({});
    endDataItem.setAll({
      lineDataItem: initialLineDataItem,
      positionOnLine: 1,
    });

    let animatedLineDataItem = animatedLineSeries.pushDataItem({});
    animatedLineDataItem.set("pointsToConnect", [startDataItem, endDataItem]);

    animateStart(startDataItem, endDataItem, 5000); // Adjust duration as needed

    // Continue from Tajikistan to other destinations
    am5.array.each(otherDestinations, function (did) {
      let destinationDataItem = citySeries.getDataItemById(did);
      let lineDataItem = lineSeries.pushDataItem({});
      lineDataItem.set("pointsToConnect", [
        tajikistanDataItem,
        destinationDataItem,
      ]);

      let startDataItem = animatedBulletSeries.pushDataItem({});
      startDataItem.setAll({
        lineDataItem: lineDataItem,
        positionOnLine: 0,
      });

      let endDataItem = animatedBulletSeries.pushDataItem({});
      endDataItem.setAll({
        lineDataItem: lineDataItem,
        positionOnLine: 1,
      });

      let animatedLineDataItem = animatedLineSeries.pushDataItem({});
      animatedLineDataItem.set("pointsToConnect", [startDataItem, endDataItem]);

      let lon0 = tajikistanDataItem.get("longitude");
      let lat0 = tajikistanDataItem.get("latitude");

      let lon1 = destinationDataItem.get("longitude");
      let lat1 = destinationDataItem.get("latitude");

      let distance = Math.hypot(lon1 - lon0, lat1 - lat0);
      let duration = distance * 120;

      animateStart(startDataItem, endDataItem, duration);
    });

    function animateStart(startDataItem, endDataItem, duration) {
      let startAnimation = startDataItem.animate({
        key: "positionOnLine",
        from: 0,
        to: 1,
        duration: duration,
      });

      startAnimation.events.on("stopped", function () {
        animateEnd(startDataItem, endDataItem, duration);
      });
    }

    function animateEnd(startDataItem, endDataItem, duration) {
      startDataItem.set("positionOnLine", 0);
      let endAnimation = endDataItem.animate({
        key: "positionOnLine",
        from: 0,
        to: 1,
        duration: duration,
      });

      endAnimation.events.on("stopped", function () {
        animateStart(startDataItem, endDataItem, duration);
      });
    }

    polygonSeries.events.on("datavalidated", function () {
      chart.zoomToGeoPoint(
        {
          longitude: -0.1262,
          latitude: 51.5002,
        },
        3
      );
    });

    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div
      id="chartdiv"
      ref={chartRef}
      style={{ width: "100%", height: "100vh" }}
    ></div>
  );
}

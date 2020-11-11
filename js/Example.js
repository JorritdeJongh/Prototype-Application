<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
  <title>ArcGIS JavaScript Tutorials: Create a Starter App</title>
  <style>
    html, body, #viewDiv {
      padding: 0;
      margin: 0;
      height: 100%;
      width: 100%;
    }
  </style>

    <link rel="stylesheet" href="https://js.arcgis.com/4.15/esri/themes/light/main.css">
  <script src="https://js.arcgis.com/4.15/"></script>

  <script>
  require([
      "esri/Map",
      "esri/views/MapView",
      "esri/Graphic",
      "esri/layers/GraphicsLayer",
      "esri/geometry/Point",
      "esri/tasks/GeometryService",
      "esri/tasks/support/ProjectParameters",
      "esri/geometry/SpatialReference"
    ], function(Map, MapView, Graphic, GraphicsLayer, Point, GeometryService, ProjectParameters, SpatialReference)  {

      var map = new Map({
        basemap: "topo-vector"
      });

      var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-85.8337, 33.6531],
        zoom: 13
      });

      var graphicsLayer = new GraphicsLayer();
      map.add(graphicsLayer);

      var point = Point({
         type: "point",
         x: 656036.27,
         y: 1147053.29,
         spatialReference: new SpatialReference({wkid:102629})
       });

       var simpleMarkerSymbol = {
         type: "simple-marker",
         color: [226, 119, 40],  // orange
         outline: {
           color: [255, 255, 255], // white
           width: 1
         }
       };

      // Create attributes
      var attributes = {
        Name: "SO",  // The name of the
        Location: "The Calhoun County Sheriff's Office",
      };
      // Create popup template
      var popupTemplate = {
        title: "{Name}",
        content: "I am located at <b>{Location}</b>."
      };

      var geomSer = new GeometryService({url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Utilities/Geometry/GeometryServer'});
      var params = new ProjectParameters({
        geometries: [point],
        outSpatialReference: new SpatialReference({wkid:102100})
      });

      geomSer.project(params).then(function(geom){
        var pointGraphic = new Graphic({
         geometry: point,
         symbol: simpleMarkerSymbol,
         attributes: attributes,
         popupTemplate: popupTemplate
       });

       graphicsLayer.add(pointGraphic);
      });
    });
  </script>
</head>
<body>
  <div id="viewDiv"></div>
</body>
</html>

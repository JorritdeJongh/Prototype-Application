var Config = {
    // Register your app with your own APP ID
    // https://developers.arcgis.com/documentation/core-concepts/security-and-authentication/accessing-arcgis-online-services/
    "APP_ID": "fVsP2FYi2FSgdLoU",

    "DOMAIN": "arcgis.com",

    // DO NOT MODIFY
    "USER_NOT_SIGNED_IN": "User is not signed in.",

    /**************************************************************************
     *
     * Browser window title (text that will show up in the browser bookmarks)
     *
     ***************************************************************************/
    "APP_TITLE": "Topotijdreis: 200 jaar topografische kaarten",

    /**************************************************************************
     *
     * Application header
     *
     * ************************************************************************/
    /* Header/Banner background color (rgb or hex) */
    "HEADER_HEIGHT": "70px",
    /* Header/Banner background color (rgb or hex) */
    "APP_HEADER_BACKGROUND_COLOR": "#007395",
    /* Header text color */
    "APP_HEADER_TEXT_COLOR": "white",
    /* Header text size */
    "APP_HEADER_TEXT_SIZE": "0em",
    /* Header text */
    "APP_HEADER_TEXT": "",

    /* Header text color */
    "APP_SUBHEADER_TEXT_COLOR": "white",
    /* Header text size */
    "APP_SUBHEADER_TEXT_SIZE": "0em",
    /* Subheader text */
    "APP_SUBHEADER_TEXT": "",

    /**************************************************************************
     *
     * Step Messages (1, 2, 3)
     *
     **************************************************************************/
    /* Step 1 */
    "STEP_ONE_MESSAGE": "<span style='font-weight: bold'>Zoek</span> hieronder een plaats die u wilt bekijken. <br/> <span style='font-weight: bold'>Klik</span> vervolgens op de plaats op de kaart rechts, <br/> om de beschikbare kaarten weer te geven.",
    "STEP_ONE_HALF_CIRCLE_MSG": "1",
    /* Step 2 */
    "STEP_TWO_MESSAGE": "<span style='font-weight: bold'>Klik</span> op één of meerdere kaarten in de tijdlijn <br/> om ze rechts op de kaart weer te geven.",
    "STEP_TWO_HALF_CIRCLE_MSG": "2",
    /* Step 3 */
    "STEP_THREE_MESSAGE": "<span style='font-weight: bold'>Vergelijk</span> de verschillende kaarten door de transparantie-slider onder de kaartlagen te schuiven. <br/> <span style='font-weight: bold'>Herschik</span> de kaarten door de kaartlagen <br/> boven of onder elkaar te slepen. ",
    "STEP_THREE_HALF_CIRCLE_MSG": "3",
    /* Half circle */
    "HALF_CIRCLE_BACKGROUND_COLOR": "#0073958a",
    "HALF_CIRCLE_COLOR": "white",
    "HALF_CIRCLE_OPACITY": "1.0",

    /**************************************************************************
     *
     * Basemap initialization properties
     *
     **************************************************************************/
    /* Default Basemap */
    /*
        The item ID used must be from an item in ArcGIS Online that is of the
        type 'Web Map'

        If working with an item whose basemap layer does not have a geographic
        or Web Mercator spatial reference, you will need to make certain the
        createMap method projects the item's extent using a geometry service
        or by passing in an extent using  options.mapOptions.

        If using a geometry service, it will either create a new GeometryService
        using the  options.geometryServiceURL or it will use the GeometryService
        at esriConfig.defaults.geometryService (if it exists).
    */
    "BASEMAP_WEB_MAP_ID": "198ac0a132d745dd81a6b59730222b02",
    /* default coordinates and zoom level */
    // Use the following link to determine the X and Y values in RD_new projection:
    //https://geo.javawa.nl/zoeken/ *\
    "BASEMAP_INIT_X": 154929,
    "BASEMAP_INIT_Y": 463011,
    "BASEMAP_INIT_ZOOM": 6,


    /**************************************************************************
     *
     * Map click crosshair
     *
     **************************************************************************/
    "CROSSHAIR_SIZE": 40,
    "CROSSHAIR_FILL_COLOR": [255, 0, 24],
    "CROSSHAIR_OPACITY": 0.95,

    /**************************************************************************
     *
     * Geocoder Dijit
     *
     **************************************************************************/
    "GEOCODER_PLACEHOLDER_TEXT": "Zoek een plaats",

    /**************************************************************************
     *
     * Timeline Container

     1:6,000 - 1:24,000
1:48,000 - 1:96,000
1:192,000 - 1:384,000
1:768,000 - 1:12,288,000
     *
     **************************************************************************/
    /* container background color */
    "TIMELINE_CONTAINER_BACKGROUND_COLOR": "rgba(117, 179, 198, 0.16)",
    /* legend header */
    "TIMELINE_LEGEND_HEADER": "Schaal historische kaarten",

    "TIMELINE_LEGEND_VALUES": [
        {
            "label": "1:768 000",
            "value": 768000,
            "color": "rgb(0, 78, 215)",
            "className": "four",
            "lodThreshold": 7
        },
        {
            "label": "1:192 000",
            "value": 192000,
            "color": "rgb(0, 117, 196)",
            "className": "three",
            "lodThreshold": 9
        },
        {
            "label": "1:48 000",
            "value": 48000,
            "color": "rgb(0, 156, 176)",
            "className": "two",
            "lodThreshold": 10
        },
        {
            "label": "1:6,000",
            "value": 6000,
            "color": "rgb(0, 196, 157)",
            "className": "one",
            "lodThreshold": 11
        },
    ],

    /* Timeline disabled message (Msg displayed when user zooms too far out) */
    "TIMELINE_DISABLED_MESSAGE": "Zoom verder in op de kaart om de tijdlijn weer te geven",
    "TIMELINE_DISABLED_BACKGROUND_COLOR": "#007395",
    "TIMELINE_DISABLED_COLOR": "white",
    "TIMELINE_DISABLED_BACKGROUND_OPACITY": "0.65",
    "TIMELINE_DISABLED_BACKGROUND_FONT_SIZE": "1.7em",

    /**************************************************************************
     *
     * Timeline parameters
     *
     **************************************************************************/
    /*
     * Timeline style 'box' or 'dot'
     * Specifies the style for the timeline events. Choose from "dot" or "box". Note that the content of the events may
     * contain additional html formatting.
    */
    "TIMELINE_STYLE": "box",
    /* timeline height */
    "TIMELINE_HEIGHT": "240",
    /* */
    "TIMELINE_ZOOM_MIN": 201536000000,
    "TIMELINE_ZOOM_MAX": 4153600000000,
    /* If true, events will be clustered together when zooming out. */
    "TIMELINE_CLUSTER": false,
    /* Enable a navigation menu with buttons to move and zoom the timeline. */
    "TIMELINE_SHOW_NAVIGATION": false,
    /* minimum date onLoad */
    "TIMELINE_MIN_DATE": '1815',
    /* maximum date onLoad */
    "TIMELINE_MAX_DATE": '2020',
    /* steps between labels */
    "TIMELINE_STEP": 10,
    /* When true, events are moved animated when resizing or moving them. This is very pleasing for the eye, but does
     * require more computational power. */
    "TIMELINE_ANIMATE": true,

    /**************************************************************************
     *
     * REST endpoints and URL params
     *
     **************************************************************************/
    /* path to thumbnails on Image Service */
    "INFO_THUMBNAIL": "/info/thumbnail",
    /* TODO Change name/description */
    "IMAGE_SERVER_JSON": "?culture=en&f=json&token=",

    /* Image service */
    "IMAGE_SERVER": "https://edemo6.esri.nl/server/rest/services/Topotijdreis/Nijmegen_Historic_Maps/ImageServer",
    /* outfields */
    "OUTFIELDS": ['*'],
    /* WHERE clause */
    "IMAGE_SERVER_WHERE": "OBJECTID = ",

    /* A where clause for the query. */
    "QUERY_WHERE":"IsDefault = 1",
    /* The geometry to apply to the spatial filter. (<MAP_POINT> or < > */
    "QUERY_GEOMETRY": "MAP_POINT",

    /* USGS (temporary) */
    "DOWNLOAD_PATH": "https://prd-tnm.s3.amazonaws.com/StagedProducts/Maps/HistoricalTopo/GeoTIFF/",

    /* Attribute Fields */
    /* OBJECTID -- DO NOT modify this field --- */
    "ATTRIBUTE_OBJECTID": "OBJECTID",
    /* Name of map displayed */
    "ATTRIBUTE_MAP_NAME": "Map_Name",
    /* Date field (UTC format) */
    "ATTRIBUTE_DATE": "Prod_Date",
    /* Scale field */
    "ATTRIBUTE_SCALE": "Map_Scale",
    /* Tooltip content */
    "TOOLTIP_CONTENT": "",
    /* Download map link */
    "ATTRIBUTE_DOWNLOAD_LINK": "Downl_Link",
    /* Map citation <String> or <attribute field> */
    "ATTRIBUTE_CITATION": "Citation",

    /**************************************************************************
     *
     **************************************************************************/
    "MSG_UNKNOWN": "Niet bekend",
    "MSG_NO_MAPS": "Er zijn geen kaarten beschikbaar voor het geselecteerde punt",

    "EXTENT_EXPAND": 0.60,

    "ZOOM_LEVEL_THRESHOLD": 13,
    "THUMBNAIL_VISIBLE_THRESHOLD": 13,
    "THUMBNAIL_VISIBLE_THRESHOLD_MSG": "Zoom verder in om de kaart weer te geven",

    /**************************************************************************
     *
     * Mouseover/Mouseout graphic styles (FILL and BORDER)
     *
     **************************************************************************/
    /* Timeline item mouseover graphics */
    "TIMELINE_ITEM_MOUSEOVER_GR_FILL":[146, 179, 160, 0.10],
    "TIMELINE_ITEM_MOUSEOVER_GR_BORDER":[48, 75, 60, 1.0],
    /* Sidebar item mouseover graphics */
    "SIDEBAR_MAP_MOUSEOVER_GR_FILL":[146, 179, 160, 0.0],
    "SIDEBAR_MAP_MOUSEOVER_GR_BORDER":[48, 75, 60, 1.75],
    /* */
    "IMAGE_BORDER_WIDTH": 1.75,

    /******** Sharing/Social media icons ********/
    "SHARING_RELATED": "",
    // comma separated list of tags
    "SHARING_HASHTAGS": "USGS,Esri,ArcGIS,Kadaster,Topotijdreis",

    "MAP_CLICK_HANDLER_ON": true
};

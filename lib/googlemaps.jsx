import "js/web.jsx";

native class google {
    class maps {
        class Map {
            function constructor (mapDiv : Node);
            //function constructor (mapDiv : Node, opts : MapOptions);
            function constructor (mapDiv : Node, opts : variant);

            function fitBounds(bounds : google.maps.LatLngBounds) : void;
            function getBounds() : google.maps.LatLngBounds;
            function getCenter() : google.maps.LatLng;
            function getDiv() : Node;
            function getHeading() : number;
            function getMapTypeId() : string;
            function getProjection() : google.maps.Projection;
            //function getStreetView() : google.maps.StreetViewPanorama;
            function getTilt() : number;
            function getZoom() : number;
            function panBy(x : number, y : number) : void;
            function panTo(latLng : google.maps.LatLng) : void;
            function panToBounds(latLngBounds : google.maps.LatLngBounds) : void;
            function setCenter(latLng : google.maps.LatLng) : void;
            function setHeading(heading : number) : void;
            function setMapTypeId(mapTypeId : string) : void;
            //function setOptions(options : MapOptions) : void;
            function setOptions(options : variant) : void;
            //function setStreetView(panorama : google.maps.StreetViewPanorama) : void;
            function setTilt(tilt : number) : void;
            function setZoom(zoom : number) : void;

            var controls : Node[][];
            var mapTypes : google.maps.MapTypeRegistry;
            var overlayMapType : google.maps.MapType[];
        }

        class MapType {
            var alt : string;
            var maxZoom : number;
            var minZoom : number;
            var name : string;
            var projection : google.maps.Projection;
            var radius : number;
            var tileSize : google.maps.Size;

            function getTile(tileCoord : google.maps.Point, zoom : number, ownerDocument : Document) : void;
            function releaseTile(tile : Node) : void;
        }

        class MapTypeRegistry {
            function constructor();
            function set(id : string, mapType : google.maps.MapType) : void;
        }

        class MapTypeId {
            static const HYBRID : string;
            static const ROADMAP : string;
            static const SATELLITE : string;
            static const TERRAIN : string;
        }

        class LatLng {
            function constructor(lat : number, lng : number);
            function constructor(lat : number, lng : number, noWrap : boolean);

            function equals(other : google.maps.LatLng) : boolean;
            function lat() : number;
            function lng() : number;
            override function toString() : string;
            function toUrlValue() : string;
            function toUrlValue(precision : number) : string;
        }

        class LatLngBounds {
            function constructor();
            function constructor(sw : google.maps.LatLng, ne : google.maps.LatLng);

            function equals(other : google.maps.LatLngBounds) : boolean;
            function extend(point : google.maps.LatLng) : google.maps.LatLngBounds;
            function getCenter() : google.maps.LatLng;
            function getNorthEast() : google.maps.LatLng;
            function getNorthWest() : google.maps.LatLng;
            function intersects(other : google.maps.LatLngBounds) : boolean;
            function isEmpty() : boolean;
            function toSpan() : google.maps.LatLng;
            override function toString() : string;
            function toUrlValue() : string;
            function toUrlValue(precision : number) : string;
            function union(other : google.maps.LatLngBounds) : google.maps.LatLngBounds;
        }

        class Projection {
            function fromLatLngToPoint(latLng : google.maps.LatLng) : google.maps.Point;
            function fromLatLngToPoint(latLng : google.maps.LatLng, point : google.maps.Point) : google.maps.Point;
            function fromPointToLatLng(pixel : google.maps.LatLng) : google.maps.LatLng;
            function fromPointToLatLng(pixel : google.maps.LatLng, noWrap : boolean) : google.maps.LatLng;
        }

        class Point {
            var x : number;
            var y : number;

            function constructor (x : number, y : number);
            function equals(other : google.maps.Point) : boolean;
            override function toString() : string;
        }

        class Size {
            var width : number;
            var height : number;

            function constructor (width : number, height : number);
            function constructor (width : number, height : number, widthUnit : string, heightUnit : string);
            function equals(other : google.maps.Size) : boolean;
            override function toString() : string;
        }
    }
}

import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Marker, MarkerClusterer } from "@googlemaps/markerclusterer";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnChanges, AfterViewInit {
  @Input() latlng!: {};
  display: any;
  center: google.maps.LatLngLiteral = {
    lat: 22.2736308,
    lng: 70.7512555
  };
  zoom = 6;
  markers: any;
  map: any;
  infoWindow!: google.maps.InfoWindow;
  locations = [
    { lat: -31.56391, lng: 147.154312 , posId: 1},
    { lat: -33.718234, lng: 150.363181 , posId: 2},
    { lat: -33.727111, lng: 150.371124 , posId: 3},
    { lat: -33.848588, lng: 151.209834 , posId: 4},
    { lat: -33.851702, lng: 151.216968 , posId: 5},
    { lat: -34.671264, lng: 150.863657 , posId: 6},
    { lat: -35.304724, lng: 148.662905 , posId: 7},
    { lat: -36.817685, lng: 175.699196 , posId: 8},
    { lat: -36.828611, lng: 175.790222 , posId: 9},
    { lat: -37.75, lng: 145.116667 , posId: 10},
    { lat: -37.759859, lng: 145.128708 , posId: 11},
    { lat: -37.765015, lng: 145.133858 , posId: 12},
    { lat: -37.770104, lng: 145.143299 , posId: 13},
    { lat: -37.7737, lng: 145.145187 , posId: 14},
    { lat: -37.774785, lng: 145.137978 , posId: 15},
    { lat: -37.819616, lng: 144.968119 , posId: 16},
    { lat: -38.330766, lng: 144.695692 , posId: 17},
    { lat: -39.927193, lng: 175.053218 , posId: 18},
    { lat: -41.330162, lng: 174.865694 , posId: 19},
    { lat: -42.734358, lng: 147.439506 , posId: 20},
    { lat: -42.734358, lng: 147.501315 , posId: 21},
    { lat: -42.735258, lng: 147.438 , posId: 22},
    { lat: -43.999792, lng: 170.463352 , posId: 23},
  ];


  constructor() {
    this.initMap()
  }
  ngAfterViewInit(): void {
    this.map = this.getMap();
  }
  ngOnChanges(simpleOnChanges: SimpleChanges): void {
    console.log(simpleOnChanges['latlng'].currentValue);
    if (simpleOnChanges['latlng'].currentValue.lat && simpleOnChanges['latlng'].currentValue.lng) {
      const latLng = new google.maps.LatLng(
        simpleOnChanges['latlng'].currentValue.lat,
        simpleOnChanges['latlng'].currentValue.lng
      );
      (this.map as google.maps.Map)?.setCenter(latLng);
      (this.map as google.maps.Map)?.setZoom(8);
      this.setMarkersOnMap([simpleOnChanges['latlng'].currentValue]);
    }
  }

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }

  async initMap() {
    // Request needed libraries.
    const { Map, InfoWindow } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
    this.setMarkersOnMap(this.locations);
  }

  getMap() {
    return new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 3,
        center: { lat: -28.024, lng: 140.887 },
        mapId: 'DEMO_MAP_ID',
      }
    );
  }

  getMarkers(locations: any[]) {

    // Create an array of alphabetical characters used to label the markers.

    return locations.map((position, i) => {
      const label = "POS";
      const pinGlyph = new google.maps.marker.PinElement({
        glyph: label,
        glyphColor: "white",
      })
      const marker = new google.maps.marker.AdvancedMarkerElement({
        position,
        content: pinGlyph.element,
      });

      // markers can only be keyboard focusable when they have click listeners
      // open info window when marker is clicked
      marker.addListener("click", () => {
        this.infoWindow.setContent(position.lat + ", " + position.lng + `</br> <a href="http://localhost:4200/dashboard/${position.posId}">click here for details</a>`);
        this.infoWindow.open(this.map, marker);
      });
      google.maps.event.trigger(marker, 'click');
      return marker;
    });
  }

  setMarkersOnMap(locations: any[]) {
    if (this.infoWindow) {
      this.infoWindow.close();
    }
    this.infoWindow = new google.maps.InfoWindow({
      content: "",
      disableAutoPan: true,
    });

    this.infoWindow.close();
    // Add some markers to the map.
    const markers: Marker[] = this.getMarkers(locations);

    // Add a marker clusterer to manage the markers.
    new MarkerClusterer({ markers, map: this.map });
  }
}

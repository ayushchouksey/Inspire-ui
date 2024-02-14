import { Component } from '@angular/core';

@Component({
  selector: 'app-notification-center',
  templateUrl: './notification-center.component.html',
  styleUrl: './notification-center.component.scss'
})
export class NotificationCenterComponent {

  cols = [{ field: 'location', header: 'Location', sort: true }, { field: 'devices', header: 'Devices' }, { field: 'orders', header: 'Orders' }, { field: 'email', header: 'email' }];
  data = [
    { id: 1, devices: "Jobyna", orders: "Delleschi", email: "jdelleschi0@scribd.com", address: { location: "Mumbai, India", latlng: [19.0760, 72.8777] } },
    { id: 2, devices: "Elwyn", orders: "Gillaspy", email: "egillaspy1@nifty.com", address: { location: "Delhi, India", latlng: [28.7041, 77.1025] } },
    { id: 3, devices: "Washington", orders: "Wethers", email: "wwethers2@tinyurl.com", address: { location: "Chennai, India", latlng: [13.0827, 80.2707] } },
    { id: 4, devices: "Tyrone", orders: "Weeke", email: "tweeke3@posterous.com", address: { location: "Kolkata, India", latlng: [22.5726, 88.3639] } },
    { id: 5, devices: "Oralia", orders: "Easterby", email: "oeasterby4@indiegogo.com", address: { location: "Chicago, USA", latlng: [41.8781, -87.6298] } },
    { id: 6, devices: "Antoinette", orders: "O'Hagan", email: "aohagan5@businessweek.com", address: { location: "Shanghai, China", latlng: [31.2304, 121.4737] } },
    { id: 7, devices: "Donny", orders: "Nail", email: "dnail6@vistaprint.com", address: { location: "Beijing, China", latlng: [39.9042, 116.4074] } },
    { id: 8, devices: "Teddie", orders: "Stedson", email: "tstedson7@toplist.cz", address: { location: "Guangzhou, China", latlng: [23.1291, 113.2644] } },
    { id: 9, devices: "Lazar", orders: "Meadows", email: "lmeadows8@loc.gov", address: { location: "Dubai, UAE", latlng: [25.276987, 55.296249] } },
    { id: 10, devices: "Wes", orders: "Bream", email: "wbream9@ucsd.edu", address: { location: "Abu Dhabi, UAE", latlng: [24.4539, 54.3773] } },
  ];

  latlng = { lat: '', lng: '' };

  focusOnMap(id: any) {
    const item: any = this.data.find(item => item.id === id);
    this.latlng = { lat: item.address.latlng[0], lng: item.address.latlng[1] };
  }
}

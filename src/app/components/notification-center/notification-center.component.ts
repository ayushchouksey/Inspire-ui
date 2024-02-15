import { Component } from '@angular/core';

@Component({
  selector: 'app-notification-center',
  templateUrl: './notification-center.component.html',
  styleUrl: './notification-center.component.scss'
})
export class NotificationCenterComponent {

  cols = [{ field: 'address.location', header: 'POS', sort: true }, { field: 'devices', header: 'POPS', sort: true }, { field: 'orders', header: 'Sale', sort: true }, { field: 'network', header: 'Network', sort: true }];
  data = [
    { id: 1, devices: 10, orders: 100, network: "Medium", address: { location: "Mumbai, India", latlng: [19.0760, 72.8777] } },
    { id: 2, devices: 15, orders: 500, network: "High", address: { location: "Delhi, India", latlng: [28.7041, 77.1025] } },
    { id: 3, devices: 3, orders: 200, network: "High", address: { location: "Chennai, India", latlng: [13.0827, 80.2707] } },
    { id: 4, devices: 7, orders: 150, network: "Medium", address: { location: "Kolkata, India", latlng: [22.5726, 88.3639] } },
    { id: 5, devices: 2, orders: 60, network: "Low", address: { location: "Chicago, USA", latlng: [41.8781, -87.6298] } },
    { id: 6, devices: 15, orders: 600, network: "High", address: { location: "Shanghai, China", latlng: [31.2304, 121.4737] } },
    { id: 7, devices: 18, orders: 151, network: "Medium", address: { location: "Beijing, China", latlng: [39.9042, 116.4074] } },
    { id: 8, devices: 10, orders: 250, network: "Medium", address: { location: "Guangzhou, China", latlng: [23.1291, 113.2644] } },
    { id: 9, devices: 15, orders: 300, network: "High", address: { location: "Dubai, UAE", latlng: [25.276987, 55.296249] } },
    { id: 10, devices: 20, orders: 600, network: "High", address: { location: "Abu Dhabi, UAE", latlng: [24.4539, 54.3773] } },
  ];

  latlng = { lat: '', lng: '', posId:0 };

  focusOnMap(id: any) {
    const item: any = this.data.find(item => item.id === id);
    this.latlng = { lat: item.address.latlng[0], lng: item.address.latlng[1], posId: item.id };
  }
}

import { Component, OnInit } from '@angular/core';
import { IpService } from '../../services/ip.service';

@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.css'],
  providers: [IpService]
})
export class IpComponent implements OnInit {

  ip: String;

  constructor(private ip_service: IpService) { }

  ngOnInit() {
    this.ip_service.get_ip()
    .then(ip => this.ip = ip)
    .catch(err => console.log(err));
  }

}

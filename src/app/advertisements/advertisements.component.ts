import { Component, OnInit } from '@angular/core';
import { AdvertisementsService} from '../advertisements.service';

@Component({
  selector: 'advertisements',
  templateUrl: './advertisements.component.html',
  styleUrls: ['./advertisements.component.css']
})
export class AdvertisementsComponent implements OnInit {

  advertisements: string[];

  constructor(advertisementsService: AdvertisementsService) { 
    this.advertisements = advertisementsService.getAdds();
  }

  ngOnInit(): void {
  }

}

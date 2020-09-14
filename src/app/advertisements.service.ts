import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementsService {

  getAdds():string[]{
    return ['This is an advertisement', 'This is ANOTHER advertisement', 'This is an unencrypted message']
  }
}

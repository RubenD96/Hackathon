import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Camera, CameraOptions} from "@ionic-native/camera";
import {Photoview} from "../photoview/photoview";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    saveToPhotoAlbum: true
  };

  constructor(public navCtrl: NavController,
              private camera: Camera) {
  }

  useCamera() {
    this.camera.getPicture(this.options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(imageData);

      this.navCtrl.push(Photoview, {
        photo: imageData
      });
    }, (err) => {
      console.log(err);
    });
  }
}

import {NavParams} from 'ionic-angular';
import {PhotoViewer} from '@ionic-native/photo-viewer';
import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'page-photoview',
  templateUrl: 'photoview.html'
})
export class Photoview {

  @ViewChild('canvas') canvasEl: ElementRef;
  photoLocation: string;

  private _CANVAS: any;
  private _CONTEXT: any;

  constructor(public navParams: NavParams,
              private pv: PhotoViewer) {
    this.photoLocation = navParams.get("photo");
    console.log(this.photoLocation);
    //pv.show(this.photoLocation);
  }

  ionViewDidLoad() {
    this._CANVAS = this.canvasEl.nativeElement;
    this._CANVAS.width = window.innerWidth;
    this._CANVAS.height = window.innerHeight;

    this.initialiseCanvas();
  }

  initialiseCanvas() {
    if (this._CANVAS.getContext) {
      this.setupCanvas();
    }
  }

  setupCanvas() {
    this._CONTEXT = this._CANVAS.getContext('2d');
    //this._CONTEXT.image = this.photoLocation;
    //this._CONTEXT.fillRect(0, 0, window.innerWidth, window.innerHeight);
    this._CONTEXT.background; //??
    /*let background = new Image();
    background.src = this.photoLocation;*/
    //background.onload = () => {
    //this._CONTEXT.drawImage(this.photoLocation, 0, 0);
    //}
    /*background.onload(() => {
      this._CONTEXT.drawImage(background, 0, 0);
    });*/

  }

  clearCanvas() {
    this._CONTEXT.clearRect(0, 0, this._CANVAS.width, this._CANVAS.height);
    this.setupCanvas();
  }
}

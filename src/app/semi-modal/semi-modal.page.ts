import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-semi-modal",
  templateUrl: "./semi-modal.page.html",
  styleUrls: ["./semi-modal.page.scss"],
})
export class SemiModalPage implements OnInit {
  counter: number = 0;

  constructor(public modalCtrl: ModalController) {
    this.counter = 0;
  }

  ngOnInit() {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad SemiModalPage");
  }

  up() {
    this.counter++;
  }

  down() {
    this.counter--;
  }

  close() {
    this.modalCtrl.dismiss(null);
  }
  save() {
    this.modalCtrl.dismiss();
  }
}

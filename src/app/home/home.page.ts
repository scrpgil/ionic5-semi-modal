import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { SemiModalPage } from "../semi-modal/semi-modal.page";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(public modalController: ModalController) {}

  async showSemiModal() {
    const modal = await this.modalController.create({
      component: SemiModalPage,
      swipeToClose: true,
    });
    modal.present();
  }
}

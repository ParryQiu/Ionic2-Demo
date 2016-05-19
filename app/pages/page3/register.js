import { Page, NavController, Loading, Alert, Toast, Modal, ViewController } from 'ionic-angular';
@Page({
    templateUrl: 'build/pages/page3/register.html'
})
export class Register {

    static get parameters() {
        return [
            [ViewController]
        ];
    }

    constructor(viewController) {
        this.viewController = viewController;
    }

    dismiss() {
        this.viewController.dismiss();
    }

}

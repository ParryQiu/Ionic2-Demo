import { Page, NavController, NavParams } from 'ionic-angular';


@Page({
    templateUrl: 'build/pages/page2/contactdetails.html'
})
export class ContactDetails {

    static get parameters() {
        return [
            [NavParams]
        ];
    }

    constructor(params) {
        this.item = params.data.item;
    }

}

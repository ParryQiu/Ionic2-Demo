import { Page, NavController, Loading, Alert, Toast, Modal } from 'ionic-angular';
import { ImagePicker } from "ionic-native"
import { Page3 } from '../page3/page3';
@Page({
    templateUrl: 'build/pages/page3/usercenter.html'
})
export class UserCenter {

    static get parameters() {
        return [
            [NavController]
        ];
    }

    constructor(nav) {
        this.user = {};
        this.user.username = "";
        this.user.password = "";
        this.user.headface = "images/4.jpg";
        this.nav = nav;
        if (localStorage.Logined == "true") {
            //已经登录的状态，不跳转，显示用户信息即可。
            this.user.headface = "images/" + localStorage.username + ".jpg";

        } else {
            let modal = Modal.create(Page3);
            modal.onDismiss(data => {
                this.user.headface = "images/" + data + ".jpg";
            });
            this.nav.present(modal);
        }
    }

    logout() {
        localStorage.Logined = "";
        localStorage.username = "";
        let modal = Modal.create(Page3);
        modal.onDismiss(data => {
            this.user.headface = "images/" + data + ".jpg";
        });
        this.nav.present(modal);
    }
}

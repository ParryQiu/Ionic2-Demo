import { App, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { TabsPage } from './pages/tabs/tabs';
import { Geolocation } from "ionic-native";
import {LocalNotifications} from "ionic-native"

@App({
    template: '<ion-nav [root]="rootPage"></ion-nav>',
    config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
    static get parameters() {
        return [
            [Platform]
        ];
    }

    constructor(platform) {
        this.rootPage = TabsPage;

        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();

            // 获取位置信息
            // Geolocation.getCurrentPosition().then((resp) => {
            //     console.log(resp.coords.latitude);
            //     console.log(resp.coords.longitude);
            // })

            //本地提醒组件
            LocalNotifications.schedule({
              text: "本地化提醒",
              at: new Date(new Date().getTime() + 10000)
            });
        });
    }
}

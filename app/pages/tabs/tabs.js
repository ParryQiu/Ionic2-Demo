import { Page } from 'ionic-angular';
import { Page1 } from '../page1/page1';
import { Page2 } from '../page2/page2';
import { UserCenter } from '../page3/usercenter';
import { IonicApp } from 'ionic-angular';

@Page({
    templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

    static get parameters() {
        return [
            [IonicApp]
        ];
    }

    constructor(app) {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = Page1;
        this.tab2Root = Page2;
        this.tab3Root = UserCenter;

        this.app = app;
    }

    onPageDidEnter() {
        //在进入完成之后，我们动态的选定某一个 tab

       	// 比如说，用户未登陆，我就选定第三个登陆的 tab，如果已经登陆了
       	// 那么就选择第一个 tab 加载数据给用户看。
       	
        // let tabs = this.app.getComponent("mainTabs");
        // tabs.select(1);

    }
}

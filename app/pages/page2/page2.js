import { Page, NavController } from 'ionic-angular';
import { ContactDetails } from "../Page2/contactdetails"

@Page({
    templateUrl: 'build/pages/page2/page2.html'
})
export class Page2 {

    static get parameters() {
        return [
            [NavController]
        ];
    }

    constructor(nav) {
        //一般数据源都是从 api 进行获取，这里我们只是模拟一些已经取到了数据
        this.contacts = [{ "contactid": 1, "contactname": "张三", "contacttext": "13800000000" },
            { "contactid": 2, "contactname": "李四", "contacttext": "13800000002" },
            { "contactid": 3, "contactname": "王五", "contacttext": "13800000003" },
            { "contactid": 4, "contactname": "李六", "contacttext": "13800000004" },
            { "contactid": 5, "contactname": "张美女", "contacttext": "13800000005" }
        ];

        this.nav = nav;
    }

    onPageWillEnter() {
        //在这里可以做页面初始化的一些事情
        console.log("page 2: page will enter");
    }

    onPageDidEnter() {
        console.log("page 2: page did enter");
    }

    itemClick(event, contact) {
        //alert(contact.contactname);
        // 在点击的时候，加载对应的详细列表页面。
        this.nav.push(ContactDetails, { item: contact });
    }

    removeContact(contact) {
        //这里你可以请求 API 进行删除
        for (var i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i] == contact) {
                this.contacts.splice(i, 1);
            }
        }
        console.log("request api: " + contact.contactid + " removed!")
    }
}

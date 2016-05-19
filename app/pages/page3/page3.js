import { Page, NavController, Loading, Alert, Toast, Modal, ViewController } from 'ionic-angular';
import { Register } from '../page3/register';
import { ImagePicker } from "ionic-native"
import { Http } from "angular2/http";
@Page({
    templateUrl: 'build/pages/page3/page3.html'
})
export class Page3 {

    static get parameters() {
        return [
            [NavController],
            [ViewController],
            [Http]
        ];
    }

    constructor(nav, viewController, http) {
        this.user = {};
        this.user.username = "";
        this.user.password = "";
        this.user.headface = "images/4.jpg";
        this.nav = nav;
        this.viewController = viewController;
        this.http = http;
    }

    login() {
        if (this.user.username == '') { //|| this.user.username.length <= 3
            // alert 提醒用户注意用户名的正确性
            // let alertUserNameError = Alert.create({
            //     title: "用户中心",
            //     subTitle: "您输入的用户名格式不正确！",
            //     buttons: ["OK"]
            // });

            // this.nav.present(alertUserNameError);

            // 使用 toast 控件进行更加优雅的提示
            let toast = Toast.create({
                message: "您输入的用户名格式不正确！",
                duration: 2000
            });
            this.nav.present(toast);

        } else {
            //创建 loading 窗口，模拟3秒后登陆成功，loading 窗口消失
            let loading = Loading.create({
                content: "正在登陆...",
                spinner: "dots",
                duration: 3000 //单位是毫秒
            });

            this.nav.present(loading);

            //真实的逻辑应该是：去请求登陆的 API，返回结果后，进行 loading 窗口的隐藏
            // setTimeout(() => {
            //     loading.dismiss();
            // }, 3000);

            //这里模拟了登录，如果输入的账号的信息的密码为1那么我们就认为
            //登录成功了，并且进行相关的保存动作。
            // if (this.user.password == "1") {
            //     localStorage.username = this.user.username;
            //     localStorage.Logined = "true";
            //     setTimeout(() => {
            //         loading.dismiss(); //登录进度条隐藏
            //         this.viewController.dismiss(this.user.username); //当前也就是自身进行隐藏
            //     }, 1000);
            // } else {
            //     let toast = Toast.create({
            //         message: "登录失败！",
            //         duration: 2000
            //     });
            //     this.nav.present(toast);
            // }

            //这里是请求 API 的实现，注意跨域请求的问题，请参见 http://enable-cors.org/。
            this.http.get("http://api.gugujiankong.com/account/Login?email=" + this.user.username + "&password=" + this.user.password)
                .subscribe(data => {
                    localStorage.username = this.user.username;
                    localStorage.Logined = "true";
                    loading.dismiss(); //登录进度条隐藏
                    this.viewController.dismiss(this.user.username); //当前也就是自身进行隐藏
                }, error => {
                    let toast = Toast.create({
                        message: "登录失败！",
                        duration: 2000
                    });
                    this.nav.present(toast);
                });

            // alert(this.user.username);
            // console.log(this.user.password);
        }
    }

    //打开注册窗口
    openRegisterPage() {
        var modal = Modal.create(Register);
        this.nav.present(modal);
    }

    //用户上传头像图片
    uploadImage() {
        ImagePicker.getPictures().then((result) => {
            for (var i = 0; i < result.length; i++) {
                this.user.headface = result[i];
                //将图片上传到服务器，调用 API

            }
        })
    }
}

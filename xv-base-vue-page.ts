import { Component, Vue } from "vue-property-decorator";
import { AlertServiceProvider } from "@/providers/alert-service/alert-service";
import { AppServiceProvider } from "@/providers/app-service/app-service";
import { AppModule } from "@/store/modules/app";

@Component({
    components: {}
})
export default class {{XV_PAGE_NAME}} extends Vue {
    appService = new AppServiceProvider();
    alertService = new AlertServiceProvider();

    data = {
        title: "标题",
        displayed: false
    };

    /**
     * 改变显示或隐藏状态
     */
    changeDisplayed(){
        this.data.displayed = !this.data.displayed;
    }

    created() {
        AppModule.setTitle(this.data.title);
    }

    mounted() {
        console.log("page mounted");
        // this.getData();
    }

    alert() {
        this.alertService.alert("操作成功");
    }

    confirm() {
        this.alertService.confirm(
            "确认操作？",
            () => {
                this.alertService.message("你点了确认。");
            },
            () => {
                this.alertService.message("你点了取消。");
            }
        );
    }

    getData() {
        // this.appService.get("news/listNews", { id: 1 }, data => {
        //     this.data.title = data.message;
        // });
        // this.appService.post("news/listNews", { id: 2 }, data => {
        //     this.data.title = data.message;
        // });
    }
}

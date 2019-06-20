import { Component, Vue } from "vue-property-decorator";
import { AlertServiceProvider } from "@/providers/alert-service/alert-service";
import { AppServiceProvider } from "@/providers/app-service/app-service";

@Component({
    components: {}
})
export default class XvBaseVuePagePage extends Vue {
    appService = new AppServiceProvider();
    alertService = new AlertServiceProvider();

    data = {
        title: "xv 基础框架 （VUE + Element ui）"
    };

    created() {
        console.log("page created");
    }

    mounted() {
        console.log("page mounted");
        // this.getData();
    }

    push(url: any) {
        this.$router.push(url);
    }

    pop() {
        this.$router.go(-1);
    }

    alert() {
        this.alertService.alert("操作成功", "success");
    }

    confirm() {
        this.alertService.confirm(
            "确认操作？",
            () => {
                this.alertService.message("你点了确认。");
            },
            () => {
                this.alertService.message("你点了取消。");
            },
            "warning"
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

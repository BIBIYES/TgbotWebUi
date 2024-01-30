<template>
    <div id="app">
        <div id="topNavBox">
            <img
                src="https://www.emojiall.com/en/header-svg/%F0%9F%90%AD.svg"
                alt=""
                style="width: 50px; float: left; margin-left: 10px"
            />
            <div class="btn">
                <ul>
                    <li
                        :class="{ active: index == toolsIndex }"
                        v-for="(item, index) in tools"
                        @click="toolsClick(index)"
                        :key="item.id"
                    >
                        <a :href="item.link">
                          <img src="./assets/人.svg" alt="">
                        </a>
                    </li>
                </ul>
                <h2>TGBOT数据大盘</h2>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            toolsIndex: 1,
            tools: [
                { id: 0, title: "数据大盘" ,link:'#/home'},
                { id: 1, title: "查看所有id",link:'#/showkey'},
                { id: 2, title: "查看所有名字",link:'#/showname',path:'./assets/人.svg'},
                { id: 3, title: "名字來找消息",link:'#/searchMessges'},
                { id: 4, title: "消息溯源",link:'#/suyuan' },
            ],
            key: [],
            name: [],
            searchName: "",
            searchMessage: "",
            message_list: [],
            sendNameInfo: "",
        };
    },
    methods: {
        toolsClick(index) {
            console.log("工具欄被點擊", index);
            this.toolsIndex = index;
        },
        async sendName() {
            console.log(this.searchName);
            const message_data = await axios.get(
                `http://192.168.123.3/sendName?name=${this.searchName}`
            );
            // 2. 更新到 list 中，用于页面渲染 v-for
            this.message_list = message_data.data.mseege;
            console.log(this.message_list);
        },
        async sendMessage() {
            console.log("正在请求该消息的发送者");
            const name_data = await axios.get(
                `http://192.168.123.3/searchid?name=${this.searchMessage}`
            );
            this.sendNameInfo = name_data.data;
            console.log(this.sendNameInfo);
        },
    },
    // 生命周期获取数据
    async created() {
        // 1. 发送请求获取数据
        const key = await axios.get("http://192.168.123.3/getkey");
        // 2. 更新到 list 中，用于页面渲染 v-for
        this.key = key.data;
        const name = await axios.get("http://192.168.123.3/getname");
        // 2. 更新到 list 中，用于页面渲染 v-for
        this.name = name.data;
    },
};
</script>

<style>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body {
    background: rgba(41, 55, 58, 1);
}
#topNavBox {
    width: 100%;
    height: 96px;
    background: rgba(194, 195, 199, 1);
    border-radius: 0px 0px 12px 12px;
    padding-top: 20px;
}

.active {
    background: rgb(112, 112, 121);
}

#topNavBox h2 {
    line-height: 50px;
    width: 200px;
    margin: 0 auto;
}
li {
    float: left;
    list-style: none;
    width: 69px;
    height: 54px;
    outline: none;
    background: rgba(216, 217, 222, 1);
    margin-left: 15px;
    border-radius: 12px;
}
img{
  width: 80%;
  display: flex;
  
}
</style>
<template>
    <div id="contentArea" >
        <el-skeleton :rows="23" animated v-if="isLoading"/>
        <div class="leftBox">
            <ul>
                <li v-for="(item, index) in leftItems" :key="index">
                    {{ item }}
                </li>
            </ul>
        </div>
        <div class="right">
            <ul>
                <li v-for="(item, index) in rightItems" :key="index">
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            key: [],
            isLoading:true
        };
    },
    async created() {
        try {
            // 1. 发送请求获取数据，将端口号改为 3001
            const response = await axios.get(
                "http://127.0.0.1:3001/getkey"
            );
            // 2. 更新到 key 中，用于页面渲染 v-for
            this.key = response.data;
            console.log("成功从服务器获取到数据");
            this.isLoading = false
            
            
        } catch (error) {
            console.error("数据获取失败", error);
        }
    },

    computed: {
        leftItems() {
            return this.key.filter((item, index) => index % 2 === 0);
        },
        rightItems() {
            return this.key.filter((item, index) => index % 2 !== 0);
        },
    },
};
</script>

<style scoped>
#contentArea {
    width: 1030px;
    height: 898px;
    background: rgba(194, 195, 199, 1);
    margin: 0 auto;
    margin-top: 12px;
    border-radius: 12px 12px 0px 0px;
    padding: 19px 20px;
    overflow-y: auto;
    position: relative;
}
.leftBox {
    width: 482px;
    height: auto;
    background: rgba(216, 217, 222, 1);
    padding: 0;
    margin-left: 3px;
    float: left;
    border-radius: 12px;
}
.right {
    width: 482px;
    height: auto;
    background: rgba(216, 217, 222, 1);
    padding: 0;
    margin-left: 3px;
    float: right;
    border-radius: 12px;
}
.leftBox li,
.right li {
    width: 468px;
    height: 57px;
    background: rgba(255, 255, 255, 1);
    margin: 11px 7px 11px 7px;
    text-align: center;
    line-height: 60px;
}
</style>
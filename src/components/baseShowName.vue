<template>
    <div id="contentArea" v-loading='isLoading'>
        <div class="leftBox">
            <ul>
                <li v-for="(item, index) in leftItems" :key="index">{{ item }}</li>
            </ul>
        </div>
        <div class="right">
            <ul>
                <li v-for="(item, index) in rightItems" :key="index">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            name: [],
            isLoading : true
        };
    },
    async created() {
        const name = await axios.get("http://192.168.123.3:3001/getname");
        // 2. 更新到 list 中，用于页面渲染 v-for
        this.name = name.data;
        console.log("成功从服务器获取到数据");
        this.isLoading = false
    },
    computed: {
        leftItems() {
            return this.name.filter((item, index) => index % 2 === 0);
        },
        rightItems() {
            return this.name.filter((item, index) => index % 2 !== 0);
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
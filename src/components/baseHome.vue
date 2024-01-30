<template>
    <div id="app">
        <div
            :class="{ showMessageNum: true, loading: isLoading }"
            ref="showMessageNum"
        ></div>
        <div class="showUserNum">
            <h2>暂时不写echarts</h2>
        </div>
    </div>
</template>

<script>
import * as echarts from "echarts";
export default {
    data() {
        return {
            isLoading: true,
        };
    },
    mounted() {
        console.log("加载完毕");
        var myChart = echarts.init(this.$refs.showMessageNum);
        // 图标数据
        var option = {
            xAxis: {
                type: "category",
                data: [
                    "书生",
                    "云中狸",
                    "踹大象",
                    "Adler",
                    "晨",
                    "匿名枭",
                    "画家",
                ],
            },
            yAxis: {
                type: "value",
            },
            series: [
                {
                    data: [1545, 1459, 1259, 1023, 869, 753, 541],
                    type: "bar",
                },
            ],
        };

        myChart.setOption(option);
        setTimeout(() => {
            console.log("图标加载完成");
            this.isLoading = false;
        }, 2000);
    },
};
</script>

<style scoped>
#app {
    /* border: 1px solid white; */
    width: 1200px;
    height: 730px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.showMessageNum,
.showUserNum {
    width: 500px;
    height: 500px;
    /* border: 1px solid white; */
    background-color: white;
    border-radius: 25px;
    position: relative;
}
/* 加载动画 */
.loading::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #fff url("../assets/loading.gif") no-repeat center;
    border-radius: 25px;
}


</style>
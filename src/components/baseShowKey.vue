<template>
    <div id="contentArea">
        <div class="leftBox">
            <ul>
                <li v-for="(item, index) in key" :key="index"></li>
            </ul>
        </div>
        <div class="right">
            <ul>
                <li v-for="(item, index) in key" :key="index"></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
#contentArea {
    width: 1030px;
    height: 798px;
    background: rgba(194, 195, 199, 1);
    margin: 0 auto;
    margin-top: 12px;
    border-radius: 12px 12px 0px 0px;
    padding: 19px 20px;
    overflow-y: auto;
}
.leftBox {
    width: 482px;
    height: auto;
    background: rgba(216, 217, 222, 1);
    padding: 0;
    margin-left: 3px;
    float: left;
}
.right {
    width: 482px;
    height: auto;
    background: rgba(216, 217, 222, 1);
    padding: 0;
    margin-left: 3px;
    float: right;
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
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
                    <router-link to="/home">
                        <img src="@/assets/home.svg" title="图表" />
                    </router-link>
                    <router-link to="/showkey">
                        <img src="@/assets/id.svg" title="显示所有id" />
                    </router-link>
                    <router-link to="/showname">
                        <img src="@/assets/ren.svg" title="显示所有用户名" />
                    </router-link>
                    <router-link to="/searchmessega">
                        <img src="@/assets/searchMessega.svg" title="通过用户名来查找消息" />
                    </router-link>
                    <router-link to="/searchuser">
                        <img src="@/assets/searchUser.svg" title="通过消息来查找用户名" style="width:60%"/>
                    </router-link>
                    <router-link to="/about">
                        <img src="@/assets/about.svg" title="关于本webui" style="width:60%"/>
                    </router-link>
                </ul>
                <h2>TGBOT数据大盘</h2>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

export default {

};
</script>

<style>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
.loading::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #fff url("./assets/jiazai.gif") no-repeat center;
    border-radius: 25px;
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
a {
    float: left;
    list-style: none;
    width: 69px;
    height: 54px;
    outline: none;
    background: rgba(216, 217, 222, 1);
    margin-left: 15px;
    border-radius: 12px;
    text-align: center;
    line-height: 85px;
}
img {
    width: 60%;
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
.router-link-active {
    background-color: rgb(163, 163, 166);
}
</style>
<template>
  <div id="contentArea">
    <div id="searchBox">
      <div id="inputBox">
        <input
          type="text"
          v-model="value"
          placeholder="输入发送的消息来看看是是谁发送的"
        />
      </div>
      <div class="searchIco" @click="sendMessage">
        <img src="../assets/search.svg" alt="" />
      </div>
    </div>
    <div class="leftBox">
      <ul>
        <div class="view" v-show="sendNameInfo != false">
          <div class="id">发送消息的用户名是</div>
          <li>{{ sendNameInfo }}</li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      value: "",
      sendNameInfo: false,
    };
  },
  methods: {
    async sendMessage() {
      console.log("正在请求该消息的发送者");
      const name_data = await axios.get(
        `http://127.0.0.1:3001/searchid?name=${this.value}`
      );
      this.sendNameInfo = name_data.data;
      this.$notify({
        title: "成功",
        message: "已从服务端收到消息",
        type: "success",
      });
      console.log(this.sendNameInfo);
    },
  },
};
</script>

<style scoped>
#contentArea {
  width: 1030px;
  height: auto;
  background: rgba(194, 195, 199, 1);
  margin: 0 auto;
  margin-top: 12px;
  border-radius: 12px 12px 12px 12px;
  padding: 20px 20px;
}
.leftBox {
  width: 980px;
  max-height: 700px;
  background: rgba(216, 217, 222, 1);
  padding: 0;
  margin-left: 3px;
  float: left;
  border-radius: 15px;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1); /* 向上的阴影 */
}

li {
  width: 720px;
  height: 57px;
  background: rgba(255, 255, 255, 1);
  margin: 11px 7px 11px 7px;
  text-align: center;
  line-height: 60px;
  transition: background-color 0.3s ease; /* 添加过渡效果 */
}
.id {
  margin-left: 57px;
  float: left;
  width: 160px;
  height: 16px;
  text-align: center;
  line-height: 80px;
}
#searchBox {
  margin: 0 auto;
  width: 994px;
  height: 47px;
  margin-bottom: 10px;
  border-radius: 12px;
  background: rgba(216, 217, 222, 1);
  padding-top: 2px;
  padding-left: 2px;
  margin-top: 5px;
}

.searchIco {
  width: 45px;
  height: 45px;
  background: white;
  float: right;
  border-radius: 12px;
  text-align: center;
  line-height: 60px;
  transition: background-color 0.3s ease; /* 添加过渡效果 */
  margin-right: 2px;
  margin-bottom: 1px;
}
#inputBox {
  border-radius: 12px;
  width: 924px;
  height: 43px;
  background: rgba(255, 255, 255, 1);
  float: left;
}
input {
  width: 924px;
  height: 43px;
  background: none;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 10px;
  transition: background-color 0.3s ease;
}
li:hover {
  background: rgb(230, 230, 230);
  transition: background-color 0.3s ease; /* 添加过渡效果 */
}
input:hover {
  background: rgb(230, 230, 230);
  transition: background-color 0.3s ease; /* 添加过渡效果 */
  border-radius: 12px;
}
.searchIco:hover {
  background: rgb(230, 230, 230);
  transition: background-color 0.3s ease; /* 添加过渡效果 */
  border-radius: 12px;
}
.view {
  display: flex;
}
</style>
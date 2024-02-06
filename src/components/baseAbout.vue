<template>
    <div id="app">
        <div class="box2">
            <h1>正在施工中</h1>
                <div>
                    <p class="p1">history</p>
                    <div class="box2-1"><p>pppp</p></div>
                </div>
                <p class="p2">Team &nbsp;members</p>
                <div class="box2-2">
                    <p>11111</p>
                </div>
                <div class="temp">
                    <div class="box3">
                        <ul>
                            <li>
                                <img src="../assets/BIBIYES.jpg" alt="">
                                <p>BIBIYES&nbsp;前后端设计</p>
                            </li>
                            <li>
                                <img src="../assets/gfQ.jpg" alt="">
                                <p>鬼风Q&nbsp;&nbsp;前端设计</p>
                            </li>
                            <li>
                                <img src="../assets/rc.jpg" alt="">
                                <p>Ruanchen&nbsp;后端设计</p>
                            </li>
                            <li>
                                <img src="../assets/cat.jpg" alt="">
                                <p>西欧&nbsp;&nbsp;about页面</p>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  *{
            padding: 0px;
            margin: 0px;
            box-sizing: border-box;
        }
        body{
            width: 100%;
            height: 100%;;
            overflow: hidden;
        }
        li{
            list-style: none;
        }
        .box2{
            float: left;
            height: 690px;
            width: 80%;
            background-color:#fff;
            margin-top: 60px;
            margin-left: 10%;
            border-radius:10px 10px 0px 0px;
        }
        .box2-1{
            float:right;
            height: 331px;
            width: 65.99%;
            background-color:rgb(234, 234, 234);
            margin-top: 359px;
            margin-right: 2%;
            border-radius: 12px 12px 0px 0px;
        }
        .box2-1 p{
            word-wrap: break-word;
            margin-left: 15px;
            font-size: 16px;
            font-weight: 700;
            font-family: 楷体;
        }
        .box2-2{
            float: left;
            height: 121px;
            width: 32%;
            background-color:rgb(234, 234, 234);
            margin-top: 222px;
            border-radius: 12px 0px 0px 0px;
        }
        .box2-2 p{
            margin-top: 5px;
            word-wrap: break-word;
            font-size: 16px;
            font-weight: 700;
            font-family: 楷体;
        }
        .p1{
            float: left;
            margin-top: -15px;
            margin-left: 20px;
            font-size: 40px;
            font-weight: 900;
            font-family:Arial, Helvetica, sans-serif;
            color: #292525;
            transform: rotate(0deg) skew(0deg);
            text-shadow: -0.5px 0.5px 0  #575656,
                        -1px 1px 0  #575656,
                        -1.5px 1.5px 0  #575656,
                        -2px 2px 0  #575656,
                        -2.5px 2.5px 0  #575656,
                        -3px 3px 0  #575656,
                        -3.5px 3.5px 0  #575656,
                        -4px 4px 0  #575656,
                        -4.5px 4.5px 0  #575656,
                        -5px 5px 0  #575656,
                        -5.5px 5.5px 0  #575656;          
        }
        .p2{
            float: left;
            margin-top: 250px;
            margin-left: 15px;
            font-size: 40px;
            font-weight: 900;
            font-family:Arial, Helvetica, sans-serif;
            color: #292525;
            transform: rotate(0deg) skew(0deg);
            text-shadow: -0.5px 0.5px 0  #575656,
                        -1px 1px 0  #575656,
                        -1.5px 1.5px 0  #575656,
                        -2px 2px 0  #575656,
                        -2.5px 2.5px 0  #575656,
                        -3px 3px 0  #575656,
                        -3.5px 3.5px 0  #575656,
                        -4px 4px 0  #575656,
                        -4.5px 4.5px 0  #575656,
                        -5px 5px 0  #575656,
                        -5.5px 5.5px 0  #575656;          
        }
        .temp{
            float: left;
            width: 32%;
            height: 217px;
            background-color:#fff;
            margin-top: -330px;
            border-radius: 0px 12px 12px 0px;
        }
        .box3{
            float: left;
            width: 93%;
            height: 201px;
            background-color:rgb(234, 234, 234);
            margin-left: 3%;
            border-radius: 10px;
        }
        .box3 li{
            height: 43px;
            width: 88%;
            background-color: #fff;
            margin-top: 5px;
            margin-left: 10%;
            border-radius: 0px 5px 5px 0px;
        }
        .box3 li img{
            width: 43px;
            height: 43px;
            border-radius: 50%;
            margin-left: -30px;
        }
        .box3 li p{
            float: left;
            background-color: #fff;
            height: 43px;
            width: 92%;
            margin-top: -46px;
            margin-left: 25px;
            line-height: 43px;
        }
</style>
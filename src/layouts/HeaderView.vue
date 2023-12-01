<template>
    <div class="headerView">
        <div class="header">
            <div class="systemName">xxxxx仿真演示系统</div>
            <div class="tab">
                <div class="bg textStyle knowledge">知识库</div>
                <div class="bg textStyle">生成预案</div>
            </div>
            <div class="icon">
                <div class="bg textStyle knowledge">
                    <img src="../assets/image/time.png" alt="">
                    <p style="margin: 0 0 0 10px;line-height:34px">1X</p>
                </div>
                <div class="bgSmall textStyle knowledge">
                    <img src="../assets/image/play.png" alt="">
                </div>
                <div class="bgSmall textStyle knowledge">
                    <img src="../assets/image/record.png" alt="">
                </div>
                <div class="bgSmall textStyle">
                    <img src="../assets/image/downLoad.png" alt="">
                </div>
            </div>
            <div class="text">
                时间: 2023/11/6-纽约: 04:18:27- 当地:11:18:27 22小时7 分钟-剩余GPU: NVIDIA GeForce GTX 1080 - 单元数量:16
                -脉冲时间:0ms
                <img src="../assets/image/help.png" alt="">
            </div>
            <div class="combatSide">
                <div class="bg textStyle">信息管理</div>
                <div class="user bgSmall">
                    <img src="../assets/image/user.png" alt="">
                    <p>红方</p>
                </div>
            </div>
        </div>
        <RouterView></RouterView>
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.headerView {
    height: 100%;
    position: relative;

    .header {
        height: 58px;
        width: 100%;
        padding: 0 20px;
        position: absolute;
        top: 0;
        background-image: url("../assets/image/backgroundImg.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #ffffff;

        .systemName {
            font-size: 22px;
            font-weight: bold;
        }

        .tab {
            display: flex;
        }

        .knowledge {
            margin-right: 8px;
        }

        .icon {
            display: flex;

            >div {
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }

        .text {
            font-size: 16px;
            display: flex;

            img {
                width: 18px;
                height: 18px;
                cursor: pointer;
                margin-left: 10px;
            }
        }

        .combatSide {
            display: flex;
            align-items: center;

            .textStyle {
                margin-right: 8px;
            }

            .user {

                img {
                    height: 16px;
                    width: 16px;
                    margin: 3px 9px 0;
                }

                p {
                    text-align: center;
                    margin: 0;
                    font-size: 12px;
                    color: red;
                }
            }
        }

        .bgSmall,
        .bg {
            background-image: url("../assets/image/bgSmall.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            width: 34px;
            height: 34px;
            text-align: center;
            cursor: pointer;
        }

        .bg {
            background-image: url("../assets/image/bg.png") !important;
            width: 90px !important;
        }

        .textStyle {
            text-align: center;
            line-height: 34px;
        }
    }
}
</style>
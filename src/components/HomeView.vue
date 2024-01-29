<template>
    <el-container>
        <el-header class="el-header">
            <div>
                <!-- <img class="homelogo" src="../assets/homelogo.png" alt=""> -->
                <span>GroupRebate</span>
                <el-menu class="el-menu" :unique-opened="true" router mode="horizontal" :default-active="activePath">
                    <el-submenu :index="menu.id" v-for="menu in MenuList" :key="menu.id">
                        <template slot="title">
                            <span class="title_template">{{ menu.name }}</span>
                        </template>
                        <el-menu-item :index="child.path" v-for="child in menu.children" :key="child.id"
                            @click="saveActive(i.path)">
                            {{ child.name }}
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </div>
            <el-button type="primary" @click="backToLogin" class="btns" style="margin: 10px 0;">Exit</el-button>
        </el-header>
        <el-container>

            <!-- 主体区域 -->
            <el-main class="el-main">
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import router from '@/router';

export default {
    created() {
        this.activePath = window.sessionStorage.getItem('activePath')
    },
    data() {
        return {
            MenuList: [
                { name: 'Browser', id: '1', children: [{ name: 'Products', id: '1-1', path: '/products' }, { name: 'Coupon', id: '1-2', path: '/coupon' }] },
                { name: 'Shopping Cart', id: '2', children: [{ name: 'Directory', id: '2-1', path: 'directory' }] },
                { name: 'Dashboard', id: '3', children: [{ name: 'Dashboard', id: '3-1', path: 'dashboard' }] }
            ],
            toggleCollapse: false,
            IconObject: {
                // '1': 'iconfont icon-Browser',
                // '2': 'iconfont icon-Cart',
                // '3': 'iconfont icon-Dashboards'
                '1': '#icon-Browser',
                '2': '#icon-Cart',
                '3': '#icon-Dashboards'
            },
            activePath: ''
        };
    },
    methods: {
        backToLogin() {
            this.$router.push('/login');
        },
        toggleCollapseClick() {
            this.toggleCollapse = !this.toggleCollapse;
        },
        saveActive(activePath) {
            window.sessionStorage.setItem('activePath', activePath)

            this.activePath = activePath
        }
    },
    components: { router }
}
</script>
<style lang="less" scoped>
.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}

.title_template {
    padding-left: 10px;
}

// .toggle-collapse {
//     color: #fff;
//     text-align: center;
//     font-size: 20px;
//     line-height: 20px;
//     cursor: pointer;
//     letter-spacing: 0.3rem;

// }

.el-menu {
    color: #141313;
}

.homelogo {
    height: 100%;
}


.el-container {
    height: 100%;
    padding: 0;
}


.el-header {
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    color: #000;
    font-size: 20px;
    padding-left: 0;

    >div {
        display: flex;
        /**/
        align-items: center;
        /*上下居中*/
    }
}

.el-aside {
    background-color: #333744;
}

.el-main {
    background-color: #eaedf1;
}
</style>
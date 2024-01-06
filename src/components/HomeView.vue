<template>
    <el-container>
        <el-header class="el-header">
            <div>
                <img class="homelogo" src="../assets/homelogo.png" alt="">
                <span>groupRebate用戶中心</span>
            </div>
            <el-button type="primary" @click="backToLogin" class="btns">退出</el-button>
        </el-header>
        <el-container>
            <el-aside class="el-aside" :width="toggleCollapse ? '50px' : '200px'">
                <div class="toggle-collapse" @click="toggleCollapseClick">|||</div>
                <el-menu class="el-menu" :unique-opened="true" :collapse="toggleCollapse">
                    <el-submenu :index="m.id" v-for="m in MenuList" :key="m.id">
                        <template slot="title">
                            <i :class="IconObject[m.id]"></i>
                            <span>{{ m.name }}</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item :index="i.id" v-for="i in m.children" :key="i.id">
                                <i class="el-icon-menu"></i>{{ i.name }}
                            </el-menu-item>
                            <!-- <el-menu-item index="1-2">Coupon</el-menu-item> -->
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>

            </el-aside>
            <el-main class="el-main">Main</el-main>
        </el-container>
    </el-container>
</template>
<script>
export default {
    data() {
        return {
            MenuList: [
                { name: 'Browser', id: '1', children: [{ name: 'Products', id: '1-1' }, { name: 'Coupon', id: '1-2' }] },
                { name: 'Shopping Cart', id: '2', children: [] },
                { name: 'Dashboard', id: '3', children: [{ name: 'interface', id: '3-1' }] }
            ],
            toggleCollapse: false,
            IconObject: {
                '1': 'iconfont icon-Browser',
                '2': 'iconfont icon-Cart',
                '3': 'iconfont icon-DASHBOARD'


            }

        }
    },

    methods: {
        backToLogin() {
            this.$router.push('/login')
        },
        toggleCollapseClick() {
            this.toggleCollapse = !this.toggleCollapse
        }
    }
}
</script>
<style class="less" scoped>
.toggle-collapse {
    color: #fff;
    text-align: center;
    font-size: 20px;
    line-height: 20px;
    cursor: pointer;
    letter-spacing: 0.5em;

}

.el-menu {
    /* background-color: #333744; */
    color: #fff;
}

.homelogo {
    height: 100%;
}


.el-container {
    height: 100%;
    padding: 0;
}

/* .btns {
  display: flex;
  justify-content: end;
} */
.el-header {
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    color: #fff;
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
<template>
    <!-- <div>{{ title }}</div> -->
    <el-card class="box-card">
        <!-- 優惠券表格 -->
        <el-table :data="CouponList" style="width: 100%" border>
            <el-table-column type="index" label="Number" width="180"></el-table-column>
            <el-table-column prop="name" label="Name" width="180"></el-table-column>
            <el-table-column prop="discount" label="Discount" width="180"></el-table-column>
            <el-table-column prop="expire" label="Expire Date" width="180"></el-table-column>
        </el-table>
    </el-card>
</template>

<script>
export default {
    data() {
        return {
            // title: '優惠券',
            CouponList: [
                { name: 'Iphone', discount: 0.8, expire: '2023-01-01' },
                { name: 'Iphone', discount: 0.8, expire: '2023-01-01' },
                { name: 'Iphone', discount: 0.8, expire: '2023-01-01' },
                { name: 'Iphone', discount: 0.8, expire: '2023-01-01' }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.box-card {
    box-shadow: 2px 2px 2px skyblue !important;

}
</style>

<template>
    <!-- <div>{{ title }}</div> -->
    <el-row>
        <el-col span="13">
            <el-card class="box-card">
                <!-- 優惠券表格 -->
                <el-table :data="CouponList" style="width: 100%" border>
                    <el-table-column type="index" label="Number" width="180"></el-table-column>
                    <el-table-column prop="name" label="Name" width="180"></el-table-column>
                    <el-table-column prop="goodsimg" label="Detail" width="80">
                        <template slot-scope="scope">
                            <img :src="scope.row.goodsimg" width="70" height="70" />
                            <!-- <img src="../../assets/pics/tshirt.png" min-width="70" height="70" /> -->
                        </template>
                    </el-table-column>
                    <el-table-column prop="discount" label="Discount" width="180"></el-table-column>
                    <el-table-column prop="expire" label="Expire Date" width="180"></el-table-column>
                </el-table>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
export default {
    data() {
        return {
            // title: '優惠券',
            CouponList: [
                { name: 'iPhone 11', goodsimg: "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/r/k/o/-original-imaghx9qtwbnhwvy.jpeg?q=90", discount: 0.9, expire: '2023-01-01' },
                { name: 'Xiaomi TV', goodsimg: "https://www.courts.com.sg/media/catalog/product/i/p/ip162055_00.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=770&width=770&canvas=770:770", discount: 0.85, expire: '2023-01-01' },
                { name: 'Huawei Mate 60', goodsimg: "https://tse3-mm.cn.bing.net/th/id/OIP-C.OXZWz3ryodxCnXB69k-CKQAAAA?w=150&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7", discount: 0.95, expire: '2023-01-01' },
                { name: 'iPhone X', goodsimg: "https://tse2-mm.cn.bing.net/th/id/OIP-C.RkRKoRGlz6pTryJHlm_WVwAAAA?w=243&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7", discount: 0.8, expire: '2023-01-01' }
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

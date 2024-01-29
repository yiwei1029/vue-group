<template>
    <div>
        <!-- <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/home' }">Home</el-breadcrumb-item>
            <el-breadcrumb-item>Browser</el-breadcrumb-item>
            <el-breadcrumb-item>Products</el-breadcrumb-item>
        </el-breadcrumb> -->

        <!-- 內容區域 卡片  -->
        <el-row><el-col span="10">
                <el-card>
                    <el-row :gutter="20">
                        <el-col :span="10">
                            <!-- 搜索 -->
                            <el-input v-model="queryInfo.query" placeholder="Input Here" class="input-with-select">
                                <el-button slot="append" icon="el-icon-search"></el-button>
                            </el-input>
                        </el-col>

                    </el-row>

                    <!-- table區域 -->
                    <el-row>
                        <el-col :span="23">
                            <el-table :data="prodList" style="width: 100%" border>
                                <el-table-column type="index" label="Number" width="80">
                                </el-table-column>
                                <el-table-column prop="name" label="Name" width="80">
                                </el-table-column>
                                <el-table-column prop="goodsimg" label="Detail" width="80">
                                    <template slot-scope="scope">
                                        <img :src="scope.row.goodsimg" width="70" height="70" />
                                        <!-- <img src="../../assets/pics/tshirt.png" min-width="70" height="70" /> -->
                                    </template>
                                </el-table-column>
                                <el-table-column prop="price" label="Price" width="80">
                                </el-table-column>
                                <el-table-column prop="store" label="Store" width="80">
                                </el-table-column>
                                <el-table-column prop="" width="130" label="Operation">
                                    <el-button type="primary" plain>Add to Cart</el-button>
                                </el-table-column>
                            </el-table>
                        </el-col>
                    </el-row>
                </el-card>

            </el-col></el-row>

    </div>
</template>

<script>
export default {
    data() {
        return {
            queryInfo: {
                query: '',
                pagenum: 1,
                pagesize: 2
            },
            prodList: [{ name: 'iPhone', goodsimg: "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/r/k/o/-original-imaghx9qtwbnhwvy.jpeg?q=90", price: 10000, store: 'Apple' },
            { name: 'Xiaomi TV', goodsimg: "https://www.courts.com.sg/media/catalog/product/i/p/ip162055_00.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=770&width=770&canvas=770:770", price: 2999, store: 'Xiaomi' },
            { name: 'T-shirt', goodsimg: "https://mobile.yoox.com/images/items/10/10087450OM_14_f.jpg?impolicy=crop&width=387&height=490", price: 299, store: 'Adidas' }],
            total: 0
        }
    },
    methods: {
        async getProdList() {
            const { data: res } = await this.$http.get('products', { params: this.queryInfo })

        }
    },
    created() {
        // this.getProdList()
    }


}
</script>

<style class="less" scoped>
.box-card {
    margin-top: 10px;
}

.el-table {
    margin-top: 10px
}
</style>
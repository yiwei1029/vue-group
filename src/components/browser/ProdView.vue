<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/home' }">Home</el-breadcrumb-item>
            <el-breadcrumb-item>Browser</el-breadcrumb-item>
            <el-breadcrumb-item>Products</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 內容區域 卡片  -->
        <el-card class="box-card">

            <el-row :gutter="20">
                <el-col :span="6">
                    <!-- 搜索 -->
                    <el-input v-model="queryInfo.query" placeholder="input here" class="input-with-select">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input></el-col>

            </el-row>

            <!-- table區域 -->
            <el-table :data="prodList" style="width: 100%" border>
                <el-table-column type="index" label="number" width="180">
                </el-table-column>
                <el-table-column prop="name" label="name" width="180">
                </el-table-column>
                <el-table-column prop="price" label="price" width="180">
                </el-table-column>
                <el-table-column prop="store" label="store" width="180">
                </el-table-column>
                <el-table-column width="180" label="operation">
                    <el-button type="primary" plain>add to cart</el-button>
                </el-table-column>
            </el-table>
        </el-card>
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
            prodList: [{ name: 'Iphone', price: 10000, store: 'Apple' },
            { name: 'Xiaomi TV', price: 2999, store: 'Xiaomi' },
            { name: 'T-shirt', price: 299, store: 'Adidas' }],
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
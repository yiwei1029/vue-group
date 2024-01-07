<template>
    <el-card class="box-card">

        <el-row :gutter="20">
            <el-col :span="6">
                <!-- 搜索 -->
                <el-input v-model="queryInfo.query" placeholder="input here" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input></el-col>

        </el-row>

        <!-- table區域 -->
        <el-table :data="CartList" style="width: 100%" border>
            <el-table-column type="index" label="number" width="80">
            </el-table-column>
            <el-table-column prop="name" label="name" width="180">
            </el-table-column>
            <el-table-column prop="price" label="price" width="180">
            </el-table-column>
            <el-table-column prop="store" label="store" width="180">
            </el-table-column>
            <!-- <el-table-column prop="amount" label="amount" width="180"></el-table-column> -->
            <el-table-column width="180" label="add/delete">
                <el-input-number @change="handleChange" :min="0">
                </el-input-number>
            </el-table-column>
        </el-table>
    </el-card>
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
            CartList: [{ name: 'Iphone', price: 10000, store: 'Apple', amount: 0 },
            { name: 'Xiaomi TV', price: 2999, store: 'Xiaomi', amount: 0 },
            { name: 'T-shirt', price: 299, store: 'Adidas', amount: 0 }],
            total: 0,
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

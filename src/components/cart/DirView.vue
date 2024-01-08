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
            <!-- 更改數量 -->
            <el-table-column label="amount">
                <template slot-scope="scope">
                    <div>
                        <el-input-number :min="1" @change="handleChange" size="mini" v-model="scope.row.amount"
                            placeholder="0" :value="0">
                        </el-input-number>
                    </div>
                </template>
            </el-table-column>
            <!-- 刪除操作 -->
            <el-table-column label="operation">
                <template slot-scope="scope">
                    <el-button @click.native.prevent="deleteRow(scope.$index, scope.row)" type="danger" size="mini">
                        delete
                    </el-button>
                </template>
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
            CartList: [{ name: 'Iphone', price: 10000, store: 'Apple', amount: 3 },
            { name: 'Xiaomi TV', price: 2999, store: 'Xiaomi', amount: 1 },
            { name: 'T-shirt', price: 299, store: 'Adidas', amount: 1 }],
            amount: 0,

        }
    },
    methods: {
        async getProdList() {
            const { data: res } = await this.$http.get('products', { params: this.queryInfo })

        },
        deleteRow(index, rows) {
            this.CartList.splice(index, 1)
            // rows.splice(index, 1);
        },
        handleChange() {
            this.CartList.forEach(item => {
                console.log(item.amount)
            });
        }
    },
    created() {
        // this.getProdList()
    }


}
</script>

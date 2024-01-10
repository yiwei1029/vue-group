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
            <el-table-column type="index" label="Number" width="80">
            </el-table-column>
            <el-table-column prop="name" label="Name" width="180">
            </el-table-column>
            <el-table-column prop="goodsimg" label="Detail" width="180">
                <template slot-scope="scope">
                    <img :src="scope.row.goodsimg" width="70" height="70" />
                    <!-- <img src="../../assets/pics/tshirt.png" min-width="70" height="70" /> -->
                </template>
            </el-table-column>
            <el-table-column prop="price" label="Price" width="180">
            </el-table-column>
            <el-table-column prop="store" label="Store" width="180">
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
        <el-row :gutter="20" class="cart_total">
            <el-col :span="6"> Total amount: {{ total_num }}</el-col>
            <el-col :span="6"> Sum: {{ total_price }}</el-col>
        </el-row>
        <!-- 三種算法選擇 -->
        <el-row :gutter="20" class="algo_option" type="flex">
            <el-col :span="6"><el-card><el-button type="primary">Warehouse</el-button></el-card> </el-col>
            <el-col :span="6"><el-card><el-button type="success">Greedy</el-button></el-card></el-col>
            <el-col :span="6"><el-card><el-button type="info">Random</el-button></el-card></el-col>
        </el-row>
        <el-row class="rebate-chart">
            <el-card>
                <div id="chart1" style="width:600px;height:400px"></div>
            </el-card>
        </el-row>
    </el-card>
</template>

<script>
import * as echarts from 'echarts'

export default {
    data() {
        return {
            queryInfo: {
                query: '',
                pagenum: 1,
                pagesize: 2
            },
            CartList: [{
                name: 'Iphone', price: 10000, store: 'Apple', amount: 3, goodsimg: "data:image/jpeg;base64,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"
            },
            { name: 'Xiaomi TV', price: 2999, store: 'Xiaomi', amount: 1, goodsimg: "data:image/jpeg;base64,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" },
            { name: 'T-shirt', price: 299, store: 'Adidas', amount: 1, goodsimg: "https://mobile.yoox.com/images/items/10/10087450OM_14_f.jpg?impolicy=crop&width=387&height=490" }],
            Rebate: [{ algo_name: 'WareHouse-First', rebate: 50 },
            { algo_name: 'Baseline-Greedy', rebate: 20 },
            { algo_name: 'Baseline-Random', rebate: 10 }]
        }
    },
    methods: {
        async getCartList() {
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
        },

    },
    created() {
        // this.getProdList()
    },
    mounted() {
        var myChart = echarts.init(document.getElementById('chart1'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'Rebate'
            },
            tooltip: {},
            legend: {
                // data: ['Rebate']
            },
            xAxis: {
                data: this.Rebate.map(item => item.algo_name)
            },
            yAxis: {},
            series: [
                {
                    // name: 'Rebate',
                    type: 'bar',
                    data: this.Rebate.map(item => item.rebate)
                }
            ],

        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    },
    computed: {
        total_num: function () {
            let num = 0;
            this.CartList.forEach((item) => {
                num += item.amount
            });
            return num
        },
        total_price: function () {
            let sum_price = 0;
            this.CartList.forEach((item) => {
                sum_price += item.amount * item.price
            });
            return sum_price
        }
    },
}


</script>

<style lang="less" scoped>
.cart_total {
    margin-top: 10px;

    // .submit {
    //     position: absolute;
    //     right: 0px;
    // }
}

.algo_option {
    margin-top: 10px;

    .el-button {
        width: 100%;
    }
}

.rebate-chart {
    margin-top: 20px;
}
</style>    
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
            CartList: [{ name: 'Iphone', price: 10000, store: 'Apple', amount: 3 },
            { name: 'Xiaomi TV', price: 2999, store: 'Xiaomi', amount: 1 },
            { name: 'T-shirt', price: 299, store: 'Adidas', amount: 1 }],
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
                    color: [
                        '#37A2DA',
                        '#32C5E9',
                        '#67E0E3'],
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
<template>
    <el-container>
        <el-header>
            <!-- 頂部統計區域 -->
            <el-card>
                <el-row :gutter="20">
                    <el-col :span="6" v-for="item in Stats">
                        <div>
                            <el-statistic :title="item.title" group-separator=",">
                                <template slot="formatter">
                                    {{ item.value }}
                                </template>
                            </el-statistic>
                        </div>
                    </el-col>
                </el-row>
            </el-card></el-header>
        <el-container>
            <el-aside width="600px">
                <el-row>
                    <el-card style="margin-top:10px">
                        <!-- 每個算產生的回贈隨時間變化 -->
                        <div id="chart1" style="width:600px;height:350px"></div>
                    </el-card>
                </el-row>
                <!-- 下面两个图 -->
                <el-row :gutter="10" style="margin-top:10px">
                    <el-col :span="12">
                        <el-card>
                            <!-- 商品种类百分比 -->
                            <div id="chart2" style="width:300px ;height:200px"></div>
                        </el-card>
                    </el-col>
                    <el-col :span="12">
                        <el-card>
                            <!-- 成功失败百分比 -->
                            <div id="chart3" style="width:300px;height:200px"></div>
                        </el-card>
                    </el-col>
                </el-row>
            </el-aside>
            <!-- Group Plans区域 -->
            <el-main>
                <el-card>
                    <el-row>
                        <div class="plans-title">Last Group Plans</div>
                    </el-row>
                    <el-row>
                        <el-table :data="GroupPlans" style="width: 100%" :cell-style="{ textAlign: 'center' }"
                            :header-cell-style="{ textAlign: 'center' }">
                            <el-table-column prop="time" label="time" width="180">
                            </el-table-column>
                            <el-table-column prop="rebate" label="rebate" width="180">
                            </el-table-column>
                        </el-table>
                    </el-row>

                </el-card>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import * as echarts from 'echarts'
export default {
    data() {
        return {
            Stats: [
                { title: 'Today Active User', value: 1572 },
                { title: 'Today Rebate Sum', value: 37362 },
                { title: 'Today Requests', value: 4179 },
                { title: 'Today Group Plans', value: 732 }
            ],
            RebateByTime: {
                'W': [{ time: '09:07', rebate: 50 }, { time: '09:14', rebate: 52 }],
                'G': [{ time: '09:07', rebate: 100 }, { time: '09:14', rebate: 102 }],
                'R': [{ time: '09:07', rebate: 401 }, { time: '09:14', rebate: 403 }]
            },
            GoodTypePct: [
                { name: 'Food', value: 20 },
                { name: 'Beauty', value: 30 },
                { name: 'Clothes', value: 10 },
                { name: 'Books', value: 40 }
            ],
            SuccessPct: [
                { name: 'Suc', value: 80 },
                { name: 'Fail', value: 20 }
            ],
            GroupPlans: [
                { time: '09:31:00', rebate: 30 },
                { time: '09:31:00', rebate: 50 },
                { time: '09:31:00', rebate: 43 },
                { time: '09:31:00', rebate: 55 },
                { time: '09:41:00', rebate: 55 },
                { time: '09:41:00', rebate: 55 },
                { time: '09:51:00', rebate: 55 },
                { time: '10:01:00', rebate: 55 },
            ]

        }
    },
    mounted() {
        var Chart1 = echarts.init(document.getElementById('chart1'));

        // 指定图表的配置项和数据
        var option1 = {
            title: {
                text: 'Rebate'
            },
            tooltip: {},
            legend: {
                // data: ['Rebate']
            },
            xAxis: {
                data: this.RebateByTime['W'].map(i => i.time)
            },
            yAxis: {},
            series: [
                {
                    type: 'line',

                    data: this.RebateByTime['W'].map(i => i.rebate)

                }, {
                    type: 'line',
                    data: this.RebateByTime['G'].map(i => i.rebate)

                },
                {
                    type: 'line',
                    data: this.RebateByTime['R'].map(i => i.rebate)
                },
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        Chart1.setOption(option1);

        var Chart2 = echarts.init(document.getElementById('chart2'));

        var option2 = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            //图例
            legend: {
                //图例垂直排列
                orient: 'vertical',
                x: 'left',
                //data中的名字要与series-data中的列名对应，方可点击操控
                data: this.GoodTypePct.map(item => item.name)
            },
            series: [
                {
                    name: 'Source',
                    type: 'pie',
                    avoidLabelOverlap: false,
                    //标签
                    label: {
                        normal: {
                            show: true,
                            position: 'inside',
                            formatter: '{d}%',//模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。{d}数据会根据value值计算百分比
                        },
                    },
                    data: [
                        ...this.GoodTypePct
                    ]
                }
            ]
        }
        Chart2.setOption(option2)
        var Chart3 = echarts.init(document.getElementById('chart3'));

        var option3 = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            //图例
            legend: {
                //图例垂直排列
                orient: 'vertical',
                x: 'left',
                //data中的名字要与series-data中的列名对应，方可点击操控
                // data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                data: this.SuccessPct.map(item => item.name)
            },
            series: [
                {
                    name: 'Source',
                    type: 'pie',
                    avoidLabelOverlap: false,
                    //标签
                    label: {
                        normal: {
                            show: true,
                            position: 'inside',
                            formatter: '{d}%',//模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。{d}数据会根据value值计算百分比
                        },
                    },
                    data: [
                        ...this.SuccessPct
                    ]
                }
            ]

        }
        Chart3.setOption(option3);

    }
}
</script>

<style lang="less" scoped>
.el-header {
    height: 100px !important;
    padding: 0;
}

.el-main {
    padding: 10px 0px 0px 5px;
}

.plans-title {
    text-align: center;
}
</style>
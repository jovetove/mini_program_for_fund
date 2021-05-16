<template>
	<view class="card" >
		<view @click="test" style="width: 100%; height:500rpx"><l-f2  ref="chart" :source="baseData" :isAutoPlay="isAutoPlay"></l-f2></view>
	</view>
</template>

<script>
	// 非 nvue 页面需要引进
	import F2 from '@/uni_modules/lime-f2/components/lime-f2/f2.min.js';
	import lF2 from '@/uni_modules/lime-f2/components/lime-f2/'
	export default {
		components: {lF2},
		name:"FundReturnRateChart",
		props:['id'],
		
		data() {
			return {
				baseData: [{ genre: '成犬粮', sold: 275 }, { genre: '化毛膏', sold: 115 }, { genre: '益生菌', sold: 120 }, { genre: '氨糖', sold: 350 }, { genre: '其它', sold: 150 }],
				baseData2: [{ genre: '化毛膏', sold: 115 }, { genre: '益生菌', sold: 120 }, { genre: '氨糖', sold: 350 }, { genre: '其它', sold: 150 }],
				isAutoPlay:true,
			}
		},
		mounted() {
			this.$refs.chart.init(config => {
			  let chart = new F2.Chart(config);
			  chart.source(this.baseData);
			  chart
				  .interval()
				  .position('genre*sold')
				  .color('genre');
			  chart.render();
			  // 需要把 chart 返回
			  this.Chart = chart;
			  return chart;
			});
		},
		methods:{
			test(){
				console.log(121);
				this.$refs.chart.reset(chart => {
				        const baseData = [{ genre: '成犬粮', sold: 375 }, { genre: '化毛膏', sold: 15 }, { genre: '益生菌', sold: 20 }, { genre: '氨糖', sold: 240 }, { genre: '其它', sold: 150 }];
				        chart.clear(); // 清理所有
				        chart.source(baseData); // 加载新数据
				        chart.interval().position('genre*sold').color('sold'); // 重新定义图形语法
				        chart.render();
				        return chart;
				    })
			}
		}
	}
</script>

<style>

</style>

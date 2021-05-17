<template>
	<view class="card" >
		<view  class="chart-css">
			<l-f2  ref="chart" ></l-f2>
		</view>
		<view class="swich-tab uni-padding-wrap uni-common-mt">
			<uni-segmented-control :current="current" :values="items" 
				:style-type="styleType" 
				:active-color="activeColor"
				@clickItem="onClickItem" />
		</view>
	</view>
</template>

<script>
	// 非 nvue 页面需要引进
	import F2 from '@/uni_modules/lime-f2/components/lime-f2/f2.min.js';
	import lF2 from '@/uni_modules/lime-f2/components/lime-f2/'
	export default {
		components: {lF2},
		name:"FundReturnRateChart",
		
		data() {
			return {
				baseData: [],
				interval:1,
				intervalMap:{0:1, 1:3, 2:6, 3:12, 4:1000},
				
				items: ['一月', '三月', '半年',"一年","最大"],
				current:0,
				styleType: 'button',
				activeColor: '#007aff'
			}
		},
		
		async mounted() {
			const data = await this.getData(1)
			this.$refs.chart.init(config => {
			  let chart = new F2.Chart(config);
			  chart.source(data);
			  
			  chart.scale('date', {
			  				type: 'timeCat',
			  				tickCount: 3
			  			});
			  chart.scale('value', {
			  				tickCount: 5
						});
			  chart.axis('date', {
			  			label: function label(text, index, total) {
			  				// 只显示每一年的第一天
			  				const textCfg = {};
			  				if (index === 0) {
			  				textCfg.textAlign = 'left';
			  				} else if (index === total - 1) {
			  				textCfg.textAlign = 'right';
			  				}
			  				return textCfg;
			  			}
			  			});
			  chart.tooltip({
			  				custom: true, // 自定义 tooltip 内容框
			  				onChange: function onChange(obj) {
			  					const legend = chart.get('legendController').legends.top[0];
			  					const tooltipItems = obj.items;
			  					const legendItems = legend.items;
			  					const map = {};
			  					legendItems.forEach(function(item) {
			  						map[item.name] = item
			  					});
			  					tooltipItems.forEach(function(item) {
			  						const name = item.name;
			  						const value = item.value;
			  						if (map[name]) {
			  							map[name].value = value;
			  						}
			  					});
			  					legend.setItems(Object.values(map));
			  				},
			  				onHide: function onHide() {
			  					const legend = chart.get('legendController').legends.top[0];
			  					legend.setItems(chart.getLegendItems().country);
			  				}
			  			});
			  chart.line().position('date*value').color('type');
			  			
			  
			  chart.render();
			  // 需要把 chart 返回
			  this.Chart = chart;
			  return chart;
			});
		},
		
		methods:{
			test(){
				
			},
			getData(value) {
					return new Promise((resolve) => {
						uni.request({
							url: `http://127.0.0.1/v1/api/fund/historyData?fund_code=002190&interval=`+value,
							success: (res) => {
								resolve(res.data.data)
							}
						})
					})
			},
			
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex
					uni.request({
						url: `http://127.0.0.1/v1/api/fund/historyData?fund_code=002190&interval=`+this.intervalMap[this.current],
						success: (res) => {
							this.$refs.chart.changeData(res.data.data);
							console.log(res.data.data)
						}
					})
				}
			}

		}
	}
</script>

<style>
.swich-tab {
	margin-top: 30rpx;
}
.chart-css{
	width: 90%; 
	height:500rpx;
	margin: 0 auto;
}
</style>

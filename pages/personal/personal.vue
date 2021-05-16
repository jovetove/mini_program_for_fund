<template>
	<view class="root">
		个人中心和自选
		<view>
			
			<view>
				<uni-row class="demo-uni-row">
				    <uni-col :span="6">
				        <view class="demo-uni-col dark">12</view>
				    </uni-col>
				    <uni-col :span="6">
				        <view class="demo-uni-col light">23</view>
				    </uni-col>
					<uni-col :span="6">
					    <view class="demo-uni-col light">23</view>
					</uni-col>
					<uni-col :span="6">
					    <view class="demo-uni-col light">23</view>
					</uni-col>
				</uni-row>
			</view>
			<view class="card">
				<view style="width: 90%; height:450rpx">
					<l-f2 ref="base"></l-f2>
				</view>
			</view>
			<!-- <ThermodynamicChart>dd</ThermodynamicChart> -->
		</view>
	</view>
</template>

<script>
	// 参考 https://f2.antv.vision/zh/docs/api/f2
	import F2 from '@/uni_modules/lime-f2/components/lime-f2/f2.min.js';
	import lF2 from '@/uni_modules/lime-f2/components/lime-f2/'
	
	export default {
		components: {lF2},
		    data() {
		        return {
		            baseData: [
						{
						  year: '2014 年',
						  sales: 145
						}, 
						{
						  year: '2015 年',
						  sales: 121
						}, 
						{
						  year: '2016 年',
						  sales: 100
						}, 
						{
						  year: '2017 年',
						  sales: 97
						}, 
						{
						  year: '2018 年',
						  sales: 85
						}
						],
		        };
		    },
		    mounted() {
		        const base = this.$refs.base;
		        base.init(config => {
		            const chart = new F2.Chart(config);
		            chart.source(this.baseData,{
						sales: {tickCount: 5}
					});
		            chart
		                .interval()
		                .position('year*sales')
					    .color('l(90) 0:#1890ff 1:#70cdd0'); // 定义柱状图渐变色
		            chart.render();
		            // 需要把 chart 返回
		            return chart;
		        });
		    }
	}
</script>

<style>
	.demo-uni-row {
	    margin-bottom: 10px;
	    /* QQ、字节小程序文档写有 :host，但实测不生效 */
	    /* 百度小程序没有 :host，需要设置block */
	    /* #ifdef MP-TOUTIAO || MP-QQ || MP-BAIDU */
	    display: block;
	    /* #endif */
	}
	.card{
	  width: 96%;
	  margin-left: 2%;
	  background-color: #ffffff;
	  height: 390rpx;
	  border-radius: 12rpx;
	  /* shadow是阴影效果，四个值分别为水平阴影，垂直阴影，模糊距离，阴影的颜色 */
	  /* box-shadow: 5px 5px 5px #cbcbcb; */
	 }
</style>

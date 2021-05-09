<template>
	<view>
		<!-- 大盘指数 -->
		<view class="uni-flex uni-row up">
			<view v-for="item in marketData" class="flex-item" :class="{ down: item.rate < 0}">
				<view class="index-title">{{item.title}}</view>
				<view class="index-price">
					<view>{{item.price}}</view>
					<image v-if="item.rate > 0" class="index-img"  src="../../static/icon/up.png"></image>
					<image v-else class="index-img"  src="../../static/icon/down.png"></image>
				</view>
				<view class="index-change">{{item.change}}</view>
				<view class="index-rate">{{item.rate}}%</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"MarketIndex",
		data() {
			return {
				marketData: [
							{'title':"上证指数",'price':3415.87,'change':-22.41,'rate':-0.65},
							{'title':"深圳指数",'price':3415.87,'change':22.41,'rate':0.65},
							{'title':"创业板指",'price':3415.87,'change':-22.41,'rate':-0.65}
						]
			};
		}
	}
</script>

<style>
	.flex-item {
		width: 33.3%;
		height: 200rpx;
	}
	.up {
		color:#d81e06;
	}
	.down{
		color:#1afa29
	}

	.index-title{
		font-size: 120%;
		margin-top: 20rpx;
		margin-bottom: 15rpx;
		display: flex;
		justify-content: center; 
	}
	.index-price{
		font-size: 130%;
		display: flex;
		justify-content: center; 
	}
	.index-change{
		display: inline-flex;/*父div设置该属性*/
		justify-content: center; /* 水平居中 */
		width: 50%;
		margin-top: 20rpx;
	}
	.index-rate{
		display: inline-flex;
		justify-content: center; 
		width: 50%;
		margin-top: 20rpx;
	}
	.index-img{
		display: inline-block;
		height:auto;
		width: 40rpx;
	}
</style>

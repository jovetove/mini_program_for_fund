<template>
	<view class="body">
		<view class="fund-name">中银瑞利混合C (002414)</view>
		<view class="tag-group">
			<view class="tag tag-style-pink">
				债券型
			</view>
			<view class="tag tag-style-blue">
				中低风险
			</view>
			<view class="tag tag-style-cyan">
				五星
			</view>
			<view class="tag tag-style-blue">
				低夏普率
			</view>
		</view>
		<view class="info-card">
			<view class="netvalue-meaning">单位净值(2021-2-14)</view>
			
			<view class="uni-flex value-line">
				<view class="netvalue uni-flex-item">1.710</view>
				<view class="rate uni-flex-item">+0.34%</view>
				<view class="uni-flex-item"></view>
				<view class="uni-flex-item"></view>
			</view>

			<view class="uni-flex index-line">
				<view class="flex-item">最新规模</view>
				<view class="flex-item">最大回撤</view>
				<view class="flex-item">夏普比率</view>
				<view class="flex-item">波动率</view>
			</view>
			<view class="uni-flex index-line">
				<view class="uni-flex-item">7.89亿</view>
				<view class="uni-flex-item">5.64%</view>
				<view class="uni-flex-item">1.25</view>
				<view class="uni-flex-item">4.65%</view>
			</view>
		</view>
		<view class="sub-title">收益走势</view>
		<view>
			<FundReturnRateChart ></FundReturnRateChart>
		</view>
		<view class="sub-title">持仓标的</view>
		<LateralSlide></LateralSlide>
		<!-- 手风琴效果 -->
		<uni-collapse accordion="true">
		    <uni-collapse-item title="标题文字">
		        <view style="padding: 30rpx;">
		            手风琴效果
		        </view>
		    </uni-collapse-item>
		    <uni-collapse-item title="标题文字">
		        <view style="padding: 30rpx;">
		            手风琴效果
		        </view>
		    </uni-collapse-item>
		    <uni-collapse-item title="标题文字">
		        <view style="padding: 30rpx;">
		            手风琴效果
		        </view>
		    </uni-collapse-item>
		</uni-collapse>
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(options) {
			console.log(options)
		},
		
		methods: {
		}
	}
</script>

<style>
.body{
	padding: 0rpx;
	background-color: #FFFFFF;
	height: auto;
}
.fund-name{
	font-size: 140%;
	margin-left: 40rpx;
	margin-bottom: 30rpx;
	padding-top: 30rpx;
}
.info-card{
	margin: auto;
	width: 50%;
	min-width: 700rpx;
	background-color: #f2f6fa;
	display: flex;      /* 设置为弹性布局 */
	flex-direction:column;
	min-height: 300rpx;
	border-radius:10rpx;
}
.netvalue-meaning{
	margin-top: 20rpx;
	margin-left: 20rpx;
	min-height: 20rpx;
}
.netvalue{
	font-size: 180%;
	margin-left: 20rpx;

}
.value-line{
	margin-top: 30rpx;
	align-items:flex-end;
}
.index-line{
	margin-top: 30rpx;
	margin-left: 20rpx;
	justify-content:flex-start
}
.rate{
	flex-flow:nowrap;
	color: #DD1144;
}

.flex-item{
	margin-right: 61rpx;
	padding-bottom: 4rpx;
	border-bottom:1px dashed #000;
	justify-content: flex-start;
}
.tag-group{
	margin-left: 40rpx;
	margin-bottom: 20rpx;
}
.tag{
	padding-right: 10px;
	border: 1px solid;
	border-radius: 2px;
	box-sizing: border-box;
	display: inline-block;
	height: auto;
	/* line-height: 20rpx; */
	margin: 0 8px 0 0;
	opacity: 1;
	padding: 0 7px;
	transition: all .3s;
	white-space: nowrap;
	font-size: 12px;
}
/* \https://ant.design/components/tag/ */
.tag-style-pink{
	background-color: #fff0f6;
	border-color: #ffadd2;
	color: #c41d7f;
}
.tag-style-cyan{
	background: #e6fffb;
	border-color: #87e8de;
	color: #08979c;
}
.tag-style-blue{
	background: #e6f7ff;
	border-color: #91d5ff;
	color: #096dd9;
}
.sub-title{
	margin-top: 30rpx;
	margin-bottom: 30rpx;
	margin-left: 40rpx;
	font-size: 110%;
}
.content {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	justify-content: center;
	align-items: center;
	height: 150px;
	text-align: center;
}
.uni-padding-wrap{
	padding: 0 65rpx;
}
</style>

<template>
	<view class="body">
		<view class="list-row uni-flex table-container">
			<view class="flex-item tab-head collect"></view>
			<view class="flex-item tab-head">基金名称</view>
			<view class="flex-item tab-head">净值</view>
			<view class="flex-item tab-head">涨跌</view>
		</view>
		<view v-for="item in fundList">
			<view class="list-row uni-flex">
				<image v-show="hasCollect" class="collect flex-item" src="../../static/icon/collect0.png"/>
				<view class="fund flex-item">
					<view class="name">{{item.name}}</view>
					<view class="code">{{item.code}}</view>
				</view>
				<view class="value flex-item">{{item.value}}</view>
				<view class="increase flex-item">{{item.increase}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"FundList",
		data() {
			return {
				hasCollect:true,
				fundList:[
					{"name":"广发价值领先混合12121", "code":"008099", "value":1.7588, "increase":35.49},
					{"name":"广发价值领先混合12121", "code":"008099", "value":1.7588, "increase":35.49},
					{"name":"广发价", "code":"008099", "value":1.7588, "increase":35.49},
					{"name":"广发价值领先混合12121", "code":"008099", "value":1.7588, "increase":35.49},
					{"name":"广发价值领先混合12121", "code":"008099", "value":1.7588, "increase":35.49},
					{"name":"广发价", "code":"008099", "value":1.7588, "increase":35.49},
					{"name":"广发价值领先混合12121", "code":"008099", "value":1.7588, "increase":35.49},
					{"name":"广发价值领先混合12121", "code":"008099", "value":1.7588, "increase":35.49},
					{"name":"广发价", "code":"008099", "value":1.7588, "increase":35.49},
					{"name":"广发价值领先混合12121", "code":"008099", "value":1.7588, "increase":35.49},
					{"name":"广发价值领先混合12121", "code":"008099", "value":1.7588, "increase":35.49},
					{"name":"广发价", "code":"008099", "value":1.7588, "increase":35.49},
					{"name":"广发价值领先混合12121", "code":"008099", "value":1.7588, "increase":35.49},
					{"name":"广发价值领先混合12121", "code":"008099", "value":1.7588, "increase":35.49},
					{"name":"广发价", "code":"008099", "value":1.7588, "increase":35.49},
					{"name":"广发价值领先混合12121", "code":"008099", "value":1.7588, "increase":35.49},
					{"name":"广发价值领先混合12121", "code":"008099", "value":1.7588, "increase":35.49},
					{"name":"广发价", "code":"008099", "value":1.7588, "increase":35.49},
				]
			};
		}
	}
</script>

<style>
	.body{
		z-index: -999;
	}
.list-row{
	background-color: #e3e3e3;
	min-height: 100rpx;
	align-items:center;
	z-index: -999;
}
.flex-item {
	width: 33.3%;
}

/* 自选 */
.collect {
	height:60rpx;
	width: 60rpx;
	margin-right: 10rpx;
	/* background-color: #ff5500; */
}
.fund {
	/* background-color: #09BB07; */
	min-width: 1rpx;
}
.name {
	margin-top: 10rpx;
	overflow: hidden;
	text-overflow: ellipsis;
	/* 文本不换行，这样超出一行的部分被截取，显示... */
	white-space: nowrap; 
}
.code {
	margin-top: 5rpx;
}
.value {
	font-size:  130%;
	/* background-color: #ff5500; */
}
.increase {
	font-size:  130%;
}

.tab-head{
	font-size: 140%;
	justify-content:flex-start;
	/* background-color: #007AFF; */
}
/* 表头固定 */
.table-container{
  position: sticky;
  top: 0rpx;
  z-index: 3;
}
</style>

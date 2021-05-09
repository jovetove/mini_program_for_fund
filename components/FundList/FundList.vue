<template>
	<view>
		<view v-for="item in fundList">
			<view class="list-row uni-flex">
				<image v-show="item.hasCollect" class="collect flex-item" src="../../static/icon/collect0.png"/>
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
				fundList:[
					{"name":"广发价值领先混合12121", "code":"008099", "value":1.7588, "increase":35.49,"hasCollect":1},
					// {"name":"广发价值领先混合", "code":"008099", "value":2.7588, "increase":35.49},
					// {"name":"广发价值领先混合", "code":"008099", "value":2.7588, "increase":35.49},
					// {"name":"广发价值领先混合", "code":"008099", "value":2.7588, "increase":35.49},
					// {"name":"广发价值领先混合", "code":"008099", "value":2.7588, "increase":35.49}
				]
			};
		}
	}
</script>

<style>
.list-row{
	background-color: #e3e3e3;
	min-height: 100rpx;
	align-items:center;
}
.flex-item {
	width: 33.3%;
}
/* 自选 */
.collect {
	height:60rpx;
	width: 60rpx;
	margin-right: 10rpx;
}
.fund {
	
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
}
.increase {
	font-size:  130%;

}
</style>

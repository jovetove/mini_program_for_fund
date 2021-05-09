<template>
	<view>
		<!-- 卡片 -->
		<view class="card .bg-gradual-pink shadow-blur">
			<view class="flex  padding">
				<view class="flex-sub">
					<text class="text-lg">易方达中小盘混合</text>
				</view>
				<view class="flex-sub">
					<view class="cu-tag radius light bg-olive">
						<text class="black">金牛奖</text>
					</view>
				</view>
			</view>
			<image src='http://docfile.funkingka.cn/FqzmiFqvXbHg-cfbquNRlawHUgHt' 
					mode='scaleToFill' class='gif-wave'>
			</image>
		</view>  
	</view>
</template>

<script>
	export default {
		name:"CardForInfo",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.gif-wave {
		position: absolute;
		width: 100%;
		bottom: 0;
		left: 0;
		z-index: 99;
		mix-blend-mode: screen;
		height: 100rpx;
	}
	.card{
	  width: 90%;
	  margin-left: 5%;
	  height: 390rpx;
	  border-radius: 12rpx;
	  /* shadow是阴影效果，四个值分别为水平阴影，垂直阴影，模糊距离，阴影的颜色 */
	  box-shadow: 5px 5px 5px #cbcbcb;
	 }
</style>

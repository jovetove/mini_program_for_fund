<template>
	<view>
		<!-- 设置圆角 -->
		<uni-search-bar placeholder="请输入基金代码/简称/基金经理姓名" 
						:radius="100" 
						@input="funInput"
						@blur="funcUnBlur"
						@cancel="funCancel"
						@confirm="search"
						@clear="funClear">
		</uni-search-bar>
		<!-- 搜索历史记录 -->
		<uni-list v-show="show.isShowRecommond == true">
			<uni-list-item   v-for="item in searchHistory" :title="item.message"></uni-list-item>
		</uni-list>
		<view style="padding: 10rpx;"></view>
		<!-- else  -->
		<view v-show="show.isShowRecommond == false" >
				正常页面内容
		<view>
	</view>
</template>

<script>
	export default {
		name:"SearchTips",
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>

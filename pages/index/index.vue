<template>
	<view>
		<!-- 设置圆角 -->
		<uni-search-bar placeholder="请输入基金代码/简称/基金经理姓名"  
						:radius="100"   @focus="funcFocus" @input="funInput" @blur="funcUnBlur" 
						@cancel="funCancel" @confirm="search" @clear="funClear"/>
		<!-- 搜索历史记录 -->
		<uni-list v-show="show.isFocus == true">
			<uni-list-item   v-for="item in searchHistory" :title="item.message"></uni-list-item>
		</uni-list>
		<view style="padding: 10rpx;"></view>
		<!-- else  -->
		<view v-show="show.isShowRecommond == false" >
			<view>
				<MarketIndex></MarketIndex>
			</view>
			<view style="padding: 1rpx; background-color: #c8c8c8;"></view>
			<!-- 功能导航 -->
			<view class="navigator-swiper">
				<NavigatorGrid element-id="navigatorMenu" :list="menu" @press="onPress" height="180" size="90"/>
			</view>
			<view style="padding: 1rpx; background-color: #c8c8c8;"></view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				value: '',
				show:{
					//  是否搜索栏有焦点
					isFocus:false,
					// 是否搜索栏触发推荐功能
					isShowRecommond: false,
				},
				searchHistory: [
					{"message":12},
					{"message":123},
				],
				menu:[
						{title: "ETF估值",   icon: "/static/menu/ETF估值.png", isTab:false, page: '/pages/IndexValuation/IndexValuation'},
						{title: "相似度",    icon: "/static/menu/基金相似度.png", isTab:false, page: '/pages/SimilarityContrast/SimilarityContrast'},
						{title: "基金详情",  icon: "/static/menu/基金详情.png", isTab:false, page: '/pages/FundDetails/FundDetails'},
						{title: "基金分类",  icon: "/static/pic/pic.png", isTab:false, page: '/pages/search/search'},
						{title: "基金经理",  icon: '/static/pic/pic.png', isTab:false, page: '/pages/personal/personal'},
						{title: "基金公司",  icon: "/static/pic/pic.png", isTab:false, page: '/pages/personal/personal'},
						{title: "基金指标",  icon: "/static/pic/pic.png", isTab:false, page: '/pages/personal/personal'},
						{title: "风险评估",  icon: "/static/pic/pic.png", isTab:false, page: '/pages/personal/personal'},
						{title: "知识库",    icon: "/static/pic/pic.png", isTab:false, page: '/pages/personal/personal'},
						{title: "定投计算",  icon: "/static/pic/pic.png", isTab:false, page: '/pages/personal/personal'},
						{title: "投资组合",  icon: "/static/pic/pic.png", isTab:false, page: '/pages/personal/personal'},
					]
			}
		},
		
		onLoad() {
			
		},
		
		methods: {
			// 按回车键
			search: function (value) {
				console.log("搜索,开始进行网络请求",value);
			},
			
			funInput:function(value){
				if(value.length > 0){
					this.$set(this.show, "isShowRecommond", true)
					uni.request({
					    url: 'http://127.0.0.1:8000/api', //仅为示例，并非真实接口地址。
					    data: {},
						dataType:'json',
					    success: (res) =>{
							this.searchHistory=res.data
						}
					});
				}else{
					this.funCancel()
				}
				console.log("输入中" + value + " "  + this.show.isShowRecommond)
			},
			
			funClear:function(){
				this.funCancel();
			},
			
			funCancel:function(value){
				if(this.show.isShowRecommond){
					this.$set(this.show, "isShowRecommond", false)
				}
				this.searchHistory = [];
			},
			
			funcUnBlur:function(value){
				console.log("失去焦点",value.value);
			},
			
			funcFocus:function(e){
				console.log("取得焦点",);
			},
			
			// 对应没有openType和url时的点击事件
			// 跳转页面
			onPress:function(e){
				let pagePath = e.page;
				if(e.isTab){
					uni.switchTab({url:pagePath});
					console.log(pagePath);
				}else{
					uni.navigateTo({url: pagePath});
				}
				
			}
			
		}
	}
</script>

<style>
.swiper-item {
	display: block;
	height: 300rpx;
	line-height: 300rpx;
	text-align: center;
}
</style>

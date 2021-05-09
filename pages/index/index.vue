<template>
	<view>
		<!-- 设置圆角 -->
		<uni-search-bar placeholder="请输入基金代码/简称/基金经理姓名"  
						:radius="100" @input="funInput" @blur="funcUnBlur" 
						@cancel="funCancel" @confirm="search" @clear="funClear"/>

		<!-- 搜索历史记录 -->
		<uni-list v-show="show.isShowRecommond == true">
			<uni-list-item   v-for="item in searchHistory" :title="item.message"></uni-list-item>
		</uni-list>
		<view style="padding: 10rpx;"></view>
		<!-- else  -->
		<view v-show="show.isShowRecommond == false" >
			<view>
				<MarketIndex></MarketIndex>
			</view>
			<!-- 功能导航 -->
			<view class="navigator-swiper">
				<NavigatorGrid element-id="navigatorMenu" :list="menu" @press="onPress" height="180" size="90"/>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		
		data() {
			return {
				value: '',
				show:{
					isShowRecommond: false
				},
				searchHistory: [],
				menu:[
						{title: "ETF估值",  icon: "/static/pic/pic.png"},
						{title: "基金相似度对比",  icon: "/static/pic/pic.png"},
						{title: "带app内url",  icon: "/static/pic/pic.png"},
						{title: "pt=redirect", openType: 'redirectTo', url: '/pages/personal/personal'},
						{title: "带app内url",  icon: "/static/pic/pic.png"},
						{title: "带app内url",  icon: "/static/pic/pic.png"},
						{title: "带app内url",  icon: "/static/pic/pic.png"},
						{title: "带app内url",  icon: "/static/pic/pic.png"},
						{title: "带app内url",  icon: "/static/pic/pic.png"},
						{title: "带app内url",  icon: "/static/pic/pic.png"},
						{title: "带app内url",  icon: "/static/pic/pic.png"},
						{title: "带app内url",  icon: "/static/pic/pic.png"},
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
			// 对应没有openType和url时的点击事件
			onPress:function(e){
			        console.log(e);
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

<template>
	<view>
		<uni-section title="混合布局" subTitle="通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局"></uni-section>
		<view class="title-flex-row" >
			<view class="title-row-item" v-for="(item,index) in titleListCom" v-bind:style="{flex:colWidthCom[index]}" >
				{{item}}
			</view>
		</view>
		<view  v-for="rows in bodyListCom">
			<view class="body-flex_row">
				<view class="body-row-item" v-for="(item,index) in rows" v-bind:style="{flex:colWidthCom[index]}" >
					{{item}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			bodyList:{
				type:Array,
				default:[
					["东方通信", "23%", "12122","12112"],
					["信维诺", "24%", "12122","12112"],
					["东方通信", "23%", "12122","12112"],
					["信维诺", "24%", "12122","12112"],
					["东方通信", "23%", "12122","12112"],
					["信维诺", "24%", "12122","12112"],
				]
			},
			colWidth:{
				type:Array,
				default: [1.5,2,2,2]
			},
			titleList:{
				type:Array,
				default: ["股票名称","仓位占比","持仓市值(万元)","预计盈利(万元)"]
			}
		},
		name:"commonList",
		data() {
			return {
				widCol:this.colWidth,
				body:this.bodyList,
				title:this.titleList
			};
		},
		computed: {
		  bodyListCom:function(){
			  return this.bodyList
		  },
		  colWidthCom: function () {
			return this.colWidth
		  },
		  titleListCom:function(){
			  return this.titleList
		  }
		}
	}
</script>

<style>
	.title-row-item{
		height: 60rpx;
		margin: 2rpx; 
		/* flex: 1 auto; */
		width: 0;
	}
	
	.title-flex-row {
	  display: flex;
	  width: 100%;
	  flex-direction: row;
	  /* height: 100rpx; */
	  background-color: #e3e3e3;
	  align-items: center;
	}
	
	.body-row-item{
		height: 80rpx;
		margin: 2rpx; 
		/* flex: 1 auto; */
		width: 0;
		margin-left: 10rpx;
	}
	.body-flex_row{
		display: flex;
		width: 100%;
		flex-direction: row;
		height: 100rpx;
		align-items: center;
	}
</style>

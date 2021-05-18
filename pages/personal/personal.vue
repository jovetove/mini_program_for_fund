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
			<view @click="clickT">
				<commonList  :colWidth="colArr" :bodyList="bodyArr" :titleList="titleArr"></commonList>
			</view>
			
		</view>
	</view>
</template>

<script>

	
	export default {

		    data() {
		        return {
		           colArr:[1.5,2,2,2],
				   bodyArr:[
					   ["东方通信", "23%", "12122","12112"],
					   ["信维诺", "24%", "12122","12112"],
					   ["东方通信", "23%", "12122","12112"],
					   ["信维诺", "24%", "12122","12112"],
					   ["东方通信", "23%", "12122","12112"],
					   ["信维诺", "24%", "12122","12112"]
				   ],
				   titleArr:["股票名称","仓位占比","持仓市值(万元)","预计盈利(万元)"]
		        };
		    },
		    mounted() {
		       
		    },
			methods:{
				clickT(){
					this.bodyArr.push(["信维诺", "24%", "12122","12112"]);
				}
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
</style>

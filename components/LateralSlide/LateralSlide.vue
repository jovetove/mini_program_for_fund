<template>
	<view>
		<scroll-view scroll-x class="scroll-x">
		  <view v-for="(key, index) in timeList" class="view_item" >
		    <view class="view_item_time" 
				v-bind:class="{activeClass:index == currentIndex}" 
				@click="clickItem(index)" > {{key}} 
			</view>
		  </view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"LateralSlide",
		props:{
			targetList:{
				default: ["2021-03-31","2020-12-31","2020-09-30","2020-06-30","2020-03-31"]
			}
		},
		data() {
			return {
				timeList:this.targetList,
				currentIndex:0
			};
		},
		// 很重要
		watch:{
			targetList:function(newVal,oldVal){
				this.timeList = newVal;
			}
		},

		methods:{
			clickItem(index){
				this.currentIndex = index;
				this.$emit('resultItem', this.timeList[index]);
			}
		}
	}
</script>

<style>
.activeClass{
	background: #e6f7ff;
	border-color: #91d5ff;
	color: #096dd9;
}

.scroll-x{
    white-space:nowrap;
    display:flex;
    background: #ffffff;
}

.view_item{
    display:inline-block;
    padding: 20rpx;
}

.view_item_time{
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1rem;
    color: #096dd9;
	padding-right: 10px;
	border: 1px solid;
	border-radius: 2px;
	box-sizing: border-box;
	/* height: auto; */
	margin: 0 8px 0 0;
	opacity: 1;
	padding: 0 7px;
	transition: all .3s;
	white-space: nowrap;
	height: 50rpx;
}

/* 隐藏scrollbar */
::-webkit-scrollbar{
    width: 0;
    height: 0;
    color: transparent;
}
</style>

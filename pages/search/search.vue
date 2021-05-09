<template>
	<view>
		<wyb-table ref="table" 
		first-line-fixed="true"
		border-color='#dedede'
		first-col-bg-color='#fdfdfd'
		:show-vert-border = "false"
		:headers="headers" 
		:contents="contents" 
		:url-col="urlCol" 
		:sort-col="sortCol"
		@onCellClick="onPress"
		/>
	</view>
</template>

<script>
	export default {
		data() {
			const theUrl = '/pages/demos/noticeBar-demo/more' // 本地的某个页面
			const httpUrl = 'https://ext.dcloud.net.cn/plugin?id=2667' // 某个网址
			return {
				 headers: [{
					 label: '姓名',
					 key: 'name'
				 }, {
					 label: '年龄',
					 key: 'age'
				 }, {
					 label: '学院',
					 key: 'collage'
				 }, {
					 label: '成绩',
					 key: 'score'
				 }, {
					 label: '路由',
					 key: 'url'
				 }, {
					 label: '网址',
					 key: 'link'
				 }],
				 
				 contents: [
				 {
					 name: '500低波动',
					 age: '',
					 collage: '信息学院',
					 score: '99',
					 url: ['查看更多', theUrl],
					 link: ''
				 }, 
				 {
					 name: '中证500',
					 age: '',
					 collage: '信息学院',
					 score: '99',
					 url: ['查看更多', theUrl],
					 link: ''
				 }, 
				 {
					 name: '刘一',
					 age: '',
					 collage: '信息学院',
					 score: '99',
					 url: ['查看更多', theUrl],
					 link: ''
				 }, 
				 {
					 name: '刘一',
					 age: '',
					 collage: '信息学院',
					 score: '99',
					 url: ['查看更多', theUrl],
					 link: ''
				 }, 
				 {
					 name: '刘一',
					 age: '',
					 collage: '信息学院',
					 score: '99',
					 url: ['查看更多', theUrl],
					 link: ''
				 }, 
				 {
					 name: '刘一',
					 age: '',
					 collage: '信息学院',
					 score: '99',
					 url: ['查看更多', theUrl],
					 link: ''
				 }, 
				 {
					 name: '刘一',
					 age: '',
					 collage: '信息学院',
					 score: '99',
					 url: ['查看更多', theUrl],
					 link: ''
				 }, 
				 {
					 name: '刘一',
					 age: '',
					 collage: '信息学院',
					 score: '99',
					 url: ['查看更多', theUrl],
					 link: ''
				 }, 
				 {
					 name: '陈二',
					 age: '18',
					 collage: '商学院',
					 score: '98',
					 url: ['我带参数', theUrl, {name: '陈二'}],
					 link: ''
				 },
				 {
					 name: '张三',
					 age: '22',
					 collage: '统计与数学学院',
					 score: '97',
					 url: ['查看更多', theUrl],
					 link: ''
				 }, {
					 name: '李四',
					 age: '19',
					 collage: '城市与环境学院',
					 score: '96',
					 url: '',
					 link: ['访问网址', httpUrl]
				 }, {
					 name: '王五',
					 age: '20',
					 collage: '旅游与酒',
					 score: '95',
					 url: ['查看更多', theUrl],
					 link: ''
				 }, {
					 name: '赵六 ',
					 age: '20',
					 collage: '',
					 score: '88',
					 url: ['查看更多', theUrl],
					 link: ''
				 }, {
					 name: '孙七',
					 age: '21',
					 collage: '',
					 score: '95',
					 url: '',
					 link: ['访问网址', httpUrl]
				 }, {
					 name: '周八 ',
					 age: '21',
					 collage: '会计学院',
					 score: '85',
					 url: ['查看更多', theUrl],
					 link: ''
				 }, {
					 name: '吴九 ',
					 age: '20',
					 collage: '',
					 score: '91',
					 url: ['查看更多', theUrl],
					 link: ''
				 }, {
					 name: '郑十',
					 age: '19',
					 collage: '',
					 score: '95',
					 url: '',
					 link: ['访问网址', httpUrl]
				 }],
				 urlCol: [{
					 type: 'route',
					 key: 'url'
				 }, {
					 type: 'http',
					 key: 'link'
				 }],
				 computedCol:['age', 'score'],
				 sortCol:[
						{
							key: 'name',    // 所在列的key值（表头的key）
							isNumber: false // 该列数据是不是数字或者日期，日期例子：(2020-09-04 08:00) (2020/06/04) (08:00:06)
						}, 
						{
							key: 'age',
							isNumber: true
						}
					]
			 }
		},
		methods: {
			// 对应没有openType和url时的点击事件
			onPress(e){
				console.log(e)
			}
		}
	}
</script>

<style>
.navigator-swiper{
	background-color: #aaffff;
	
}
</style>

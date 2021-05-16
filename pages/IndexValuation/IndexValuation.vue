<template>
	<view>
		<wyb-table ref="table" 
		:font-size="[24,24]"
		:header-weight="true"
		:borderColor="borderColor"
		:show-left-and-right-border="false"
		:show-vert-border="false"
		:headers="headers" 
		:first-line-fixed="true"
		:sort-col="[{key: 'age',isNumber: true}]"
		:contents="contents" height='672px' 
		:url-col="urlCol" />
	</view>
</template>

<script>
	export default {
		data() {
			const theUrl = '/pages/demos/noticeBar-demo/more' // 本地的某个页面
			const httpUrl = 'https://ext.dcloud.net.cn/plugin?id=2667' // 某个网址
			return {
						borderColor:"#ffffff",
			            headers: [
						{
			                label: '指数名称',
			                key: 'name'
			            }, 
						{
			                label: '指数类型',
			                key: 'age'
			            }, {
			                label: 'PE',
			                key: 'collage'
			            }, {
			                label: 'PB',
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
			                name: '沪深300 002521',
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
			            }, {
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
			                collage: '旅游与酒店管理学院',
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
			            }]
			        }
		},
		methods: {
			
		},
		onLoad() {
			uni.getSystemInfo({
			    success: function (res) {
			        console.log(res.model);
			        console.log(res.pixelRatio);
			        console.log(res.windowWidth);
			        console.log(res.windowHeight);
			        console.log(res.language);
			        console.log(res.version);
			        console.log(res.platform);
			    }
			});
		}
	}
</script>

<style>

</style>

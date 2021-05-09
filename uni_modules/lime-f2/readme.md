# F2 图表
> F2，一个专注于移动，开箱即用的可视化解决方案 [查看更多](http://liangei.gitee.io/limeui/#/f2) <br>
> 基于antv f2 做了兼容处理，更多示例请访问 [antv F2](https://f2.antv.vision/zh/examples/gallery) <br>
> Q群：458377637

## 平台兼容

| H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ 小程序 | App  |
| --- | ---------- | ------------ | ---------- | ---------- | --------- | ---- |
| √   | √          | √         | √      | √       | √      | √ |


* ✨ **注意**
* 🌈 本插件使用了`webview`支持`nvue`。
* 📦 本插件没有对F2内部的方法和样式做过改动，只是使其兼容uniapp。
* 🔔 若F2无法满足于你或有需要特殊能力的请直接去F2 提建议
* 👉 若F2有兼容问题可向我反馈。

## 安装
在uniapp 插件市场 找到 [蚂蚁图表](https://ext.dcloud.net.cn/plugin?id=4613) 导入即可

## 代码演示

### 基础用法
通过`ref`获取节点组件内部`init`方法生成图表

```html
<view style="width: 100%; height:500rpx"><l-f2 ref="base"></l-f2></view>
```

```js
// 非 nvue 页面需要引进
import F2 from '@/uni_modules/lime-f2/components/lime-f2/f2.min.js';
import lF2 from '@/uni_modules/lime-f2/components/lime-f2/'
export default {
	components: {lF2},
	data() {
		return {
			baseData: [{ genre: '成犬粮', sold: 275 }, { genre: '化毛膏', sold: 115 }, { genre: '益生菌', sold: 120 }, { genre: '氨糖', sold: 350 }, { genre: '其它', sold: 150 }],
		};
	},
	mounted() {
		const base = this.$refs.base;
		base.init(config => {
			const chart = new F2.Chart(config);
			chart.source(this.baseData);
			chart
				.interval()
				.position('genre*sold')
				.color('genre');
			chart.render();
			// 需要把 chart 返回
			return chart;
		});
	}
}
```

### 图饼
图饼示例，更多用法和示例请访问antv f2 的官网

```html
<view style="width: 100%; height:500rpx"><l-f2 ref="pie"></l-f2></view>
```

```js
data() {
	return {
		pieMap: {
			'芳华': '40%',
			'妖猫传': '20%',
			'机器之血': '18%',
			'心理罪': '15%',
			'寻梦环游记': '5%',
			'其他': '2%'
		  },
		pieData: [
			{
				name: '芳华',
				percent: 0.4,
				a: '1'
			},
			{
				name: '妖猫传',
				percent: 0.2,
				a: '1'
			},
			{
				name: '机器之血',
				percent: 0.18,
				a: '1'
			},
			{
				name: '心理罪',
				percent: 0.15,
				a: '1'
			},
			{
				name: '寻梦环游记',
				percent: 0.05,
				a: '1'
			},
			{
				name: '其他',
				percent: 0.02,
				a: '1'
			}
		]
	};
},
mounted() {
	const pie = this.$refs.pie;
	pie.init(config => {
		const chart = new F2.Chart(config);
		chart.source(this.pieData, {
			percent: {
				formatter: function formatter(val) {
					return val * 100 + '%';
				}
			}
		});
		chart.legend({
			position: 'right',
			itemFormatter: function itemFormatter(val) {
				return val + '  ' + this.pieMap[val];
			}
		});
		chart.tooltip(false);
		chart.coord('polar', {
			transposed: true,
			radius: 0.85
		});
		chart.axis(false);
		chart
			.interval()
			.position('a*percent')
			.color('name', ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0'])
			.adjust('stack')
			.style({
				lineWidth: 1,
				stroke: '#fff',
				lineJoin: 'round',
				lineCap: 'round'
			})
			.animate({
				appear: {
					duration: 1200,
					easing: 'bounceOut'
				}
			});
		chart.render();
		// 需要把 chart 返回
		return chart;
	});
}
```
### Nvue
本插件通过`webview`组件使得 `antv F2` 能在`nvue`里使用。

* ✨ **温馨提示**
* 👉 webview使用了网络路径，可自行下载放置根目录下的`hybrid`文件夹里再修改路径即可。
* 🛡  **不需要引进F2 JS文件**，但需要写一个**F2**函数覆盖
* ⚙️ 在函数外面的数据需要通过`init`方法的第二个参数传递数据

```html
<view class="f2"><l-f2 ref="base"></l-f2></view>
```
```js
// nvue 页面是不需要引进F2文件的，但要写一个 F2 函数覆盖
const F2 = {Chart: () => {}}
export default {
	data() {
		return {
			baseData: [{ genre: '成犬粮', sold: 275 }, { genre: '化毛膏', sold: 115 }, { genre: '益生菌', sold: 120 }, { genre: '氨糖', sold: 350 }, { genre: '其它', sold: 150 }],
		}
	},
	mounted() {
		const base = this.$refs.base;
		const {baseData} = this
		base.init(config => {
			const chart = new F2.Chart(config);
			// 在函数外面的数据，需要在第二个参数传进去。
			chart.source(baseData);
			chart
				.interval()
				.position('genre*sold')
				.color('genre');
			chart.render();
			return chart;
		},
		// 在函数外面的数据需要传进组件
		{baseData}
		);
	}
}

```


## Props

| 参数              | 说明                     | 类型           | 默认值        | 版本  |
| ---------------  | --------                 | -------        | ------------ | ----- |
| custom-style     | 自定义样式                |   `string`     | -            | -     |
| params           | 仅针对nvue的数据传递,同init函数的第二个参数，两选一   |    `object`    | -            | -     |

## 事件

| 参数               | 说明                                                                                       |
| ---------------    | ---------------                                                                            |
| init(callback, data) | **callback**: 回调函数 <br> **data**: `nvue` 如果使用了外部数据，需要传递                     |  
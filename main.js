import Vue from 'vue'
import App from './App'
import {uniBadge} from '@dcloudio/uni-ui'
import cuCustom from './colorui/components/cu-custom.vue'
import CardForInfo from 'components/CardForInfo/CardForInfo.vue'

Vue.component('cu-custom',cuCustom)
Vue.component('CardForInfo',CardForInfo)

//import uniBadge from '@dcloudio/uni-ui/lib/uni-badge/uni-badge.vue' //也可使用此方式引入组件
export default {
    components: {
		uniBadge,
		CardForInfo
	}
}

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

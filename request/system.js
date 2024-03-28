import http from './index.js'


// 获取下拉菜单字典
export function getDropdowns(code) {
	return http("/dictionaries/data", {
		code
	})
}


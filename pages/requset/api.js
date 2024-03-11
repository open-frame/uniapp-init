import http from "@/request/index.js"

// 用户列表
export function users(params) {
	return http("/user", params, true, "GET")
}

// 添加用户
export function addUser(params) {
	return http("/addUser", params)
}
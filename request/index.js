console.log(import.meta.env);

// 全局请求封装
export default (path, params = {}, loading = true, method = "POST") => {
	// console.log('%c请求拦截：', ' background:orange', params);

	if (loading) {
		uni.showLoading({
			title: "加载中",
			mask: true
		});
	};

	return new Promise((resolve, reject) => {
		uni.request({
			header: {
				"Open-Id": uni.getStorageSync("openId") || "6666666666666666666"
			},
			url: import.meta.env.VITE_BASE_URL + path,
			method,
			data: params,
			success(res) {
				uni.hideLoading();
				console.log('响应拦截：', path, params, res.data);
				if (res.data?.code !== 0) {
					uni.showToast({
						icon: "error",
						duration: 2000,
						title: res.data.msg
					});
				}
				resolve(res.data);
			},
			fail(err) {
				uni.hideLoading();
				uni.showToast({
					icon: "error",
					title: '服务响应失败',
					success() {
						setTimeout(() => {
							uni.reLaunch({
								url: "/pages/status/error"
							})
						}, 1500)
					}
				});
				reject(err);
			},
			complete() {
				// uni.hideLoading();    // 在showToast之前执行会受影响
			}
		});
	});
};
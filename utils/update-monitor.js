// 检测小程序升级
export default () => {
  const updateManager = uni.getUpdateManager();
  // 当向小程序后台请求完新版本信息
  updateManager.onCheckForUpdate(function(res) {
    console.log(`程序 【${res.hasUpdate ? '有' : '无'}】 新版本`);
  });
  // 当新版本下载完成
  updateManager.onUpdateReady(function() {
    uni.showModal({
      title: '版本升级提示',
      content: '新版本已经准备好，重启即可更新应用',
      showCancel: false,
      success(res) {
        if (res.confirm) {
          updateManager.applyUpdate();
        }
      }
    });
  });
  // 当新版本下载失败
  updateManager.onUpdateFailed(function(res) {
    uni.showModal({
      title: '新版小程序下载失败',
      content: '如您想使用新版本，请退出程序后长摁卸载本程序，再运行',
      showCancel: false,
      confirmText: "知道了"
    });
  });
}
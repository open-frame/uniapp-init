> 为避免重复造轮子，每次小程序项目初始化都要组件库选型、请求封装、程序升级封装、配置自动化等等......很多。【vue3-uniapp-init】应需诞生。是最基础的初始化架构，易拓展好上手



# 技术说明

- 采用[vue3](https://cn.vuejs.org/)+vite+uniapp技术栈，setup语法糖编码方式
- 使用完全免费的[sard-uniapp](https://sutras.gitee.io/sard-uniapp-docs/#/)组件库
- 搭配unocss量子化样式引擎，降低自己写css工作量，根据class动态生成css代码
- 封装全局请求入口，使用时自己封装业务接口即可
- 小程序打开场景封装，轻松拿到小程序是从哪里打开的
- 配置pinia状态管理器
- 配置api自动化引入（vue3 api、uniapp api），解放双手import
- 封装程序升级检测，新发布小程序会提醒用户升级
- 简单提供项目分包案例 `pages/status`、`pages/demo` 等



# 运行效果

![image](https://github.com/user-attachments/assets/02b574c0-c787-401f-9f49-d4ec7dd19b7c)


![image](https://github.com/user-attachments/assets/b0901b0b-4ba1-468e-b5ed-d3bbe9fff6f7)



![image](https://github.com/user-attachments/assets/f6932263-4118-4f10-a5d8-652a082b20a8)



![image](https://github.com/user-attachments/assets/a2c32918-22ee-40fb-9b36-ac85c450a909)



![image](https://github.com/user-attachments/assets/4e671ce9-0afa-4098-8764-7e590ad8e94a)



![image](https://github.com/user-attachments/assets/bcbe93be-df3f-495d-ae55-4f24d004caaf)


![image](https://github.com/user-attachments/assets/cff2c0f7-3b2d-401e-9e9c-b1cee9f8fce3)















# 启动项目

从【运行】处启动：
记得先到`manifest.json`文件配置微信小程序的appid
![image](https://github.com/user-attachments/assets/af2086fc-f720-42e3-941b-5fc3571cfd00)




# 发布线上

1. 从【发行】处启动
![image](https://github.com/user-attachments/assets/4beb0c43-64d7-4174-aeab-a795a3236b1c)





2. 启动完毕点击**微信小程序调试器**右上角的【上传】，不是在Hbuilder编辑器上

![image](https://github.com/user-attachments/assets/77ed1a7d-62a1-48bc-80a0-6d5f6756d5ed)




## 为什么要区分【运行】和【发行】？

因为环境变量 ` console.log(import.meta.env); `
![image](https://github.com/user-attachments/assets/dc39bfcb-1a3d-4fe8-b8a3-69dd2df5a6f6)





- 【运行】启动的是**开发**环境

![image](https://github.com/user-attachments/assets/1b5e20e7-8c0d-4022-a04f-6608a86f6363)




- 【发行】启动的是**正式**环境

![image](https://github.com/user-attachments/assets/f2a5015a-3bc2-43de-9a8c-ae83abea103b)


环境变量不一样，会取不同文件里的变量，同web端一样。



# 遇到问题

可以先到[Issues](https://github.com/open-frame/uniapp-init/issues)看看别人提的解决方案。如没有，你可以提个。



# 话题讨论

可以先到[discussions](https://github.com/open-frame/uniapp-init/discussions)看看别人讨论的话题。如没有，你可以提个。





# 写在最后

欢迎大家[PR](https://github.com/open-frame/uniapp-init/pulls)，让架子更好，帮到更多人




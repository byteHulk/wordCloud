## 项目简介
在进行英语学习时，发现需要一个可以将热爱的体育和学习英语结合起来的软件。该软件实现英语体育新闻的浏览，点击单词即可查看读音、翻译。还可进行类似百词斩的单词背诵和自我检测.

> 项目地址： http://39.96.48.33/wordCloud

- 学习并使用node搭建爬虫程序，从国外网站上爬取新闻数据，使用JsDom解析，cron定时执行
- 采用vue-cli;vue-router; 构建SPA单页应用, ,封装ajax方法，使用阿里矢量图标库
- 接触到了flex布局，并应用在项目上，使用rem适配，使用styuls进行css的预处理
- 通过PHP调用网易智云API以单词的翻译,发音,等级划分
## 项目难点：
- 单词页3D透视滑动    
   分析要达成的效果，将问题拆分为卡片行滑动和卡片3D透视滚动效果，解决方法通过touch相关事件，实现了两个效果，并考虑到了触界会弹效果，最后调整两个过渡效果的时间，达到流畅的滑动效果，将问题解决。
- 卡片点击翻转(查看释义)    
首先分析反转效果也是和transform有关，通过已知知识实现，卡片正反通过定义两个div，外部卡片容器为里面的两个div的包含块，点击切换两个的div的类，即完成翻转查看释义效果
## 作品收获：
1.	作品提高了对英语学习的热情，也帮助我提高了四级分数
2.	学习到了transform的各个属性及用户触摸事件

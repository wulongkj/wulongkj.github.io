# 乌龙导航
## 作者声明
本作品由open ai生成,本人设计修改完善而成<br>
用作: 个人导航使用<br>
目的: 简单快捷方便不丢失<br>
本库不定期添加并删除失效地址(重复地址)<br>
有些地址可能因为地区限制无法访问并不一定是失效,可通过代理访问一下试试<br>
最后感谢你的访问与支持

## 修改方法
### 一、添加链接/删除链接及修改标题
修改文件: ./js/index.js
#### 1.修改标题
```js
document.title="乌龙导航"; //将等号后面的内容改成你需要的内容 本内容作用于网站标签上内容
```
#### 2.添加链接/删除链接
```js
{
    "name": "小白网", //网站昵称，尽量使用网站原昵称即 百度搜索引擎我们就写百度
    "url": "https://xiaobainet.github.io", //网站地址 如 百度的地址为 https://baidu.com 我们就添写 https://baidu.com
    "tags": ["小白网","xiaobainet","github"] //网站标签 用作搜索使用，如百度 我们可以写成  "tags": ["百度","搜索引擎","baidu"] 不同标签用逗号隔开 添加越多，搜索越精准 越容易索到
  }
```

### 二、修改公告及控制台显示
修改文件: ./Notice/index.js
#### 1.修改控制台显示
```js
    //推广个人更多网站提高业内知名度
    console.group("二开作者、优化及运营");
    	console.log("wryxmq(马猩猿)");
    	console.log("http://wryxmq.com");
    	console.log("http://wulongkj.github.io");
    console.groupEnd();
```

#### 2.修改公告
```js
    
```



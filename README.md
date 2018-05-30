# squarespace_home_page
![Alt text](https://raw.githubusercontent.com/daimingyu/photos/master/camera.jpg)
<!-- more -->
___

## 一、前言

原网站地址 : [Squarespace](https://www.squarespace.com/)
作品地址： [Dai Mingyu - Squarespace Home Page](https://github.com/daimingyu/squarespace_home_page)
预览 ： [Squarespace Home Page](http://isiqi.me/squarespace_home_page/)

## 二、文件夹


* /index.html : 入口文件
* /js : js库文件
* /css: css库文件
* /images : 图片资源
* /fonts : 字体资源
* /log：存放登陆页文件夹

## 三、库文件

### (一)jquery.easing.js

#### 1、从CDN引入jquery.easing.js文件

```
<script type='text/javascript' src='https://cdn.bootcss.com/jquery-easing/1.4.1/jquery.easing.min.js'></scrip>
```
#### 2、启用插件

```
$('.aa').animate({'width':'600'} , 1000 , 'easeInOutCirc');
```

#### 3、可以使用的参数

参考链接： [jquery ui api - easings](http://www.runoob.com/jqueryui/api-easings.html)

### (二)animate.css

#### 1、从CDN引入animate.css文件

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css">
```
#### 2、给指定的元素添加基础class animated

```
<div class="item animated"></div>
```

#### 3、结合jQuery给指定的元素添加动画class

```
var oDiv = $('.item');
oDiv.addClass('bounce');
```
#### 4、可以使用的动画

参考链接： [animate.css](https://daneden.github.io/animate.css/)

#### 5、动画抽离

因为有时候不可能用到全部的动画，所以可以将部分动画抽离出来使用，在这个应用中我抽离出来了四个动画，分别在以下四个文件中：

* fade_in_down.css
* fade_in_left.css
* fade_in_up.css
* fade_out_right.css

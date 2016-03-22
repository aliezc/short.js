# short.js

## 使用方法

```javascript
<script src="short.min.js"></script>
```

### Demo

```javascript
// 选取元素
$('div').each(function(e){
	
	// 设置样式
	e.css('display', 'block');
	
	// 选取子元素
	e.childs(function(e){
	
		// 设置属性
		e.attr('src', '..');
		
		// 返回属性
		console.log(e.attr('src'));
	});
	
	// 添加类
	e.addclass('on');
	
	// 移除类
	e.rmclass('on');
	
	// 添加事件监听
	e.on('click', function(){
		// 选取子元素
		e.$('p').each(function(c){
			
			// 获取样式
			console.log(c.css('color'));
		});
	});
	
	// 设置自定义数据
	e.data('id', 1);
	
	// 返回自定义数据
	console.log(e.data('id'));
	
	// ajax
	ajax({
		method: 'POST',
		url: '/set',
		data: {
			page: '1',
			tag: 'tag'
		},
		headers: {
			referer: 'http://localhost/'
		}
	}, function(data, status){
		if(status == 200){
			console.log(data);
		}
	});
});
```

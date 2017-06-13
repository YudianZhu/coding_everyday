// 1. bind(), apply(), call()
// Use .bind() when you want that function to later be called with a certain context, useful in events. Use .call() .apply() when you want to invoke the function immediately.
// ex:
function MyObject(element) {
    this.elm = element;

    element.addEventListener('click', this.onClick.bind(this), false);
};

MyObject.prototype.onClick = function(e) {
     var t=this;  //do something with [t]...
    //without bind the context of this function wouldn't be a MyObject
    //instance as you would normally expect.
};

// 2. JSONP
// on example.com , maked a request to example.net -> cross domain problems
// The one item that bypasses the limitation is <script> tags.
//  Web页面上调用js文件时则不受是否跨域的影响（不仅如此，我们还发现凡是拥有"src"这个属性的标签都拥有跨域的能力，比如<script>、<img>、<iframe>）
// Basic JavaScript example (simple Twitter feed using JSONP)

<html>
    <head>
    </head>
    <body>
        <div id = 'twitterFeed'></div>
        <script>
        function myCallback(dataWeGotViaJsonp){
            var text = '';
            var len = dataWeGotViaJsonp.length;
            for(var i=0;i<len;i++){
                twitterEntry = dataWeGotViaJsonp[i];
                text += '<p><img src = "' + twitterEntry.user.profile_image_url_https +'"/>' + twitterEntry['text'] + '</p>'
            }
            document.getElementById('twitterFeed').innerHTML = text;
        }
        </script>
        <script type="text/javascript" src="http://twitter.com/status/user_timeline/padraicb.json?count=10&callback=myCallback"></script>
    </body>
</html>

// 3. AJAX原理
// 无需重新加载整个网页的情况下，能够部分更新网页的技术
// 同步VS异步 XMLHttpRequest出现之前，网页都采取的是令人抓狂同步的方式，ex: 填写长表单后某项填写错误整个页面的刷新。简单的数据，都要返回一个完整的HTML页。
var xhr = new XMLHttpRequest();
// 打开
xhr.open('GET', url, true);
// 定义在客户端的响应方式，监听连接状态
xhr.onreadystatechange = function(){
  if(xhr.readyState == 4) {
    //状态为4表示通信成功
    if(xhr.status == 200) {
      //200表示完全成功
      console.log(xhr)
    }else{
      console.log(error)
    }
  }
  // 成功后，发起客户端和服务端的链接
  xhr.send();
}

// TODO 封装ajax


// Ajax的工作原理相当于在用户和服务器之间加了—个中间层(AJAX引擎),使用户操作与服务器响应异步化。并不是所有
// 的用户请求都提交给服务器,像—些数据验证和数据处理等都交给Ajax引擎自己来做, 只有确定需要从服务器读取新数据
// 时再由Ajax引擎代为向服务器提交请求。 简言之：从服务端获取数据，再用JavaScript操作DOM更新页面
// The Document Object Model (DOM) is an application programming interface (API) for valid HTML and well-formed XML documents.
//  XML is being used as a way of representing many different kinds of information that may be stored in diverse systems,

// 4. HTTP
// HTTP 无状态协议，不建立持久链接。整个过程是没有记忆的。
// 完整的HTTP请求
// 1. 建立TCP连接 2. Web浏览器向Web服务器发送请求命令 3.Web浏览器发送请求头信息 4. Web服务器应答 5. Web服务器发送应答头信息 6. Web服务器向Web浏览器发送数据 7. Web服务器关闭TCP连接
// 5. compare let with const
// `const` is a signal that the identifier won’t be reassigned.
// `let`, is a signal that the variable may be reassigned
// variable hoisted
// let 在变量声明前无法访问它

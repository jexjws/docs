import{_ as o,k as r,m as n,l as e,B as a,f as l,y as s,A as d,j as p}from"./chunks/framework.Cum5LaDG.js";const A=JSON.parse('{"title":"适配器 (Adapter)","description":"","frontmatter":{},"headers":[],"relativePath":"zh-TW/api/core/adapter.md","filePath":"zh-TW/api/core/adapter.md"}'),k={name:"zh-TW/api/core/adapter.md"},h={id:"adapter-connect",tabindex:"-1"},b={id:"adapter-disconnect",tabindex:"-1"},u={id:"client-prepare",tabindex:"-1"},g={id:"client-accept",tabindex:"-1"};function c(m,t,C,B,f,y){const i=d("badge");return p(),r("div",null,[t[19]||(t[19]=n('<h1 id="适配器" tabindex="-1">适配器 (Adapter) <a class="header-anchor" href="#适配器" aria-label="Permalink to &quot;适配器 (Adapter)&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>参见：<a href="./../../guide/adapter/adapter.html">开发 &gt; 跨平台 &gt; 实现适配器</a></p></div><p>本章将介绍与适配器相关的内容，这是一个相当底层的概念，因此如果你并不打算编写一个平台实现，你完全可以跳过本章节。</p>',3)),e("p",null,[t[1]||(t[1]=a("标有 ")),l(i,null,{default:s(()=>t[0]||(t[0]=[a("抽象")])),_:1}),t[2]||(t[2]=a(" 的方法需要由适配器插件自行实现。"))]),t[20]||(t[20]=n('<h2 id="类-adapter" tabindex="-1">类：Adapter <a class="header-anchor" href="#类-adapter" aria-label="Permalink to &quot;类：Adapter&quot;">​</a></h2><p>适配器基类。</p><h3 id="new-adapter" tabindex="-1">new Adapter() <a class="header-anchor" href="#new-adapter" aria-label="Permalink to &quot;new Adapter()&quot;">​</a></h3><p>构造一个适配器实例。</p><h3 id="adapter-bots" tabindex="-1">adapter.bots <a class="header-anchor" href="#adapter-bots" aria-label="Permalink to &quot;adapter.bots&quot;">​</a></h3><ul><li>类型: <code>Bot[]</code></li></ul><p>当前适配器下的全部机器人实例。</p>',7)),e("h3",h,[t[4]||(t[4]=a("adapter.connect(bot) ")),l(i,null,{default:s(()=>t[3]||(t[3]=[a("抽象")])),_:1}),t[5]||(t[5]=a()),t[6]||(t[6]=e("a",{class:"header-anchor",href:"#adapter-connect","aria-label":'Permalink to "adapter.connect(bot) <badge>抽象</badge>"'},"​",-1))]),t[21]||(t[21]=e("ul",null,[e("li",null,[e("strong",null,"bot:"),a(),e("code",null,"Bot"),a(" 机器人实例")]),e("li",null,[a("返回值: "),e("code",null,"Promise<void>")])],-1)),t[22]||(t[22]=e("p",null,[a("连接 Bot 所需的操作，将在 "),e("code",null,"bot.start()"),a(" 中被调用。")],-1)),e("h3",b,[t[8]||(t[8]=a("adapter.disconnect(bot) ")),l(i,null,{default:s(()=>t[7]||(t[7]=[a("抽象")])),_:1}),t[9]||(t[9]=a()),t[10]||(t[10]=e("a",{class:"header-anchor",href:"#adapter-disconnect","aria-label":'Permalink to "adapter.disconnect(bot) <badge>抽象</badge>"'},"​",-1))]),t[23]||(t[23]=n(`<ul><li><strong>bot:</strong> <code>Bot</code> 机器人实例</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>停止连接 Bot 所需的操作，将在 <code>bot.stop()</code> 中被调用。</p><h2 id="类-adapter-wsclient" tabindex="-1">类：Adapter.WsClient <a class="header-anchor" href="#类-adapter-wsclient" aria-label="Permalink to &quot;类：Adapter.WsClient&quot;">​</a></h2><p>一个用于 WebSocket 通信方式的实用适配器基类。其中的机器人需要接受以下配置项：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> WsClientConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  retryLazy</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  retryTimes</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  retryInterval</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h3 id="new-wsclient" tabindex="-1">new WsClient(ctx, bot) <a class="header-anchor" href="#new-wsclient" aria-label="Permalink to &quot;new WsClient(ctx, bot)&quot;">​</a></h3><ul><li><strong>ctx:</strong> <code>Context</code> 上下文</li><li><strong>bot:</strong> <code>Bot</code> 机器人实例</li></ul><p>创建一个 WsClient 适配器实例。</p><h3 id="client-bot" tabindex="-1">client.bot <a class="header-anchor" href="#client-bot" aria-label="Permalink to &quot;client.bot&quot;">​</a></h3><ul><li>类型: <code>Bot</code></li></ul><p>当前适配器下的机器人实例。</p><h3 id="client-socket" tabindex="-1">client.socket <a class="header-anchor" href="#client-socket" aria-label="Permalink to &quot;client.socket&quot;">​</a></h3><ul><li>类型: <code>WebSocket</code></li></ul><p>当前适配器下的 WebSocket 实例。</p>`,14)),e("h3",u,[t[12]||(t[12]=a("client.prepare() ")),l(i,null,{default:s(()=>t[11]||(t[11]=[a("抽象")])),_:1}),t[13]||(t[13]=a()),t[14]||(t[14]=e("a",{class:"header-anchor",href:"#client-prepare","aria-label":'Permalink to "client.prepare() <badge>抽象</badge>"'},"​",-1))]),t[24]||(t[24]=e("ul",null,[e("li",null,[a("返回值: "),e("code",null,"WebSocket | Promise<WebSocket>")])],-1)),t[25]||(t[25]=e("p",null,"根据机器人实例生成一个 WebSocket 对象。",-1)),e("h3",g,[t[16]||(t[16]=a("client.accept() ")),l(i,null,{default:s(()=>t[15]||(t[15]=[a("抽象")])),_:1}),t[17]||(t[17]=a()),t[18]||(t[18]=e("a",{class:"header-anchor",href:"#client-accept","aria-label":'Permalink to "client.accept() <badge>抽象</badge>"'},"​",-1))]),t[26]||(t[26]=e("p",null,[a("WebSocket 连接成功建立后的回调函数。你需要实现这个方法，并在其中手动调用 "),e("code",null,"bot.resolve()"),a(" 回调函数表示已经连接成功。")],-1))])}const D=o(k,[["render",c]]);export{A as __pageData,D as default};

import{_ as o,k as d,l as e,B as i,f as l,y as t,m as n,A as p,j as r}from"./chunks/framework.Cum5LaDG.js";const x=JSON.parse('{"title":"从低版本迁移","description":"","frontmatter":{},"headers":[],"relativePath":"zh-TW/about/upgrade.md","filePath":"zh-TW/about/upgrade.md"}'),h={name:"zh-TW/about/upgrade.md"},k={id:"jsx-支持",tabindex:"-1"},g={id:"心跳迁移",tabindex:"-1"},u={id:"cli-迁移",tabindex:"-1"},c={id:"hmr-迁移",tabindex:"-1"},b={id:"插件市场迁移",tabindex:"-1"},m={id:"国际化迁移",tabindex:"-1"},y={id:"协议更新",tabindex:"-1"},B={id:"协议更新-1",tabindex:"-1"};function C(A,s,f,v,E,D){const a=p("badge");return r(),d("div",null,[s[32]||(s[32]=e("h1",{id:"从低版本迁移",tabindex:"-1"},[i("从低版本迁移 "),e("a",{class:"header-anchor",href:"#从低版本迁移","aria-label":'Permalink to "从低版本迁移"'},"​")],-1)),e("h2",k,[s[1]||(s[1]=i("JSX 支持 ")),l(a,null,{default:t(()=>s[0]||(s[0]=[i("v4.10.3")])),_:1}),s[2]||(s[2]=i()),s[3]||(s[3]=e("a",{class:"header-anchor",href:"#jsx-支持","aria-label":'Permalink to "JSX 支持 <badge>v4.10.3</badge>"'},"​",-1))]),s[33]||(s[33]=n(`<p>在 4.10.3 版本中，我们正式引入了 JSX 支持。这意味着你可以在插件中使用 JSX 语法来构造消息元素了。要实现这一点，你需要对你的项目进行一些配置：</p><ol><li>打开 <code>tsconfig.base.json</code> 文件并加入以下配置：</li></ol><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;compilerOptions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;jsx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;react-jsx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;jsxImportSource&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;@satorijs/element&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><ol start="2"><li>将要使用 JSX 的文件后缀名修改为 <code>.tsx</code>。</li></ol>`,4)),e("h2",g,[s[5]||(s[5]=i("心跳迁移 ")),l(a,null,{default:t(()=>s[4]||(s[4]=[i("v4.10.4")])),_:1}),s[6]||(s[6]=i()),s[7]||(s[7]=e("a",{class:"header-anchor",href:"#心跳迁移","aria-label":'Permalink to "心跳迁移 <badge>v4.10.4</badge>"'},"​",-1))]),s[34]||(s[34]=n("<p>在 4.10.4 版本中，我们调整了默认的心跳行为，这可能导致老用户升级时遭遇无限重启问题。可以执行下列操作进行升级：</p><ol><li>先将 market 插件更新到最新版本 (最新版本支持批量更新)</li><li>(非 v4.10.3 用户忽略此步骤) 在控制台中修改全局设置，将 <code>heartbeatInterval</code> 项的值改为 <code>6000</code>，<code>heartbeatTimeout</code> 项的值改为 <code>600000</code>，并点击「重载配置」按钮</li><li>在依赖管理中，通过下拉菜单将全部官方依赖修改为最新版本 (如果有 suggest 和 assets-* 依赖则选择移除)，并点击「应用更改」按钮</li><li>更新完成后重启实例</li><li>在控制台中修改全局设置，将 <code>heartbeatInterval</code> 和 <code>heartbeatTimeout</code> 项的值均改为 <code>0</code>，并点击「重载配置」按钮</li><li>再次重启实例</li><li>如果之前移除了 assets-* 插件，请重新前往插件市场进行安装</li></ol>",2)),e("h2",u,[s[9]||(s[9]=i("CLI 迁移 ")),l(a,null,{default:t(()=>s[8]||(s[8]=[i("v4.11.0")])),_:1}),s[10]||(s[10]=i()),s[11]||(s[11]=e("a",{class:"header-anchor",href:"#cli-迁移","aria-label":'Permalink to "CLI 迁移 <badge>v4.11.0</badge>"'},"​",-1))]),s[35]||(s[35]=e("p",null,"在 4.11.0 版本中我们移除了 @koishijs/cli 包，将其合并到了 koishi 中。这意味着你每次升级时不再需要同时升级两边了。但对于已经安装了 @koishijs/cli 的用户，你需要执行下列操作完成升级：",-1)),s[36]||(s[36]=e("ol",null,[e("li",null,"先完成 4.10.4 版本的更新，确保自己的版本号不小于 4.10.4"),e("li",null,"在依赖管理中，修改 koishi 的版本号到 4.11.0，同时移除 @koishijs/cli 的版本号"),e("li",null,"点击「应用更改」按钮")],-1)),e("h2",c,[s[13]||(s[13]=i("HMR 迁移 ")),l(a,null,{default:t(()=>s[12]||(s[12]=[i("v4.12.0")])),_:1}),s[14]||(s[14]=i()),s[15]||(s[15]=e("a",{class:"header-anchor",href:"#hmr-迁移","aria-label":'Permalink to "HMR 迁移 <badge>v4.12.0</badge>"'},"​",-1))]),s[37]||(s[37]=n('<p>在 4.12.0 版本中，我们将模块热替换相关功能移至专门的插件 @koishijs/plugin-hmr 中。对于生产模式下的用户无影响，但开发者则需要在升级 Koishi 后手动安装新插件。你需要执行下列操作完成升级：</p><ol><li>安装最新版本的 @koishijs/plugin-hmr</li><li>修改你的配置文件，加上 <a href="./../guide/develop/script.html#模块热替换">模块热替换</a> 中提到的部分</li><li>移除 <code>package.json</code> 文件中 <code>scripts.dev</code> 的 <code>--watch</code> 参数</li></ol>',2)),e("h2",b,[s[17]||(s[17]=i("插件市场迁移 ")),l(a,null,{default:t(()=>s[16]||(s[16]=[i("v4.13.0")])),_:1}),s[18]||(s[18]=i()),s[19]||(s[19]=e("a",{class:"header-anchor",href:"#插件市场迁移","aria-label":'Permalink to "插件市场迁移 <badge>v4.13.0</badge>"'},"​",-1))]),s[38]||(s[38]=n(`<p>在 4.13.0 版本中，我们将 @koishijs/plugin-market 插件分拆为了两个插件 market 和 config。其中 market 负责「插件市场」和「依赖管理」页面，而 config 则负责「插件配置」页面。直接将 market 插件更新到 2.0.0 或以上版本的用户会发现自己的「插件配置」页面消失，此时你需要执行下列操作完成升级：</p><ol><li>首先确保你的 market 插件是最新版 (应该是 2.0.0 以上版本)</li><li>打开「插件市场」页面，安装最新版的 config 插件</li><li>打开「资源管理器」页面，找到 <code>koishi.yml</code> 页面，打开并编辑：</li></ol><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">host</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">127.0.0.1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">port</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">5140</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">maxPort</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">5149</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">plugins</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  ...</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">    ...</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    config</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {}         </span><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 加一行在这里，注意左侧缩进与 market 对齐</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    market</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">      ...</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">    ...</span></span></code></pre></div><ol start="4"><li>点击右上角的保存按钮</li><li>重新启动 Koishi 实例</li></ol>`,4)),e("h2",m,[s[21]||(s[21]=i("国际化迁移 ")),l(a,null,{default:t(()=>s[20]||(s[20]=[i("v4.13.0")])),_:1}),s[22]||(s[22]=i()),s[23]||(s[23]=e("a",{class:"header-anchor",href:"#国际化迁移","aria-label":'Permalink to "国际化迁移 <badge>v4.13.0</badge>"'},"​",-1))]),s[39]||(s[39]=n("<p>在 4.13.0 版本中，我们也引入了多语言的回退机制。这意味者，所有涉及语言配置的地方都需要从单一的语言字符串修改为数组。具体包括以下几个地方：</p><ul><li>应用配置项 <code>locale</code> → <code>i18n.locales</code></li><li>用户和频道的数据结构 <code>locale</code> → <code>locales</code></li><li>会话对象的属性 <code>locale</code> → <code>locales</code></li></ul><p>用户无需留意这些改动，但开发者如果使用了上述 API 则需要进行迁移。</p>",3)),e("h2",y,[s[25]||(s[25]=i("协议更新 ")),l(a,null,{default:t(()=>s[24]||(s[24]=[i("v4.14.5")])),_:1}),s[26]||(s[26]=i()),s[27]||(s[27]=e("a",{class:"header-anchor",href:"#协议更新","aria-label":'Permalink to "协议更新 <badge>v4.14.5</badge>"'},"​",-1))]),s[40]||(s[40]=n(`<p>在 4.14.5 版本中，我们将协议库 Satori 升级到了 v3 alpha 版本。新版本引入了与分页 API 相关的不兼容更新。具体受影响的 API 如下：</p><ul><li><code>bot.getChannelList()</code></li><li><code>bot.getFriendList()</code></li><li><code>bot.getGuildList()</code></li><li><code>bot.getGuildMemberList()</code></li><li><code>bot.getGuildRoleList()</code></li><li><code>bot.getMessageList()</code></li><li><code>bot.getReactionList()</code></li></ul><p>上述 API 将不再返回 <code>Promise&lt;T[]&gt;</code> 而是返回一个 <code>Promise&lt;List&lt;T&gt;&gt;</code>，包含 <code>data</code> 属性和可选的 <code>next</code> 属性。<code>data</code> 包含了当前页的数据，<code>next</code> 则表示下一页的分页令牌。此外，对于上述每一个 API，我们还额外提供了返回异步迭代器的版本：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> item</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> of</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> bot</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">getChannelList</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">())  </span><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// old</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> item</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> of</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> bot</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">getChannelIter</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">())  </span><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// new</span></span></code></pre></div>`,4)),e("h2",B,[s[29]||(s[29]=i("协议更新 ")),l(a,null,{default:t(()=>s[28]||(s[28]=[i("v4.15.0")])),_:1}),s[30]||(s[30]=i()),s[31]||(s[31]=e("a",{class:"header-anchor",href:"#协议更新-1","aria-label":'Permalink to "协议更新 <badge>v4.15.0</badge>"'},"​",-1))]),s[41]||(s[41]=n('<p>在 4.15.0 版本中，我们将协议库 Satori 升级到了 v3 正式版本。新版本引入了一系列涉及平台资源不兼容更新。</p><p><a href="./../api/resources/user.html"><code>User</code></a> 类型的 <code>userId</code> 属性改为 <code>id</code>，同理对于 <a href="./../api/resources/channel.html"><code>Channel</code></a>, <a href="./../api/resources/guild.html"><code>Guild</code></a>, <a href="./../api/resources/message.html"><code>Message</code></a> 也是如此。此外，<code>Author</code> 被重构为了 <code>User</code> 和 <code>Member</code> 两个部分。</p><p><a href="./../api/core/session.html"><code>Session</code></a> 引入了 <code>event</code> 属性用于存放所有事件相关的资源。尽管我们在会话中提供了 <a href="./../api/core/session.html#访问器属性">访问器属性</a> 以保证了大部分 API 的向下兼容，但对于没有提供访问器的事件属性，或是在使用 Bot API 的返回值时，你都需要手动修改代码。</p><p><code>Adapter.Server</code> 和 <code>Adapter.Client</code> 两个基类被移除。现在可以直接使用 <a href="./../api/core/adapter.html"><code>Adapter</code></a> 基类，并通过 <code>reusable</code> 属性决定其是否可重用。</p><p><a href="./../api/core/bot.html"><code>Bot</code></a> 将实现 <a href="./../api/resources/login.html"><code>Login</code></a> 资源，因此其上的用户数据将存放在 <code>bot.user</code> 中。此外，<a href="./../api/resources/login.html"><code>status</code></a> 属性由字符串变为数值枚举。</p><p><a href="./../api/message/encoder.html#encoder-results"><code>encoder.results</code></a> 的类型由 <code>string[]</code> 变为 <code>Message[]</code>。</p><p>新增用于创建私聊频道的 <a href="./../api/resources/channel.html"><code>bot.createDirectChannel()</code></a>，因此不再需要实现 <a href="./../api/resources/message.html#bot-sendprivatemessage"><code>bot.sendPrivateMessage()</code></a>。</p>',7))])}const P=o(h,[["render",C]]);export{x as __pageData,P as default};

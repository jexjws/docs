import{_ as o,k as t,m as a,j as i}from"./chunks/framework.Cum5LaDG.js";const u=JSON.parse('{"title":"@koishijs/plugin-adapter-qqguild","description":"","frontmatter":{},"headers":[],"relativePath":"zh-TW/plugins/adapter/qqguild.md","filePath":"zh-TW/plugins/adapter/qqguild.md"}'),r={name:"zh-TW/plugins/adapter/qqguild.md"};function l(n,e,s,d,p,h){return i(),t("div",null,e[0]||(e[0]=[a('<h1 id="koishijs-plugin-adapter-qqguild" tabindex="-1">@koishijs/plugin-adapter-qqguild <a class="header-anchor" href="#koishijs-plugin-adapter-qqguild" aria-label="Permalink to &quot;@koishijs/plugin-adapter-qqguild&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">注意</p><p>由于 QQ 频道官方对机器人附加了大量限制，因此如果你仅仅想要接入频道，我们更推荐使用真实账号而不是申请机器人。借助 <a href="./onebot.html">OneBot</a> 适配器，我们将得以在频道中使用更多的功能。</p></div><p>QQ 频道官方 SDK 适配器，基于 <a href="https://www.npmjs.com/package/@qq-guild-sdk/core" target="_blank" rel="noreferrer">@qq-guild-sdk/core</a> 实现。</p><h2 id="接入方法" tabindex="-1">接入方法 <a class="header-anchor" href="#接入方法" aria-label="Permalink to &quot;接入方法&quot;">​</a></h2><ol><li>前往 <a href="https://bot.q.qq.com/open/#/type?appType=2" target="_blank" rel="noreferrer">QQ 頻道管理後臺</a> 註冊</li><li>登陸進入 <a href="https://bot.q.qq.com/open/#/botlogin" target="_blank" rel="noreferrer">機器人管理後臺</a> 並建立官方機器人</li><li>创建完成后，在 <a href="https://bot.q.qq.com/#/developer/developer-setting" target="_blank" rel="noreferrer">频道机器人开发设置</a> 获取机器人基本数据 [id, token, key(secret)]</li><li>将上面的基本数据作为机器人配置项即可使用</li></ol><p>参考文档：<a href="https://satori.js.org/qq-guild-sdk/api/core/Bot.html#bot" target="_blank" rel="noreferrer">https://satori.js.org/qq-guild-sdk/api/core/Bot.html#bot</a></p><h2 id="机器人选项" tabindex="-1">机器人选项 <a class="header-anchor" href="#机器人选项" aria-label="Permalink to &quot;机器人选项&quot;">​</a></h2><h3 id="options-bots-indents" tabindex="-1">options(.bots[]).indents <a class="header-anchor" href="#options-bots-indents" aria-label="Permalink to &quot;options(.bots[]).indents&quot;">​</a></h3><ul><li>类型: <code>GBot.Intents | number</code></li><li>默认值: <code>0</code></li></ul><p>该机器人申请的 WS 监听事件权限。</p><h3 id="options-bots-id" tabindex="-1">options(.bots[]).id <a class="header-anchor" href="#options-bots-id" aria-label="Permalink to &quot;options(.bots[]).id&quot;">​</a></h3><ul><li>类型: <code>string</code></li></ul><p>机器人 id。</p><h3 id="options-bots-key" tabindex="-1">options(.bots[]).key <a class="header-anchor" href="#options-bots-key" aria-label="Permalink to &quot;options(.bots[]).key&quot;">​</a></h3><ul><li>类型: <code>string</code></li></ul><p>机器人密钥，管理端又称呼为 secret。</p><h3 id="options-bots-token" tabindex="-1">options(.bots[]).token <a class="header-anchor" href="#options-bots-token" aria-label="Permalink to &quot;options(.bots[]).token&quot;">​</a></h3><ul><li>类型: <code>string</code></li></ul><p>机器人 token。</p><h2 id="适配器选项" tabindex="-1">适配器选项 <a class="header-anchor" href="#适配器选项" aria-label="Permalink to &quot;适配器选项&quot;">​</a></h2><p>包括全部的 <a href="./../../api/core/adapter.html#类：adapter-wsclient"><code>WsClient</code></a> 选项和下列额外选项：</p><h3 id="options-sandbox" tabindex="-1">options.sandbox <a class="header-anchor" href="#options-sandbox" aria-label="Permalink to &quot;options.sandbox&quot;">​</a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否开启沙盒。</p><h3 id="options-endpoint" tabindex="-1">options.endpoint <a class="header-anchor" href="#options-endpoint" aria-label="Permalink to &quot;options.endpoint&quot;">​</a></h3><ul><li>类型: <code>string</code></li><li>默认值: <code>&#39;https://api.sgroup.qq.com/&#39;</code></li></ul><p>要请求的 API 网址。</p><h3 id="options-authtype" tabindex="-1">options.authType <a class="header-anchor" href="#options-authtype" aria-label="Permalink to &quot;options.authType&quot;">​</a></h3><ul><li>类型: <code>&#39;bot&#39; | &#39;bearer&#39;</code></li><li>默认值: <code>&#39;bot&#39;</code></li></ul><p>验证方式。</p><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><ul><li>Q: 如何创建官方机器人?</li><li>A: 使用该 <a href="https://bot.q.qq.com/open/#/type?appType=2" target="_blank" rel="noreferrer">官方网站</a> 注册。</li><li>Q: 如何登陆管理后台?</li><li>A: <a href="https://bot.q.qq.com/open/#/botlogin" target="_blank" rel="noreferrer">QQ 频道机器人管理后台登陆</a></li><li>Q: 如何获取机器人基本数据 (id, token, key)?</li><li>A: <a href="https://bot.q.qq.com/#/developer/developer-setting" target="_blank" rel="noreferrer">QQ 频道机器人开发设置</a></li><li>Q: 如何申请测试频道?</li><li>A: <a href="https://docs.qq.com/form/page/DZVF3RFJnTGF0Y3Nk?_w_tencentdocx_form=1" target="_blank" rel="noreferrer">申请测试频道问卷</a></li><li>Q: 如何申请测试 (私域) 频道不校验语料?</li><li>A: <a href="https://wj.qq.com/s2/9379748/ed13/" target="_blank" rel="noreferrer">私域频道问卷</a></li></ul>',32)]))}const q=o(r,[["render",l]]);export{u as __pageData,q as default};

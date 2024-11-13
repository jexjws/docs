import{_ as l,k as i,m as s,l as e,B as t,f as o,y as r,A as h,j as d}from"./chunks/framework.Cum5LaDG.js";const I=JSON.parse('{"title":"频道 (Channel)","description":"","frontmatter":{},"headers":[],"relativePath":"ja-JP/api/platform/channel.md","filePath":"ja-JP/api/platform/channel.md"}'),p={name:"ja-JP/api/platform/channel.md"},g={id:"bot-getchanneliter",tabindex:"-1"};function c(k,a,u,b,m,C){const n=h("badge");return d(),i("div",null,[a[4]||(a[4]=s(`<h1 id="频道" tabindex="-1">频道 (Channel) <a class="header-anchor" href="#频道" aria-label="Permalink to &quot;频道 (Channel)&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>消歧义：本节介绍跨平台协议中的频道对象。</p><ul><li>要了解数据库中的频道，请前往 <a href="./../database/built-in.html#channel">API &gt; 数据库 &gt; 内置数据结构</a></li><li>要了解两者的区别，请前往 <a href="./../glossary.html#频道">API &gt; 术语表</a></li></ul></div><h2 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to &quot;类型定义&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Channel</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  id</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  name</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="bot-getchannel" tabindex="-1">bot.getChannel(channelId) <a class="header-anchor" href="#bot-getchannel" aria-label="Permalink to &quot;bot.getChannel(channelId)&quot;">​</a></h3><ul><li><strong>channelId:</strong> <code>string</code> 频道 ID</li><li>返回值: <code>Promise&lt;Channel&gt;</code> 频道信息</li></ul><p>获取频道信息。</p><h3 id="bot-getchannellist" tabindex="-1">bot.getChannelList(guildId, next?) <a class="header-anchor" href="#bot-getchannellist" aria-label="Permalink to &quot;bot.getChannelList(guildId, next?)&quot;">​</a></h3><ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li><strong>next:</strong> <code>string</code> 分页令牌</li><li>返回值: <code>Promise&lt;List&lt;Channel&gt;&gt;</code> 频道列表</li></ul><p>获取某个群组的频道列表。</p>`,11)),e("h3",g,[a[1]||(a[1]=t("bot.getChannelIter(guildId) ")),o(n,null,{default:r(()=>a[0]||(a[0]=[t("内置")])),_:1}),a[2]||(a[2]=t()),a[3]||(a[3]=e("a",{class:"header-anchor",href:"#bot-getchanneliter","aria-label":'Permalink to "bot.getChannelIter(guildId) <badge>内置</badge>"'},"​",-1))]),a[5]||(a[5]=e("ul",null,[e("li",null,[e("strong",null,"guildId:"),t(),e("code",null,"string"),t(" 群组 ID")]),e("li",null,[t("返回值: "),e("code",null,"AsyncIterable<Channel>"),t(" 异步迭代器")])],-1)),a[6]||(a[6]=e("p",null,"获取某个群组的频道列表的异步迭代器。",-1))])}const B=l(p,[["render",c]]);export{I as __pageData,B as default};

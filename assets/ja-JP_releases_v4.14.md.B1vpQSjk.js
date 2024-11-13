import{_ as a,k as i,m as l,j as r}from"./chunks/framework.Cum5LaDG.js";const u=JSON.parse('{"title":"v4.14 版本介绍","description":"","frontmatter":{},"headers":[],"relativePath":"ja-JP/releases/v4.14.md","filePath":"ja-JP/releases/v4.14.md"}'),t={name:"ja-JP/releases/v4.14.md"};function s(o,e,h,n,c,d){return r(),i("div",null,e[0]||(e[0]=[l('<h1 id="v4-14-版本介绍" tabindex="-1">v4.14 版本介绍 <a class="header-anchor" href="#v4-14-版本介绍" aria-label="Permalink to &quot;v4.14 版本介绍&quot;">​</a></h1><ul><li><a href="https://github.com/koishijs/koishi/issues/1138" target="_blank" rel="noreferrer">Roadmap</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.14.0" target="_blank" rel="noreferrer">v4.14.0</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.14.1" target="_blank" rel="noreferrer">v4.14.1</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.14.2" target="_blank" rel="noreferrer">v4.14.2</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.14.3" target="_blank" rel="noreferrer">v4.14.3</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.14.4" target="_blank" rel="noreferrer">v4.14.4</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.14.5" target="_blank" rel="noreferrer">v4.14.5</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.14.6" target="_blank" rel="noreferrer">v4.14.6</a></li></ul><h2 id="权限系统" tabindex="-1">权限系统 <a class="header-anchor" href="#权限系统" aria-label="Permalink to &quot;权限系统&quot;">​</a></h2><p>v4.14 版本中，我们引入了新的权限系统。相比过去用数字来表示用户的权限等级，新的权限系统将提供一套更加灵活的权限管理方案，包括：</p><ul><li>支持细粒度的权限控制</li><li>支持权限组和用户组等概念</li><li>允许插件自定义权限</li><li>能够与平台原生的权限进行对接</li></ul><p>新的权限系统未来还会与控制台、sudo 插件等进行整合，将权限管理的边界扩展到更多的场景。</p><h2 id="配置界面优化" tabindex="-1">配置界面优化 <a class="header-anchor" href="#配置界面优化" aria-label="Permalink to &quot;配置界面优化&quot;">​</a></h2><p>配置项库 schemastery-vue 升级到了 v7 版本，包含以下更新：</p><ul><li>重新设计了 UI，将菜单置于配置项右侧按钮处，并为菜单项增加了图标</li><li>支持了 <code>transform</code> 类型中回调函数的序列化</li><li>支持了 <code>.collapse()</code> 方法，允许显式声明一个配置项可折叠</li><li>支持了 <code>.experimental()</code> 和 <code>.deprecated()</code> 方法，用于声明配置项的实验性或已废弃状态</li><li>部分类型支持了「在上方插入」「在下方插入」菜单项</li><li><code>bitset</code> 类型支持了「全部选中」「清空选择」菜单项</li><li>支持了 <code>.extra()</code> 方法和类型扩展</li></ul><h2 id="适配器更新" tabindex="-1">适配器更新 <a class="header-anchor" href="#适配器更新" aria-label="Permalink to &quot;适配器更新&quot;">​</a></h2><p>这个版本中我们增加了大量官方适配器，可用于以下平台：</p><ul><li>钉钉</li><li>微信公众号</li><li>企业微信</li><li>Slack</li><li>WhatsApp</li></ul><p>同时也为现有的适配器增加了新的功能：</p><ul><li>支持了斜线指令 (Discord, Telegram)</li></ul><h2 id="协议升级" tabindex="-1">协议升级 <a class="header-anchor" href="#协议升级" aria-label="Permalink to &quot;协议升级&quot;">​</a></h2><p>最后，我们也将 Satori 更新到了 v3 alpha 版本。新版本引入了一些实验性功能，并将在 Koishi v4.15 中进入稳定版本。关于这些新功能就留到下个版本介绍吧。</p>',16)]))}const k=a(t,[["render",s]]);export{u as __pageData,k as default};

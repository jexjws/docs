import{_ as s,k as n,m as e,j as p}from"./chunks/framework.Cum5LaDG.js";const u=JSON.parse('{"title":"公网部署","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/manual/recipe/server.md","filePath":"zh-CN/manual/recipe/server.md"}'),i={name:"zh-CN/manual/recipe/server.md"};function t(r,a,o,l,h,c){return p(),n("div",null,a[0]||(a[0]=[e(`<h1 id="公网部署" tabindex="-1">公网部署 <a class="header-anchor" href="#公网部署" aria-label="Permalink to &quot;公网部署&quot;">​</a></h1><p>Koishi 应用默认情况下只能在本机访问。而对于某些需求，你可能希望在公网上访问到 Koishi 的控制台或其他网络服务：</p><ul><li>让更多人访问到你的 Koishi 控制台</li><li>使用作为 webhook 服务端的插件 (例如 <a href="https://github.koishi.chat" target="_blank" rel="noreferrer">github</a> 和部分适配器插件)</li></ul><p>本节教程将指导你完成 Koishi 应用的公网部署。</p><h2 id="配置用户登录" tabindex="-1">配置用户登录 <a class="header-anchor" href="#配置用户登录" aria-label="Permalink to &quot;配置用户登录&quot;">​</a></h2><p>将 Koishi 不受限制地暴露在公网上可能会导致你的服务器受到攻击。因此，你需要妥善配合用户登录等方式以限制控制台功能的访问能力。</p><p>在 <a href="./../usage/platform.html#console-login">前面的章节</a> 中，我们已经介绍了 <a href="./../../plugins/console/auth.html">auth</a> 插件的使用方法。</p><h2 id="配置服务器地址" tabindex="-1">配置服务器地址 <a class="header-anchor" href="#配置服务器地址" aria-label="Permalink to &quot;配置服务器地址&quot;">​</a></h2><p>Koishi 的服务器功能是由预装插件 <a href="./../../plugins/develop/server.html">@koishijs/plugin-server</a> 提供的。</p><p>前往「插件配置」页面，找到 server 插件，并将 <code>host</code> 修改为 <code>0.0.0.0</code>，随后点击右上角的「重载配置」。等待插件重启之后，你就可以使用 <code>IP:端口</code> 的方式，在局域网内任意设备的浏览器上访问到 Koishi 控制台了。</p><p>如果你将 Koishi 应用暴露在公网上，并配置了相应的域名解析记录，你还需要将 <code>selfUrl</code> 修改为能访问到 Koishi 实例的地址。</p><h2 id="配置反向代理" tabindex="-1">配置反向代理 <a class="header-anchor" href="#配置反向代理" aria-label="Permalink to &quot;配置反向代理&quot;">​</a></h2><p>如果你有更复杂的需求，例如配置 SSL、域名等，可以使用反向代理。常见的方案有 nginx、Caddy 等。在同设备上使用反向代理时，你不需要修改上述 <code>host</code> 配置项。</p><h3 id="使用-caddy" tabindex="-1">使用 Caddy <a class="header-anchor" href="#使用-caddy" aria-label="Permalink to &quot;使用 Caddy&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span># 如果你希望使用域名，并自动签发 SSL 证书，请将下方 :80 改为你的域名</span></span>
<span class="line"><span># https://caddyserver.com/docs/caddyfile</span></span>
<span class="line"><span>:80 {</span></span>
<span class="line"><span>  reverse_proxy http://127.0.0.1:5140</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="使用-nginx" tabindex="-1">使用 nginx <a class="header-anchor" href="#使用-nginx" aria-label="Permalink to &quot;使用 nginx&quot;">​</a></h3><p>下面给出一段 nginx 配置作为参考：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span># http://nginx.org/en/docs/http/websocket.html</span></span>
<span class="line"><span>map $http_upgrade $connection_upgrade {</span></span>
<span class="line"><span>  default upgrade;</span></span>
<span class="line"><span>  &#39;&#39; close;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>  # server_name, port, ssl 等设置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  location / {</span></span>
<span class="line"><span>    # 这里的 5140 对应 Koishi 实例的端口</span></span>
<span class="line"><span>    proxy_pass http://127.0.0.1:5140/;</span></span>
<span class="line"><span>    proxy_redirect off;</span></span>
<span class="line"><span>    proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>    proxy_set_header X-Forwarded-Host $http_host;</span></span>
<span class="line"><span>    proxy_read_timeout 300s;</span></span>
<span class="line"><span>    proxy_send_timeout 300s;</span></span>
<span class="line"><span>    proxy_http_version 1.1;</span></span>
<span class="line"><span>    proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span>    proxy_set_header Connection $connection_upgrade;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="接下来" tabindex="-1">接下来…… <a class="header-anchor" href="#接下来" aria-label="Permalink to &quot;接下来……&quot;">​</a></h2><p>完成初步配置以后，有一些额外的社区插件可以帮助你更好地部署 Koishi 控制台。</p><h3 id="添加备案信息" tabindex="-1">添加备案信息 <a class="header-anchor" href="#添加备案信息" aria-label="Permalink to &quot;添加备案信息&quot;">​</a></h3><p>如果你的服务器在国内，你需要在控制台中添加备案信息，才能在公网上顺利访问。此时你可以使用 <a href="https://github.com/koishijs/koishi-plugin-footer" target="_blank" rel="noreferrer">footer</a> 等插件来完成配置。</p>`,22)]))}const _=s(i,[["render",t]]);export{u as __pageData,_ as default};

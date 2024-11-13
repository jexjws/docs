import{_ as s,k as a,m as t,j as e}from"./chunks/framework.Cum5LaDG.js";const c=JSON.parse('{"title":"@koishijs/plugin-adapter-matrix","description":"","frontmatter":{},"headers":[],"relativePath":"de-DE/plugins/adapter/matrix.md","filePath":"de-DE/plugins/adapter/matrix.md"}'),n={name:"de-DE/plugins/adapter/matrix.md"};function l(o,i,h,r,p,d){return e(),a("div",null,i[0]||(i[0]=[t(`<h1 id="koishijs-plugin-adapter-matrix" tabindex="-1">@koishijs/plugin-adapter-matrix <a class="header-anchor" href="#koishijs-plugin-adapter-matrix" aria-label="Permalink to &quot;@koishijs/plugin-adapter-matrix&quot;">​</a></h1><h2 id="接入方式" tabindex="-1">接入方式 <a class="header-anchor" href="#接入方式" aria-label="Permalink to &quot;接入方式&quot;">​</a></h2><ol><li>参考 <a href="https://spec.matrix.org/unstable/application-service-api/#registration" target="_blank" rel="noreferrer">此链接</a> 编写 <code>registry.yaml</code> 文件：</li></ol><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">koishi</span><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                    # Application Service 的 ID</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">hs_token</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:                     </span><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 填入任意内容，与配置文件相对应，请确保不会泄漏</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">as_token</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:                     </span><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 填入任意内容，与配置文件相对应，请确保不会泄漏</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:                          </span><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 你的机器人地址，通常是 {selfUrl}/matrix</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">sender_localpart</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">koishi</span><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      # 不能与机器人的 ID 相同</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">namespaces</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  users</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">exclusive</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 这里填入你的机器人的 userId</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 如果需要同时接入多个 matrix 机器人，请使用正则表达式</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    regex</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;@koishi:matrix.example.com&#39;</span></span></code></pre></div><ol start="2"><li>将 <code>registry.yaml</code> 添加进你的服务器 (如 synapse 则使用 <code>app_service_config_files</code> 配置项来指向 <code>registry.yaml</code> 并重启服务器)</li><li>在控制台中配置本插件，<code>host</code> 填入你的 Homeserver 域名，<code>hs_token</code>, <code>as_token</code> 上述文件中的对应值，<code>id</code> 填入任意值 (需要与 <code>sender_localpart</code> 不同)</li><li>安装 <a href="https://common.koishi.chat/plugins/verifier.html" target="_blank" rel="noreferrer">koishi-plugin-verifier</a> (或其他自助通过群组邀请的插件)</li><li>在房间中邀请机器人 (机器人的 ID 为 <code>@\${id}:\${host}</code>)</li></ol><h2 id="配置项" tabindex="-1">配置项 <a class="header-anchor" href="#配置项" aria-label="Permalink to &quot;配置项&quot;">​</a></h2><h3 id="options-id" tabindex="-1">options.id <a class="header-anchor" href="#options-id" aria-label="Permalink to &quot;options.id&quot;">​</a></h3><ul><li>类型: <code>string</code></li><li>必需参数</li></ul><p>机器人的 ID。机器人最后的用户名将会是 <code>@{id}:{host}</code>。请注意不能与上面的 <code>sender_localpart</code> 相同。</p><h3 id="options-host" tabindex="-1">options.host <a class="header-anchor" href="#options-host" aria-label="Permalink to &quot;options.host&quot;">​</a></h3><ul><li>类型: <code>string</code></li><li>必需参数</li></ul><p>Matrix Homeserver 域名。</p><h3 id="options-hstoken" tabindex="-1">options.hsToken <a class="header-anchor" href="#options-hstoken" aria-label="Permalink to &quot;options.hsToken&quot;">​</a></h3><ul><li>类型: <code>string</code></li><li>必需参数</li></ul><p>与上述文件中的 <code>hs_token</code> 对应。</p><h3 id="options-astoken" tabindex="-1">options.asToken <a class="header-anchor" href="#options-astoken" aria-label="Permalink to &quot;options.asToken&quot;">​</a></h3><ul><li>类型: <code>string</code></li><li>必需参数</li></ul><p>与上述文件中的 <code>as_token</code> 对应。</p><h3 id="options-endpoint" tabindex="-1">options.endpoint <a class="header-anchor" href="#options-endpoint" aria-label="Permalink to &quot;options.endpoint&quot;">​</a></h3><ul><li>类型: <code>string</code></li></ul><p>Matrix Homeserver 地址。默认为 <code>https://{host}</code>。</p><h3 id="options-name" tabindex="-1">options.name <a class="header-anchor" href="#options-name" aria-label="Permalink to &quot;options.name&quot;">​</a></h3><ul><li>类型: <code>string</code></li></ul><p>机器人的名称，如果设置了将会在启动时为机器人更改。</p><h3 id="options-avatar" tabindex="-1">options.avatar <a class="header-anchor" href="#options-avatar" aria-label="Permalink to &quot;options.avatar&quot;">​</a></h3><ul><li>类型: <code>string</code></li></ul><p>机器人的头像地址，如果设置了将会在启动时为机器人更改。</p>`,27)]))}const g=s(n,[["render",l]]);export{c as __pageData,g as default};

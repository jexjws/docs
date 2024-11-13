import{_ as s,k as a,m as t,j as n}from"./chunks/framework.Cum5LaDG.js";const c=JSON.parse('{"title":"国际化 (I18n)","description":"","frontmatter":{},"headers":[],"relativePath":"ja-JP/api/service/i18n.md","filePath":"ja-JP/api/service/i18n.md"}'),e={name:"ja-JP/api/service/i18n.md"};function l(h,i,p,r,d,o){return n(),a("div",null,i[0]||(i[0]=[t(`<h1 id="国际化" tabindex="-1">国际化 (I18n) <a class="header-anchor" href="#国际化" aria-label="Permalink to &quot;国际化 (I18n)&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>参见：<a href="./../../guide/i18n/">开发 &gt; 国际化</a></p></div><h2 id="实例方法" tabindex="-1">实例方法 <a class="header-anchor" href="#实例方法" aria-label="Permalink to &quot;实例方法&quot;">​</a></h2><h3 id="ctx-i18n-define" tabindex="-1">ctx.i18n.define(locale, dict) <a class="header-anchor" href="#ctx-i18n-define" aria-label="Permalink to &quot;ctx.i18n.define(locale, dict)&quot;">​</a></h3><ul><li><strong>locale:</strong> <code>string</code> 语言代码</li><li><strong>dict:</strong> <code>Dict</code> 本地化文本</li></ul><p>定义本地化文本。</p><p>通常的用法是将本地化文本写在单独的文件中，然后使用 <code>require</code> 引入。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">i18n</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">define</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;zh-CN&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">require</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;./locales/zh-CN&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">))</span></span></code></pre></div><h3 id="ctx-i18n-find" tabindex="-1">ctx.i18n.find(path, actual, options?) <a class="header-anchor" href="#ctx-i18n-find" aria-label="Permalink to &quot;ctx.i18n.find(path, actual, options?)&quot;">​</a></h3><ul><li><strong>path:</strong> <code>string</code> 路径模式</li><li><strong>actual:</strong> <code>string</code> 要搜索的文本</li><li><strong>options.minSimilarity:</strong> <code>number</code> 最小相似度，默认值为 <code>ctx.root.config.minSimilarity</code></li><li>返回值: <code>FindResult[]</code></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> FindResult</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  locale</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  data</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Dict</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  similarity</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>从本地化文本的特定路径中反向搜索一段文本。</p>`,12)]))}const g=s(e,[["render",l]]);export{c as __pageData,g as default};

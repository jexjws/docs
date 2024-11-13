import{_ as s,k as a,m as e,j as t}from"./chunks/framework.Cum5LaDG.js";const c=JSON.parse('{"title":"查询构造器 (Selection)","description":"","frontmatter":{},"headers":[],"relativePath":"ja-JP/api/database/selection.md","filePath":"ja-JP/api/database/selection.md"}'),l={name:"ja-JP/api/database/selection.md"};function h(n,i,k,p,r,o){return t(),a("div",null,i[0]||(i[0]=[e(`<h1 id="查询构造器" tabindex="-1">查询构造器 (Selection) <a class="header-anchor" href="#查询构造器" aria-label="Permalink to &quot;查询构造器 (Selection)&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>参见：<a href="./../../guide/database/selection.html">开发 &gt; 数据库 &gt; 进阶查询技巧</a></p></div><p><code>Selection</code> 可以由 <a href="./database.html#database-select"><code>database.select()</code></a> 或 <a href="./database.html#database-join"><code>database.join()</code></a> 方法创建，也可以被其他 <code>Selection</code> 的实例方法返回。它提供了一组链式调用的 API，用于构造查询语句。</p><h2 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to &quot;类型定义&quot;">​</a></h2><h3 id="row" tabindex="-1">Row <a class="header-anchor" href="#row" aria-label="Permalink to &quot;Row&quot;">​</a></h3><p>象征一行数据的代理对象。其上的属性对应取值的 <a href="./evaluation.html"><code>EvalExpr</code></a>。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> EvalExpr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Comparable</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> ?</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {} </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Row</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Row</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">S</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  [</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">K</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> in</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> keyof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> S</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">NonNullable</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">S</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">K</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]&gt;&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h3 id="callback" tabindex="-1">Callback <a class="header-anchor" href="#callback" aria-label="Permalink to &quot;Callback&quot;">​</a></h3><p>可以视为字段的回调函数。接受当前行作为参数，返回一个 <a href="./evaluation.html"><code>EvalExpr</code></a>。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Callback</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">S</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E36209;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">row</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Row</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">S</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> EvalExpr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><h3 id="fieldlike" tabindex="-1">FieldLike <a class="header-anchor" href="#fieldlike" aria-label="Permalink to &quot;FieldLike&quot;">​</a></h3><p>一个可用字段。该类型可以是表中现有的字段名或者一个由回调函数表示的虚拟字段。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> FieldLike</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">S</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> keyof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> S</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Callback</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">S</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><h3 id="project" tabindex="-1">Project <a class="header-anchor" href="#project" aria-label="Permalink to &quot;Project&quot;">​</a></h3><p>使用多个字段构造新的虚拟表。该类型可以是字段名数组或者一个由 <code>FieldLike</code> 构成的字典。如果是字段名数组，则新的表将会沿用这些字段的名称；否则将会使用字典的键作为字段名。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Project</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">S</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">keyof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> S</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Dict</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">FieldLike</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">S</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;&gt;</span></span></code></pre></div><h2 id="实例方法" tabindex="-1">实例方法 <a class="header-anchor" href="#实例方法" aria-label="Permalink to &quot;实例方法&quot;">​</a></h2><h3 id="selection-where" tabindex="-1">selection.where(query) <a class="header-anchor" href="#selection-where" aria-label="Permalink to &quot;selection.where(query)&quot;">​</a></h3><ul><li><strong>query:</strong> <a href="./query.html"><code>Query</code></a> 约束条件</li><li>返回值: <code>Selection</code></li></ul><p>添加约束条件。</p><h3 id="selection-orderby" tabindex="-1">selection.orderBy(key, order?) <a class="header-anchor" href="#selection-orderby" aria-label="Permalink to &quot;selection.orderBy(key, order?)&quot;">​</a></h3><ul><li><strong>key:</strong> <a href="#fieldlike"><code>FieldLike</code></a> 用于排序的字段</li><li><strong>order:</strong> <code>&#39;asc&#39; | &#39;desc&#39;</code> 排序方式</li><li>返回值: <code>Selection</code></li></ul><p>对结果进行排序。</p><h3 id="selection-limit" tabindex="-1">selection.limit(count) <a class="header-anchor" href="#selection-limit" aria-label="Permalink to &quot;selection.limit(count)&quot;">​</a></h3><ul><li><strong>count:</strong> <code>number</code> 数量限制</li><li>返回值: <code>Selection</code></li></ul><p>限制结果数量。</p><h3 id="selection-offset" tabindex="-1">selection.offset(count) <a class="header-anchor" href="#selection-offset" aria-label="Permalink to &quot;selection.offset(count)&quot;">​</a></h3><ul><li><strong>count:</strong> <code>number</code> 偏移量</li><li>返回值: <code>Selection</code></li></ul><p>跳过指定数量的结果。</p><h3 id="selection-project" tabindex="-1">selection.project(fields) <a class="header-anchor" href="#selection-project" aria-label="Permalink to &quot;selection.project(fields)&quot;">​</a></h3><ul><li><strong>fields:</strong> <a href="#project"><code>Project</code></a> 用于投影的字段</li><li>返回值: <code>Selection</code></li></ul><p>对结果进行投影。</p><h3 id="selection-groupby" tabindex="-1">selection.groupBy(fields, extra?) <a class="header-anchor" href="#selection-groupby" aria-label="Permalink to &quot;selection.groupBy(fields, extra?)&quot;">​</a></h3><ul><li><strong>fields:</strong> <a href="#project"><code>Project</code></a> 用于分组的字段</li><li><strong>extra:</strong> <a href="#fieldlike"><code>Dict&lt;FieldLike&gt;</code></a> 向分组内添加额外的字段</li><li>返回值: <code>Selection</code></li></ul><p>对结果进行分组。</p><h3 id="selection-execute" tabindex="-1">selection.execute(expr?) <a class="header-anchor" href="#selection-execute" aria-label="Permalink to &quot;selection.execute(expr?)&quot;">​</a></h3><ul><li><strong>expr:</strong> <a href="./evaluation.html"><code>EvalExpr</code></a> 用于计算的表达式</li><li>返回值: <code>Promise&lt;any&gt;</code></li></ul><p>执行查询并返回结果。如果没有传入 <code>expr</code>，返回的是一个包含所有结果的数组；否则返回的是由 <code>expr</code> 聚合计算出的结果。</p>`,38)]))}const B=s(l,[["render",h]]);export{c as __pageData,B as default};

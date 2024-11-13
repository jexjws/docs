import{_ as n,k as t,m as i,j as a}from"./chunks/framework.Cum5LaDG.js";const d=JSON.parse('{"title":"Multiple Configuration Maintenance","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/manual/recipe/multiple.md","filePath":"en-US/manual/recipe/multiple.md"}'),o={name:"en-US/manual/recipe/multiple.md"};function s(r,e,l,u,p,c){return a(),t("div",null,e[0]||(e[0]=[i('<h1 id="multiple-configuration-maintenance" tabindex="-1">Multiple Configuration Maintenance <a class="header-anchor" href="#multiple-configuration-maintenance" aria-label="Permalink to &quot;Multiple Configuration Maintenance&quot;">​</a></h1><p>Sometimes you might want to maintain different configurations of a plugin, for example:</p><ul><li>Multiple plugin instances in the same time</li><li>Switch between configurations at the certain time</li><li>Use different configurations for different channels</li></ul><p>Solutions can be varied for different demands, so there is no a unique answer. Fortunately, Koishi has already provided solutions for all three situations above, and you only need to choose the appropriate solution according to your needs.</p><h2 id="single-instance" tabindex="-1">Single Instance <a class="header-anchor" href="#single-instance" aria-label="Permalink to &quot;Single Instance&quot;">​</a></h2><p>In each Koishi application, some plugins can be enabled multiple instances, others can&#39;t. It is not the defects of the plugin, but the expected behavior.In fact, the author of the plugin can specify which features can be enabled independently.This is reflected in two different types of plugins: those that can enable multiple configurations at the same time are called reusable plugins and instead are non-reusable plugins.</p><p>Typical reusable plugins are <a href="./../usage/adapter.html">Adapter Plugins</a>.Each adapter corresponds to a running bot, and bots on different platforms are configured by different adapters. So, if you want to configure multiple bots on the same platform, just follow the method in previous section to add multiple adapter plugins.</p><p>At the same time, the vast majority of plugins are not reusable. For such plugins, you can only have one running configuration at a time. If there&#39;s already a running configuration, you&#39;ll see a line prompting &quot;This plugin is already running and cannot be reused&quot; in other configurations. Of course, you can still prepare multiple configurations, then disable one configuration and enable another at the right time.</p><p>For those plugins that are not reusable, if you want to switch to different configurations in different cases, plugin authors are required to provide configurations with <a href="./../usage/customize.html#过滤器">filters</a>.If the configuration you want to modify does not support filters, then you may consider making suggestions to the plugin author, or using <a href="#多实例">multiple instances</a> described below.</p><h2 id="multiple-instances" tabindex="-1">Multiple Instances <a class="header-anchor" href="#multiple-instances" aria-label="Permalink to &quot;Multiple Instances&quot;">​</a></h2><p>Another option is to run multiple Koishi instances at the same time. Doing so makes it possible to use completely different plugin configurations in different instances, or even enable completely different combinations of plugins. But, by contrast, you need to maintain multiple instances and each requires a separate port.</p>',11)]))}const h=n(o,[["render",s]]);export{d as __pageData,h as default};

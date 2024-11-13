import{_ as t,a as n,b as o,c as a,d as i,e as l,f as s,g as u,h as r,i as p,j as g,k as c}from"./chunks/dependencies.dark.4RfMpj-m.js";import{_ as h,k as d,m,j as f}from"./chunks/framework.Cum5LaDG.js";const C=JSON.parse('{"title":"Install and Configure Plugins","description":"","frontmatter":{"prev":{"text":"Installation","link":"/en-US/manual/starter/"}},"headers":[],"relativePath":"en-US/manual/usage/market.md","filePath":"en-US/manual/usage/market.md"}'),b={name:"en-US/manual/usage/market.md"};function y(q,e,k,w,v,P){return f(),d("div",null,e[0]||(e[0]=[m('<h1 id="install-and-configure-plugins" tabindex="-1">Install and Configure Plugins <a class="header-anchor" href="#install-and-configure-plugins" aria-label="Permalink to &quot;Install and Configure Plugins&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This section covers the usage of pages such as &quot;Marketplace&quot;, &quot;Plugin Configuration&quot; and &quot;Dependency Management&quot;.</p></div><p>As the key feature, Console is a graphical interface which is very friendly for users. And there are majority functions in the console.</p><ul><li>Plugin installation, updating and uninstallation</li><li>Plugin enabling, disabling and configuration</li><li>Management of commands, database and locale text</li><li>Chat in simulated and real environment</li><li>Running status monitoring and statistics</li><li>Log management</li></ul><p>We will show installing and configuring of plugins with the <a href="./../../plugins/common/echo.html">echo</a> plugin. The echo plugin registered a command named <code>echo</code>. Use this command can output the input to the user originally.</p><h2 id="about-koishi-console" tabindex="-1">About Koishi Console <a class="header-anchor" href="#about-koishi-console" aria-label="Permalink to &quot;About Koishi Console&quot;">​</a></h2><p>The console will be opened automatically when you have a launcher or a template project installed successfully.</p><p>In the left section of the Console UI, you can see a sidebar that is used to toggle the interfaces on the right section. The dashboard page would be shown by default. There is also a status bar which is used to show the running status of bots at the bottom when you are using a PC or a tablet.</p><p class="light-only"><img src="'+t+'" alt="home"></p><p class="dark-only"><img src="'+n+'" alt="home"></p><p>You can learn more about the features and usage of each interface in the following sections.</p><h2 id="install-plugins" tabindex="-1">Install Plugins <a class="header-anchor" href="#install-plugins" aria-label="Permalink to &quot;Install Plugins&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Koishi team doesn&#39;t warrant the availability of third-party plugins.Plugins from unknown sources may break Koishi to crash, or have very serious consequences. If you have problems after downloading plugins, you can go to the user group or forum to provide feedback. In addition, some plugins are marked as &quot;unsafe&quot; and install such plugins will not be supported by the official group.</p></div><p>Go to the &quot;Marketplace&quot; page, where you will see all downloadable plugins here. Enter <code>echo</code> in the search box to find the plugin we want, click the &quot;Add&quot; button, and then click &quot;Installation&quot; in the popup dialog. Wait for a moment, and the plugin will be installed successfully.</p><p class="light-only"><img src="'+o+'" alt="select-version"></p><p class="dark-only"><img src="'+a+'" alt="select-version"></p><h2 id="enable-and-disable-plugins" tabindex="-1">Enable and Disable Plugins <a class="header-anchor" href="#enable-and-disable-plugins" aria-label="Permalink to &quot;Enable and Disable Plugins&quot;">​</a></h2><p>Koishi will not enable the plugin you just installed. You need to manually configure and enable it.Go to the &quot;Plugin Configuration&quot; page, where various configured plugins are listed in the left column. Among these, <span class="light-only">black</span><span class="dark-only">white</span> fonts show plugins that are running, while gray fonts show plugins that are not running yet.</p><p class="light-only"><img src="'+i+'" alt="plugins"></p><p class="dark-only"><img src="'+l+'" alt="plugins"></p><p>We can see that the name of the echo plugin is grey, indicating that it is not running.The echo plugin does not have any configurable items, so the details page on the right side is empty.We can directly click on the &quot;Enable Plugin&quot; button in the upper right corner and see the &quot;Enable success&quot; reminder that the echo plugin is already running.</p><p>It is also easy to disable the &quot;echo&quot; plugin. Click the &quot;Disable Plugin&quot; button in the upper right corner, then the plugin will stop running.Disabling a plugin will neither delete the plugin code nor delete the plugin configuration, so you can re-enable it at any time.</p><h2 id="plugins-configurations" tabindex="-1">Plugins configurations <a class="header-anchor" href="#plugins-configurations" aria-label="Permalink to &quot;Plugins configurations&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>When configuring plugins, please remember this principle: Don&#39;t change any configuration unless necessary. Koishi is designed to take into account both extension and utility, and many of the basic features are provided in the form of built-in plugins. The &quot;Marketplace&quot; and &quot;Plugin Configuration&quot; pages that we are already using are also provided by the &quot;market&quot; plugin and the &quot;config&quot; plugin preloaded.It is because all preloaded plugins are well configured, so you do not usually need to modify the preloaded plugins&#39; configuration.Changing the preloaded plugins&#39; configuration or delete the preloaded plugins may cause Koishi to run improperly.</p></div><p>While the &quot;echo&quot; plugin does not require configuration, more complex plugins often provide configurations that allow users to control the behavior of plugins. The picture below shows the configuration page of the &quot;novelai&quot; plugin.</p><p class="light-only"><img src="'+s+'" alt="settings"></p><p class="dark-only"><img src="'+u+'" alt="settings"></p><p>In this page, we can see many configurations, where you need to take note of:</p><ul><li>Required but unfilled configurations will display a <span style="font-weight:bold;color:var(--vp-c-red-1);">red</span> tooltip on the left, and they must be filled in correctly to enable the plugin.</li><li>Modified but unsaved configurations will display a <span style="font-weight:bold;color:var(--vp-c-indigo-1);">purple</span> tooltip on the left, and they will be saved after you click &quot;Enable Plugin&quot; or &quot;Save Configuration&quot; button. If you want to discard these changes, you can call the menu at the small triangle next to the configuration name, select &quot;Undo Changes&quot; to restore the configuration to the status last saved.</li></ul><h2 id="manage-plugins" tabindex="-1">Manage Plugins <a class="header-anchor" href="#manage-plugins" aria-label="Permalink to &quot;Manage Plugins&quot;">​</a></h2><h3 id="manage-groups" tabindex="-1">Manage Groups <a class="header-anchor" href="#manage-groups" aria-label="Permalink to &quot;Manage Groups&quot;">​</a></h3><p>Koishi provides a mechanism to group the plugins. You can add plugins into the groups to manage them at a time.</p><p>Koishi pre-configured some groups during the installation, while newly installed plugins will be placed at the bottom of the plugin list, indicating that it does not belong to any group.Both plugins and groups can change the order or move between groups by clicking and dragging.Believe you also find that the groups can be nested.</p><p>Creating a new group is also simple.In &quot;Global Configuration&quot; or in any group page, click the &quot;Create Group&quot; button in the top right corner to create a new group.The name of the new group is randomly generated, but you can change it by clicking on the name to the name you like.The groups can unfold and fold by clicking on the small triangle in the left bar.</p><p>In addition, the <a href="./../usage/customize.html#过滤器">filter</a> mechanism can also be used on groups to control the behavior of a range of plugins.</p><h3 id="adding-more-plugins" tabindex="-1">Adding More Plugins <a class="header-anchor" href="#adding-more-plugins" aria-label="Permalink to &quot;Adding More Plugins&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>通常情况下，一个插件只能同时运行一份配置。请参考 <a href="./../recipe/multiple.html">维护多份配置</a> 章节。</p></div><p>If an installed plugin is not shown in the plugin list, you can also add it manually. In &quot;Global Configuration&quot; or in any group page, click the &quot;Add Plugin&quot; button in the top right corner will eject a dialog box. Click on the plugin to be added in the dialog box to create a plugin configuration which is not enabled.</p><p class="light-only"><img src="'+r+'" alt="select-plugin"></p><p class="dark-only"><img src="'+p+'" alt="select-plugin"></p><h3 id="remove-plugin-or-group" tabindex="-1">Remove Plugin or Group <a class="header-anchor" href="#remove-plugin-or-group" aria-label="Permalink to &quot;Remove Plugin or Group&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>注意：此操作无法被撤销，如果你想要恢复之前的配置，只能再次手动添加。Please be careful.</p></div><p>Click Remove Plugin button in the top right corner in the configuration page of any plugin to remove the plugin configuration. Similarly, you can remove a plugin group by clicking &quot;Remove Group&quot; in the top right corner of its configuration page. When removing groups, all plugins in the group will also be deleted.</p><h2 id="update-and-uninstall-plugins" tabindex="-1">Update and Uninstall Plugins <a class="header-anchor" href="#update-and-uninstall-plugins" aria-label="Permalink to &quot;Update and Uninstall Plugins&quot;">​</a></h2><p>Go to the &quot;Dependency Management&quot; page. You can see the dependency list here.Dependencies may include Koishi properties, various plugins, and packages that support plugins to run, etc.</p><p>When the status shows &quot;Has Update&quot;, you can click the &quot;Modify&quot; button on the right, select the version you need in the top left corner of the popup dialog, and click &quot;Updated&quot; in the bottom right corner to complete your Updated.</p><p>You can also update multiple plugins. Select the version you need by relying on the dropdown menu on the right side of the dependency name. Then press the &quot;Apply changes&quot; button in the upper right corner.In addition, the &quot;Update All&quot; button in the top right corner can update all dependencies versions once(you still need to click &quot;Apply&quot; button).</p><p class="light-only"><img src="'+g+'" alt="dependencies"></p><p class="dark-only"><img src="'+c+'" alt="dependencies"></p>',49)]))}const x=h(b,[["render",y]]);export{C as __pageData,x as default};

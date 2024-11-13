import{_ as a,a as t}from"./chunks/database.dark.DrdhuidD.js";import{_ as o,k as s,m as n,j as i}from"./chunks/framework.Cum5LaDG.js";const b=JSON.parse('{"title":"Database Access","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/manual/recipe/dataview.md","filePath":"en-US/manual/recipe/dataview.md"}'),c={name:"en-US/manual/recipe/dataview.md"};function r(d,e,l,u,h,m){return i(),s("div",null,e[0]||(e[0]=[n('<h1 id="database-access" tabindex="-1">Database Access <a class="header-anchor" href="#database-access" aria-label="Permalink to &quot;Database Access&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Be careful when directly manipulating the database!</p></div><p>The database panel in the console&#39;s left-hand menu allows you to view, add, modify, or delete data in Koishi&#39;s database. In general, the database includes information about users and channels, as well as the records of the bot&#39;s message-sending frequency in each channel.</p><p class="light-only"><img src="'+a+'" alt="database"></p><p class="dark-only"><img src="'+t+'" alt="database"></p><p>Sometimes you may need to manually manipulate the database, such as when using the <code>authorize</code> command in the <code>Admin</code> plugin to set user permissions, the operator must have at least level 4 permissions by default.</p><p>To achieve this, you could go to the <code>Dataview</code> page in the console, find your own account under the corresponding platform (such as onebot) in the <code>user</code> table (you may need to send a message to the bot on the platform first), and then modify its corresponding <code>authority</code> value from the default value 1 to a value greater than or equal to 4. This will give your account a higher privilege, so now try using the <code>authorize</code> command to elevate the privilege of other accounts you want.</p>',7)]))}const g=o(c,[["render",r]]);export{b as __pageData,g as default};

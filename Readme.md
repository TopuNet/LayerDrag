# 拖拽排序插件 v1.1.2
### 安装：npm install topunet-layerdrag
### 暂时只支持PC端使用

文件结构：
-------------

		1. LayerDrag.js 放入项目文件夹jq（原生规范）或widget/lib（AMD规范）中

页面引用：
-------------

原生引用：

		1. 页面底端引用最新版 /inc/Jquery.min.js#1.x.x
		2. 后引用 /jq/LayerDrag.js

requireJS引用：
        
        2. 依赖LayerDrag.js和jquery.min.js#1.x，成功后返回对象LayerDrag


功能配置及启用：
--------------

初始化：

		var LayerDrag_obj = new LayerDrag();
        LayerDrag_obj.init({
            wrapper_box_selector: null, // 外盒选择器，无默认值。不能有padding和margin。如：ul.box
            items_box_selector: "li.item", // 单元选择器，不用涵盖外盒选择器。默认：li.item
            items_box_drag_class: "draging", // 单元拖拽时的样式名称。默认：draging
            items_box_space_class: "sapce" // 单元占位盒的样式名称。默认：space
        });


更新记录：
--------------

v1.1.2

        删除dist下js文件的调试输出

v1.1.1

        创建项目并发布

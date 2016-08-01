/**
 * Created by ylei on 16/8/1.
 */
/*
*   一、HTML+CSS
*   常见的属性
*   fontSize
*   color
*   width
*   height
*   background
*   display: none block inline inline-block
*   padding 上右下左
*   margin 上右下左
*   border 设置边框
*
*   脱离标准流
*   1. float
*   2. position
*   position 和 left right top bottom 结合使用
*
*   注意点:
*   1. 如果想相对父标签进行布局,那么把父标签position设置成releative
*   2. 子巨父相
*
*
*   常见的选择器
*   1. 标签选择器
*   tagName
*   2. 类选择器
*   .className
*   3. id选择器
*   #id
*   4. 后代选择器
*   tagName .clssName
*   5. 群组选择器(多个选择器之间用逗号隔开)
*   tagName, .className
*   6. 直接后代选择器(多个选择器用>号隔开)
*   tagName >.className
*   7. 属性选择器
*   tagName[attrName='attrValue']
*   8. 选择器组合(多个选择器黏在一起)
*   tagName.className#id
*   9. 伪类 tagName: --
*
*   二、JS
*   节点的基本操作CRUD
*   1. create()
*       var div = document.createElement('div');
*       document.body.appendChild(div);
*
*   2. read()
*       var img = document.getElementById('logo');
*
*   3. update()
*        var img = document.getElementById('logo');
*        img.src = '';
*
*   4. delete()
*
*
*   事件绑定
*   var button = document.getElementById('buttonId');
*   button.onClick = function(){
*
*   }
*
*
*   三、jQuery
*   通过选择器查找元素
*   a. $('选择器')
*   b. jQuery支持绝对多数css选择器
*
*   属性操作
*   获得属性    $('选择器').attr('属性名')
*   设置属性    $('选择器').attr('属性名','属性值')
*
*   五、HTML5框架
*
* */
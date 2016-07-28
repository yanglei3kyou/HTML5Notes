/**
 * Created by ylei on 16/7/28.
 */
/*
*   增加
*   1. document.write
*   2. 父标签 appendChild
* */

document.write('<p>GGGGG</p>');

var div = document.createElement('div');
div.innerHTML = 'Good Div';
div.style.backgroundColor = 'red';
div.style.width = '300px';

document.body.appendChild(div);

/*
 *   删除
 *   1. 本身 remove()
 *   2. 父标签 removeChild
 * */

var img = document.getElementsByTagName('img')[0];
img.remove();
// document.body.removeChild(img);

/*
 *   修改
 *   1. 获取本身,进行修改
 * */

var p = document.getElementsByTagName('p')[0];
p.innerHTML = 'P is Good';
p.style.backgroundColor = 'green';
p.style.width = '200px';

/*
 *   查询
 *   getElementById 根据标签 id 返回唯一对象
 *   getElementsByClassName 根据标签 class  返回数组
 *   getElementsByName 根据标签 name  返回数组
 *   getElementsByTagName 根据标签 标签名 返回数组
 * */


/**
 * Created by ylei on 16/7/28.
 */

// == 值比较 === 类型比较
function $(id) {
    return typeof id === 'string' ? document.getElementById(id):id;
}


window.onload = function () {
    // 拿到所有的li标签 和 li 对应的内容
    var title = $('tab-header').getElementsByTagName('li');
    var divs = $('tab-body').getElementsByTagName('div');

    // 判断
    if (title.length != divs.length) {
        return ;
    }

    for (var i = 0;i<title.length;i++) {
        var li = title[i];
        li.id = i;

        li.onmousemove = function () {
            for (var j = 0; j < title.length;j++) {
                title[j].className = '';
                divs[j].style.display = 'none';

            }

            this.className = 'select';
            divs[this.id].style.display = 'block';


        }
    }




}
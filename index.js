import './index.scss';

(function () {
    const wrapDom = document.querySelector('#imageWrap');
    const imageDom = document.querySelector('#imageViewer');

    // 拖拽事件回调
    const dropHandler = function (event) {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        wrapDom.style.borderColor = 'rgb(119,136,153)';
        if (!file || file.type.indexOf('image') === -1) {
            alert('请拖拽图片格式的文件到页面中的方框内.');
            return;
        }
        const reader = new FileReader();
        reader.onload = function () {
            imageDom.src = this.result;
        };
        reader.readAsDataURL(file);
    };

    // 拖入事件回调
    const dragEnterHandler = function () {
        wrapDom.style.borderColor = 'rgb(36,216,19)';
    };

    // 绑定拖拽事件
    wrapDom.addEventListener('drop', dropHandler);

    // 绑定拖入事件
    wrapDom.addEventListener('dragenter', dragEnterHandler);

    // 清除浏览器默认行为
    wrapDom.addEventListener('dragover', (e) => {
        e.preventDefault();
    }, false);
}());

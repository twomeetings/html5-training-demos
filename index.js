import './index.scss';

(function () {
    const wrapDom = document.querySelector('#imageWrap');
    const canvas = document.querySelector('#canvas');

    // 绘制图片
    const drawImage = (imageBase64) => {
        const tempImageDom = document.createElement('img');
        tempImageDom.src = imageBase64;
        tempImageDom.onload = function () {
            const { width, height } = tempImageDom;
            setBoxSize(width, height);
            setCanvasSize(width, height);
            const ctx = canvas.getContext("2d");
            ctx.drawImage(tempImageDom, 0, 0);
        };
    };

    // 设置容器尺寸
    const setBoxSize = (width, height) => {
        wrapDom.style.width = `${width}px`;
        wrapDom.style.height = `${height}px`;
    };

    // 设置canvas尺寸
    const setCanvasSize = (width, height) => {
        canvas.width = width;
        canvas.height = height;
    };

    // 保存图片
    const saveImage = (image) => {
        localStorage.setItem('myImage', image);
    };
    // 获取图片
    const getImage = () => {
        return localStorage.getItem('myImage');
    };

    // 获取初始化数据
    const loadHandler = function () {
        const image = getImage();
        if (image) {
            drawImage(image)
        }
    };

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
            // imageDom.src = this.result;
            drawImage(this.result);
            saveImage(this.result);
        };
        reader.readAsDataURL(file);
    };

    // 拖入事件回调
    const dragEnterHandler = function () {
        wrapDom.style.borderColor = 'rgb(36,216,19)';
    };

    // 页面初始化
    window.addEventListener('load', loadHandler);

    // 绑定拖拽事件
    wrapDom.addEventListener('drop', dropHandler);

    // 绑定拖入事件
    wrapDom.addEventListener('dragenter', dragEnterHandler);

    // 清除浏览器默认行为
    wrapDom.addEventListener('dragover', (e) => {
        e.preventDefault();
    }, false);
}());

// 渲染canvas内容
const renderCanvas = (canvas, imageDom) => {
    const { width, height } = canvas;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(imageDom, 0, 0, width, height);
    // 添加水印
    ctx.font = '24px sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'right';
    ctx.fillText('白色的水印', width - 10, height - 10);
};

// 创建图片dom元素并渲染在canvas中
export default (imageBase64, canvas, callBack) => {
    const imageDom = document.createElement('img');
    imageDom.src = imageBase64;
    imageDom.onload = function () {
        renderCanvas(canvas, imageDom);
        callBack && callBack(canvas);
    };
};
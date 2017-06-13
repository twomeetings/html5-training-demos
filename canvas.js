// 渲染canvas内容
const renderCanvas = (ctx, imageDom) => {
    ctx.drawImage(imageDom, 0, 0);
};

// 根据图像大小计算canvas尺寸
const setCanvasSize = (canvas, imageDom) => {
    const { width, height } = imageDom;
    let resultWidth = width;
    let resultHeight = height;
    const widthIsMAx = width >= height;
    if (widthIsMAx && width > 500) {
        resultWidth = 500;
        resultHeight = height * 500 / width;
    } else if (!widthIsMAx && height > 350) {
        resultHeight = 500;
        resultWidth = width * 500 / height;
    }
    canvas.width = resultWidth;
    canvas.height = resultHeight;
};

// 创建图片dom元素并渲染在指定大小的canvas中
export default (imageBase64, canvas) => {
    const imageDom = document.createElement('img');
    imageDom.src = imageBase64;
    imageDom.onload = function () {
        setCanvasSize(canvas, imageDom);
        const ctx = canvas.getContext("2d");
        renderCanvas(ctx, imageDom);
    };
};
import { saveImage, getImage } from './storageActions'
import drawImage from './canvas';
import './index.scss';

const wrapDom = document.querySelector('#imageWrap');
const canvas = document.querySelector('#canvas');
const downloadDom = document.querySelector('#download');

// 绘制图片
// const drawImage = (imageBase64, isFirstRender) => {
//     const tempImageDom = document.createElement('img');
//     tempImageDom.src = imageBase64;
//     tempImageDom.onload = function () {
//         const { width, height } = tempImageDom;
//         setBoxSize(width, height);
//         setCanvasSize(width, height);
//         const ctx = canvas.getContext("2d");
//         ctx.drawImage(tempImageDom, 0, 0);
//         // 添加水印
//         const gradient = ctx.createLinearGradient(0, 0, 150, 0);
//         gradient.addColorStop('0', "rgba(0,0,0,0.5)");
//         gradient.addColorStop('1.0', "rgba(225,225,225,0.5)");
//         ctx.font = '24px sans-serif';
//         ctx.globalCompositeOperation = 'lighter';
//         ctx.fillStyle = gradient;
//         ctx.textAlign = 'left';
//         ctx.textBaseline = 'top';
//         ctx.fillText('Watermark', 0, 0);
//         setDownloadLink();
//     };
// };

// 设置下载链接
const setDownloadLink = (tempCanvas) => {
    downloadDom.href = tempCanvas.toDataURL();
    downloadDom.style.display = 'inline-block'
};

// 获取初始化数据
const loadHandler = function () {
    const imageBase64 = getImage();
    if (imageBase64) {
        drawImage(imageBase64, canvas, setDownloadLink);
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
        drawImage(this.result, canvas, setDownloadLink);
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

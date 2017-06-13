import { saveImage, getImage } from './storageActions'
import drawImage from './canvas';
import './index.scss';

const wrapDom = document.querySelector('#imageWrap');
const canvas = document.querySelector('#canvas');

// 获取初始化数据
const loadHandler = function () {
    const image = getImage();
    if (image) {
        drawImage(image, canvas);
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
        drawImage(this.result, canvas);
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

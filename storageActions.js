// 保存图片
export const saveImage = (image) => {
    localStorage.setItem('myImage', image);
};
// 获取图片
export const getImage = () => {
    return localStorage.getItem('myImage');
};
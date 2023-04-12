import request from "@/utils/request";
/**
 * 获取首页部分分类数据
 */
export const findAllCategory = () => {
    return request('/home/category/head', 'get')
}


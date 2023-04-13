// 分类模块
import { topCategory } from "@/api/constants"
import { findAllCategory } from "@/api/category"
export default {
    namespaced: true,
    state() {
        return {
            // 分类信息集合
            list: topCategory.map(item => ({ name: item }))
        }
    },
    //加载数据成功后需要修改list所以需要mutations
    mutations: {
        setList(state, headCategory) {
            state.list = headCategory
        },
        show(state, item) {
            const category = state.list.find(category => category.id === item.id)
            category.open = true
        },
        hide(state, item) {
            const category = state.list.find(category => category.id === item.id)
            category.open = false
        }
    },
    actions: {
        async getList({ commit }) {
            const { result } = await findAllCategory()
            commit("setList", result)
        },
        async getCategory({ commit }) {
            const { result } = await findAllCategory()
            //给一级分类加上应该控制二级分类显示隐藏的数据open
            result.forEach(item => {
                item.open = false
            })
            //获取数据成功，提交mutations进行数据修改
            commit('setList', result)
        }
    }
}

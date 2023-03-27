//用户模块

export default {
    namespaced: true,
    state () {
        return {
            //用户数据
            profile: {
                id: '',
                avatar: "",
                nickname: '',
                account: '',
                mobile: '',
                token: ''
            }
        }
    },
    mutations: {
        //修改用户信息
        setUser (state, payload) {
            state.profile = payload
        }
    }
}
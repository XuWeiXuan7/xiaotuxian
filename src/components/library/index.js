// import XtxSkeleton from './xtx-skeleton.vue'
// import XtxCarousel from './xtx-carousel.vue'
// import XtxMore from './xtx-more.vue'
import { defineDirective } from '@/hooks'
// import XtxBread from './xtx-bread.vue'
// import XtxBreadItem from './xtx-brand-item.vue'
// export default {
//     install(app) {
//         app.component(XtxSkeleton.name, XtxSkeleton)
//         app.component(XtxCarousel.name, XtxCarousel)
//         app.component(XtxMore.name, XtxMore)
//         app.component(XtxBread.name, XtxBread)
//         app.component(XtxBreadItem.name, XtxBreadItem)
//         defineDirective(app)
//     }
// }
/**
 * 批量注册组件
 */
const importFn = require.context('./', false, /\.vue$/)
export default {
    install(app) {
        importFn.keys().forEach(key => {
            const component = importFn(key).default
            app.component(component.name, component)
        })
        // 定义指令
        defineDirective(app)
    }
}
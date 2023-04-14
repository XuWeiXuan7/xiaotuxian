import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'
import defaultImg from '@/assets/images/200.png'
export const useLazyData = (apiFn) => {
    const target = ref(null)
    const result = ref([])
    const { stop } = useIntersectionObserver(
        target, ([{ isIntersecting }], observerElement) => {
            if (isIntersecting) {
                stop()
                apiFn().then(data => {
                    result.value = data.result
                })
            }
        }
        , {
            threshold: 0
        }
    )
    return { target, result }
}
export const defineDirective = (app) => {
    // 图片懒加载指令
    app.directive('lazyload', {
        mounted(el, binding) {
            const observer = new IntersectionObserver(([{ isIntersecting }]) => {
                if (isIntersecting) {
                    observer.unobserve(el)
                    el.onerror = () => {
                        el.src = defaultImg
                    }
                    el.src = binding.value
                }
            }, {
                threshold: 0.01
            })
            observer.observe(el)
        },
    })
}
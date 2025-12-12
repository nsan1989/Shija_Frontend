import { useQuery } from '@tanstack/react-query'

export default function useBannerData() {

    const bannerAPIUrl = import.meta.env.VITE_BANNER_API
    const bannerBaseUrl = import.meta.env.VITE_BANNER_BASE_URL

    const { data, isLoading, error } = useQuery({
        queryKey: ['bannerData'],   //unique key for cache.
        queryFn: async () => {
            const response = await fetch(bannerAPIUrl)
            if(!response.ok) {
                throw new Error('failed to fetch data!')
            }
            const jsonData = await response.json()
            const desktop_images = jsonData.msg.map(
                (item) => `${bannerBaseUrl}${item.desktop_img}`
            );
            const mobile_images = jsonData.msg.map(
                (item) => `${bannerBaseUrl}${item.mobile_img}`
            );
            return {desktop_images, mobile_images}
        },
        staleTime: 1000 * 60 * 5,   //cache valid for 5 mins.
        cacheTime: 1000 * 60 * 10,  //keep in cache for 10 mins.
    })

    return { data, isLoading, error }
}

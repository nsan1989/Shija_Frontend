import { useQuery } from '@tanstack/react-query'

export default function useNewsSlideData() {

    const newsSlideUrl = import.meta.env.VITE_NEWS_SLIDE_API
    const newsSlideBaseUrl = import.meta.env.VITE_NEWS_SLIDE_BASE_URL

    const { data, isLoading, error } = useQuery({
        queryKey: ['newsSlideData'], //unique key for cache.
        queryFn: async () => {
            const response = await fetch(newsSlideUrl)
            if(!response.ok) {
                throw new Error('failed to fetch data!')
            }
            const jsonData = await response.json()
            const news_data = Array.isArray(jsonData?.msg)
                ?jsonData.msg.map((item) => ({
                    ...item,
                    image: `${newsSlideBaseUrl}${item.image}`
                }))
                : [];
            return { news_data }
        },
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 10,
    })

    return{ data, isLoading, error }
}

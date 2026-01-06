import { useQuery } from '@tanstack/react-query'

export default function useNewsViewData() {

    const newsViewUrl = import.meta.env.VITE_NEWS_VIEW_API
    const newsViewBaseUrl = import.meta.env.VITE_NEWS_VIEW_BASE_URL

    const { data, isLoading, error } = useQuery({
        queryKey: ['newsViewData'], //unique key for cache.
        queryFn: async () => {
            const response = await fetch(newsViewUrl)
            if(!response.ok) {
                throw new Error('failed to fetch data!')
            }
            const jsonData = await response.json()
            console.log(jsonData)
            const news_view_data = Array.isArray(jsonData?.msg)
                ?jsonData.msg.map((item) => ({
                    ...item,
                    image: `${newsViewBaseUrl}${item.image}`
                }))
                : [];
            return { news_view_data }
        },
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 10,
    })

    return{ data, isLoading, error }
}

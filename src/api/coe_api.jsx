import { useQuery } from "@tanstack/react-query";

export default function useCoeData() {

    const coeAPIUrl = import.meta.env.VITE_COE_API
    const coeBaseUrl = import.meta.env.VITE_COE_BASE_URL

    const { data, isLoading, error } = useQuery({
        queryKey: ['coeData'],
        queryFn: async () => {
            const response = await fetch(coeAPIUrl)
            if (!response.ok) {
                throw new Error('failed to fetch data!')
            }
            const jsonData = await response.json()
            const coe_data = Array.isArray(jsonData?.msg)
                ? jsonData.msg.map((item) => ({
                    ...item,
                    image: `${coeBaseUrl}${item.thumnail}`
                }))
                : [];
            return { coe_data }
        },
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 10,
    })

    return { data, isLoading, error }
}

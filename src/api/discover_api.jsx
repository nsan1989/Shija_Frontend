import { useQuery } from "@tanstack/react-query";

export default function useDiscoverData() {

    const discoverAPIUrl = import.meta.env.VITE_DISCOVER_API;
    const discoverBaseUrl = import.meta.env.VITE_DISCOVER_BASE_URL;

    const { data, isLoading, error } = useQuery({
        queryKey: ['discoversData'],
        queryFn: async () => {
            const response = await fetch(discoverAPIUrl)
            if(!response.ok) {
                throw new Error('failed to fetch data!')
            }
            const jsonData = await response.json()
            const discover_data = Array.isArray(jsonData?.msg)
                ? jsonData.msg.map((item) => ({
                    ...item,
                    image: `${discoverBaseUrl}${item.image}`
                }))
                : [];
            return { discover_data }
        },
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 10,
    })
    return { data, isLoading, error }
}

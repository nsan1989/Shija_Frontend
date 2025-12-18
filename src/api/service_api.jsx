import { useQuery } from "@tanstack/react-query";

export default function useServiceData() {
    const serviceAPIUrl = import.meta.env.VITE_SERVICE_API;
    const serviceBaseUrl = import.meta.env.VITE_SERVICE_BASE_URL;

    const { data, isLoading, error } = useQuery({
        queryKey: ['serviceData'],
        queryFn: async() => {
            const response = await fetch(serviceAPIUrl)
            if(!response.ok) {
                throw new Error('failed to fetch data!')
            }
            const jsonData = await response.json()
            const service_data = Array.isArray(jsonData?.msg)
                ?jsonData.msg.map((item) => ({
                    ...item,
                    image: `${serviceBaseUrl}${item.icon}`
                }))
                : [];
            return { service_data }
        },
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 12,
    })

    return { data, isLoading, error }
}

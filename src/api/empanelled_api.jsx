import { useQuery } from "@tanstack/react-query";

export default function useEmpanelledData() {
    const empanelledAPIUrl = import.meta.env.VITE_EMPANELLED_API;
    const empanelledBaseUrl = import.meta.env.VITE_EMPANELLED_BASE_UTL;

    const { data, isLoading, error } = useQuery({
        queryKey: ['empanelledData'],
        queryFn: async() => {
            const response = await fetch(empanelledAPIUrl)
            if(!response.ok) {
                throw new Error('failed to fetch data!')
            }
            const jsonData = await response.json()
            const empanelled_data = Array.isArray(jsonData?.msg)
                ?jsonData.msg.map((item) => ({
                    ...item,
                    image:  `${empanelledBaseUrl}${item.icon}`
                }))
                : [];
            return { empanelled_data }
        },
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 12,
    })

    return { data, isLoading, error }
}

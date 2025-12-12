import { useQuery } from "@tanstack/react-query"

export default function useOrganizationInfo() {

    const organizationInfoAPIUrl = import.meta.env.VITE_ORGANIZATION_INFO_API

    const { data, isLoading, error } = useQuery({
        queryKey: ['organizationData'],
        queryFn: async () => {
            const response = await fetch(organizationInfoAPIUrl)
            if(!response.ok) {
                throw new Error('failed to fetch data!')
            }
            const jsonData = await response.json()
            console.log('📦 API Response:', jsonData)
            return jsonData
        },
        staleTime: 1000 * 60 * 5,   
        cacheTime: 1000 * 60 * 10,
    })

    return { data, isLoading, error }
}

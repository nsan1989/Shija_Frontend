import { useQuery } from '@tanstack/react-query'

export default function useSiteSettings() {

    const siteSettingsAPIUrl = import.meta.env.VITE_SITE_SETTINGS_API

    const{ data, isLoading, error } = useQuery({
        queryKey: ['siteData'],
        queryFn: async () => {
            const response = await fetch(siteSettingsAPIUrl)
            if(!response.ok) {
                throw new Error('failed to fetch data!')
            }
            const jsonData = await response.json()
            return jsonData
        },
        staleTime: 1000 * 60 * 5,   
        cacheTime: 1000 * 60 * 10,
    })

    return { data, isLoading, error }
}

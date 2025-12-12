import { useQuery } from "@tanstack/react-query";

export default function useTestimonialData() {

    const testimonialAPIUrl = import.meta.env.VITE_TESTIMONIAL_API;
    const testimonialBaseUrl = import.meta.env.VITE_TESTIMONIAL_BASE_url;

    const { data, isLoading, error } = useQuery({
        queryKey: ['testimonialData'],
        queryFn: async() => {
            const response = await fetch(testimonialAPIUrl)
            if(!response.ok) {
                throw new Error('failed to fetch data!')
            }
            const jsonData = await response.json()
            const testimonial_data = Array.isArray(jsonData?.msg)
                ? jsonData.msg.map((item) => ({
                    ...item,
                    image: `${testimonialBaseUrl}${item.author_image}`
                }))
                : [];
            return { testimonial_data }
        },
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 12,
    })

    return { data, isLoading, error }
}

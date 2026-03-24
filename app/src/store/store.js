import { reactive } from 'vue'

export const store = reactive({
    squirrels: [],
    loading: false,
    error: null,

    async fetchSquirrels() {
        this.loading = true
        this.error = null
        try {
        const response = await fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json?$limit=50')
        if (!response.ok) throw new Error('Failed to fetch squirrels')
        const data = await response.json()
        this.squirrels = data.filter(s => s.primary_fur_color)
        } catch (err) {
        this.error = err.message || 'Unknown error'
        } finally {
        this.loading = false
        }
    },
})
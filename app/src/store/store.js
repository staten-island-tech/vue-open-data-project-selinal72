import { reactive } from 'vue'

export const store = reactive({
    chartData: {
        labels: [],
        datasets: [
            {
            data: [],
            backgroundColor: ['#9c9895', '#855635', '#000000'],
            },
        ],
    },

    loading: false,
    error: null,
    squirrels: [],

    async fetchSquirrels() {
        this.loading = true
        this.error = null
        try {
            const response = await fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json?$limit=50')
            if (!response.ok) throw new Error('Failed to fetch squirrels')
            const data = await response.json()
            this.squirrels = data.filter(squirrel => squirrel.primary_fur_color)
            this.fetchColors(this.squirrels)
        } catch (error) {
            this.error = error.message || 'Unknown error'
        } finally {
            this.loading = false
        }
    },

    fetchColors(data) {
        const colorCounts = {}
        data.forEach((squirrel) => {
            const color = squirrel.primary_fur_color
            if (color) {
                if (!colorCounts[color]) {
                    colorCounts[color] = 1
                } else {
                    colorCounts[color]++
                }
            }
        });
        this.chartData.labels = Object.keys(colorCounts)
        this.chartData.datasets[0].data = Object.values(colorCounts)
    }
})
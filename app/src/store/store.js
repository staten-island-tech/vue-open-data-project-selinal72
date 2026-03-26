import { reactive } from 'vue'

export const store = reactive({
    chartData: {
        labels: [],
        datasets: [
            {
            data: [40, 20, 12],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
    },

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

    async fetchColors(data) {
        colors = this.chartData.labels
        data.forEach((squirrel) => {
            if (!colors.includes(squirrel.primary_fur_color)) {
                colors.push({
                    color: squirrel.primary_fur_color,
                    amount: 1
                })
            }
        });
    }
})
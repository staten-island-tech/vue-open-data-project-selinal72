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

    scatterData: {
        datasets: [
            {
              label: 'Squirrel Location',
              data: [],
              backgroundColor: 'black',
              pointRadius: 4,
            },
        ],
    },

    async fetchSquirrels() {
        this.loading = true
        this.error = null
        try {
            const response = await fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json?$limit=50')
            if (!response.ok) throw new Error('Failed to fetch squirrels')
            const data = await response.json()
            this.squirrels = data.filter(squirrel => squirrel.primary_fur_color) // filter out squirrels w/o colors
            this.fetchColors(this.squirrels)
            this.buildScatter(this.squirrels)
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
    },

    buildScatter(data) {
        const points = data
          .map(squirrel => ({
            x: Number(squirrel.x),
            y: Number(squirrel.y),
          }))
          .filter(point => !Number.isNaN(point.x) && !Number.isNaN(point.y)) // filter out squirrels with invalid coordinates
          // Number.isNan returns true if number is NaN
    
        this.scatterData.datasets[0].data = points
      },
})
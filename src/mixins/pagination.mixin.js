import _ from 'lodash'

export default {
    data () {
        return {
            page: 1,
            pageSize: 10,
            pageCount: 0,
            allItems: [],
            viewportItems: []
        }
    },
    methods: {
        pageChangeHandler(page) {
            this.page = page
            this.viewportItems = this.allItems[page - 1] || this.allItems[0]
        },
        setupPagination(allItems) {
            this.allItems = _.chunk(allItems, this.pageSize)
            this.pageCount = _.size(this.allItems)
            this.viewportItems = this.allItems[this.page - 1] || this.allItems[0]
        }
    }
}
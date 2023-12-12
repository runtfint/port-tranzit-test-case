<template>
    <ul class="pagination__list">
        <li class="pagination__prev_button" v-if="currentPage !== 1 && totalPages !== 0">
            <button class="pagination__page_button" @click="handlePrevClick">Назад</button>
        </li>
        <li	v-for="page in definePages()" :key="page">

            <slot v-if="page === 'start_dots_spacing' || page === 'end_dots_spacing'">
                <button class="pagination__page_button">...</button>
            </slot>

            <slot v-else>
                <button
                    class="pagination__page_button"
                    @click="handleClick(page)"
                    :class="{ active: currentPage === page }"
                >
                    {{ page }}
                </button>
            </slot>
        </li>

        <li class="pagination__next_button" v-if="currentPage !== totalPages && totalPages !== 0">
            <button class="pagination__page_button" @click="handleNextClick">Вперед</button>
        </li>
    </ul>
</template>

<style scoped>

	.pagination__list {
		display: flex;
		list-style-type: none;
		margin: 0;
		padding: 0;
		justify-content: center;
    }
    .pagination__prev_button {
        margin-right: 20px;
    }
    .pagination__next_button {
        margin-left: 10px;
    }
    .pagination__page_button {
        width: 30px;
        height: 30px;
        border: 0;
        background: none;
        font-size: 14px;
        color: #FFF;
        
    }
    .pagination__page_button.active {
        background: #3ca444;
        border-radius: 3px;
    }
    .pagination__page_button:not(.active):hover {
        color: #3ca444;
    }


</style>

<script>
import { usePagination } from "@/hooks/usePagination"

export default {
	props: {
		boundaryCount: {
			type: Number,
			default: 1,
		},
		currentPage: {
			type: Number,
			default: 1,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		siblingCount: {
			type: Number,
			default: 1,
		},
		totalPages: {
			type: Number,
			default: 1,
		},
        pageChangeHandler: {
            type: Function
        }
	},
	methods: {
		definePages() {
			return usePagination({
				currentPage: this.$props.currentPage,
				siblingCount: this.$props.siblingCount,
				boundaryCount: this.$props.boundaryCount,
				totalPages: this.$props.totalPages,
			})
		},
		handlePrevClick() {
			if (this.currentPage > 1) {
				this.pageChangeHandler(this.currentPage - 1)
			}
		},
		handleNextClick() {
			if (this.currentPage < this.totalPages) {
				this.pageChangeHandler(this.currentPage + 1)
			}
		},
		handleClick(targetPage) {
            if (this.currentPage !== targetPage) {
				this.pageChangeHandler(targetPage)
			}
		},
	},
}
</script>
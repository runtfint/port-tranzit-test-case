import {generatePageButtonsArray} from '@/helpers/generatePageButtonsArray'

/**
 * Кастомный хук для генерирации массива страниц для пагинации.
 *
 * @param {number} options.currentPage - Текущая страница.
 * @param {number} options.siblingCount - Количество соседних страниц.
 * @param {number} options.boundaryCount - Количество граничных страниц.
 * @param {number} options.totalPages - Общее количество страниц.
 * @returns {Array} - Массив страниц для пагинации.
 */

export const usePagination = ({
    currentPage = 1,
    siblingCount = 1,
    boundaryCount = 1,
    totalPages: endPage = 1,
}) => {
    const startPages = generatePageButtonsArray(1, Math.min(boundaryCount, endPage))
    const endPages = generatePageButtonsArray(
        Math.max(endPage - boundaryCount + 1, boundaryCount + 1),
        endPage,
    )

    const lowerBoundaryWhenCurrentPageHigh = endPage - boundaryCount - 1 - 2 * siblingCount;
    const siblingsStart = Math.max(boundaryCount + 2, Math.min(currentPage - siblingCount, lowerBoundaryWhenCurrentPageHigh))
    
    const upperBoundaryWhenCurrentPageLow = boundaryCount + 2 + 2 * siblingCount;
    const siblingsEnd = Math.min(
        Math.max(currentPage + siblingCount, upperBoundaryWhenCurrentPageLow),
        endPages.length > 0 ? endPages[0] - 2 : endPage - 1,
    );

    const pages = startPages

    if (siblingsStart > boundaryCount + 2) {
        pages.push('start_dots_spacing');
    } else if (boundaryCount + 1 < endPage - boundaryCount) {
        pages.push(boundaryCount + 1);
    }

    pages.push(...generatePageButtonsArray(siblingsStart, siblingsEnd));

    if (siblingsEnd < endPage - boundaryCount - 1) {
        pages.push('end_dots_spacing');
    } else if (endPage - boundaryCount > boundaryCount) {
        pages.push(endPage - boundaryCount);
    }

    pages.push(...endPages);
    return pages
}
import React, { useContext } from 'react';
import { ProductsContext } from '../../../routes/Routes';
import { FilteredProductsContext } from '../CategoryComponent';
import FilterComponent from './filter component/FilterComponent';

function FiltersContainer({ name }) {
    const products = useContext(ProductsContext);
    const filterContext = useContext(FilteredProductsContext);
    const productsOfThisCategory = products.filter((product) => {
        return product.category === name;
    });

    const marksInCategory = productsOfThisCategory.map((product) => ({
        name: product.mark,
        id: product.id,
    }));

    const removeDuplicates = (originalArray, key) => {
        return [...new Map(originalArray.map((item) => [item[key], item])).values()];
    };
    const uniqueMarks = removeDuplicates(marksInCategory, 'name');

    const prices = [
        { name: '$0-99', id: 0, range: { min: 0, max: 99 } },
        { name: '$99-199', id: 1, range: { min: 99, max: 199 } },
        { name: '$199-299', id: 2, range: { min: 199, max: 299 } },
        { name: '$299+', id: 3, range: { min: 299, max: 999 } },
    ];

    return (
        <aside className="filter-container">
            <div className="block category-name">{name}</div>
            <div className="block filters">
                Filtr by:
                {uniqueMarks.length ? <FilterComponent filterName="brand" filterLabels={uniqueMarks} /> : null}
                <FilterComponent filterName="price" filterLabels={prices} />
                <button
                    className="my-btn"
                    onClick={() => {
                        filterContext.filterProducts({ myFilter: 'clear' });
                    }}
                >
                    Clear filters
                </button>
            </div>
        </aside>
    );
}

export default React.memo(FiltersContainer);

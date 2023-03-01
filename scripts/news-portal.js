const url = 'https://openapi.programming-hero.com/api/news/categories';
fetch(url).then(res => res.json()).then(data => displayCategories(data.data.news_category));

const displayCategories = (data) => {
    // 
    const categoriesContainer = document.getElementById('categoriesContainer');
    data.forEach(category => {
        const singleCategory = document.createElement('ul');
        singleCategory.innerHTML = `<li><a onclick(fetchCategories('${category.category_id}', '${category.category_name}'))>${category.category_name}</a></li>`
        categoriesContainer.appendChild(singleCategory);
    })
}

const fetchCategories = (category_id, category_name) => {
    console.log('hello')
    fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
        .then((res) => res.json())
        .then((data) => categoryClicked(data.data, category_name))
}

const categoryClicked = (data, category_name) => {
    document.getElementById('countNews').innerText = data.length;
    document.getElementById('categoryName').innerText = category_name;
}
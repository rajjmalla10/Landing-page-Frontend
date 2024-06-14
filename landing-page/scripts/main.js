const news = document.querySelector('.news')

const BASE_URL = "https://raw.githubusercontent.com/younginnovations/internship-challenges/master/front-end/news_list.json"

const fetchNews= async() =>{
    try{
        const response = await fetch(BASE_URL);
        if(!response.ok){
            throw new Error("Network Response Error")
        }
        const data = await response.json();
        const limited_data = data.news.slice(0,6);
        limited_data.forEach(data => {
            console.log(data)
            
            const newsCard = document.createElement('a');
            newsCard.classList.add('news__card');
            newsCard.href = "#";
            
            
            newsCard.innerHTML = `
                <img src=${data.image}>
                        <div class="news__content">
                            <h3>${data.title}</h3>
                            <p>${data.content}</p>
                            <button class="learn-more-btn">Learn more<i class="fa-solid fa-arrow-right"></i></button>
                        </div>
            `
            
            news.append(newsCard)

          });

        

    }catch (error){
        console.log("There has been problem with fetch operation",error)
    }
    
     
};

fetchNews()

document.addEventListener('DOMContentLoaded', () => {
    let navSearch = document.querySelector('.navbar__navsearch');
    let navInput = document.querySelector('.navbar__search');
    let button = document.querySelector('.close-button');
    const dropdown = document.querySelector('.dropdown');
    const resourceDropdown = document.querySelector('.resources__dropdown');

    navSearch.addEventListener('click', () => {
        if (navInput.classList.contains('active')) {
            return;
        }
        navInput.classList.toggle('active');
        document.querySelector('.container').classList.toggle('dimmed');
        document.querySelector('.container').classList.toggle('disabled');
    });

    button.addEventListener('click', () => {
        navInput.classList.toggle('active');
        document.querySelector('.container').classList.toggle('dimmed');
        document.querySelector('.container').classList.toggle('disabled');
    });

    dropdown.addEventListener('click', (event) => {
        event.stopPropagation(); 
        resourceDropdown.classList.toggle('active');
    });
    
    document.addEventListener('click', () => {
        resourceDropdown.classList.remove('active');
    });

    resourceDropdown.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});
  
document.addEventListener('DOMContentLoaded', function() {
    // Select necessary elements
    const carouselSlider = document.querySelector('.carousel-container__slider');
    const slider = document.getElementById('slider');
    const prevButton = document.querySelector('.carousel-container__prev button');
    const nextButton = document.querySelector('.carousel-container__next button');
    const cards = slider.getElementsByTagName('li');

    // Calculate card width and initial slider width
    const elementsToShow = 5;
    let cardWidth = carouselSlider.clientWidth / elementsToShow;

    // Adjust slider width and card widths based on number of elements to show
    slider.style.width = cards.length * cardWidth + 'px';
    for (let index = 0; index < cards.length; index++) {
        cards[index].style.width = cardWidth + 'px';
    }

    // Track current position of slider
    let currentMarginLeft = 0;

    // Function to update button state based on slider position
    function updateButtonState() {
        // Disable previous button if at start
        if (currentMarginLeft >= 0) {
            prevButton.disabled = true;
        } else {
            prevButton.disabled = false;
        }

        // Calculate maximum negative margin allowed
        const maxNegativeMargin = -(slider.offsetWidth - carouselSlider.offsetWidth);

        // Disable next button if at end
        if (currentMarginLeft <= maxNegativeMargin) {
            nextButton.disabled = true;
        } else {
            nextButton.disabled = false;
        }
    }

    // Function to handle previous button click
    prevButton.addEventListener('click', function() {
        currentMarginLeft += cardWidth;
        if (currentMarginLeft > 0) {
            currentMarginLeft = 0;
        }
        slider.style.marginLeft = currentMarginLeft + 'px';
        updateButtonState();
    });

    // Function to handle next button click
    nextButton.addEventListener('click', function() {
        currentMarginLeft -= cardWidth;
        // Calculate maximum negative margin allowed
        const maxNegativeMargin = -(slider.offsetWidth - carouselSlider.offsetWidth);
        if (currentMarginLeft < maxNegativeMargin) {
            currentMarginLeft = maxNegativeMargin;
        }
        slider.style.marginLeft = currentMarginLeft + 'px';
        updateButtonState();
    });

    // Initial button state update
    updateButtonState();
});

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







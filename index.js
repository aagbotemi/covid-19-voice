var images = [
    "https://media.npr.org/assets/img/2020/01/22/sciencesource_ss2413465-bd5e295079f203794a6d35a99a4db82fa5615d4d-s800-c85.jpg", "https://www.ghanagh.com/wp-content/uploads/2020/03/coronavirus-kenya.jpg", "https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/corona_660_150220041149.jpg", "https://cdn.mos.cms.futurecdn.net/CrLWZ9F52LrqoDKJZdKJwk-650-80.jpg", "https://www.genengnews.com/wp-content/uploads/2020/01/GettyImages-185760322-2.jpg", "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/news/2020/01_2020/coronavirus_1/1800x1200_coronavirus_1.jpg?resize=*:350px"
]

var img = 0;

function next() {
    var slider = document.getElementById("slider");
    img++;
    if (img >= images.length) {
        img = 0;
    }
    slider.src = images[img];
}

function prev() {
    var slider = document.getElementById("slider");
    img--;
    if (img < 0) {
        img = images.length - 1;
    }
    slider.src = images[img];
}
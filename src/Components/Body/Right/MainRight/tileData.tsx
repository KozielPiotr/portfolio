import scheduleImg from "./reposImgs/schedules.jpg";
import hrHelperImg from "./reposImgs/hr-helper.jpg"
import realEstatesWebCrawlerImg from "./reposImgs/webCrawlerPrices.gif"
import eventFinderImg from "./reposImgs/eventFinder.png"
import portfolioImg from "./reposImgs/portfolio.jpeg"
import searcherImg from "./reposImgs/searcherImg.jpg"


export const tileData = [
    {
        img: scheduleImg,
        title: "Schedules",
        technology: "Python, Flask, JS",
        link: "https://github.com/KozielPiotr/grafiki",
        description: "My first real web app. It allows user to manage work schedules for workers in many departaments. What is important, I implemented checking everything to be in accordance with Polish labor law. For more details please visit Github repo."
    },
    {
        img: searcherImg,
        title: "Searcher",
        technology: "Python, Django, Beautilul Soup",
        link: "https://github.com/KozielPiotr/searcher",
        description: "Announcement searcher basing at Craiglist website. It is biult with help of CLeer Programmer tutorial: https://www.youtube.com/watch?v=JT80XhYJdBw. For more details please visit Github repo."
    },
    {
        img: hrHelperImg,
        title: "HR helper",
        technology: "Python, Flask, JS",
        link: "https://github.com/KozielPiotr/HR_helper",
        description: "is going to be a tool that helps to manage staff in your department, or even whole company. Say 'good bye!' to dozens of inconvenient spreadsheets. Everything in one place, easy to find and update! Work is in progress, more info on Github."
    },
    {
        img: realEstatesWebCrawlerImg,
        title: "web-crawler-for-real-estates-prices",
        technology: "Python, web crawling, scrapy",
        link: "https://github.com/KozielPiotr/web-crawler-for-real-estates-prices",
        description: "If you want to know real estate prices across whole Poland this is something for you. Simple web crawler collecting little bit of data."
    },
    {
        img: eventFinderImg,
        title: "Schedule event finder",
        technology: "Python, openpyxl",
        link: "https://github.com/KozielPiotr/zestawienie_grafik",
        description: "Application created for work. I had to make summaries of every worker's hr event in my departament at the end of the month. With about 100 employees it was taking hours. This app was simple solution. BTW it was also reason I started to learn Python :)"
    },
    {
        img: portfolioImg,
        title: "Portfolio",
        technology: "Typescript",
        link: "https://github.com/KozielPiotr/portfolio",
        description: "This very site."
    },
];

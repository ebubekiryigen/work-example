const sliderItems = [
    {
        name:'Rolls Royce',
        image:'assets/img/1.jpg',
        link:'https://www.rolls-roycemotorcars.com/en_GB/home.html'
    },
    {
        name:'Bugatti',
        image:'assets/img/2.webp',
        link:'https://www.bugatti.com/'
    },
    {
        name:'Audi',
        image:'assets/img/3.webp',
        link:'https://www.audi.com.tr/tr/web/tr.html'
    },
    {
        name:'Murat 131',
        image:'assets/img/4.jpg',
        link:'https://www.sahibinden.com/tofas-murat-131'
    },
];
sliderSettings={
    duration:'1000',
    random:false,
    loop:false
}
let index = 0
const slideCount = sliderItems.length
let Interval
showSlide(index)
sliderInit(sliderSettings)
document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(Interval)
    })
})
document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        sliderInit(sliderSettings)
    })
})
function sliderInit(set) {
    let prev;
    if(set.loop == true) {
    Interval = setInterval(function(){
        if(set.random){
            do{
                index = Math.floor(Math.random() * slideCount);
            }while(index == prev)
            prev = index;
        } else {
          if(index >= slideCount - 1) {
            index = 0
          } else {
            index++
          }
          console.log(index)
          showSlide(index)
        }
        showSlide(index)
    },set.duration) 
  }
}
document.querySelector('.next').addEventListener('click',function(){
    if(index >= slideCount -1) {
        index = 0
    } else {
        index++
    }
    showSlide(index)
})
document.querySelector('.prev').addEventListener('click',function(){
    if(index <= 0) {
        index = slideCount -1
    }else {
        index--
    }
    showSlide(index)
})
function showSlide(index) {
    document.querySelector('.slider-img').setAttribute('src',sliderItems[index].image)
    document.querySelector('.slider-img').setAttribute('title',sliderItems[index].name)
    document.querySelector('.slider-link').setAttribute('href',sliderItems[index].link)
}



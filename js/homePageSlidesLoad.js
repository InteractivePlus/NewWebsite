function loadIndexSlides(bannerSelector,prevBtnSelector,nextBtnSelector,swipeContentHolderSelector, Language){
    "use strict";
    var mySwiperBox = $(swipeContentHolderSelector);
    var SlideCount = 0;
    for(var i=0;i<XSYD_IndexSlides.slides.length;i++){
        var ThisSlide = XSYD_IndexSlides.slides[i];
        var ThisSlideLangInfo = ThisSlide.cn;
        var MoreInfoBtnText = "";
        switch(Language){
            case "cn":
                ThisSlideLangInfo = ThisSlide.cn;
                MoreInfoBtnText = "了解更多";
                break;
            case "en":
                ThisSlideLangInfo = ThisSlide.en;
                MoreInfoBtnText = "Learn More";
                break;
        }
        if(ThisSlideLangInfo === null || ThisSlideLangInfo === undefined){
            continue;
        }
        var ButtonCodes = "";
        if((!ThisSlideLangInfo.disableArticleButton) && ThisSlideLangInfo.articleIDRelated !== null && ThisSlideLangInfo.articleIDRelated !== undefined){
            ButtonCodes += '<a class="btn btn-primary" role="button" href="' + XSYD_WebSettings.newsPage + ThisSlideLangInfo.articleIDRelated + '">' + MoreInfoBtnText + '</a>';
        }
        if(ThisSlideLangInfo.customButton){
            ButtonCodes += '<a class="btn btn-primary" role="button" href="' + ThisSlideLangInfo.customButtonURL + '">' + ThisSlideLangInfo.customButtonText + '</a>';
        }

        var BackgroundCodes = "";
        if(ThisSlide.backgroundImage !== undefined && ThisSlide.backgroundImage !== null && ThisSlide.backgroundImage !== undefined){
            BackgroundCodes = '<div class="swiper-slide" style="background-image: url(\'' + "../" + ThisSlide.backgroundImage + '\');background-size:cover;">';
        }else{
            BackgroundCodes = '<div class="swiper-slide">';
        }

        mySwiperBox.append(
            BackgroundCodes +
                '<div class="d-flex align-items-center justify-content-center home-slide-container">' +
                    '<div class="container">' +
                        '<h2>' + ThisSlideLangInfo.title + '</h2>' +
                        '<p class="pt-2">' + ThisSlideLangInfo.description + '</p>' +
                        '<p class="pt-3">' + ButtonCodes + '</p>' +
                    '</div>' +
                '</div>' +
            '</div>'
        );
        SlideCount++;
    }
    var mySwiper = new Swiper (
        bannerSelector,
        {
            autoplay: (SlideCount > 1 ? true : false),
            loop: true,
            navigation: {
                nextEl: nextBtnSelector,
                prevEl: prevBtnSelector
            }
        }
    );
    if(mySwiper.slides.length <= 1){
        mySwiper.destroy();
    }
    /*
    <div class="swiper-slide">
        ...
    </div>
    */
}
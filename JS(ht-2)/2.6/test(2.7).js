function videoCount(divWidth) {
    // let divWidth = document.querySelectorAll(".main")[0].offsetWidth;
    let videoCount;
    if (divWidth < 500) {
        videoCount = 1;
    } else if (divWidth < 900) {
        videoCount = 2;
    } else if (divWidth < 1200) {
        videoCount = 3;
    } else if (divWidth < 1500) {
        videoCount = 4;
    } else {
        videoCount = 5;
    }

    // document.querySelectorAll(".main")[0].style.setProperty('grid-template-columns', 'repeat(' + videoCount + ', 1fr)')
    return videoCount;
}

describe("Video Count",function(){
    it("Validating video count",function(){
        expect(videoCount(1300)).toBe(4);
    });
});

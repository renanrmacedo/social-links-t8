import { faker } from "https://esm.sh/@faker-js/faker";

const VIDEO_CATEGORIES = ['music', 'sports', 'gaming'];
console.log(faker.helpers.arrayElement(VIDEO_CATEGORIES));

const videoGrid = document.getElementById('videos');
for (const _ of Array(30)) {
    const videoInfo = {
        tittle: faker.commerce.productName(),
        thumbnail: faker.image.urlPicsumPhotos({ width: 1280, height: 720 }),
        channelName: faker.company.name(),
        category: faker.helpers.arrayElement(VIDEO_CATEGORIES),
    };


    const video = createVideo(videoInfo);
    videoGrid.appendChild(video);

}

function createVideo(videoInfo) {
    const videoCard = document.createElement('div');
    videoCard.classList.add('video-card');
    videoCard.classList.add(videoInfo.category);

    const videoThumbnail = document.createElement('img');
    videoThumbnail.src = videoInfo.thumbnail;
    videoThumbnail.alt = 'Video Thumnail';

    const videoTitle = document.createElement('h3');
    videoTitle.textContent = videoInfo.title;

    const videoChannel = document.createElement('p');
    videoChannel.textContent = videoInfo.channelName;

    const videoCategory = document.createElement('p');
    videoCategory.textContent = videoInfo.category;

    videoCard.appendChild(videoThumbnail);
    videoCard.appendChild(videoTitle);
    videoCard.appendChild(videoChannel);
    videoCard.appendChild(videoCategory);

    return videoCard;


}



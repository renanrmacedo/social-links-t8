const filterButtons = document.querySelectorAll('.category-btn');
filterButtons.forEach((button) => button.addEventListener('click', showVideos));

function showVideos(event) {
    const button = event.target;
    const category = button.getAttribute('data-category').toLowerCase();

    filterVideos(category);
}

function filterVideos(category) {
    const videos = document.querySelectorAll('.video-card');

    for (const video of videos) {
        const [, videoCategoryElement] = video.getElementsByTagName('p');
        const videoCategory = videoCategoryElement.innerText.toLowerCase();

        if (category === "all" || category === videoCategory) {
            video.style.display = "block";
        } else {
            video.style.display = "none";
        }
    }

} 

function activeButton(button) {
    filterButtons.forEach((button) => button.classList.remove("active"));
    
    button.classList.add("active")
}
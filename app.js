// First step ... ->
const searchSongs = () => {
    const searchText = document.getElementById('search-field').value;
    // console.log(searchText);
    const url = `https://api.lyrics.ovh/suggest/${searchText}`;
    // console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => displaySongs(data.data))
        .catch(error => displayError(error)); // 7th step
};
// -----------------------------------------*****---------------------------------------------------



// seventh step ... ->
const displayError = error => {
    const errorMsg = document.getElementById('error-message');
    errorMsg.innerText = 'Sorry, please try after sometimes.';
};
// -----------------------------------------*****---------------------------------------------------



// Fifth step ... ->
// const searchSongs = async () => {
//     const searchText = document.getElementById('search-field').value;
//     const url = `https://api.lyrics.ovh/suggest/${searchText}`;
//     const res = await fetch(url);
//     const data = await res.json();
//     displaySongs(data.data);
// };
// -----------------------------------------*****---------------------------------------------------



// Second step ... ->
// const displaySongs = songs => {
//     // console.log(songs);
//     const songContainer = document.getElementById('song-container');
//     songs.forEach(song => {
//         // console.log(song.title);
//         const songDiv = document.createElement('div');
//         songDiv.className = "single-result row align-items-center my-3 p-3";
//         songDiv.innerHTML = `
//             <div class="col-md-9">
//                 <h3 class="lyrics-name">${song.title}</h3>
//                 <p class="author lead">Album by <span>${song.artist.name}</span></p>
//             </div>
//             <div class="col-md-3 text-md-right text-center">
//                 <button class="btn btn-success">Get Lyrics</button>
//             </div>
//         `;
//         songContainer.appendChild(songDiv);
//     });
// };
// ----------------------------------------------*****--------------------------------------------------



// Third step ... ->
const displaySongs = songs => {
    // console.log(songs);
    const songContainer = document.getElementById('song-container');
    songContainer.innerHTML = ''; // forth step.
    songs.forEach(song => {
        // console.log(song.title);
        const songDiv = document.createElement('div');
        songDiv.className = "single-result row align-items-center my-3 p-3";
        songDiv.innerHTML = `
            <div class="col-md-9">
                <h3 class="lyrics-name">${song.title}</h3>
                <p class="author lead">Album by <span>${song.artist.name}</span></p>
                <audio controls>
                    <source src="${song.preview}" type="audio/mpeg">
                    Your browser does not support the audio tag.
                </audio>
            </div>
            <div class="col-md-3 text-md-right text-center">
                <button onclick ="getLyric('${song.artist.name} -', '${song.title}')" class="btn btn-success">Get Lyrics</button>
            </div>
        `;
        songContainer.appendChild(songDiv);
    });
};
// ----------------------------------------------*****--------------------------------------------------



// Forth step ... ->
// const getLyric = (artist, title) => {
//     // console.log(artist, title);
//     const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
//     // console.log(url);
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayLyrics(data.lyrics));
// };

// const displayLyrics = lyrics => {
//     const lyricsDiv = document.getElementById('song-lyric');
//     lyricsDiv.innerText = lyrics;
// };
// -----------------------------------------*****---------------------------------------------------



// Sixth step ... ->
// const getLyric = async (artist, title) => {
//     const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
//     const res = await fetch(url);
//     const data = await res.json();
//     displayLyrics(data.lyrics);
// };
// -----------------------------------------*****---------------------------------------------------



// 8th step ... ->
const getLyric = async (artist, title) => {
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayLyrics(data.lyrics);
    }
    catch (error) {
        displayError('Sorry, please try after sometime.');
    }
};

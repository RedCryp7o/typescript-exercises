function makeAlbum(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album = { artist: artist, title: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}


let album1 = makeAlbum("Artist 1", "Album 1");
let album2 = makeAlbum("Artist 2", "Album 2", 12); 
let album3 = makeAlbum("Artist 3", "Album 3");


console.log(album1);
console.log(album2);
console.log(album3);

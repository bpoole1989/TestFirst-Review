/* eslint-disable no-unused-vars */

class Media {
    constructor(title, year) {
        this.title = title;
        this.yearOfRelease = year;
        this.ratings = [];
    }

    getTitle() {
        return this.title;
    }

    getYearOfRelease() {
        return this.yearOfRelease;
    }

    addRating(rating) {
        if (rating > 100 || rating <1) 
            return `${rating} is not a valid rating, ratings must be 1-100`;

        this.ratings.push(rating);
    }

    getAverageRating() {
        if (this.ratings.length < 1)
            return 'this is not rated';

        return this.ratings.reduce((total, rating) => total += rating, 0) / this.ratings.length;
    }
}

class Album extends Media {
    constructor(title, year, artist, tracks) {
        super(title, year);
        this.artist = artist;
        this.tracks = tracks;
    }
}

class Movie extends Media {
    constructor(title, year, director, runTime) {
        super(title, year);
        this.director = director;
        this.runTime = runTime;
    }
}

class Book extends Media {
    constructor(title, year, author, pages) {
        super(title, year);
        this.author = author;
        this.pages = pages;
    }
}
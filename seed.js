const db = require('./db');

const posts = [
    ['Welcome to to Club Blog Jungle', 'This is the VERY first post on our BRAND NEW CMS!'],
    ['Meeting Times', 'We meet every Tuesday after school in room 114.'],
    ['Spring Project Ideas', 'Vote for YOUR favorite project idea at the next meeting.'],
    ['How to use divs and spans', "i've been trying make a website about trilobytes but i can't get my text to sperate. Would I use a div or span? -jake"]
];
db.exec('DELETE FROM posts')
const insert = db.prepare('INSERT INTO posts (title, body) VALUES (?, ?)');

for (const [title, body] of posts) {
    insert.run(title, body);
}

console.log('Added ' + posts.length + ' posts');
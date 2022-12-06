import data from './rawBooks.json' assert { type: 'json' };
console.log(data);
console.log(data[1]['read?'])

const readyes = data.filter(function (item) {
    return (item['read?'] === "Yes" );
}
    );

console.log("books read "+ readyes.length);
const authorlist =  readyes.map(object => object.author);
// = [new Set(readyes['author?'])];
//console.log(authorlist);
const idivauthor = [... new Set(authorlist)];
let count = 0;
let mostcountread = 0;
let mostread = 'notfound';

for (let x = 0; x<idivauthor.length ; x++){
    authorlist.forEach(item => {
        if (item === idivauthor[x]){
            count += 1;
        }
    })
    if (count>mostcountread){
        mostread = idivauthor[x];
    }
    count = 0;

}
console.log("most read author is: " + mostread);


//longest time
const longest = readyes;

console.log(longest);
console.log(longest[1]['Time on TBR (days)']);
const listofdays = [];
longest.forEach(function(item){
    listofdays.push(item['Time on TBR (days)']);
}
);
console.log(listofdays);
const sortlist = listofdays;
sortlist.sort();
sortlist.reverse();
console.log("book that took the longest to read: "+ readyes[listofdays.indexOf(sortlist[0])].title);
//console.log(longest['Time on TBR (days)'].indexOf(Math.max(...longest['Time on TBR (days)'])));
//
console.log("book that took the shortest to read: "+ readyes[listofdays.indexOf(sortlist[sortlist.length-1])].title);


// fetch('./rawBooks.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));
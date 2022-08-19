const posts = [
    {name: "Post 1", comment: "Comment 1"},
    {name: "Post 2", comment: "Comment 2"},
    {name: "Post 3", comment: "Comment 3"},
    {name: "Post 4", comment: "Comment 4"}
];
console.log("Eski Post Listesi");
posts.forEach(element => {
    console.log(element.name);
});

const postList = () => {
    posts.map(post => {
        console.log(post.name);
    })
};

const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {
        posts.push(newPost);
        resolve(posts);
        reject("Hata oluştu");
    })
    return promise1;
}

async function showPost() {
    try {
        await addPost({name: "Post 14", comment: "Comment 14"});
        console.log(" ")
        console.log("Yeni Post Listesi");
        postList();
    } catch (error) {
        console.log(error);
    }
}

showPost();
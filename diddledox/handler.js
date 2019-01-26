"use strict"

module.exports = (context, callback) => {
    const s = encodeURIComponent(context);
    fetch(`https://api.github.com/users/${s}`)
    .then(res => {
        return {
            name: res.name,
            company: res.company,
            url: res.blog,
            location: res.location,
            about: res.bio,
            public_repos: res.public_repos,
        };
    })
    .then(res => callback(undefined, res));
}

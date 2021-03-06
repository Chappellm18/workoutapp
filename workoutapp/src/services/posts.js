import { api } from "./myFetch";



export function GetAll() {
    return api('posts');
}

export function GetWall(handle) {
    return api('posts/wall/' + handle);
}

export function GetFeed(handle) {
    return api('posts/social/' + handle, null, 'GET');
}

export function react(post_id, reaction) {
    console.log("Like stop2");
    return api('posts/react/' + post_id, reaction, 'POST');


}

export function Get(post_id) { return api('posts/' + post_id); }

export function Add(post) {
    return api('posts', post);
}
export function Update(post_id, post) {
    return { post_id, post };
}
export function Delete(post_id) {
    return api('posts/' + post_id, {}, 'DELETE');
}
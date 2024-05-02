//This is the backend and it says"If I receive any GET requests, I'll respond with 'Hello world'."
export async function GET(){
    return new Response("Hello world")
}
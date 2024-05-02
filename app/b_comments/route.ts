import { comments } from "./data"

export async function GET(){
    return Response.json(comments);
}

export async function POST(request:Request){
    const comment = await request.json()
    

}
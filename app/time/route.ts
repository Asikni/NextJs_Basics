export const dynamic = "force-dynamic"; // default value is auto & bex of that there is cache behaviour
//on changing to force-dynamic the cache behaviour is lost

export async function GET() {
  return Response.json({
    time: new Date().toLocaleTimeString(),  //in dev mode the time will keep on changing with every reload but when we deploy our app 
    //the reload will not happen instead the time will be fixed and this is the caching behaviour.
  });
}

import { Metadata } from "next"

export const metadata:Metadata = {
  title:"Blog"
}

function Number(){
  return(
    <div>number 1</div>
  )
}

export default function Page() {
  return (<h1>Hello, Next.js!
    <h1>{Number()}</h1>
  </h1>)
}
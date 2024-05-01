'use client'

import Card from "@/app/components/card";
import { useAppContext } from "@/app/context";


export default function Login (){
  const{isLoggedIn, setIsLoggedIn} = useAppContext()
  return (
    <Card>
      
      Click to log-in
      <button onClick = {() => setIsLoggedIn(true)}>Log-in</button>
    </Card>
  );
}

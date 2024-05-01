"use client";

import { useAppContext } from "@/app/context";

export default function ComplexDashboardLayout({
  children, //children is page.tsx
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const { isLoggedIn, setIsLoggedIn } = useAppContext();
  console.log(isLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <div>
          <h1>{children}</h1>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>{users}</div>
              <div>{revenue}</div>
            </div>
            <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
            <div style={{ display: "flex", flex: 1 }}>
              <button onClick={()=> setIsLoggedIn(false)}>Logout</button>
            </div>
          </div>
        </div>
      ) : login}
    </>
  );
}

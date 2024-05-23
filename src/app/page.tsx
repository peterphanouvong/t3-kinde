import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default async function Home() {
  return (
    <main>
      <LoginLink>Login</LoginLink>
      <LogoutLink>Logout</LogoutLink>
    </main>
  );
}

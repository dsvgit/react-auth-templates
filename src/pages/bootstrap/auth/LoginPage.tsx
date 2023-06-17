import { useLocation, useNavigate } from "react-router-dom";
import { AuthPage } from "@/pages/bootstrap/auth/AuthPage";
import { useAuthStatic } from "@/auth-base/provider/AuthStaticContext";

export function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { authClient } = useAuthStatic();

  const from = location.state?.from?.pathname || "/";

  return (
    <AuthPage
      text="Sign in"
      onSubmit={async (form) => {
        await authClient.signInWithPassword({
          email: form.email,
          password: form.password,
        });

        // Send them back to the page they tried to visit when they were
        // redirected to the login page. Use { replace: true } so we don't create
        // another entry in the history stack for the login page.  This means that
        // when they get to the protected page and click the back button, they
        // won't end up back on the login page, which is also really nice for the
        // user experience.
        navigate(from, { replace: true });
      }}
    />
  );
}

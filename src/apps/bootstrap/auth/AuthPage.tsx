import { SubmitHandler, useForm } from "react-hook-form";

type AuthForm = { email: string; password: string };

export function AuthPage(props: {
  text: string;
  onSubmit: SubmitHandler<AuthForm>;
}) {
  const { text, onSubmit } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthForm>();

  console.log(errors)

  return (
    <main className="form-signin w-100 m-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="h3 mb-3 fw-normal">{text}</h1>

        <div className="form-floating">
          <input
            required
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            {...register("email", { required: true })}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            required
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          {text}
        </button>
      </form>
    </main>
  );
}

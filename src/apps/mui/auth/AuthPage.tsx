import * as React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import LoadingButton from "@mui/lab/LoadingButton";
import * as validation from "@/common/validation";

type AuthForm = { email: string; password: string };

type AuthPageProps = {
  title: string;
  onSubmit: SubmitHandler<AuthForm>;
};

export function AuthPage(props: AuthPageProps) {
  const { title } = props;

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<AuthForm>();

  console.log(errors);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(async (data, e) => {
            try {
              await props.onSubmit(data, e);
            } catch (error: any) {
              // TODO: add relevant error type
              reset({});
              setError("root.serverError", {
                type: error.code,
                message: "custom message",
              });
            }
          })}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                autoFocus={true}
                id="email"
                label="Email Address"
                type="email"
                autoComplete="email"
                error={errors.email != null}
                helperText={errors.email?.message}
                {...register("email", validation.emailRules())}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                error={errors.password != null}
                helperText={errors.password?.message}
                {...register("password", validation.passwordRules())}
              />
            </Grid>
          </Grid>
          {errors.root && (
            <Alert sx={{ mt: 3 }} severity="warning">
              {errors.root.serverError.type}
            </Alert>
          )}
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            loading={isSubmitting}
          >
            {title}
          </LoadingButton>
        </Box>
      </Box>
    </Container>
  );
}

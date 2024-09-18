import { Header } from "@/features/header/components/Header";
import {
  UserSignUpScheema,
  UserSignUpScheemaType,
  useSignUp,
} from "@/lib/api/authUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

const SignUp = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<UserSignUpScheemaType>({
    mode: "onChange",
    resolver: zodResolver(UserSignUpScheema),
  });

  const onSubmit: SubmitHandler<UserSignUpScheemaType> = async (
    data: UserSignUpScheemaType
  ) => {
    try {
      const newUser = await useSignUp(data);
      console.log(newUser);
      router.push("/home");
    } catch (err) {
      console.error(err);
      router.push("signup");
    }
  };

  const handleClickShowPassword = () => setIsVisible((prev) => !prev);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <Header />
      <Stack
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 75px)",
          width: "100%",
        }}
        spacing={3}
      >
        <Typography variant="h4">新規登録</Typography>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              type="text"
              label="Name"
              error={fieldState.invalid}
              helperText={fieldState.error?.message}
              sx={{ width: "60%", minWidth: "245px" }}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              type="text"
              label="email"
              error={fieldState.invalid}
              helperText={fieldState.error?.message}
              sx={{ width: "60%", minWidth: "245px" }}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              type={isVisible ? "text" : "password"}
              label="password"
              error={fieldState.invalid}
              helperText={fieldState.error?.message}
              sx={{ width: "60%", minWidth: "245px" }}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                      >
                        {isVisible ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          )}
        />
        <Controller
          name="passwordConfirmation"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              type={isVisible ? "text" : "password"}
              label="passwordConfirmation"
              error={fieldState.invalid}
              helperText={fieldState.error?.message}
              sx={{ width: "60%", minWidth: "245px" }}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                      >
                        {isVisible ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          )}
        />
        <Button
          variant="contained"
          type="submit"
          disabled={!isValid}
          sx={{
            width: "60%",
            minWidth: "245px",
            backgroundColor: "#AB54F1",
          }}
        >
          新規登録
        </Button>
      </Stack>
    </>
  );
};

export default SignUp;

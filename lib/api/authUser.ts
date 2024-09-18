import { snakeCase } from "snake-case";
import { api } from "./axios";
import Cookies from "js-cookie";
import { z } from "zod";
import { User } from "@/types/type";
import { useSetRecoilState } from "recoil";
import { errorState, snackbarAtom, successState } from "./recoil/snackbarAtom";

//
// utility function
//

// convert form-data key into snake case
const toSnakeCase = (obj: Record<string, string>, mainKey: string) => {
  return {
    [mainKey]: Object.entries(obj).reduce(
      (acc, [subkey, value]) => ({
        ...acc,
        [snakeCase(subkey)]: value,
      }),
      {} as Record<string, string>
    ),
  };
};

// manage jwt token
export const useToken = () => {
  const token = Cookies.get("token");
  const setToken = (token: string) => Cookies.set("token", token);

  return { token, setToken };
};

// response type when user signin or signup
type AuthenticationResponse = {
  data: { data: User; message: string };
  headers: { authorization: string };
};

// ------------------
// signup
// ------------------

export const signupInputScheema = z.object({
  name: z.string().min(1, "Required"),
  email: z.string().min(1, "Required").email(),
  password: z.string().min(1, "Required"),
  passwordConfirmation: z.string().min(1, "Required"),
});

export type signupInputScheemaType = z.infer<typeof signupInputScheema>;

export const signup = (data: signupInputScheemaType) => {
  return api.post("/api/v1/users", toSnakeCase(data, "user"));
};

// ------------------
// signin
// ------------------

export const signinInputScheema = z.object({
  email: z.string().min(1, "Required").email(),
  password: z.string().min(1, "Required"),
});

export type SigninInputScheemaType = z.infer<typeof signinInputScheema>;

export const postSigninInput = (
  data: SigninInputScheemaType
): Promise<AuthenticationResponse> => {
  return api.post("/api/v1/users/sign_in", toSnakeCase(data, "user"));
};

export const processPostSigninInputResponse = async (
  data: SigninInputScheemaType
) => {
  const response = await postSigninInput(data);
  return {
    user: response.data.data,
    message: response.data.message,
    token: response.headers.authorization,
  };
};

export const useSignin = ({ onSuccess }: { onSuccess: () => void }) => {
  const { setToken } = useToken();
  const setSnackBarState = useSetRecoilState(snackbarAtom);

  const signin = async (input: SigninInputScheemaType) => {
    try {
      const { user, message, token } = await processPostSigninInputResponse(
        input
      );

      if (user && token) {
        setToken(token);
        if (onSuccess) {
          setSnackBarState(successState(message));
          onSuccess();
        }
      }
    } catch (error) {
      setSnackBarState(errorState("エラー"));
      console.log(error);
    }
  };

  return { signin };
};

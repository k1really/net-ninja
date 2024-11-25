import { ROUTES } from "@/shared/constants/routes";
import { UiButton } from "@/shared/ui/ui-button";
import { UiLink } from "@/shared/ui/ui-link";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { useSignInForm } from "../model/use-sign-in-form";

export function SignInForm() {
  const { handleSubmit, isPending, register, errorMessage } = useSignInForm();

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <UiTextField
        label="Email"
        inputProps={{ type: "email", ...register("email", { required: true }) }}
      />
      <UiTextField
        label="Password"
        inputProps={{
          type: "password",
          ...register("password", { required: true }),
        }}
      />

      <UiButton disabled={isPending} variant="primary">
        Sign In
      </UiButton>

      {errorMessage && <div className="text-rose-500">{errorMessage} </div>}

      <UiLink href={ROUTES.SIGN_UP} className="text-center">
        Sign Up
      </UiLink>
    </form>
  );
}

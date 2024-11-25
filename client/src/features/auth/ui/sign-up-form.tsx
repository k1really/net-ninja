import { ROUTES } from "@/shared/constants/routes";
import { UiButton } from "@/shared/ui/ui-button";
import { UiLink } from "@/shared/ui/ui-link";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { useSignUpForm } from "../model/use-sign-up-form";

export function SignUpForm() {
  const { handleSubmit, isPending, register, errorMessage } = useSignUpForm();

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
        Sign Up
      </UiButton>

      {errorMessage && <div className="text-rose-500">{errorMessage} </div>}

      <UiLink href={ROUTES.SIGN_IN} className="text-center">
        Sign In
      </UiLink>
    </form>
  );
}

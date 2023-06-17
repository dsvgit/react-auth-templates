export function emailRules() {
  return {
    required: "Email is required",
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: "Entered value does not match email format",
    },
  };
}

export function passwordRules() {
  return {
    required: "Password is required",
  }
}

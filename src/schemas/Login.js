import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email("Geçersiz email adresi.").required("Zorunlu"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Şifrenizin en az bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter içermesi gerekiyor (like @$!%*?&)."
    )
    .required("Zorunlu"),
});

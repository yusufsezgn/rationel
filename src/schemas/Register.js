import * as Yup from "yup";

export const registerSchema = Yup.object({
  email: Yup.string().email("Geçersiz email adresi.").required("Zorunlu"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Şifrenizin en az bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter içermesi gerekiyor (like @$!%*?&)."
    )
    .required("Zorunlu"),
  name: Yup.string().required("Zorunlu"),
  surname: Yup.string().required("Zorunlu"),
  username: Yup.string()
    .min(1, "Kullanıcı adının 1 ile 20 karakter arasında olması gerekiyor.")
    .max(20, "Kullanıcı adının 1 ile 20 karakter arasında olması gerekiyor."),
});

import { z } from "zod";

export const schema = z.object({
  email: z.string().email("Deve Ser Um Email!"),
  password: z.string().nonempty("Senha é Obrigatoria!"),
});

export type loginData = z.infer<typeof schema>;

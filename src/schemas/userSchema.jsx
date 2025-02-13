import { z } from "zod";

const loginSchema = z.object({
  username: z.string().nonempty({ message: "กรุณาใส่ชื่อผู้ใช้" }),
  password: z.string().nonempty({ message: "กรุณาใส่รหัส" }),
});

export { loginSchema };
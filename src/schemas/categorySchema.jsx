import { z } from "zod";

const categorySchema = z.object({
  name: z.string().nonempty({
    message: "กรุณาใส่ชิ่อหมวดหมู่",
  }),
});

export { categorySchema };
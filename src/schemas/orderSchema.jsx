import { z } from "zod";

const cancelOrderSchema = z.object({
  header: z.string().nonempty({
    message: "",
  }),
  description: z.string().nonempty({
    message: "",
  }),
});

const confirmOrderSchema = z.object({
  price: z.coerce
    .number()
    .positive({ message: "ราคาต้องเป็นจำนวนเต็มบวก" })
    .int({ message: "ราคาต้องเป็นจำนวนเต็มบวก" }),
});

export { cancelOrderSchema, confirmOrderSchema };
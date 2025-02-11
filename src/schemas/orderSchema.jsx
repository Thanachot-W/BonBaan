import { z } from "zod";

const cancelOrderSchema = z.object({
  header: z.string().nonempty({
    message: ""
  }),
  description: z.string().nonempty({
    message: ""
  })
});

export { cancelOrderSchema };
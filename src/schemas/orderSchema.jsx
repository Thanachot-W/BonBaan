import { z } from "zod";
import {
  MAX_IMAGE_SIZE,
  MAX_VIDEO_SIZE,
  ACCEPTED_IMAGE_TYPES,
  ACCEPTED_VIDEO_TYPES,
} from "./constants";

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

const fileSchema = z.union([
  z
    .instanceof(File, { message: "กรุณาอัปโหลดไฟล์" })
    .refine(
      (file) =>
        ACCEPTED_IMAGE_TYPES.includes(file.type) ||
        ACCEPTED_VIDEO_TYPES.includes(file.type),
      {
        message: "รองรับเฉพาะไฟล์ JPG, PNG, WEBP, MP4, และ MOV เท่านั้น",
      }
    )
    .refine(
      (file) => {
        if (ACCEPTED_IMAGE_TYPES.includes(file.type))
          return file.size <= MAX_IMAGE_SIZE;
        if (ACCEPTED_VIDEO_TYPES.includes(file.type))
          return file.size <= MAX_VIDEO_SIZE;
        return false;
      },
      {
        message: (file) =>
          ACCEPTED_IMAGE_TYPES.includes(file.type)
            ? `ขนาดไฟล์รูปภาพต้องไม่เกิน ${MAX_IMAGE_SIZE / (1024 * 1024)}MB`
            : `ขนาดไฟล์วิดีโอต้องไม่เกิน ${MAX_VIDEO_SIZE / (1024 * 1024)}MB`,
      }
    ),
]);

const completeOrderSchema = z.object({
  files: z.array(fileSchema).min(1, { message: "กรุณาเพิ่มรูปภาพหรือวิดีโออย่างน้อย 1 รายการ" }),
});

const orderStatusSchema = z.object({
  status: z.coerce
  .number().positive({ message: "กรุณาเลือกสถานะ" })
  .int({ message: "กรุณาเลือกสถานะ" }),
})

export { cancelOrderSchema, confirmOrderSchema, completeOrderSchema, orderStatusSchema };

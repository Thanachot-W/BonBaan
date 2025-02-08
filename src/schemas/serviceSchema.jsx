import { z } from "zod";
import { MAX_FILE_SIZE, ACCEPTED_IMAGE_TYPES } from "./constants";

const packageSchema = z.object({
  name: z.string().nonempty({ message: "กรุณากำหนดชื่อแพ็คเกจ" }),
  price: z.coerce
    .number()
    .positive({ message: "ราคาต้องเป็นจำนวนเต็มบวก" })
    .int({ message: "ราคาต้องเป็นจำนวนเต็มบวก" }),
  description: z.string().nonempty({ message: "กรุณากำหนดคำอธิบายแพ็คเกจ" }),
});

const serviceSchema = z.object({
  name: z.string().nonempty({
    message: "กรุณากำหนดชื่อของบริการ",
  }),
  description: z.string().nonempty({
    message: "กรุณากำหนดคำอธิบายของบริการ",
  }),
  location: z.string().nonempty({
    message: "กรุณากำหนดสถานที่ของบริการ",
  }),
  packages: z
    .array(packageSchema)
    .min(1, { message: "ต้องมีอย่างน้อย 1 แพ็คเกจ" }),
  customable: z.boolean(),
  images: z
    .instanceof(FileList, { message: "กรุณากำหนดรูปภาพ" })
    .refine(
      (files) =>
        Array.from(files).every((file) =>
          ACCEPTED_IMAGE_TYPES.includes(file.type)
        ),
      { message: "รองรับเฉพาะไฟล์ JPG, PNG, และ WEBP เท่านั้น" }
    )
    .refine(
      (files) => Array.from(files).every((file) => file.size <= MAX_FILE_SIZE),
      { message: `ขนาดไฟล์ต้องไม่เกิน ${MAX_FILE_SIZE / (1024 * 1024)}MB` }
    ),
  categories: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "เลือกอย่างน้อย 1 หมวดหมู่",
    }),
});

export { serviceSchema, packageSchema };
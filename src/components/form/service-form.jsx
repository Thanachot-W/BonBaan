import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CollapsibleInput from "../shared/CollapsibleInput";
import { Textarea } from "@/components/ui/textarea";
import { MAX_FILE_SIZE, ACCEPTED_IMAGE_TYPES } from "../../constants/files";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, Trash } from "lucide-react";

const categories = [
  {
    id: "1",
    name: "ความรัก",
  },
  {
    id: "2",
    name: "สุขภาพ",
  },
  {
    id: "3",
    name: "การเงิน",
  },
];

const packageSchema = z.object({
  name: z.string().nonempty({ message: "กรุณากำหนดชื่อแพ็คเกจ" }),
  price: z.coerce
    .number()
    .positive({ message: "ราคาต้องเป็นจำนวนเต็มบวก" })
    .int({ message: "ราคาต้องเป็นจำนวนเต็มบวก" }),
  description: z.string().nonempty({ message: "กรุณากำหนดคำอธิบายแพ็คเกจ" }),
});

const formSchema = z.object({
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

const CreateServiceForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      location: "",
      packages: [{ name: "", price: "", description: "" }],
      customable: false,
      images: [],
      categories: [],
    },
  });

  const fileRef = form.register("file");
  const [imagePreviews, setImagePreviews] = useState([]);
  const handleImageChange = (event) => {
    const files = event.target.files;
    if (files) {
      const previews = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setImagePreviews(previews);
    }
    form.setValue("images", files);
  };

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "packages",
  });

  const onSubmit = (values) => {
    console.log(values);
    // call api
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex gap-4">
          <div className="flex flex-col w-full gap-4 ">
            {/* Service Title */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="ชื่อบริการ" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Service Description */}
            <CollapsibleInput header="รายละเอียด">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Textarea placeholder="รายละเอียดบริการ" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CollapsibleInput>

            {/* Service Packages */}
            <CollapsibleInput header="แพ็คเกจ">
              <div className="space-y-4">
                {fields.map((item, index) => (
                  <PackageForm index={index} form={form} remove={remove} fields={fields} key={item.id}/>
                ))}
                <div className="flex gap-4 items-end">
                  {/* Add New Package Button */}
                  <Button
                    type="button"
                    onClick={() =>
                      append({ name: "", price: "", description: "" })
                    }
                  >
                    <Plus />
                    เพิ่มแพ็คเกจใหม่
                  </Button>

                  <p className="text-sm text-[--gray]">
                    ทั้งหมด {fields.length} แพ็คเกจ
                  </p>
                </div>
              </div>
            </CollapsibleInput>

            {/* Settings */}
            <CollapsibleInput header="ตั้งค่าเพิ่มเติม">
              <FormField
                control={form.control}
                name="customable"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel>อนุญาตคำสั่งซื้อพิเศษ</FormLabel>
                  </FormItem>
                )}
              />
            </CollapsibleInput>
          </div>
          <div className="flex flex-col min-w-64 w-1/3 gap-4">
            {/* Submit Button */}
            <Button type="submit" className="btn-block">
              เพิ่มบริการใหม่
            </Button>

            {/* Service Images */}
            <CollapsibleInput header="ภาพบริการ">
              <FormField
                control={form.control}
                name="images"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        type="file"
                        {...fileRef}
                        variant="file"
                        multiple
                        onChange={handleImageChange}
                      />
                    </FormControl>
                    <FormMessage />
                    {imagePreviews.length > 0 && (
                      <div className="mt-4 grid grid-cols-3 gap-2">
                        {imagePreviews.map((src, index) => (
                          <img
                            key={index}
                            src={src}
                            alt={`preview-${index}`}
                            className="w-full h-24 object-cover rounded-md border border-[--border]"
                          />
                        ))}
                      </div>
                    )}
                  </FormItem>
                )}
              />
            </CollapsibleInput>

            {/* Service Categories */}
            <CollapsibleInput header="หมวดหมู่">
              <FormField
                control={form.control}
                name="categories"
                render={() => (
                  <FormItem>
                    {categories.map((category) => (
                      <FormField
                        key={category.id}
                        control={form.control}
                        name="categories"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={category.id}
                              className="flex flex-row items-center space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(category.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          category.id,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== category.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel>{category.name}</FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CollapsibleInput>

            {/* Service Location */}
            <CollapsibleInput header="สถานที่">
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Textarea placeholder="สถานที่บริการ" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CollapsibleInput>
          </div>
        </div>
      </form>
    </Form>
  );
};

const PackageForm = ({ index, form, remove, fields }) => {
  return (
    <>
      <div
        className="flex flex-col items-stretch gap-4 border border-[--border] bg-neutral-50 p-3 rounded-md"
      >
        <div className="flex gap-4">
          {/* Package Name */}
          <FormField
            control={form.control}
            name={`packages.${index}.name`}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>ชื่อแพ็กเกจ</FormLabel>
                <FormControl>
                  <Input placeholder="ชื่อแพ็คเกจ" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Package Price */}
          <FormField
            control={form.control}
            name={`packages.${index}.price`}
            render={({ field }) => (
              <FormItem className="max-w-60">
                <FormLabel>ราคา</FormLabel>
                <FormControl>
                  <Input placeholder="ราคา" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Remove Button */}
          {fields.length > 1 && (
            <Button
              variant="destructive"
              size="icon"
              onClick={() => remove(index)}
              className="mt-8"
            >
              <Trash />
            </Button>
          )}
        </div>

        {/* Package Description */}
        <FormField
          control={form.control}
          name={`packages.${index}.description`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>รายการสินค้า</FormLabel>
              <FormControl>
                <Textarea placeholder="รายละเอียดแพ็คเกจ" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
};

export { CreateServiceForm };

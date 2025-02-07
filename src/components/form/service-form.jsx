import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CollapsibleInput from "../shared/CollapsibleInput";
import { Textarea } from "@/components/ui/textarea";
import { MAX_FILE_SIZE, ACCEPTED_IMAGE_TYPES } from "../../constants/files";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().nonempty({
    message: "กรุณากำหนดชื่อของบริการ",
  }),
  description: z.string(),
  images: z
    .instanceof(FileList, { message: "กรุณากำหนดรูปภาพ" })
    .refine(
      (files) => Array.from(files).every((file) => ACCEPTED_IMAGE_TYPES.includes(file.type)),
      { message: "รองรับเฉพาะไฟล์ JPG, PNG, และ WEBP เท่านั้น" }
    )
    .refine(
      (files) => Array.from(files).every((file) => file.size <= MAX_FILE_SIZE),
      {message: `ขนาดไฟล์ต้องไม่เกิน ${MAX_FILE_SIZE / (1024 * 1024)}MB`}
    ),
});

const CreateServiceForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      images: [],
    },
  });

  const fileRef = form.register("file");
  const [imagePreviews, setImagePreviews] = useState([]);
  const handleImageChange = (event) => {
    const files = event.target.files;
    if (files) {
      const previews = Array.from(files).map((file) => URL.createObjectURL(file));
      setImagePreviews(previews);
    }
    form.setValue("images", files);
  };

  const onSubmit = (values) => {
    console.log(values);
    // call api
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex gap-4">
          <div className="flex flex-col w-full gap-4 ">
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
          </div>
          <div className="flex flex-col min-w-64 w-1/3 gap-4">
            <Button type="submit" className="btn-block">
              เพิ่มบริการใหม่
            </Button>
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
          </div>
        </div>
      </form>
    </Form>
  );
};

export { CreateServiceForm };

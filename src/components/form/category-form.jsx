import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().nonempty({
    message: "กรุณาใส่ชิ่อหมวดหมู่",
  }),
});

const CreateCategoryForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = (values) => {
    console.log(values);
    // call api
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ชื่อหมวดหมู่</FormLabel>
              <FormControl>
                <Input {...field} placeholder="ชื่อบริการ"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">เพิ่มหมวดหมู่ใหม่</Button>
      </form>
    </Form>
  );
};

const EditCategoryForm = ({ name, onCancel }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: name,
    },
  });

  const onSubmit = (values) => {
    console.log(values);
    // call api
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2">
          <Button type="submit">แก้ไขชื่อหมวดหมู่</Button>
          <Button variant="destructive" onClick={() => onCancel()}>
            ยกเลิก
          </Button>
        </div>
      </form>
    </Form>
  );
};

export { CreateCategoryForm, EditCategoryForm }
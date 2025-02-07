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
import CollapsibleInput from "../shared/CollapsibleInput";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().nonempty({
    message: "กรุณากำหนดชื่อของบริการ",
  }),
  description: z.string()
});

const CreateServiceForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
    },
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
          <div className="flex flex-col min-w-60 w-1/4 gap-4">
            <Button type="submit" className="btn-block">
              เพิ่มบริการใหม่
            </Button>
            {/* <CollapsibleInput header="ภาพบริการ">
              <FormField
                control={form.control}
                name="images"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                    <Input type="file" {...field} variant="file" multiple/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CollapsibleInput> */}
          </div>
        </div>
      </form>
    </Form>
  );
};

export { CreateServiceForm };

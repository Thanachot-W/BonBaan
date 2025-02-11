import { zodResolver } from "@hookform/resolvers/zod";
import { cancelOrderSchema, confirmOrderSchema } from "../../schemas/orderSchema";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CancelOrderForm = ({ onSubmit, closeDialog, children }) => {
  const form = useForm({
    resolver: zodResolver(cancelOrderSchema),
    defaultValues: {
      header: "",
      description: ""
    },
  });

  const handelSubmit = (values) => {
    if (onSubmit) {
      onSubmit(values);
    }
    if (closeDialog) {
      closeDialog();
    }
    console.log(values);
    
    // call api
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handelSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="header"
          render={({ field }) => (
            <FormItem>
              <FormLabel>เหตุผลการปฎิเสธคำสั่งซื้อ</FormLabel>
              <FormControl>
                <Input {...field} placeholder="หัวข้อเหตุผล"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>รายละเอียดการปฎิเสธคำสั่งซื้อ</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="รายละเอียด"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {children}
      </form>
    </Form>
  );
};

const ConfirmOrderForm = ({ onSubmit, closeDialog, children }) => {
  const form = useForm({
    resolver: zodResolver(confirmOrderSchema),
    defaultValues: {
      price: ""
    },
  });

  const handelSubmit = (values) => {
    if (onSubmit) {
      onSubmit(values);
    }
    if (closeDialog) {
      closeDialog();
    }
    console.log(values);
    
    // call api
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handelSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ราคา</FormLabel>
              <FormControl>
                <Input {...field} type="number" placeholder="ราคาของคำสั่งซื้อ"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {children}
      </form>
    </Form>
  );
};

export { CancelOrderForm, ConfirmOrderForm }
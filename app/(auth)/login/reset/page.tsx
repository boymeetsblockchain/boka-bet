"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { resetFormSchema } from "@/lib/registerformSchema";
import Link from "next/link";
import { BackButton } from "@/components/backbutton";

function RegisterFormPage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof resetFormSchema>>({
    resolver: zodResolver(resetFormSchema),
    defaultValues: {
      phone: "",
    },
  });

  // Submit handler
  function onSubmit(values: z.infer<typeof resetFormSchema>) {
    router.push("/login");
  }

  return (
    <div className="bg-black flex flex-col  items-center justify-center min-h-screen w-full p-6">
      <BackButton />
      <div className="w-full max-w-md text-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Username Field */}
            <h2 className="text-base font-bold text-center mb-6">
              Please enter your phone number to reset the password.
            </h2>
            {/* Phone Field */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your phone number"
                      {...field}
                      type="number"
                      className="border border-gray-600 rounded-md w-full  p-2 text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-booka hover:bg-orange-600 text-white py-2 px-4 rounded-md font-medium transition duration-200"
            >
              Reset Password
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default RegisterFormPage;

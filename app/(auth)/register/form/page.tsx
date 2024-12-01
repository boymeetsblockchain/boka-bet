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
import { registerFormSchema } from "@/lib/registerformSchema";
import { BackButton } from "@/components/backbutton";

function RegisterFormPage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      username: "",
      phone: "",
      password: "",
    },
  });

  // Submit handler
  function onSubmit(values: z.infer<typeof registerFormSchema>) {
    router.push("/login");
  }

  return (
    <div className="bg-black flex items-center justify-center flex-col  min-h-screen w-full p-6">
      <BackButton />
      <div className="w-full max-w-md text-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Username Field */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your username"
                      {...field}
                      className="border border-gray-600 rounded-md w-full  p-2 text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone Field */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">Phone</FormLabel>
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

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your password"
                      {...field}
                      type="password"
                      className="border border-gray-600 rounded-md w-full  p-2 text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm Password Field */}
            <FormField
              control={form.control}
              name="confirmpassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Confirm your password"
                      {...field}
                      type="password"
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
              Register
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default RegisterFormPage;

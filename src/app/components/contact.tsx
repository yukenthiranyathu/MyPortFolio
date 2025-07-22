// 'use client'
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useMutation } from "@tanstack/react-query";
// import { insertContactMessageSchema } from "@shared/schema";
// import type { InsertContactMessage } from "@shared/schema";
// import { apiRequest } from "../lib/queryClient";
// import { useToast } from "../hooks/use-toast";
// import { Button } from "./ui/button";
// import { Input } from "./ui/input";
// import { Textarea } from "./ui/textarea";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";

// export default function Contact() {
//   const { toast } = useToast();

//   const form = useForm<InsertContactMessage>({
//     resolver: zodResolver(insertContactMessageSchema),
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       subject: "",
//       message: ""
//     }
//   });

//   const contactMutation = useMutation({
//     mutationFn: async (data: InsertContactMessage) => {
//       const response = await apiRequest("POST", "/api/contact", data);
//       return response.json();
//     },
//     onSuccess: () => {
//       toast({
//         title: "Message sent successfully!",
//         description: "Thank you for your message. I'll get back to you soon.",
//       });
//       form.reset();
//     },
//     onError: (error: any) => {
//       toast({
//         title: "Failed to send message",
//         description: error.message || "Please try again later.",
//         variant: "destructive",
//       });
//     }
//   });

//   const onSubmit = (data: InsertContactMessage) => {
//     contactMutation.mutate(data);
//   };

//   return (
//     <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">Let's Work Together</h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
//           <p className="text-lg text-slate-400 max-w-2xl mx-auto">
//             Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
//           </p>
//         </div>
        
//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Info */}
//           <div className="space-y-8">
//             <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
//               <h3 className="text-2xl font-bold text-slate-100 mb-6">Get In Touch</h3>
              
//               <div className="space-y-6">
//                 <div className="flex items-center space-x-4">
//                   <div className="bg-blue-600 p-3 rounded-lg">
//                     <i className="fas fa-envelope text-white"></i>
//                   </div>
//                   <div>
//                     <div className="text-slate-300 font-semibold">Email</div>
//                     <div className="text-slate-400">yukenyathu@gmail.com</div>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center space-x-4">
//                   <div className="bg-green-600 p-3 rounded-lg">
//                     <i className="fas fa-phone text-white"></i>
//                   </div>
//                   <div>
//                     <div className="text-slate-300 font-semibold">Phone</div>
//                     <div className="text-slate-400">+94 788648271</div>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center space-x-4">
//                   <div className="bg-purple-600 p-3 rounded-lg">
//                     <i className="fas fa-map-marker-alt text-white"></i>
//                   </div>
//                   <div>
//                     <div className="text-slate-300 font-semibold">Location</div>
//                     <div className="text-slate-400">Srilanka , Batticaloa</div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="mt-8 pt-8 border-t border-slate-700">
//                 <div className="text-slate-300 font-semibold mb-4">Follow Me</div>
//                 <div className="flex space-x-4">
//                   <a href="#" className="bg-slate-700 hover:bg-blue-600 p-3 rounded-lg transition-all">
//                     <i className="fab fa-github text-slate-300 hover:text-white"></i>
//                   </a>
//                   <a href="#" className="bg-slate-700 hover:bg-blue-600 p-3 rounded-lg transition-all">
//                     <i className="fab fa-linkedin text-slate-300 hover:text-white"></i>
//                   </a>
//                   <a href="#" className="bg-slate-700 hover:bg-orange-600 p-3 rounded-lg transition-all">
//                     <i className="fab fa-instagram text-slate-300 hover:text-white"></i>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Contact Form */}
//           <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
//             <Form {...form}>
//               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <FormField
//                     control={form.control}
//                     name="firstName"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel className="text-slate-300">First Name</FormLabel>
//                         <FormControl>
//                           <Input 
//                             placeholder="John" 
//                             className="bg-slate-700 border-slate-600 text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                             {...field} 
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="lastName"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel className="text-slate-300">Last Name</FormLabel>
//                         <FormControl>
//                           <Input 
//                             placeholder="Doe" 
//                             className="bg-slate-700 border-slate-600 text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                             {...field} 
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </div>
                
//                 <FormField
//                   control={form.control}
//                   name="email"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="text-slate-300">Email</FormLabel>
//                       <FormControl>
//                         <Input 
//                           type="email"
//                           placeholder="john@example.com" 
//                           className="bg-slate-700 border-slate-600 text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                           {...field} 
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
                
//                 <FormField
//                   control={form.control}
//                   name="subject"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="text-slate-300">Subject</FormLabel>
//                       <FormControl>
//                         <Input 
//                           placeholder="Project Discussion" 
//                           className="bg-slate-700 border-slate-600 text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                           {...field} 
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
                
//                 <FormField
//                   control={form.control}
//                   name="message"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="text-slate-300">Message</FormLabel>
//                       <FormControl>
//                         <Textarea 
//                           placeholder="Tell me about your project..." 
//                           rows={5}
//                           className="bg-slate-700 border-slate-600 text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
//                           {...field} 
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
                
//                 <Button 
//                   type="submit" 
//                   disabled={contactMutation.isPending}
//                   className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-blue-500/25"
//                 >
//                   {contactMutation.isPending ? (
//                     <>
//                       <i className="fas fa-spinner fa-spin mr-2"></i>
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       <span>Send Message</span>
//                       <i className="fas fa-paper-plane ml-2"></i>
//                     </>
//                   )}
//                 </Button>
//               </form>
//             </Form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

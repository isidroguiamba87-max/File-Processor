"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, Mail, Linkedin, Send, MessageSquare, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(5, "O assunto deve ter pelo menos 5 caracteres"),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function Contact() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    console.log(data);
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contacto. Responderei o mais breve possível.",
    });
    form.reset();
  }

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Telefone",
      value: "+258 87 003 8117",
      href: "tel:+258870038117",
      color: "text-blue-400"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "isidroguiamba@gmail.com",
      href: "mailto:isidroguiamba@gmail.com",
      color: "text-red-400"
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      label: "WhatsApp",
      value: "Conversar agora",
      href: "https://wa.me/qr/3U3UMZKWPTHGJ1",
      color: "text-green-400"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "Isidro Guiamba",
      href: "https://www.linkedin.com/in/isidro-guiamba-0b3211346/",
      color: "text-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/30 relative">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Vamos <span className="text-accent">Conversar?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-md">
              Estou disponível para novos projetos, colaborações ou apenas para trocar ideias sobre tecnologia e design.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-accent/50 hover:bg-card transition-all"
                >
                  <div className={`mb-4 ${info.color} group-hover:scale-110 transition-transform`}>
                    {info.icon}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">{info.label}</div>
                  <div className="text-foreground font-semibold truncate">{info.value}</div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border p-8 md:p-10 rounded-3xl shadow-2xl shadow-accent/5"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome" {...field} className="bg-background/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="seu@email.com" {...field} className="bg-background/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Assunto</FormLabel>
                      <FormControl>
                        <Input placeholder="Como posso ajudar?" {...field} className="bg-background/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensagem</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Conte-me sobre o seu projeto..." 
                          className="min-h-[150px] bg-background/50 resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full h-12 text-lg font-semibold bg-accent hover:bg-accent/90 text-white rounded-xl transition-all">
                  <Send className="mr-2 h-5 w-5" /> Enviar Mensagem
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
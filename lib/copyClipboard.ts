import { toast } from "@/components/ui/use-toast";

export const copyClipboard = (value: string) => {
  navigator.clipboard.writeText(value);
  toast({
    title: "Value copied ☑️",
  });
};

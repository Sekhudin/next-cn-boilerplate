"use client";
import { LogOut } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "src/shared/ui/alert-dialog";
import { Button, ButtonProps } from "src/shared/ui/button";
import { useAuth } from "src/modules/auth/hooks/use-auth.hook";
import { cn } from "src/utils/common";

const SignOutButton = ({ className, ...props }: Omit<ButtonProps, "children" | "onClick">) => {
  const auth = useAuth();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className={cn("", className)} variant="ghost" size="icon" {...props}>
          <LogOut />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="w-11/12 md:max-w-lg">
        <AlertDialogHeader>
          <AlertDialogTitle>Sign Out</AlertDialogTitle>
          <AlertDialogDescription>Do want to sign out?</AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-destructive hover:bg-destructive/90"
            onClick={auth.signOut.handler}
            disabled={auth.signOut.loading}
          >
            Sign Out
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SignOutButton;

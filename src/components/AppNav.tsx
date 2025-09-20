"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Home, Users, ShoppingCart, Map, IdCard, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { authClient, useSession } from "@/lib/auth-client";

export default function AppNav() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();

  const handleSignOut = async () => {
    const token = typeof window !== 'undefined' ? localStorage.getItem("bearer_token") : "";
    await authClient.signOut({
      fetchOptions: { headers: { Authorization: `Bearer ${token}` } },
    });
    if (typeof window !== 'undefined') localStorage.removeItem("bearer_token");
    router.push("/");
  };

  const LinkItem = ({ href, label, icon: Icon }: { href: string; label: string; icon: any }) => {
    const active = pathname === href;
    return (
      <Link href={href} className={`inline-flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${active ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
        <Icon size={18} />
        <span className="hidden sm:inline">{label}</span>
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
        <Link href="/dashboard" className="font-semibold tracking-tight">Cattle Farmers Association</Link>
        <nav className="flex items-center gap-1">
          <LinkItem href="/dashboard" label="Dashboard" icon={Home} />
          <LinkItem href="/members" label="Members" icon={Users} />
          <LinkItem href="/auctions" label="Auctions" icon={ShoppingCart} />
          <LinkItem href="/directory" label="Lake Zone" icon={Map} />
          <LinkItem href="/profile" label="My Card" icon={IdCard} />
        </nav>
        <div className="flex items-center gap-2">
          {session?.user ? (
            <Button size="sm" variant="outline" onClick={handleSignOut}>
              <LogOut className="size-4 mr-1" /> Sign out
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button size="sm" asChild variant="ghost"><Link href="/sign-in">Sign in</Link></Button>
              <Button size="sm" asChild><Link href="/sign-up">Join</Link></Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
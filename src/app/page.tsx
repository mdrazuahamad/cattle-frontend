"use client"
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Crown, Gavel, Map } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="relative overflow-hidden">
        <section className="relative">
          <div className="absolute inset-0 -z-10">
            <Image
              src="https://images.unsplash.com/photo-1464047736614-af63643285bf?q=80&w=1920&auto=format&fit=crop"
              alt="Cattle in pasture"
              fill
              priority
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
          </div>

          <div className="mx-auto max-w-7xl px-4 py-20 sm:py-28 text-center">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Cattle Farmers Association</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight">
              Manage Membership, Herds, and Auctions
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              A modern platform for herdsmen and cooperatives: register members, track herds, run auctions, and view
              lake zone statistics — all in one place.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <Button asChild>
                <Link href="/sign-up">Join now</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/sign-in">Sign in</Link>
                
              </Button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-14">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Members</CardTitle>
                <Users className="size-4" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Register profiles, photos, and contact info.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Herds</CardTitle>
                <Crown className="size-4" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Record animals, breeds, vaccinations, and notes.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Auctions</CardTitle>
                <Gavel className="size-4" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">List cattle, bid securely, and track sales.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Lake Zone</CardTitle>
                <Map className="size-4" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">View herd counts by region across the lake zone.</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Button asChild variant="outline" className="justify-start">
              <Link href="/members"><Users className="mr-2 size-4"/> Explore members</Link>
            </Button>
            <Button asChild variant="outline" className="justify-start">
              <Link href="/auctions"><Gavel className="mr-2 size-4"/> Browse auctions</Link>
            </Button>
            <Button asChild variant="outline" className="justify-start">
              <Link href="/directory"><Map className="mr-2 size-4"/> Lake zone stats</Link>
            </Button>
            <Button asChild variant="outline" className="justify-start">
              <Link href="/profile"><Crown className="mr-2 size-4"/> My membership card</Link>
            </Button>
          </div>
        </section>

        <section className="border-t bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 py-12 grid gap-6 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-xl font-semibold">Government & Marketplace Integrations</h2>
              <p className="text-sm text-muted-foreground mt-2">
                Ready to integrate with the Ministry of Fishermen and Herdsmen for registries and compliance. Plan
                auction settlement and identity verification APIs using secure QR membership cards.
              </p>
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden border">
              <Image
                src="https://images.unsplash.com/photo-1576765974025-4e90f1062349?q=80&w=1200&auto=format&fit=crop"
                alt="Market"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
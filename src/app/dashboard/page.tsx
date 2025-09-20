"use client"
import AppNav from "@/components/AppNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Crown, Gavel } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  // In a real app, fetch stats from API
  const stats = {
    members: 1240,
    herds: 6789,
    auctions: 12,
  };

  return (
    <div className="min-h-screen">
      <AppNav />
      <main className="mx-auto max-w-7xl p-4 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <p className="text-sm text-muted-foreground">Overview of association activity</p>
          </div>
          <Button asChild>
            <Link href="/auctions"><Gavel className="mr-2 size-4"/> Browse auctions</Link>
          </Button>
        </div>

        <section className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Registered Members</CardTitle>
              <Users className="size-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.members.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Across all regions</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Herds</CardTitle>
              <Crown className="size-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.herds.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Including lake zone</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Auctions</CardTitle>
              <Gavel className="size-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.auctions}</div>
              <p className="text-xs text-muted-foreground">Happening this week</p>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-4 grid-cols-1 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Quick actions</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Button asChild variant="outline"><Link href="/members">Manage members <ArrowRight className="ml-2 size-4"/></Link></Button>
              <Button asChild variant="outline"><Link href="/profile">My profile <ArrowRight className="ml-2 size-4"/></Link></Button>
              <Button asChild variant="outline"><Link href="/directory">Lake zone stats <ArrowRight className="ml-2 size-4"/></Link></Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Latest auctions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {["Ng'ombe Prime Lot", "Lakeview Heifers", "Highland Bulls"].map((name, i)=> (
                <div key={i} className="flex items-center justify-between border rounded-md p-3">
                  <div>
                    <p className="font-medium">{name}</p>
                    <p className="text-xs text-muted-foreground">Bidding ends in {2+i} days</p>
                  </div>
                  <Button asChild size="sm"><Link href="/auctions">Bid now</Link></Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
"use client"
import AppNav from "@/components/AppNav";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const AUCTIONS = [
  { id: 1, name: "Ng'ombe Prime Lot", image: "https://images.unsplash.com/photo-1464047736614-af63643285bf?q=80&w=1200&auto=format&fit=crop", currentBid: 1200, endsInDays: 2 },
  { id: 2, name: "Lakeview Heifers", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop", currentBid: 850, endsInDays: 3 },
  { id: 3, name: "Highland Bulls", image: "https://images.unsplash.com/photo-1499535072222-3d6164f497dd?q=80&w=1200&auto=format&fit=crop", currentBid: 1640, endsInDays: 5 },
];

export default function AuctionsPage() {
  const [bidAmount, setBidAmount] = useState<number | string>("");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const placeBid = () => {
    // TODO: Integrate API
    setBidAmount("");
    setSelectedId(null);
    alert("Bid placed! (mock)");
  };

  return (
    <div className="min-h-screen">
      <AppNav />
      <main className="mx-auto max-w-7xl p-4 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Auctions</h1>
            <p className="text-sm text-muted-foreground">Bid on premium cattle listings</p>
          </div>
          <Button variant="outline">Create listing</Button>
        </div>

        <section className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {AUCTIONS.map((a) => (
            <Card key={a.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative w-full h-40">
                  <Image src={a.image} alt={a.name} fill className="object-cover" />
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <CardTitle className="text-base">{a.name}</CardTitle>
                <p className="text-sm text-muted-foreground">Ends in {a.endsInDays} day(s)</p>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Current bid</p>
                  <p className="font-semibold">${a.currentBid.toLocaleString()}</p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" onClick={() => setSelectedId(a.id)}>Place bid</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Place a bid for {a.name}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Enter your bid amount (USD)</p>
                      <Input type="number" min={a.currentBid + 1} value={bidAmount} onChange={(e)=>setBidAmount(e.target.value)} />
                    </div>
                    <DialogFooter>
                      <Button onClick={placeBid} disabled={!bidAmount || Number(bidAmount) <= a.currentBid}>Confirm bid</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </section>
      </main>
    </div>
  );
}
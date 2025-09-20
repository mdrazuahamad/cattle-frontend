"use client"
import AppNav from "@/components/AppNav";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";

export default function ProfilePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [region, setRegion] = useState("");
  const [photoUrl, setPhotoUrl] = useState<string>("https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800&auto=format&fit=crop");
  const [herdNotes, setHerdNotes] = useState("");
  const [memberId] = useState("M-2025-0001");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const data = JSON.stringify({ memberId, name, email, region });
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, data, { width: 180 }, (err) => {
        if (err) console.error(err);
      });
    }
  }, [memberId, name, email, region]);

  const addHerdNote = () => {
    alert("Herd saved (mock)");
  };

  return (
    <div className="min-h-screen">
      <AppNav />
      <main className="mx-auto max-w-5xl p-4 space-y-6">
        <h1 className="text-2xl font-semibold">My Profile</h1>

        <section className="grid gap-4 grid-cols-1 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Member details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm">Full name</Label>
                  <Input value={name} onChange={(e)=>setName(e.target.value)} placeholder="e.g. Asha Mtemi" />
                </div>
                <div>
                  <Label className="text-sm">Email</Label>
                  <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="name@example.com" />
                </div>
                <div>
                  <Label className="text-sm">Region</Label>
                  <Input value={region} onChange={(e)=>setRegion(e.target.value)} placeholder="e.g. Mwanza" />
                </div>
                <div>
                  <Label className="text-sm">Profile photo URL</Label>
                  <Input value={photoUrl} onChange={(e)=>setPhotoUrl(e.target.value)} />
                </div>
              </div>

              <div>
                <Label className="text-sm">Herd notes</Label>
                <Textarea rows={4} value={herdNotes} onChange={(e)=>setHerdNotes(e.target.value)} placeholder="Record herd health, vaccinations, breeds..." />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={addHerdNote}>Save changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Membership card</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative w-14 h-14 rounded-md overflow-hidden border">
                  <Image src={photoUrl} alt="Profile" fill className="object-cover" />
                </div>
                <div>
                  <p className="font-semibold leading-tight line-clamp-1">{name || "Your Name"}</p>
                  <p className="text-xs text-muted-foreground">{memberId}</p>
                </div>
              </div>
              <div className="rounded-md border p-3 grid place-items-center bg-card">
                <canvas ref={canvasRef} className="[image-rendering:pixelated]" />
              </div>
              <p className="text-xs text-muted-foreground">Scan at auctions and checkpoints to verify membership</p>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
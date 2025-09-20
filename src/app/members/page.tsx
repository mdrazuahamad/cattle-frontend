"use client"
import AppNav from "@/components/AppNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useMemo, useState } from "react";

const MOCK_MEMBERS = [
  { id: 1, name: "Asha Mtemi", email: "asha@example.com", region: "mwanza", herds: 120 },
  { id: 2, name: "John Bosco", email: "john@example.com", region: "mara", herds: 76 },
  { id: 3, name: "Zawadi Nyerere", email: "zawadi@example.com", region: "geita", herds: 43 },
  { id: 4, name: "Peter Ngassa", email: "peter@example.com", region: "kagera", herds: 210 },
  { id: 5, name: "Mercy Komba", email: "mercy@example.com", region: "shinyanga", herds: 95 },
];

export default function MembersPage() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState<string | undefined>();

  const filtered = useMemo(() => {
    return MOCK_MEMBERS.filter((m) => {
      const matchesQuery = `${m.name} ${m.email}`.toLowerCase().includes(query.toLowerCase());
      const matchesRegion = region ? m.region === region : true;
      return matchesQuery && matchesRegion;
    });
  }, [query, region]);

  const totalHerds = filtered.reduce((sum, m) => sum + m.herds, 0);

  return (
    <div className="min-h-screen">
      <AppNav />
      <main className="mx-auto max-w-7xl p-4 space-y-6">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-2xl font-semibold">Members</h1>
            <p className="text-sm text-muted-foreground">Directory of registered herdsmen</p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <Input
              placeholder="Search by name or email"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full sm:w-64"
            />
            <Select onValueChange={(v) => setRegion(v)}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mwanza">Mwanza</SelectItem>
                <SelectItem value="mara">Mara</SelectItem>
                <SelectItem value="geita">Geita</SelectItem>
                <SelectItem value="kagera">Kagera</SelectItem>
                <SelectItem value="shinyanga">Shinyanga</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <section className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Total members</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{filtered.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Herds (filtered)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalHerds.toLocaleString()}</div>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Directory</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Region</TableHead>
                  <TableHead className="text-right">Herds</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((m) => (
                  <TableRow key={m.id}>
                    <TableCell className="font-medium">{m.name}</TableCell>
                    <TableCell>{m.email}</TableCell>
                    <TableCell className="capitalize">{m.region}</TableCell>
                    <TableCell className="text-right">{m.herds}</TableCell>
                  </TableRow>
                ))}
                {filtered.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center text-muted-foreground">No members found</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
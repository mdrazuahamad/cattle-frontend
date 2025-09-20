"use client"
import AppNav from "@/components/AppNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const LAKE_ZONE = [
  { region: "Mwanza", key: "mwanza", herds: 2450, members: 410 },
  { region: "Mara", key: "mara", herds: 1830, members: 320 },
  { region: "Geita", key: "geita", herds: 960, members: 140 },
  { region: "Kagera", key: "kagera", herds: 2010, members: 280 },
  { region: "Shinyanga", key: "shinyanga", herds: 1520, members: 210 },
];

export default function DirectoryPage() {
  const totalHerds = LAKE_ZONE.reduce((s, r) => s + r.herds, 0);
  const totalMembers = LAKE_ZONE.reduce((s, r) => s + r.members, 0);

  return (
    <div className="min-h-screen">
      <AppNav />
      <main className="mx-auto max-w-7xl p-4 space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Lake Zone Overview</h1>
          <p className="text-sm text-muted-foreground">Herd and member distribution by region</p>
        </div>

        <section className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Total herds</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalHerds.toLocaleString()}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Total members</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalMembers.toLocaleString()}</div>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>By region</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Region</TableHead>
                  <TableHead className="text-right">Herds</TableHead>
                  <TableHead className="text-right">Members</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {LAKE_ZONE.map((r) => (
                  <TableRow key={r.key}>
                    <TableCell>{r.region}</TableCell>
                    <TableCell className="text-right">{r.herds.toLocaleString()}</TableCell>
                    <TableCell className="text-right">{r.members.toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
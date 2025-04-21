
import { useState } from "react";
import {
  CalendarDays,
  Download,
  List,
  Loader2,
  Plus,
  Search,
  Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PageHeader, PageHeaderAction } from "@/components/ui/page-header";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { StatusBadge } from "@/components/ui/status-badge";

interface Holiday {
  id: number;
  title: string;
  date: Date;
  day: string;
  type: "national" | "regional" | "company";
}

const dummyHolidays: Holiday[] = [
  {
    id: 1,
    title: "New Year's Day",
    date: new Date(2025, 0, 1),
    day: "Wednesday",
    type: "national"
  },
  {
    id: 2,
    title: "Republic Day",
    date: new Date(2025, 0, 26),
    day: "Sunday",
    type: "national"
  },
  {
    id: 3,
    title: "Holi",
    date: new Date(2025, 2, 14),
    day: "Friday",
    type: "national"
  },
  {
    id: 4,
    title: "Independence Day",
    date: new Date(2025, 7, 15),
    day: "Friday",
    type: "national"
  },
  {
    id: 5,
    title: "Company Foundation Day",
    date: new Date(2025, 8, 20),
    day: "Saturday",
    type: "company"
  }
];

export default function Holidays() {
  const [view, setView] = useState<"list" | "calendar">("list");
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // Filter holidays based on search query
  const filteredHolidays = dummyHolidays.filter(
    holiday => holiday.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Function to handle holiday addition
  const handleAddHoliday = () => {
    console.log("Add holiday clicked");
    // Implementation would open a modal for adding a new holiday
  };

  // Simulated loading for demo purposes
  const handleImport = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <PageHeader
        title="Holiday Calendar"
        description="Manage company holidays for 2025"
        breadcrumbs={[
          { title: "Dashboard", href: "/dashboard" },
          { title: "Time Off", href: "/time-off" },
          { title: "Holidays" },
        ]}
      >
        <PageHeaderAction>
          <Button variant="outline" onClick={handleImport} disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Importing...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Import Data
              </>
            )}
          </Button>
          <Button onClick={handleAddHoliday}>
            <Plus className="mr-2 h-4 w-4" />
            Add Holiday
          </Button>
        </PageHeaderAction>
      </PageHeader>

      <div className="mb-6">
        <Tabs defaultValue="list" onValueChange={(value) => setView(value as "list" | "calendar")}>
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="list" className="flex items-center gap-1">
                <List className="h-4 w-4" />
                List View
              </TabsTrigger>
              <TabsTrigger value="calendar" className="flex items-center gap-1">
                <CalendarDays className="h-4 w-4" />
                Calendar View
              </TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-2">
              {view === "list" && (
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search holidays..."
                    className="pl-8 w-[250px]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              )}
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-1" />
                Export to CSV
              </Button>
            </div>
          </div>

          <TabsContent value="list" className="mt-4">
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">#</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Day</TableHead>
                      <TableHead>Type</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredHolidays.length > 0 ? (
                      filteredHolidays.map((holiday) => (
                        <TableRow key={holiday.id} className="hover:bg-muted/30">
                          <TableCell className="font-medium">{holiday.id}</TableCell>
                          <TableCell>{holiday.title}</TableCell>
                          <TableCell>
                            {holiday.date.toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </TableCell>
                          <TableCell>{holiday.day}</TableCell>
                          <TableCell>
                            <StatusBadge 
                              status={
                                holiday.type === "national" ? "success" : 
                                holiday.type === "regional" ? "info" : "warning"
                              } 
                              text={holiday.type.charAt(0).toUpperCase() + holiday.type.slice(1)}
                            />
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={5} className="h-24 text-center">
                          No holidays found.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calendar" className="mt-4">
            <Card>
              <CardContent className="flex justify-center p-6">
                <div className="inline-block rounded-md border p-2 bg-white shadow">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md pointer-events-auto"
                    modifiers={{
                      holiday: dummyHolidays.map(holiday => holiday.date),
                    }}
                    modifiersStyles={{
                      holiday: {
                        color: "white",
                        backgroundColor: "#22c55e",
                      }
                    }}
                    showOutsideDays
                    fixedWeeks
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/76gqvDCBsum
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMemo, useState } from "react";
import { IoIosOptions } from "react-icons/io";
import { MdSort } from "react-icons/md";

const page = () => {
  const [files, setFiles] = useState([
    {
      id: 1,
      name: "Brochure Design.pdf",
      user: "John Doe",
      paperSize: "A4",
      color: "Color",
      pps: "1",
      quantity: 50,
      status: "Pending",
      createdAt: "2023-04-15",
    },
    {
      id: 2,
      name: "Annual Report.docx",
      user: "Jane Smith",
      paperSize: "Letter",
      color: "B&W",
      pps: "2",
      quantity: 100,
      status: "Printed",
      createdAt: "2023-05-20",
    },
    {
      id: 3,
      name: "Product Catalog.indd",
      user: "Michael Johnson",
      paperSize: "A3",
      color: "Color",
      pps: "2",
      quantity: 75,
      status: "Delivered",
      createdAt: "2023-03-01",
    },
    {
      id: 4,
      name: "Flyer Design.psd",
      user: "Emily Brown",
      paperSize: "A5",
      color: "Color",
      pps: "1",
      quantity: 25,
      status: "Pending",
      createdAt: "2023-06-10",
    },
    {
      id: 5,
      name: "Presentation Slides.pptx",
      user: "David Lee",
      paperSize: "Letter",
      color: "B&W",
      pps: "1",
      quantity: 150,
      status: "Printed",
      createdAt: "2023-05-01",
    },
    {
      id: 6,
      name: "Resume.pdf",
      user: "Aayush Lee",
      paperSize: "A4",
      color: "color",
      pps: "2",
      quantity: 1,
      status: "Delivered",
      createdAt: "2023-05-01",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const filteredFiles = useMemo(() => {
    return files
      .filter(
        (file) =>
          file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          file.user.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        if (sortBy === "date") {
          if (new Date(a.createdAt) < new Date(b.createdAt))
            return sortOrder === "asc" ? -1 : 1;
          if (new Date(a.createdAt) > new Date(b.createdAt))
            return sortOrder === "asc" ? 1 : -1;
        } else {
          if (a[sortBy] < b[sortBy]) return sortOrder === "asc" ? -1 : 1;
          if (a[sortBy] > b[sortBy]) return sortOrder === "asc" ? 1 : -1;
        }
        return 0;
      });
  }, [files, searchTerm, sortBy, sortOrder]);

  const handleSort = (key) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortOrder("asc");
    }
  };

  return (
    <div className="flex flex-col min-h-screen py-24 items-center ">
      <main className="flex-1 p-3 w-full md:w-95">
        <div className="flex flex-col gap-2 md:flex-row md:items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">Documents</h1>
            <Badge variant="secondary" className="px-3 py-1 text-sm">
              {filteredFiles.length} files
            </Badge>
          </div>
          <div className="flex items-center gap-4">
            <Input
              type="search"
              placeholder="Search files..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-96 h-14 rounded-full px-6 focus:border-zinc-400 font-medium"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 h-14 w-32 rounded-full"
                >
                  <MdSort className="w-4 h-4" />
                  <span>Sort by</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuRadioGroup
                  value={sortBy}
                  onValueChange={handleSort}
                >
                  <DropdownMenuRadioItem value="name">
                    File Name
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="user">
                    User
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="status">
                    Status
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="date">
                    Date
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>File</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Color</TableHead>
                <TableHead className="text-center">PPS</TableHead>
                <TableHead className="text-center">Quantity</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredFiles.map((file) => (
                <TableRow key={file.id} >
                  <TableCell className="font-medium">{file.name}</TableCell>
                  <TableCell>{file.user}</TableCell>
                  <TableCell>{file.paperSize}</TableCell>
                  <TableCell>{file.color}</TableCell>
                  <TableCell className="text-center">{file.pps}</TableCell>
                  <TableCell className="text-center">{file.quantity}</TableCell>
                  <TableCell className="text-center">
                    <Badge
                      variant={
                        file.status === "Pending"
                          ? "outline"
                          : file.status === "Printing"
                          ? "secondary"
                          : "success"
                      }
                    >
                      {file.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-label="More options"
                          size="icon"
                          variant="ghost"
                        >
                          <IoIosOptions className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </main>
    </div>
  );
};

export default page;

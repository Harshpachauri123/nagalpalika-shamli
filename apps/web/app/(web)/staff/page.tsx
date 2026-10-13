import Staff from "@/components/pages/staff";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Staff",
  description: "Meet the dedicated staff members of Nagar Palika Parishad, Shamli who work tirelessly to serve the community and ensure smooth functioning of civic services.",
};

export default function StaffPage() {
  return (
    <div>
      <Staff />
    </div>
  );
}


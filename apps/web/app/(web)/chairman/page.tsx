import ChairmanProfile from "@/components/pages/ChairmanProfile"; 
import type { Metadata } from "next";  

export const metadata: Metadata = {
  title: "Chairman Profile",
  description: "Profile of the Chairman of Nagar Palika Parishad, Shamli - Learn about their background, achievements, and vision for the community.",
};

export default function ChairmanProfilePage() {
  return (
    <div>
      <ChairmanProfile />
    </div>
  );
}

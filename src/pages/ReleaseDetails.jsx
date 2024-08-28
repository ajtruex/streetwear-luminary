import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const fetchReleaseDetails = async (id) => {
  // Simulating API call
  const releases = [
    { id: 1, brand: "Nike", name: "Air Max 2023", date: "2023-04-01", description: "The latest iteration of the iconic Air Max series.", price: "$180" },
    { id: 2, brand: "Adidas", name: "Yeezy Boost 350", date: "2023-04-15", description: "A new colorway for the popular Yeezy Boost 350.", price: "$220" },
    { id: 3, brand: "Supreme", name: "Spring Collection", date: "2023-05-01", description: "Supreme's latest seasonal collection featuring new designs and collaborations.", price: "Varies" },
  ];
  return releases.find(release => release.id === parseInt(id));
};

const ReleaseDetails = () => {
  const { id } = useParams();
  const { data: release, isLoading, error } = useQuery({
    queryKey: ["release", id],
    queryFn: () => fetchReleaseDetails(id),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching release details</div>;
  if (!release) return <div>Release not found</div>;

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">{release.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl mb-2">Brand: {release.brand}</p>
          <p className="text-lg mb-2">Release Date: {release.date}</p>
          <p className="text-lg mb-4">Price: {release.price}</p>
          <p className="text-gray-700">{release.description}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReleaseDetails;
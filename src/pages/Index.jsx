import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const fetchReleases = async () => {
  // Simulating API call
  return [
    { id: 1, brand: "Nike", name: "Air Max 2023", date: "2023-04-01" },
    { id: 2, brand: "Adidas", name: "Yeezy Boost 350", date: "2023-04-15" },
    { id: 3, brand: "Supreme", name: "Spring Collection", date: "2023-05-01" },
  ];
};

const Index = () => {
  const { data: releases, isLoading, error } = useQuery({
    queryKey: ["releases"],
    queryFn: fetchReleases,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching releases</div>;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Upcoming Streetwear Releases</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {releases.map((release) => (
          <Card key={release.id}>
            <CardHeader>
              <CardTitle>{release.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-2">Brand: {release.brand}</p>
              <p className="text-sm text-gray-600 mb-4">Release Date: {release.date}</p>
              <Button asChild>
                <Link to={`/release/${release.id}`}>View Details</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;

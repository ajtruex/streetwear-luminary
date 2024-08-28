import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLayout } from '../contexts/LayoutContext';
import { motion } from "framer-motion";

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
  const { isCreativeLayout } = useLayout();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching releases</div>;

  const standardLayout = (
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

  const creativeLayout = (
    <div className="container mx-auto py-8 overflow-hidden">
      <motion.h1
        className="text-6xl font-bold mb-12 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        STREETWEAR DROPS
      </motion.h1>
      <div className="flex flex-wrap justify-center">
        {releases.map((release, index) => (
          <motion.div
            key={release.id}
            className="w-full md:w-1/2 lg:w-1/3 p-4"
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="bg-black text-white p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <h2 className="text-3xl font-bold mb-4">{release.name}</h2>
              <p className="text-xl mb-2">{release.brand}</p>
              <p className="text-lg mb-4">{release.date}</p>
              <Button asChild variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                <Link to={`/release/${release.id}`}>EXPLORE</Link>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return isCreativeLayout ? creativeLayout : standardLayout;
};

export default Index;

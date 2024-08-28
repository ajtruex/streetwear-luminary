import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLayout } from '../contexts/LayoutContext';
import { motion } from "framer-motion";

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
  const { isCreativeLayout } = useLayout();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching release details</div>;
  if (!release) return <div>Release not found</div>;

  const standardLayout = (
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

  const creativeLayout = (
    <div className="container mx-auto py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-6xl font-bold mb-8 transform -rotate-3">{release.name}</h1>
        <div className="bg-black text-white p-8 transform rotate-2">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl mb-4"
          >
            {release.brand}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-2xl mb-4"
          >
            Release Date: {release.date}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-2xl mb-6"
          >
            Price: {release.price}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-lg"
          >
            {release.description}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );

  return isCreativeLayout ? creativeLayout : standardLayout;
};

export default ReleaseDetails;

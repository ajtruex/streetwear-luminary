import React from 'react';
import { Button } from "@/components/ui/button";
import { useLayout } from '../contexts/LayoutContext';

const LayoutToggle = () => {
  const { isCreativeLayout, toggleLayout } = useLayout();

  return (
    <Button
      onClick={toggleLayout}
      className="fixed top-4 right-4 z-50"
    >
      {isCreativeLayout ? 'Standard Layout' : 'Creative Layout'}
    </Button>
  );
};

export default LayoutToggle;
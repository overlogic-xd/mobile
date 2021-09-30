import React from "react";
import { Heading, ScrollView, VStack } from "native-base";

interface CategoryBlockProps {
  title: string;
}

const CategoryBlock: React.FC<CategoryBlockProps> = ({ title, children }) => {
  return (
    <VStack space={2}>
      <Heading size="lg">{title}</Heading>
      <ScrollView horizontal={true} removeClippedSubviews>{children}</ScrollView>
    </VStack>
  );
};

export default CategoryBlock;

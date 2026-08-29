import { useState } from "react";
import { Center, Heading, Image, Text, Box, Input } from "@chakra-ui/react";
import { data } from "../utils/data";

export const RecipeListPage = ({ onSelectRecipe }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredRecipes = data.hits.filter((hit) => {
    return hit.recipe.label.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return (
    <Center
      minH="100vh"
      flexDir="column"
      gap="20px"
      justifyContent="flex-start"
    >
      <Heading>Your Recipe App</Heading>
      <Input
        placeholder="Search recipes ...."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {filteredRecipes.map((hit) => {
        return (
          <Box
            key={hit.recipe.label}
            borderWidth="1px"
            padding="20px"
            onClick={() => onSelectRecipe(hit.recipe)}
          >
            <Heading size="md">{hit.recipe.label}</Heading>
            <Image
              src={hit.recipe.image}
              w="300px"
              h="200px"
              objectFit="cover"
            />
            {hit.recipe.dietLabels.length > 0 && (
              <Text>{hit.recipe.dietLabels}</Text>
            )}

            {hit.recipe.cautions.length > 0 && (
              <Text>{hit.recipe.cautions}</Text>
            )}

            <Text>{hit.recipe.mealType}</Text>
            <Text>{hit.recipe.dishType}</Text>

            {hit.recipe.healthLabels.includes("Vegetarian") && (
              <Text>Vegetarian</Text>
            )}

            {hit.recipe.healthLabels.includes("Vegan") && <Text>Vegan</Text>}
          </Box>
        );
      })}
    </Center>
  );
};

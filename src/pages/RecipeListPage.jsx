import { Center, Heading, Image, Text, Box } from "@chakra-ui/react";
import { data } from "../utils/data";

export const RecipeListPage = () => {
  return (
    <Center minH="100vh" flexDir="column" gap="20px">
      <Heading>Your Recipe App</Heading>
      {data.hits.map((hit) => {
        return (
          <Box key={hit.recipe.label} borderWidth="1px" padding="20px">
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

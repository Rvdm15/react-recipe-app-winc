import { useState } from "react";
import {
  Center,
  Heading,
  Image,
  Text,
  Box,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";
import { data } from "../utils/data";
import {
  ColorModeButton,
  useColorModeValue,
} from "../components/ui/color-mode";

const InfoRow = ({ label, value }) => {
  return (
    <Text fontSize="sm">
      <Box as="span" fontWeight="semibold">
        {label}:
      </Box>{" "}
      {value}
    </Text>
  );
};

export const RecipeListPage = ({ onSelectRecipe }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const pageBg = useColorModeValue("#F7F3EA", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");

  const filteredRecipes = data.hits.filter((hit) => {
    return (
      hit.recipe.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hit.recipe.dietLabels
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      hit.recipe.mealType
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      hit.recipe.dishType
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      hit.recipe.healthLabels
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      hit.recipe.cautions
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  });
  return (
    <Center
      minH="100vh"
      flexDir="column"
      gap="20px"
      justifyContent="flex-start"
      px="1rem"
      pt="2rem"
      bg={pageBg}
    >
      <Heading size="3xl">Your Recipe App</Heading>
      <ColorModeButton />
      <Input
        placeholder="Search recipes ...."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        maxW="500px"
        borderRadius="lg"
      />
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        gap="20px"
        maxW="1200px"
        width="100%"
      >
        {filteredRecipes.map((hit) => {
          return (
            <Box
              key={hit.recipe.label}
              borderWidth="1px"
              borderColor="gray.200"
              padding="20px"
              borderRadius="lg"
              boxShadow="sm"
              onClick={() => onSelectRecipe(hit.recipe)}
              cursor="pointer"
              display="flex"
              flexDirection="column"
              gap="0.625rem"
              bg={cardBg}
            >
              <Heading size="md" mb="0.5rem">
                {hit.recipe.label}
              </Heading>

              <Box overflow="hidden" borderRadius="md">
                <Image
                  src={hit.recipe.image}
                  w="100%"
                  h="200px"
                  objectFit="cover"
                  borderRadius="md"
                  transition="transform 0.3s ease"
                  _hover={{ transform: "scale(1.02)" }}
                />
              </Box>

              {hit.recipe.dietLabels.length > 0 && (
                <InfoRow
                  label="Diet"
                  value={hit.recipe.dietLabels.join(", ")}
                />
              )}

              {hit.recipe.cautions.length > 0 && (
                <InfoRow
                  label="Cautions"
                  value={hit.recipe.cautions.join(", ")}
                />
              )}

              <InfoRow
                label="Meal type"
                value={hit.recipe.mealType.join(", ")}
              />

              <InfoRow
                label="Dish type"
                value={hit.recipe.dishType.join(", ")}
              />

              {hit.recipe.healthLabels.includes("Vegetarian") && (
                <InfoRow label="Vegetarian" value="Yes" />
              )}

              {hit.recipe.healthLabels.includes("Vegan") && (
                <InfoRow label="Vegan" value="Yes" />
              )}
            </Box>
          );
        })}
      </SimpleGrid>
    </Center>
  );
};

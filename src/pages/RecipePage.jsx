import { Heading, Button, Image, Text, Box, Center } from "@chakra-ui/react";
import {
  useColorModeValue,
  ColorModeButton,
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

export const RecipePage = ({ recipe, onBack }) => {
  const pageBg = useColorModeValue("#f7f3ea", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  return (
    <Center
      minH="100vh"
      bg={pageBg}
      alignItems="flex-start"
      p="1rem"
      flexDirection="column"
    >
      <ColorModeButton alignSelf="center" mb="2rem" />
      <Box
        maxW="800px"
        w="100%"
        mx="auto"
        px="2rem"
        pb="2rem"
        pt="1rem"
        bg={cardBg}
        borderRadius="lg"
        boxShadow="sm"
        display="flex"
        flexDirection="column"
        gap="1rem"
      >
        <Heading size="2xl">{recipe.label}</Heading>
        <Image
          src={recipe.image}
          w="100%"
          maxH="320px"
          objectFit="cover"
          borderRadius="lg"
        />

        <InfoRow label="Meal type" value={recipe.mealType.join(", ")} />

        <InfoRow label="Dish type" value={recipe.dishType.join(", ")} />

        <InfoRow
          label="Cooking/preparation time"
          value={recipe.totalTime > 0 ? `${recipe.totalTime} minutes` : "N/A"}
        />

        {recipe.dietLabels.length > 0 && (
          <InfoRow label="Diet" value={recipe.dietLabels.join(", ")} />
        )}

        <Heading size="md">Health Labels</Heading>
        <Text fontSize="sm">{recipe.healthLabels.join(", ")}</Text>

        {recipe.cautions.length > 0 && (
          <InfoRow label="Cautions" value={recipe.cautions.join(", ")} />
        )}
        <Heading size="md">Ingredients</Heading>

        {recipe.ingredientLines.map((ingredient) => {
          return (
            <Text key={ingredient} fontSize="sm">
              • {ingredient}
            </Text>
          );
        })}

        <InfoRow label="Servings" value={recipe.yield} />

        <Heading size="md">Total Nutrients:</Heading>

        <InfoRow
          label={recipe.totalNutrients.ENERC_KCAL.label}
          value={
            Math.round(recipe.totalNutrients.ENERC_KCAL.quantity) +
            " " +
            recipe.totalNutrients.ENERC_KCAL.unit
          }
        />

        <InfoRow
          label={recipe.totalNutrients.PROCNT.label}
          value={
            Math.round(recipe.totalNutrients.PROCNT.quantity) +
            " " +
            recipe.totalNutrients.PROCNT.unit
          }
        />

        <InfoRow
          label={recipe.totalNutrients.FAT.label}
          value={
            Math.round(recipe.totalNutrients.FAT.quantity) +
            " " +
            recipe.totalNutrients.FAT.unit
          }
        />

        <InfoRow
          label={recipe.totalNutrients.CHOCDF.label}
          value={
            Math.round(recipe.totalNutrients.CHOCDF.quantity) +
            " " +
            recipe.totalNutrients.CHOCDF.unit
          }
        />

        <InfoRow
          label={recipe.totalNutrients.CHOLE.label}
          value={
            Math.round(recipe.totalNutrients.CHOLE.quantity) +
            " " +
            recipe.totalNutrients.CHOLE.unit
          }
        />

        <InfoRow
          label={recipe.totalNutrients.NA.label}
          value={
            Math.round(recipe.totalNutrients.NA.quantity) +
            " " +
            recipe.totalNutrients.NA.unit
          }
        />

        <Button onClick={() => onBack()}>Back to recipes</Button>
      </Box>
    </Center>
  );
};

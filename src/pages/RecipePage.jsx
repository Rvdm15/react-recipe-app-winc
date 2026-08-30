import { Heading, Button, Image, Text } from "@chakra-ui/react";

export const RecipePage = ({ recipe, onBack }) => {
  return (
    <>
      <Heading>{recipe.label}</Heading>
      <Image src={recipe.image} />

      <Heading size="md">Categories</Heading>
      <Text>{recipe.mealType}</Text>
      <Text>{recipe.dishType}</Text>
      <Text>
        Cooking/preparation time:{" "}
        {recipe.totalTime > 0 ? `${recipe.totalTime} minutes` : "N/A"}
      </Text>

      {recipe.dietLabels.length > 0 && <Text>Diet: {recipe.dietLabels}</Text>}

      <Heading size="md">Health Labels</Heading>
      {recipe.healthLabels.map((healthlabel) => {
        return <Text key={healthlabel}>{healthlabel}</Text>;
      })}

      {recipe.cautions.length > 0 && <Text>Cautions: {recipe.cautions}</Text>}

      <Heading size="md">Ingredients</Heading>

      {recipe.ingredientLines.map((ingredient) => {
        return <Text key={ingredient}>{ingredient}</Text>;
      })}
      <Heading size="md">Servings: {recipe.yield}</Heading>

      <Heading size="md">Total Nutrients:</Heading>
      <Text>
        {recipe.totalNutrients.ENERC_KCAL.label}
        {": "}
        {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}{" "}
        {recipe.totalNutrients.ENERC_KCAL.unit}
      </Text>
      <Text>
        {recipe.totalNutrients.PROCNT.label}
        {": "}
        {Math.round(recipe.totalNutrients.PROCNT.quantity)}{" "}
        {recipe.totalNutrients.PROCNT.unit}
      </Text>
      <Text>
        {recipe.totalNutrients.FAT.label}
        {": "}
        {Math.round(recipe.totalNutrients.FAT.quantity)}{" "}
        {recipe.totalNutrients.FAT.unit}
      </Text>
      <Text>
        {recipe.totalNutrients.CHOCDF.label}
        {": "}
        {Math.round(recipe.totalNutrients.CHOCDF.quantity)}{" "}
        {recipe.totalNutrients.CHOCDF.unit}
      </Text>
      <Text>
        {recipe.totalNutrients.CHOLE.label}
        {": "}
        {Math.round(recipe.totalNutrients.CHOLE.quantity)}{" "}
        {recipe.totalNutrients.CHOLE.unit}
      </Text>
      <Text>
        {recipe.totalNutrients.NA.label}
        {": "}
        {Math.round(recipe.totalNutrients.NA.quantity)}{" "}
        {recipe.totalNutrients.NA.unit}
      </Text>
      <Button onClick={() => onBack()}>Back to recipes</Button>
    </>
  );
};

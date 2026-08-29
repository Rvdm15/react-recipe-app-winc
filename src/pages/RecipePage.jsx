import { Heading, Button } from "@chakra-ui/react";

export const RecipePage = ({ recipe, onBack }) => {
  return (
    <>
      <Heading>{recipe.label}</Heading>
      <Button onClick={() => onBack()}>Back to recipes</Button>
    </>
  );
};

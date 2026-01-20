import { DrinkTexture } from "@/types";
import DetailsScene from "@/components/canvas/scenes/DetailsScene";

export default function DrinkDetailsPage({
  params,
}: {
  params: { id: DrinkTexture };
}) {
  return <DetailsScene id={params.id} />;
}

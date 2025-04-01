import { DrinkTexture } from "@/types";
import DetailsCanvas from "@/components/canvas/DetailsCanvas";

export default function DrinkDetailsPage({
  params,
}: {
  params: { id: DrinkTexture };
}) {
  return <DetailsCanvas id={params.id} />;
}

import renderer from "react-test-renderer";
import { SkeletonList } from "@/components/common";

it("renders correctly", () => {
  const tree = renderer.create(<SkeletonList />).toJSON();
  expect(tree).toMatchSnapshot();
});
